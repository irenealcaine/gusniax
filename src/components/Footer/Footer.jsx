import "./Footer.css"
import { FiGithub, FiLinkedin, FiMail, FiGlobe } from "react-icons/fi"

const footerLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/irenealcaine",
    icon: FiGithub,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/irenealcaine/",
    icon: FiLinkedin,
  },
  {
    id: "mail",
    label: "Email",
    href: "mailto:irenealcainealvarez@gmail.com",
    icon: FiMail,
  },
  {
    id: "web",
    label: "Portfolio",
    href: "https://irenealcainealvarez.es/",
    icon: FiGlobe,
  },
]

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        {footerLinks.map(({ id, label, href, icon: Icon }) => (
          <li key={id}>
            <a
              className="footer__link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
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
