<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void

{

  Schema::create('orders', function (Blueprint $table) {

    $table->id();

    $table->unsignedBigInteger('invoice_id');

    $table->string('invoice');

    $table->unsignedBigInteger('product_id');

    $table->string('product_name');

    $table->string('image');

    $table->integer('qty');

    $table->integer('price');

    $table->timestamps();

 });

}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
