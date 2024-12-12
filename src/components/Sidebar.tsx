import Link from "next/link";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { User2 } from "lucide-react";
import { menuSideBar } from "@/lib/myUtils";

export default function AppSideBar() {
    return (
        <Sidebar variant="floating" collapsible="icon">
            <SidebarHeader>
                <SidebarMenuButton asChild>
                    <Link href={""}>< img src="./logo.png" width={16}/> <span>Seguro</span></Link>
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuSideBar.map((item) => (
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.link} key={item.label}>{item.icon} <span>{item.label}</span></Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenuButton asChild>
                    <Link href={""}><User2 /> <span>Seguro</span></Link>
                </SidebarMenuButton>
            </SidebarFooter>
        </Sidebar>
    )
}