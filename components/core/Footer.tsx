import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
const NAV_LINKS = [
  {
    title: "Product",
    list: [
      {
        title: "Changelog",
        link: "#",
      },
      {
        title: "Documentation",
        link: "#",
      },
    ],
  },
  {
    title: "Company",
    list: [
      {
        title: "About",
        link: "#",
      },
      {
        title: "Careers",
        link: "#",
      },
      {
        title: "Blog",
        link: "#",
      },
    ],
  },
  {
    title: "Contact",
    list: [
      {
        title: "Discord",
        link: "#",
      },
      {
        title: "Twitter",
        link: "#",
      },
      {
        title: "Github",
        link: "#",
      },
      {
        title: "Email",
        link: "#",
      },
    ],
  },
];
function Footer() {
  return (
    <footer className="w-full max-w-md md:max-w-4xl mx-auto">
      <div id="footer-top" className="flex">
        <div
          id="footer-container"
          className={cx(
            "w-full py-14 px-8 sm:px-10",
            "flex flex-col lg:flex-row justify-between relative",
            "before:w-full before:absolute before:top-0 before:left-0 before:bg-gradient-to-r from-transparent via-slate-600 to-transparent before:h-[1px]",
            "after:w-full after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-r from-transparent via-slate-600 to-transparent after:h-[1px]"
          )}
        >
          <div
            id="footer-brand"
            className="font-medium text-white text-base mb-10 flex flex-1 items-center h-max"
          >
            <Image
              className="mr-4"
              alt="brand-logo"
              src={"/logo.png"}
              height={36}
              width={36}
              priority={false}
            />
            <span id="header-brand-name">Site Header</span>
          </div>
          <div
            id="footer-nav"
            className="flex flex-1 flex-wrap flex-col md:flex-row md:justify-between gap-8 text-sm"
          >
            {NAV_LINKS.map((nav, index) => (
              <div
                key={`navGroup-${index}`}
                id="footer-nav-group"
                className="min-w-[100px]"
              >
                <div
                  id="footer-nav-group-label"
                  className="font-medium text-label-color mb-5"
                >
                  {nav.title}
                </div>
                <ul>
                  {nav.list.map((l, i) => (
                    <li
                      key={`nav-footer-link-${index}-${i}`}
                      className="mb-5 last:mb-0"
                    >
                      <Link href={l.link} className="text-text-color">
                        {l.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="footer-bottom"
        className="py-10 md:py-12 text-xs text-text-color"
      >
        <div
          id="footer-container"
          className="w-full flex flex-col items-center lg:flex-row lg:justify-between mx-auto gap-6"
        >
          <div id="footer-copyright">
            Copyright © 2023 Software Inc. All rights reserved.
          </div>
          <div id="footer-terms" className="flex gap-8">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
