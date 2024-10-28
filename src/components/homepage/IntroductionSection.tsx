"use client";
import { ArrowRightOutlined } from "@ant-design/icons";

import Button from "@/components/core/Button";

const IntroductionSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center gap-y-8 px-8">
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center">
        <div className="flex-1 text-4xl font-bold md:text-8xl">
          <h1>Do like a</h1>
          <h1 className="text-white">
            <span className="px-2 leading-loose bg-primary-blue">
              Real Founder
            </span>
          </h1>
        </div>
        <p className="flex-1 text-lg md:text-xl text-gray-600">
          We are a youth-focused tech startup ecosystem providing the best
          resources for Vietnamese entrepreneurs to found REAL ventures.
        </p>
      </div>
      <div>
        <Button>
          Discover more <ArrowRightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default IntroductionSection;
