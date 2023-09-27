import { PiCaretDown } from "react-icons/pi";

const links = ["Sobre", "Termos de serviço", "Política de privacidade"];

export const Footer = () => {
  return (
    <footer className="sm:h-[73px] border-t border-t-dark-20 flex items-center mt-10 py-4 sm:py-0">
      <div className="container mx-auto flex items-center justify-between flex-col sm:flex-row gap-4 sm:gap-0">
        <p className="font-semibold sm:text-lg flex items-center gap-4">
          PT-BR <PiCaretDown />
        </p>
        <div className="flex gap-4 sm:gap-8 items-center flex-col sm:flex-row">
          {links.map((link) => (
            <a href="#" className="sm:text-lg font-semibold" key={link}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
