<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    //
    public $timestamps = false;
    protected $table = 'products';
    protected $fillable = ['productID','bleachingCode','defaultLanguage','dryCleaningCode','dryingCode',
    'fasteningTypeCode','ironingCode','pulloutTypeCode','sapPacket','updateImages','waistlineCode','washabilityCode','creationDateInDatabase','lastDateChanged'];

    public function details()
    {
        return $this->hasMany('ProductDetails');
    }
}
