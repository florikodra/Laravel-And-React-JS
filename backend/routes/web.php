<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/products', [ProductsController::class, 'show_xml']);
Route::get('/products/converter', [ProductsController::class, 'xml_converter']);
Route::get('/product/single', [ProductsController::class, 'get_product_array']);
Route::get('/product/detail', [ProductsController::class, 'get_product_definition_detail_array']);
Route::get('/product/header', [ProductsController::class, 'get_product_definition_header_array']);
Route::get('/product/insert', [ProductsController::class, 'insert']);
Route::get('/product/delete', [ProductsController::class, 'delete']);
Route::get('/product/update', [ProductsController::class, 'update_product']);


