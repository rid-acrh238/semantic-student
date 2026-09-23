import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function MahasiswaDashboard() {
    return (
        <AppLayout>
            <Head title="Dashboard Mahasiswa" />

            <div className="p-6">
                <h1 className="text-2xl font-bold">
                    Dashboard Mahasiswa
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Selamat datang di profil perkembangan Anda.
                </p>
            </div>
        </AppLayout>
    );
}