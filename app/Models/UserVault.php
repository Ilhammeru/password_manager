<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserVault extends Model
{
    protected $fillable = [
        'ciphertext',
        'iv',
        'auth_tag'
    ];
}
