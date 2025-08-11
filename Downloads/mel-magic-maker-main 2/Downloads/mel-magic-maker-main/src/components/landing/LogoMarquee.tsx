import Marquee from "react-fast-marquee";

const logos = [
  "/media/labhya.png",
  "/media/keyed.png",
  "/media/cms.webp",
  "/media/madhi.jpg",
  "/media/defy.webp",
  "/media/Upaya.webp",
  "/media/edyouth.jpeg",
  "/media/akshar.png",
  "/media/alokit.png",
  "/media/ww.jpg",
  "/media/idinsight.jpg",
  "/media/piramal.svg",
];

const LogoMarquee = () => {
  return (
    <section
      className="relative overflow-hidden min-h-[320px] py-20 sm:py-24 lg:py-28"
      aria-labelledby="partners"
    >    <h2
        id="partners"
        className="font-display text-2xl lg:text-3xl text-center mb-8"
      >
        Trusted by 100+ non-profits
      </h2>

      <div className="mt-14">
      <Marquee
        gradient={true}
        gradientWidth={80}
        speed={40} // adjust speed to your liking
        pauseOnHover={true}
      >
        {logos.map((src, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center mx-8 flex-shrink-0"
          >
            <img
              src={src}
              alt={`Partner logo ${idx + 1}`}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
      </div>
    </section>
  );
};

export default LogoMarquee;
