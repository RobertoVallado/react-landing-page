import { useState } from "react";
import "../styles/Header.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleDivClick = () => {
    navigate('/');
  };

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-left">
          <div className="header-logo" onClick={handleDivClick} >
            Pensez Espagnol
          </div>
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </div>

        <div className={`header-right ${menuOpen ? "active" : ""}`}>
          <nav className="header-nav">
            {/* <Link to="/book">{t('header_book')}</Link> */}
            <Link to="/contact">{t("header_contact")}</Link>
            <Link to="/about">{t("header_about")}</Link>
          </nav>

          <div className="header-language">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
