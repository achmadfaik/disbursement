<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDisbursementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('disbursements', function (Blueprint $table) {
            $table->id();
            $table->integer('amount');
            $table->string('status');
            $table->string('bank_code');
            $table->string('account_number');
            $table->string('beneficiary_name')->nullable();
            $table->string('remark');
            $table->text('receipt')->nullable();
            $table->integer('fee');
            $table->timestamp('timestamp');
            $table->timestamp('time_served')->useCurrent();
            $table->unsignedBigInteger('user_id');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('disbursements');
    }
}
