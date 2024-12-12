import Link from "next/link";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import Home from "@/app/page";
import { HomeIcon } from "lucide-react";

export default function AppSideBar() {
    return (
        <Sidebar>
            <SidebarHeader>
                Cabeca
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
 
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {Array.from({ length: 100 }, (_, i) => (
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href="pushing" key={i + 1}><HomeIcon /> <span>{`Menu item ${i + 1}`}</span></Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                Meu pe
            </SidebarFooter>
        </Sidebar>
    )
}