import { socialLinks } from "@/data";
import Image from "next/image";

function SocialLinks() {
  return (
    <ul className="flex gap-5 justify-center">
         <li className="h-8 flex items-center">
          <a
            className="text-[#f1efe7] hover:scale-125 transition-colors duration-200"
            href="mailto:hankylankyy@gmail.com"
            target="_blank"
            rel="noopener"
            alt="Hanky Lanky"
          >

             <Image
          height={34}
          width={34}
          src={`/mail.svg`}
          alt="Hanky Lanky email"
          
        />
          </a>
        </li>
      <li className="h-8 flex items-center">
          <a
            className="text-[#f1efe7] hover:scale-125 transition-colors duration-200"
            href="https://www.instagram.com/hanky__lanky"
            target="_blank"
            rel="noopener"
            alt="Hanky Lanky instagram"
          >

             <Image
          height={32}
          width={32}
          src={`/instagram.svg`}
          alt="Hanky Lanky"
          
        />
          </a>
        </li>
        <li className="h-8 flex items-center">
          <a
            className="text-[#f1efe7] hover:scale-125 transition-colors duration-200"
            href="https://soundcloud.com/hankylanky"
            target="_blank"
            rel="noopener"
            alt="Hanky Lanky soundcloud"
          >

             <Image
          height={50}
          width={50}
          src={`/soundcloud.svg`}
          alt="Hanky Lanky soundcloud"
          
        />
          </a>
        </li>
      {/* {socialLinks.map((link) => (
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
      ))} */}
    </ul>
  );
}

export default SocialLinks;
