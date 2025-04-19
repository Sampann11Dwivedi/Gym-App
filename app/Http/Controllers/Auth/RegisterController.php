<?php

namespace App\Http\Controllers\Auth;

use App\Models\GymUser;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Auth;


class RegisterController extends Controller
{
    public function store(Request $request)
    {
        \Log::info($request);
        
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'password' => 'required|confirmed|min:6',
            'height' => 'required|numeric|min:0',
            'height_unit' => 'required|in:cm,ft',
            'weight' => 'required|numeric|min:0',
            'weight_unit' => 'required|in:kg,lbs',
        ]);

        $user = GymUser::create([
            'name' => $data['name'],
            'password' => Hash::make($data['password']),
            'height' => $data['height'],
            'height_unit' => $data['height_unit'],
            'weight' => $data['weight'],
            'weight_unit' => $data['weight_unit']

        ]);
        \Log::info($user);
        
        Auth::login($user);

        \Log::info(Auth::user());

        return redirect('/dashboard');
    }

}
