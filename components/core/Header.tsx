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

        <nav className="hidden lg:block rounded-full">
          <ul
            className={cx(
              "border border-border-color rounded-[inherit] text-white flex items-center p-1 relative",
              { "pr-32": animateHeader },
              { "pr-4": !animateHeader },
              "trasition ease-in-out duration-500 "
            )}
          >
            {["About", "Blog", "Career", "Changelog"].map((d, i) => (
              <li key={"navSection" + { i }} className="mr-1 last:mr-0">
                <Link
                  href={`/${d}`}
                  className="flex items-center py-2 px-5 text-text-color text-sm"
                >
                  {d}
                </Link>
              </li>
            ))}
            <li
              className={cx(
                "mr-1 last:mr-0 absolute right-1",
                { "opacity-0 translate-x-10": !animateHeader },
                { "translate-x-0": animateHeader },
                "trasition ease-in-out duration-500 "
              )}
            >
              <Button
                children="Join waitlist"
                className={cx(
                  "!rounded-full bg-gradient-to-r from-violet-600 via-red-400 to-yellow-200 text-white"
                )}
              />
            </li>
          </ul>
        </nav>
        <Button
          children="Join waitlist"
          className={cx(
            "border border-border-color bg-gradient-to-t from-white via-slate-400 to-transparent bg-clip-text text-transparent",
            { "opacity-0 translate-x-5": animateHeader },
            "trasition ease-in-out duration-500 "
          )}
        />
      </div>
    </header>
  );
}
export default Header;
