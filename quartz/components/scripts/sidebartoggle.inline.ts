const toggleSidebar = () => {
  const sidebarToggles = document.querySelectorAll(".sidebar-toggle")
  if (sidebarToggles.length === 0) return

  const onToggle = () => {
    document.body.classList.toggle("hide-sidebars")
    // No text update needed for icon-only button
  }

  sidebarToggles.forEach(toggle => {
    toggle.addEventListener("click", onToggle)
    window.addCleanup(() => toggle.removeEventListener("click", onToggle))
  })
}

document.addEventListener("nav", toggleSidebar)
