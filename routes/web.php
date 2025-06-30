<?php

use Illuminate\Support\Facades\Route;
use Native\Laravel\Dialog;
use Native\Laravel\Facades\Window;

Route::get('/', function () {
    return bin2hex(random_bytes(32));
});

