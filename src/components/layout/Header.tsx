import Image from "next/image";
import Link from "next/link";

import { Flex } from "antd";
import logo from "@/public/assets/images/logo.svg";

import { headerMenu } from "@/constants/menu";

const Header = () => {
  return (
    <div className="sticky top-0 z-30 bg-white px-8 py-4 border-b-2">
      <div className="h-full flex items-center justify-between">
        <div className="h-full w-auto">
          <Image src={logo} alt={"logo"} layout="responsive" />
        </div>
        <Flex gap="middle">
          {headerMenu.map((menu) => (
            <Link
              key={menu.path}
              href={menu.path}
              className="text-sm text-gray-500"
            >
              {menu.label}
            </Link>
          ))}
        </Flex>
      </div>
    </div>
  );
};

export default Header;
