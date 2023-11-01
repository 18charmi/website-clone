import Image from "next/image";

const CONTRIBUTOR_LOGOS = [
  "/logo-1.png",
  "/logo-3.png",
  "/logo-2.png",
  "/logo-3.png",
  "/logo-1.png",
];
const ContributorSection = () => {
  return (
    <section className="relative w-full pb-36 px-5 ">
      <div
        id="label"
        className="text-lg text-label-color text-center mx-auto mb-5 max-w-md"
      >
        Join us and write the next chapter of our community’s journey.
      </div>
      <div
        id="list"
        className={
          "flex justify-center items-center flex-wrap gap-4 py-10 relative "
        }
      >
        {CONTRIBUTOR_LOGOS.map((d, i) => (
          <div
            id="list-item"
            className="w-36 h-16 relative"
            key={`contributer-image-${i}`}
          >
            <Image src={d} alt="contributor-image" fill className="py-5 px-1" />
          </div>
        ))}
      </div>
      <div className="relative">
        <div className="m-4 absolute left-0 top-0 h-0.5 animate-increase-width bg-opacity-20 blur-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>
    </section>
  );
};
export default ContributorSection;
