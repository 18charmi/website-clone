import Image from "next/image";
import Button from "./Button";

const MessageForUser = () => {
  return (
    <section className="relative w-full pb-36 px-5 flex flex-col justify-center items-center">
      {/* <div className="text-center mb-10 w-24 h-24 absolute -top-[10%] left-[35%] md:left-[45%]">
        <Image
          alt="brand-logo"
          src={"/logo.png"}
          priority={false}
          width={96}
          height={96}
        />
      </div> */}
      <div className="bg-background-color pt-20 px-10 border-[1px] border-border-color rounded-2xl">
        <h1 className="text-3xl lg:text-5xl font-medium w-full max-w-max mx-auto font-sans">
          {/* mobile version */}
          <div className="w-full text-center lg:hidden">
            <span className="text-label-color w-full">
              Ready to join a new{" "}
            </span>
            <span className="gradient-text-apply">Journey ?</span>
          </div>
          {/* web version */}
          <div className="w-full text-center hidden lg:block">
            <span className="text-label-color">Ready to join a new </span>
            <span className="gradient-text-apply">Journey ?</span>
          </div>
        </h1>
        <p className="mt-5 lg:mt-6 text-lg text-text-color text-center w-full">
          Designing Web Experiences that Click and Stick.
        </p>
        <div className="relative w-full text-center pt-9 pb-40">
          <Button className="text-base bg-gradient-to-r from-violet-600 via-red-400 to-yellow-200 text-white py-3 px-6">
            Letz Begin
          </Button>
        </div>
      </div>
    </section>
  );
};
export default MessageForUser;
