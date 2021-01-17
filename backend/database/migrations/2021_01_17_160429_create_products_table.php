<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id('productID');
            $table->integer('bleachingCode');
            $table->string('defaultLanguage', 250);
            $table->integer('dryCleaningCode');
            $table->integer('dryingCode');
            $table->integer('fasteningTypeCode');
            $table->integer('ironingCode');
            $table->integer('pulloutTypeCode');
            $table->integer('sapPacket');
            $table->string('updateImages', 10);
            $table->integer('waistlineCode');
            $table->integer('washabilityCode');
            $table->dateTime('creationDateInDatabase');
            $table->dateTime('lastDateChanged');


            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
