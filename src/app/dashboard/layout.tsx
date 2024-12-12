import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SidebarApp from "@/components/Sidebar"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <SidebarApp/>
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )

}