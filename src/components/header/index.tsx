/* eslint-disable react/jsx-key */
import {
  PiFacebookLogo,
  PiTwitterLogo,
  PiTwitchLogo,
  PiDiscordLogo,
  PiUser,
  PiMagnifyingGlass,
  PiList,
} from "react-icons/pi";

const leftLinks = [
  <PiFacebookLogo />,
  <PiTwitterLogo />,
  <PiTwitchLogo />,
  <PiDiscordLogo />,
];
const rightLinks = [<PiUser />, <PiMagnifyingGlass />, <PiList />];

export const Header = () => {
  return (
    <header className="h-[116px] border-b border-b-dark-20 flex items-center mb-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center gap-8 text-2xl">
          {leftLinks.map((icon, index) => (
            <a href="#" key={index}>
              {icon}
            </a>
          ))}
        </div>
        <img
          className="w-[130px] sm:w-[228px]"
          src="/images/logo.svg"
          alt="Blogames"
        />
        <div className="flex items-center gap-8 text-2xl">
          {rightLinks.map((icon, index) => (
            <a href="#" key={index}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
