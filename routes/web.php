<?php

use Illuminate\Support\Facades\Route;
use Native\Laravel\Dialog;
use Native\Laravel\Facades\Window;

Route::post('/check', function () {
    Window::open('secondary');

    return response()->json([
        'message' => 'Success'
    ]);
});

Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');

