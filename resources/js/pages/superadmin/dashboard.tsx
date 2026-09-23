import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function SuperadminDashboard() {
    return (
        <AppLayout>
            <Head title="Dashboard Akademik" />

            <div className="p-6">
                <h1 className="text-2xl font-bold">
                    Dashboard Akademik
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Selamat datang, Superadmin.
                </p>
            </div>
        </AppLayout>
    );
}