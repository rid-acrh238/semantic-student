import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Wallet, User, Settings, LogOut} from 'lucide-react';
import { router } from '@inertiajs/react';
import { logout } from '@/routes';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: "/dashboard",
        icon: LayoutGrid,
    },
    {
        title: "Transaksi",
        href: "/transactions",
        icon: Wallet,
    },
    {
        title: "Anggota",
        href: "/members",
        icon: User,
    },
    {
        title: "Laporan",
        href: "/reports",
        icon: Folder,
    },
    
];

const footerNavItems: NavItem[] = [
    
    {
        title: "Pengaturan",
        href: "/settings",
        icon: Settings,
    },
    
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch className='flex items-center gap-2 text-lg font-semibold'>
                                {/* <AppLogo /> */}
                                Dashboard Bendahara
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <SidebarMenuItem>
                    <SidebarMenuButton
                    type="button"
                    onClick={() => router.post('/logout')}
                    >
                        <LogOut />
                        <span>Logout</span>
                        </SidebarMenuButton>
                        </SidebarMenuItem>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
