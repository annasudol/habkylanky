import { socialLinks } from "@/data";
import Image from "next/image";

function SocialLinks() {
  return (
    <ul className="flex gap-5 justify-center">
      {socialLinks.map((link) => (
        <li className="h-8 flex items-center" key={link.icon}>
          <a
            className="text-[#f1efe7] hover:scale-125 transition-colors duration-200"
            href={link.url}
            target="_blank"
            rel="noopener"
            alt={link.icon}
          >

             <Image
          height={32}
          width={32}
          src={`/${link.icon}.svg`}
          alt="Hanky Lanky"
          
        />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
