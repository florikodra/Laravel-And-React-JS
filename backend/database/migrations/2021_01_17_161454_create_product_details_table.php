<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_details', function (Blueprint $table) {
            $table->id('skuID');
            $table->bigInteger('productID');
            $table->string('cedi');
            $table->double('childWeightFrom', 10, 2);
            $table->double('childWeightTo', 10, 2);
            $table->integer('color_code');
            $table->string('color_description', 250);
            $table->string('countryImages', 10);
            $table->string('defaultSku', 10);
            $table->bigInteger('preferredEan');
            $table->string('sapAssortmentLevel', 10);
            $table->double('sapPrice', 10, 2);
            $table->string('season', 10);
            $table->string('showOnLineSku', 10);
            $table->string('size_code', 10);
            $table->string('size_description', 250);
            $table->string('skuName', 250);
            $table->string('stateOfArticle', 10);
            $table->string('umSAPprice', 10);
            $table->double('volume', 10, 2);
            $table->double('weight', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_details');
    }
}
