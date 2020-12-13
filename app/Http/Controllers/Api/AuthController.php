<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request) {
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required',
                'password' => 'required'
            ]);
            if($validator->fails()) {
                return sendApiResponse(false, $validator->errors()->first());
            }
            $email = strtolower(request('email'));
            $password = request('password');
            if (Auth::attempt(['email' => $email,'password' => $password], false, false)) {
                $currentUser = User::findOrFail(Auth::user()->id);
                $token = Auth::user()->createToken('customer')->accessToken;
                if ($request->has('firebase_token')) {
                    $currentUser->update(['firebase_token' => request('firebase_token')]);
                }
                $currentUser->{'token'} = $token;
                return sendApiResponse(true, 'Proses login berhasil', $currentUser);
            } else {
                return sendApiResponse(false, 'Username atau password salah!');
            }
        } catch (\Exception $exception) {
            return sendApiResponse(false, $exception->getMessage(), null, 400);
        }
    }
}
