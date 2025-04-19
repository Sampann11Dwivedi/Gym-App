<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth;

Route::get('/', function () {
    return Inertia::render('Landing/Admin');
});

Route::middleware('guest')->group(function () {
    Route::get('/login', fn () => Inertia::render('Auth/Login'))->name('login');
    Route::get('/register', fn () => Inertia::render('Auth/Register'));
    Route::post('/login', [Auth\LoginController::class, 'store']);
    Route::post('/register', [Auth\RegisterController::class, 'store']);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Dashboard');
})->middleware('checkLogin');
