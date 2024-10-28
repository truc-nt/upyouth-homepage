"use client";
import Image from "next/image";
import { Carousel as AntCarousel, CarouselProps } from "antd";

interface ICarouselProps extends CarouselProps {
  data: string[];
}

const ImageCarousel = ({ data }: ICarouselProps) => {
  return (
    <AntCarousel autoplay className="rounded-3xl max-w-full">
      {data?.map((image, index) => (
        <div key={index} className="h-[250px] rounded-3xl relative">
          <Image
            src={image}
            alt={image}
            fill
            style={{ objectFit: "cover", borderRadius: "1.5rem" }}
          />
        </div>
      ))}
    </AntCarousel>
  );
};

export default ImageCarousel;
