<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Products;
use App\ProductDetails;

class ProductsController extends Controller
{
    //
    protected $filename = "data_0001_test.xml";
    
    public function show_xml(){
        return response(file_get_contents(public_path($this->filename)), 200, [
            'Content-Type' => 'application/xml'
        ]);
    }
    public function xml_converter(){
        $xmlString = file_get_contents(public_path($this->filename));
        $xmlObject = simplexml_load_string($xmlString);
        $json = json_encode($xmlObject);
        return json_decode($json, true);
    }

    public function get_product_array(){
        $product_array = $this->xml_converter();
        unset($product_array['definitions']);

        //New values from header
        $product_array['creationDateInDatabase'] =  date ('Y-m-d H:i:s', strtotime($this->get_product_definition_header_array()['creationDateInDatabase']));
        $product_array['lastDateChanged'] = date ('Y-m-d H:i:s', strtotime($this->get_product_definition_header_array()['lastDateChanged']));

        return $product_array;  
    }

    public function get_product_definition_detail_array(){
        return $this->xml_converter()['definitions']['detailsData'];
        
    }

    public function get_product_definition_header_array(){
        return $this->xml_converter()['definitions']['headerData'];
    }

    public function insert(){
        $this->insert_product();
        $this->insert_product_details($this->get_product_array()['productID']);
    }
    public function delete(){
        Products::where('productID', $this->get_product_array()['productID'])->delete();
        ProductDetails::where('productID', $this->get_product_array()['productID'])->delete();
    }
    public function insert_product(){
        $product = new Products;
        $product->insert($this->get_product_array());
    }
    public function update_product(){
        Products::where("productID", $this->get_product_array()['productID'])->update($this->get_product_array());
    }
    public function insert_product_details($product_id){

        $product_details = $this->get_product_definition_detail_array();

       for($i=0;$i<count($product_details);$i++){
            $product_details[$i]['productID'] = $product_id;
            ProductDetails::insert($product_details[$i]);
        }
        
    }
    public function update(){
        return "update";
    }

}
