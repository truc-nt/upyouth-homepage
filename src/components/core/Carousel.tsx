"use client";
import Image from "next/image";
import { Carousel as AntCarousel, CarouselProps } from "antd";

interface ICarouselProps extends CarouselProps {
  images: string[];
}

const Carousel = ({ className, images }: ICarouselProps) => {
  return (
    <AntCarousel autoplay className={`rounded-3xl max-w-full ${className} overflow-hidden`}>
      {images?.map((image, index) => (
        <div key={index} className="h-[250px] w-[500px] overflow-hidden relative">
          <Image
            src={image}
            alt={image}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </AntCarousel>
  );
};

export default Carousel;
