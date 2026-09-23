<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DashboardController extends Controller
{
    public function superadmin()
    {
        return Inertia::render('superadmin/dashboard');
    }

    public function admin()
    {
        return Inertia::render('admin/dashboard');
    }

    public function mahasiswa()
    {
        return Inertia::render('mahasiswa/dashboard');
    }
}