import Image from "next/image";
import { info } from "@/data";
import SocialLinks from "@/components/SocialLinks";

const Header = () => {
  return (
    <header className="container flex text-center mx-auto pb-6">
      <div className="mx-auto">
        <Image
          height={106}
          width={106}
          src="/profile-pic.png"
          alt="Hanky Lanky"
           style="vertical-align:middle"
          className="h-24 w-24 rounded-full mx-auto  flex justify-center items-center "
        />
        <h1 className="font-bold text-2xl mb-1 text-[#f1efe7] mt-4">{info.name}</h1>
        <p className="whitespace-break-spaces mb-4 tracking-wide text-[#f1efe7]">
          {info.title}
        </p>
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
