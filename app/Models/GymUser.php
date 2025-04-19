<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


class GymUser extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'name',
        'password',
        'height',
        'height_unit',
        'weight',
        'weight_unit',
    ];

    protected $hidden = [
        'password',
    ];
}
