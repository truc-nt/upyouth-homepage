import Button from "@/components/core/Button";
import Carousel from "@/components/core/Carousel";

import { Row, Col } from "antd";
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
      <div className="flex flex-col lg:max-w-7xl max-w-xl">
        {data.map((item, index) => (
          <Row
            key={index}
            //className="flex flex-col md:flex-row md:gap-4 items-center justify-center max-w-full"
          >
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Carousel images={item?.images} />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-primary-blue">
                  {item.title}
                </h3>
                <p className="text-base">{item.description}</p>
                <div className="inline">
                  <Button>
                    Visit {item.title} <ArrowRightOutlined />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
};

export default EventSection;
