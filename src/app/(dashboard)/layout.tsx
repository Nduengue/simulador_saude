import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SidebarApp from "@/components/Sidebar"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <SidebarApp/>
            <main className="flex flex-col w-full px-4">
                <div className="bg-slate-200 mt-2 rounded shadow">
                     <SidebarTrigger />
                </div>
                {children}
            </main>
        </SidebarProvider>
    )
}