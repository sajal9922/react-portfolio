// @copyright 2024 shamsul alam
// @license Apache-2

import Button from './Button';
import { arrowRightDark, logo } from '../assets';

const sitemap = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Reviews',
    href: '#reviews',
  },
  {
    label: 'Contact me',
    href: '#contact',
  },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/sajal9922',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shamsul-alam-bb3726322/',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/sajal.moni',
  },
];
const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-2 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <Button
              href="mailto:sajal.moni@gmail.com"
              label="Start project"
              classes="btn-primary reveal-up"
              icon={<img className="h-4" src={arrowRightDark} />}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className=" mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className=" block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className=" block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-[50px]">
          <a href="/" className="logo reveal-up">
            <img src={logo} height={40} width={40} alt="logo" />
          </a>
          <p className="text-sm text-zinc-500 reveal-up">
            &copy; 2024 <span className="text-zinc-200">shamsul alam</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
