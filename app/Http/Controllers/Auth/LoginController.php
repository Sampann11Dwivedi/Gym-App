<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Auth;
use Illuminate\Support\Facades\Hash;
// use DB;
use App\Models\GymUser;


class LoginController extends Controller
{
    public function store(Request $request)
    {        
        $credentials = $request->validate([
            'name' => ['required', 'string'],
            'password' => ['required'],
        ]);
        
        $user = GymUser::where('name', $credentials['name'])->first();
        
        if ($user && Hash::check($credentials['password'], $user->password)) {
            Auth::login($user);            
            return redirect('/dashboard');
        } else {
            return back()->withErrors(['password' => 'Invalid credentials'])->onlyInput('email');
        }

    }

    public function destroy(Request $request)
    {
        $user = Auth::user();
        \Log::info($user);

        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
