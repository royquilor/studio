"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { catalog } from "@/lib/catalog"
import { HoltWordmark } from "@/components/holt-wordmark"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

/**
 * Grouped Holt nav. Harness is first so the workshop is always the top of the map.
 * Wordmark, group gap, and Departure Mono labels match the Figma sidebar.
 */
export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-12 justify-center px-4 py-1">
        <Link
          href="/"
          className="flex items-center text-sidebar-foreground"
          aria-label="Holt"
        >
          <HoltWordmark />
        </Link>
      </SidebarHeader>
      <SidebarContent className="gap-6">
        {catalog.map((group) => (
          <SidebarGroup key={group.id} className="gap-3">
            <SidebarGroupLabel className="font-departure h-auto font-normal uppercase tracking-wide">
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = pathname === item.href

                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        render={<Link href={item.href} />}
                        isActive={isActive}
                        tooltip={item.title}
                      >
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
