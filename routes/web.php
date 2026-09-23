<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;

Route::get('/', function () {
    return redirect()->route('login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', function () {
        $user = auth()->user();

        return match ($user->role) {
            'superadmin' => redirect()->route('superadmin.dashboard'),
            'admin' => redirect()->route('admin.dashboard'),
            'mahasiswa' => redirect()->route('mahasiswa.dashboard'),
            default => abort(403),
        };
    })->name('dashboard');

    Route::get('/superadmin', [DashboardController::class, 'superadmin'])
        ->middleware('role:superadmin')
        ->name('superadmin.dashboard');

    Route::get('/admin', [DashboardController::class, 'admin'])
        ->middleware('role:admin')
        ->name('admin.dashboard');

    Route::get('/mahasiswa', [DashboardController::class, 'mahasiswa'])
        ->middleware('role:mahasiswa')
        ->name('mahasiswa.dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';