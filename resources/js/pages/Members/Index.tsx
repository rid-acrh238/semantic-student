import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { type BreadcrumbItem } from '@/types';

interface Member {
    id: number;
    name: string;
    student_id: string | null;
    phone: string | null;
    is_active: boolean;
}

interface Props {
    members: Member[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Anggota',
        href: '/members',
    },
];

export default function Index({ members }: Props) {
    const deleteMember = (id: number) => {
        if (confirm('Yakin ingin menghapus anggota ini?')) {
            router.delete(`/members/${id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Anggota" />

            <div className="flex flex-1 flex-col gap-6 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">
                            Anggota
                        </h1>

                        <p className="text-sm text-muted-foreground">
                            Kelola daftar anggota kelas.
                        </p>
                    </div>

                    <Button asChild>
                        <Link href="/members/create">
                            Tambah Anggota
                        </Link>
                    </Button>
                </div>

                <div className="overflow-hidden rounded-xl border bg-white dark:bg-gray-800">
                    <table className="w-full text-sm">
                        <thead className="border-b bg-muted/50">
                            <tr>
                                <th className="px-4 py-3 text-left">
                                    Nama
                                </th>

                                <th className="px-4 py-3 text-left">
                                    NIM / ID
                                </th>

                                <th className="px-4 py-3 text-left">
                                    Telepon
                                </th>

                                <th className="px-4 py-3 text-left">
                                    Status
                                </th>

                                <th className="px-4 py-3 text-right">
                                    Aksi
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {members.map((member) => (
                                <tr
                                    key={member.id}
                                    className="border-b last:border-0"
                                >
                                    <td className="px-4 py-3 font-medium">
                                        {member.name}
                                    </td>

                                    <td className="px-4 py-3">
                                        {member.student_id ?? '-'}
                                    </td>

                                    <td className="px-4 py-3">
                                        {member.phone ?? '-'}
                                    </td>

                                    <td className="px-4 py-3">
                                        {member.is_active
                                            ? 'Aktif'
                                            : 'Tidak Aktif'}
                                    </td>

                                    <td className="px-4 py-3 text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                asChild
                                            >
                                                <Link
                                                    href={`/members/${member.id}`}
                                                >
                                                    Detail
                                                </Link>
                                            </Button>

                                            <Button
                                                variant="outline"
                                                size="sm"
                                                asChild
                                            >
                                                <Link
                                                    href={`/members/${member.id}/edit`}
                                                >
                                                    Edit
                                                </Link>
                                            </Button>

                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() =>
                                                    deleteMember(member.id)
                                                }
                                            >
                                                Hapus
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {members.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="px-4 py-10 text-center text-muted-foreground"
                                    >
                                        Belum ada anggota.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}