<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Disbursement extends Model
{
    use HasFactory;
    protected $table = 'disbursements';
    protected $fillable = [
        'id',
        'amount',
        'status',
        'timestamp',
        'bank_code',
        'account_number',
        'beneficiary_name',
        'remark',
        'time_served',
        'fee',
        'user_id',
        'receipt'
    ];
}
