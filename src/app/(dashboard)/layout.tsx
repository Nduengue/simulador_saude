import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SidebarApp from "@/components/Sidebar"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <SidebarApp />
            <main className="flex flex-col w-full px-4 gap-8">
                <div className="bg-slate-50 mt-2 rounded-md shadow-sm border  flex items-center justify-between">
                    <SidebarTrigger className="h-full px-1 w-10" />
                    <div className="flex items-center">
                        <Button variant={"ghost"} className="relative">
                            <Bell  />
                            <span className="absolute text-red-400 text-xs font-extrabold right-3 bottom-0">2</span>
                        </Button>
                        <Button variant={"ghost"}><Image alt="avatar" width={30} height={30} className="rounded-full" src={"https://avatars.githubusercontent.com/u/122708313?s=400&u=b263ad642738eb6753e7740922ed85f84dcc3947&v=4"} />
                            <span className="text-sm text-zinc-500 font-bold">Fernando</span>
                        </Button>
                    </div>
                </div>
                {children}
            </main>
        </SidebarProvider>
    )
}