import Image from "next/image";
import cx from "classnames";

function SplashScreen() {
  return (
    <div className="relative w-full py-36 px-5 ">
      <div className="w-max mx-auto mb-4 px-3 p-1 text-sm  border border-border-color rounded-full grad-down">
        <span className="gradient-text-apply">A website for every budget</span>
      </div>
      <h1 className="text-5xl lg:text-7xl font-medium w-full max-w-max mx-auto font-sans">
        {/* mobile version */}
        <div className="w-full text-center lg:hidden">
          <p className="text-label-color">The web</p>
          <p className="text-label-color">is for</p>
          <p className="gradient-text-apply">everyone</p>
        </div>
        {/* web version */}
        <div className="w-full text-center hidden lg:block">
          <p className="text-label-color">The web </p>
          <p className="gradient-text-apply">is for everyone</p>
        </div>
      </h1>
      <p className="mt-5 lg:mt-6 text-lg text-text-color text-center">
        Chat, code, cloud, deployments, and more.
      </p>

      <div
        className={cx(
          "mt-20 mx-auto w-full h-[200px] sm:w-4/5 sm:h-[300px] md:h-[450px] relative rounded-md",
          "after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-md after:bg-gradient-to-t from-background-color to-transparent"
        )}
      >
        <Image
          src="/hero-image.png"
          alt="hero-image"
          className="rounded-md "
          fill
        />
        <div className="relative border-gradient-animation h-full before:animate-gradientBorder after:animate-gradientBorder after:blur-md"></div>
      </div>
    </div>
  );
}
export default SplashScreen;
