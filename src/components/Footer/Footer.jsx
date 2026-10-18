import "./Footer.css"
import { FiGithub, FiLinkedin, FiMail, FiGlobe } from "react-icons/fi"

const footerLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/irenealcaine",
    icon: FiGithub,
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/irenealcaine/",
    icon: FiLinkedin,
    external: true,
  },
  {
    id: "mail",
    label: "Email",
    href: "mailto:irenealcainealvarez@gmail.com",
    icon: FiMail,
    external: false,
  },
  {
    id: "web",
    label: "Portfolio",
    href: "https://irenealcainealvarez.es/",
    icon: FiGlobe,
    external: true,
  },
]

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        {footerLinks.map(({ id, label, href, icon: Icon, external }) => (
          <li key={id}>
            <a
              className="footer__link"
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={external ? `${label} (se abre en una pestaña nueva)` : label}
              data-tooltip={label}
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
