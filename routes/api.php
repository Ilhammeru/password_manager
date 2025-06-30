<?php

use App\Models\UserVault;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('register', function (Request $request) {
    $ciphertext = pack('C*', ...$request->ciphertext); // Convert array to binary
    $iv = pack('C*', ...$request->iv);
    $authTag = pack('C*', ...$request->auth_tag);

    UserVault::create([
        'iv' => $iv,
        'ciphertext' => $ciphertext,
        'auth_tag' => $authTag,
    ]);

    return response()->json([
        'result' => $request->toArray()
    ]);
});

Route::get('vault', function () {
    $data = UserVault::latest()->first();

    return response()->json([
        'iv' => array_values(unpack('C*', $data->iv)),
        'ciphertext' => array_values(unpack('C*', $data->ciphertext)),
        'auth_tag' => array_values(unpack('C*', $data->auth_tag)),
        'check' => gettype(unpack('C*', $data->iv))
    ]);
});