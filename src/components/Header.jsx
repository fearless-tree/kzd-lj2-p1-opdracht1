import { useEffect, useRef, useState } from 'react';

const links = [
  ['Home', '#home'],
  ['About Us', '#offer'],
  ['Services', '#services'],
  ['Pages', '#offer'],
  ['Shop', '#offer'],
  ['Blog', '#services'],
  ['Contact Us', 'mailto:infoyoursite@mail.com'],
];

export default function Header() {
  // bepaalt of de navbar is vastgezet en hoeveel ruimte hij inneemt
  const [scrolled, setScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(120);
  const navRef = useRef(null);

  // useEffect runt als pagina laad
  useEffect(() => {
    const update = () => {
      if (navRef.current && !navRef.current.classList.contains('is-fixed')) {
        if (window.innerWidth < 768) {
          setNavHeight(0);
        } else {
          setNavHeight(navRef.current.getBoundingClientRect().height);
        }
      }
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 topbar-block">
              <ul className="contact">
                <li>
                  <a href="mailto:infoyoursite@mail.com">
                    <i className="fa fa-envelope" /> infoyoursite@mail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+77000453">
                    <i className="fa fa-phone" />
                    +77 000 453
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 topbar-block text-center">
              <ul className="top-button">
                {['facebook', 'google', 'linkedin'].map((icon) => (
                  <li key={icon}>
                    <a href="mailto:infoyoursite@mail.com" aria-label={icon}>
                      <i className={`fa fa-${icon}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-sm-4 topbar-block text-right">
              <a href="mailto:infoyoursite@mail.com" className="btn radius-2x bg">
                GET A QUOTE <i className="fa fa-angle-double-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <header
        className={`site-header ${scrolled ? 'is-floating' : ''}`}
        style={scrolled ? { height: navHeight } : undefined}
      >
        {/* Scroll: is-fixed houdt de navbar bovenaan nadat je scrolt */}
        <nav
          ref={navRef}
          className={`navbar ${scrolled ? 'is-fixed' : 'not-fixed'}`}
          id="slide-nav"
          aria-label="Main navigation"
        >
          <div className="container">
            <div className="navbar-header col-sm-12 col-md-3">
              <button
                type="button"
                className="navbar-toggle"
                aria-expanded={open}
                aria-controls="menu_nav"
                onClick={() => setOpen((isOpen) => !isOpen)}
              >
                <span className="sr-only">{open ? 'Close navigation' : 'Open navigation'}</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a href="#home" className="menu-logo">
                <img src="/images/logo.png" alt="Alteco Business Template" />
              </a>
            </div>
            <div className={`navbar-collapse col-sm-9 col-md-8 ${open ? 'menu-open' : ''}`} id="menu_nav">
              <ul className="nav navbar-nav">
                {links.map(([label, href]) => (
                  <li key={label} className={label === 'Home' ? 'active' : ''}>
                    <a href={href} onClick={() => setOpen(false)}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-sm-3 col-md-1 nav-button">
              <button
                className="search-button"
                aria-label="Search"
                aria-expanded={searchOpen}
                onClick={() => setSearchOpen((isOpen) => !isOpen)}
              >
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
