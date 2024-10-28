import Button from "@/components/core/Button";
import ImageCarousel from "@/components/core/ImageCarousel";

import { ArrowRightOutlined } from "@ant-design/icons";

const EventSection = () => {
  const data = [
    {
      title: "TechYouth Incubator",
      description:
        "A startup program helping 40+ startups gain over 4500+ users combined and raise money from top VCs like Antler and Iterative, through a package of AWS credits, recruitment support, and close mentorship from 50+ industry leaders and successful founders.",
      images: [
        "/assets/images/techyouth/ty1.JPG",
        "/assets/images/techyouth/ty2.JPG",
        "/assets/images/techyouth/ty3.JPG",
        "/assets/images/techyouth/ty4.JPG",
      ],
    },
    {
      title: "Ecosystem community events",
      description:
        "Exclusive networking events uniting the startup ecosystem's top minds, with 130+ high-level guests from the US, Singapore, and Vietnam (e.g. Antler, Singapore Global Network, etc.) and 200+ young talents from MBB, Momo, Shopee, etc.",
      images: [
        "/assets/images/events/TYSD1.jpg",
        "/assets/images/events/TYSD2.jpg",
        "/assets/images/events/TYSD3.jpg",
        "/assets/images/events/TYSD4.jpg",
      ],
    },
    {
      title: "Build Street",
      description:
        "A community for all builders (scientists, engineers, artists, film makers,...) with weekly 4-hour co-working sessions to bring ideas from 0 to 1 together.",
      images: [
        "/assets/images/buildstreet.png",
      ],
    },
    {
      title: "HackYouth",
      description:
        "A 2-day hackathon with HackMIT as a technical advisor, offering a 300-million-VND prize for future entrepreneurs to solve real social challenges by Elsa, Timo, VinaCapital Ventures, and more.",
      images: [
        "/assets/images/hackyouth/HY1.jpg",
        "/assets/images/hackyouth/HY2.jpg",
        "/assets/images/hackyouth/HY3.jpg",
        "/assets/images/hackyouth/HY4.jpg",
      ],
    },
  ];
  return (
    <section className="p-16 flex flex-col gap-16 items-center">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
        <div>
          <h2 className="text-2xl font-bold md:text-6xl">
            <span className="px-2 leading-loose">Our community nurtures</span>
          </h2>
          <h2 className="text-2xl font-bold md:text-6xl">
            <span className="px-2 leading-loose text-white bg-primary-blue">
              Young founders from 0 to 1
            </span>
          </h2>
        </div>
        <h6 className="mb-4 text-center text-xs md:mb-8 md:text-2xl">
          {`Vietnamese youth often get stuck in ideation stage due to critical
          lack of resources. UpYouth\'s here to offer the right resources,
          direction, and connections you need.`}
        </h6>
      </div>
      <div className="flex flex-col w-full md:gap-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:gap-16 items-center justify-center max-w-full gap-8"
          >
            <div className={`flex-1 w-full h-full overflow-hidden ${index % 2 === 0 ? "order-2" : ""}`}>
              <div className="max-w-[500px] m-auto rounded-3xl ">
              <ImageCarousel data={item?.images} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-4 items-center">
                <h3 className="font-bold text-primary-blue text-lg leading-8 md:text-3xl">
                  {item.title}
                </h3>
                <p className="text-xs leading-6 md:text-base">{item.description}</p>
                <div className="inline">
                  <Button>
                    Visit {item.title} <ArrowRightOutlined />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventSection;
