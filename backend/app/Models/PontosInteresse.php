<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PontosInteresse extends Model
{
    use HasFactory;


    public $timestamps = false;

    protected $table = 'points_interest';

    protected $fillable = ['point', 'address', 'lat', 'lng', 'category'];
}
