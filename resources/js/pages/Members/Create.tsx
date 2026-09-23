import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Anggota',
        href: '/members',
    },
    {
        title: 'Tambah',
        href: '/members/create',
    },
];

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        student_id: '',
        phone: '',
        is_active: true,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post('/members');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Anggota" />

            <div className="max-w-2xl p-4">
                <h1 className="mb-6 text-2xl font-bold">
                    Tambah Anggota
                </h1>

                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Nama
                        </label>

                        <Input
                            value={data.name}
                            onChange={(e) =>
                                setData('name', e.target.value)
                            }
                            placeholder="Nama anggota"
                        />

                        {errors.name && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            NIM / ID Mahasiswa
                        </label>

                        <Input
                            value={data.student_id}
                            onChange={(e) =>
                                setData('student_id', e.target.value)
                            }
                            placeholder="Contoh: 231001"
                        />

                        {errors.student_id && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.student_id}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Nomor Telepon
                        </label>

                        <Input
                            value={data.phone}
                            onChange={(e) =>
                                setData('phone', e.target.value)
                            }
                            placeholder="08xxxxxxxxxx"
                        />

                        {errors.phone && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    <div className="flex gap-3">
                        <Button type="submit" disabled={processing}>
                            {processing
                                ? 'Menyimpan...'
                                : 'Simpan'}
                        </Button>

                        <Button variant="outline" asChild>
                            <Link href="/members">
                                Batal
                            </Link>
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}