<?php

use Illuminate\Http\Resquest;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PontosInteresseController;


Route::get('api/pontosInteresse', [PontosInteresseController::class, 'index'])->name('pontosInteresse.index');
Route::post('api/pontosInteresse', [PontosInteresseController::class, 'store'])->name('pontosInteresse.store');