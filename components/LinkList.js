import { links } from "@/data";
import tw from "tailwind-styled-components";
import Image from "next/image";
function LinkList() {
  return (
    <ul className="w-full md:w-4/5 lg:w-3/6 mx-auto mb-3">
      {links.map((link) => (
        <li className="mb-4 soclial-link h-16 w-auto" key={link.title}>
          <a
            className="flex justify-start items-center p-1.5"
            href={link.url}
            alt={link.title}
            target="_blank"
            rel="noopener"

          >
 

             <Image
          height={22}
          width={22} 
          className="w-12 h-12"
          src={`/${link.emoji}`}
          alt={link.emoji}
          
        />
            <span className="ml-1">{link.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default LinkList;

const TWListItemLink = tw.a`
  w-full block relative 
  py-4 pl-12 md:px-12
  bg-lime-500 hover:bg-transparent 
  border-2 border-lime-500 rounded-3xl
  font-bold text-center text-gray-800 hover:text-lime-400
  transition-colors duration-200 
`;
