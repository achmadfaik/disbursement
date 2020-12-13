<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Disbursement;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;

class DisbursementController extends Controller
{
    public $api_url = '';
    public function __construct() {
        $this->secret_key = config('flip.secret_key');
        $this->api_url = config('flip.api_url');
    }
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request) {
        try {
            $disbursements = Disbursement::orderBy('created_at', 'asc')->paginate(10);
            return sendApiResponse(true,'List', $disbursements);
        } catch (\Exception $exception) {
            return sendApiResponse(false, $exception->getMessage(), 400);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request) {
        try {
            $validator = Validator::make($request->all(), [
                'bank_code' => 'required',
                'account_number' =>  'required',
                'remark' => 'required',
                'amount' => 'required',
            ]);
            if($validator->fails()) {
                return sendApiResponse(false, $validator->errors()->first());
            }
            $client = new Client(['auth' => [$this->secret_key, '']]);
            $response = $client->post($this->api_url.'/disburse', [
                'json' => [
                    'bank_code' => request('bank_code'),
                    'amount' => request('amount'),
                    'account_number' => request('account_number'),
                    'remark' => request('remark'),
                ]
            ]);
            $response = json_decode($response->getBody()->getContents());
            $data = [
                'id'=> $response->id,
                'amount' => $response->amount,
                'status' => $response->status,
                'timestamp' => Carbon::parse($response->timestamp),
                'bank_code' => $response->bank_code,
                'account_number' =>  $response->account_number,
                'beneficiary_name' =>  $response->beneficiary_name,
                'remark' => $response->remark,
                'time_served' =>  ($response->time_served == '0000-00-00 00:00:00')?null:Carbon::parse($response->time_served),
                'fee' => $response->fee,
                'receipt' => $response->receipt,
                'user_id' => auth()->user()->id,
            ];
            $disbursement = Disbursement::create($data);
            return sendApiResponse(true, 'Detail', $disbursement);
        } catch (\Exception $exception) {
            return sendApiResponse(false, $exception->getMessage(), 400);
        }
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function detail(Request $request, $id) {
        try {
            if($request->synchronize) {
                $client = new Client(['auth' => [$this->secret_key, '']]);
                $response = $client->get($this->api_url.'/disburse/'. $id);
                $response = json_decode($response->getBody()->getContents());
                $data = [
                    'status' => $response->status,
                    'timestamp' => Carbon::parse($response->timestamp),
                    'bank_code' => $response->bank_code,
                    'account_number' =>  $response->account_number,
                    'beneficiary_name' =>  $response->beneficiary_name,
                    'remark' => $response->remark,
                    'time_served' =>  ($response->time_served == '0000-00-00 00:00:00')?null:Carbon::parse($response->time_served),
                    'fee' => $response->fee,
                    'receipt' => $response->receipt,
                ];
                Disbursement::where('id',$id)->update($data);
            }
            $disbursement = Disbursement::findOrFail($id);
            return sendApiResponse(true, 'Detail', $disbursement);
        } catch (\Exception $exception) {
            return sendApiResponse(false, $exception->getMessage(), 400);
        }
    }
}
