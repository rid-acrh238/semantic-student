import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function AdminDashboard() {
    return (
        <AppLayout>
            <Head title="Dashboard Admin" />

            <div className="p-6">
                <h1 className="text-2xl font-bold">
                    Dashboard Admin
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Selamat datang, Admin.
                </p>
            </div>
        </AppLayout>
    );
}