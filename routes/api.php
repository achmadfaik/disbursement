<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DisbursementController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [AuthController::class, 'login'])->name('api.login');
Route::group(['middleware' => 'auth:api'], function () {
    Route::post('disbursement', [DisbursementController::class, 'store'])->name('api.disbursement.store');
    Route::get('disbursement/detail/{id}', [DisbursementController::class, 'detail'])->name('api.disbursement.detail');
    Route::get('disbursement', [DisbursementController::class, 'index'])->name('api.disbursement');
});
