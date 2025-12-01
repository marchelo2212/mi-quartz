import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p style="display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; color: inherit; text-decoration: none;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><rect x="10" y="10" width="4" height="4"/><path d="M12 6v4"/><path d="M12 18v-4"/>
            </svg>
            <span style="margin-left: 5px; font-weight: bold;">CC BY</span>
          </a>
           - @marchelo2212 powered by <a href="https://obsidian.md/">Obsidian</a> and <a href="https://quartz.jzhao.xyz/">Quartz</a>
        </p>
        
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
