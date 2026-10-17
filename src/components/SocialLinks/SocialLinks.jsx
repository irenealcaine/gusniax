import "./SocialLinks.css"
import { socialLinks } from "../../data/links"

function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Redes sociales">
      <ul className="social-links__list">
        {socialLinks.map(({ id, label, href, icon: Icon }, index) => (
          <li key={id}>
            <a
              className="social-links__item"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--i": index }}
            >
              <Icon className="social-links__icon" aria-hidden="true" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SocialLinks
