import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/sidebartoggle.inline"
import styles from "./styles/sidebartoggle.scss"

const SidebarToggle: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <button class={`sidebar-toggle ${displayClass ?? ""}`} aria-label="Toggle Sidebar">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        class="sidebar-icon"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="9" y1="3" x2="9" y2="21"></line>
      </svg>
    </button>
  )
}

SidebarToggle.beforeDOMLoaded = script
SidebarToggle.css = styles

export default (() => SidebarToggle) satisfies QuartzComponentConstructor
