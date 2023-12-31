"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";
import Button from "./Button";

function Header() {
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 80) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <header className="px-6 py-5 fixed w-[100vw] z-50">
      <div
        className={cx(
          "flex justify-between items-center mx-auto my-0 relative before:w-full before:absolute before:-bottom-6 before:bg-gradient-to-r from-transparent via-slate-600 to-transparent before:h-[1px]",
          {
            "before:opacity-0": animateHeader,
          },
          "trasition-all ease-in-out duration-700"
        )}
        id="header-inner"
      >
        <Link
          href={"/"}
          className={cx(
            "flex items-center relative",
            {
              "opacity-0 -translate-x-3": animateHeader,
            },
            "trasition ease-in-out duration-500 "
          )}
          id="header-brand"
        >
          {/* add img */}
          <Image
            className="mr-4"
            alt="brand-logo"
            src={"/logo.png"}
            height={36}
            width={35}
            priority={false}
          />
          <span
            className="text-white text-base font-medium"
            id="header-brand-name"
          >
            Site Header
          </span>
        </Link>

        <nav className="hidden lg:block rounded-full grad-up backdrop-blur-md ">
          <ul
            className={cx(
              "border border-border-color rounded-[inherit] text-white flex items-center p-1 relative overflow-hidden h-12",
              { "w-[506px]": animateHeader },
              { "w-[360px]": !animateHeader },
              "trasition ease-in-out duration-500 "
            )}
          >
            {["About", "Blog", "Career", "Changelog"].map((d, i) => (
              <li
                key={`navSection ${i}`}
                className={cx(
                  "mr-1 rounded-full hover:bg-border-color",
                  "transition-colors ease-in-out duration-300"
                )}
              >
                <Link
                  href={`/${d}`}
                  className="flex items-center py-2 px-5 text-text-color text-sm"
                >
                  {d}
                </Link>
              </li>
            ))}
            <li className={"flex justify-center items-center "}>
              <div
                className="h-[20px] w-[1px] bg-border-color mr-4"
                id="header-nav-divider"
              ></div>
              <Button
                className={cx(
                  "!rounded-full bg-gradient-to-r from-violet-600 via-red-400 to-yellow-200 text-white w-max"
                )}
              >
                Join waitlist
              </Button>
            </li>
          </ul>
        </nav>
        <Button
          className={cx(
            "border border-border-color grad-down bg-clip-text text-slate-200",
            { "opacity-0 translate-x-5": animateHeader },
            "trasition ease-in-out duration-500 "
          )}
        >
          Join waitlist
        </Button>
      </div>
    </header>
  );
}
export default Header;
