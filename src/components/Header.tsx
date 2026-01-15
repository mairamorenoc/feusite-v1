import { useState } from "react"; // hook react
import { motion, AnimatePresence } from "framer-motion"; // react library for animations
  // motion -> create animated react objects 
  // AnimatePresence -> add entrada/saida animations
import { Menu, X} from "lucide-react"; // react icon library - for Mobile menu
import { Button } from "./ui/button"; // custom component
import logo from "../assets/logo-doug.png"; // logo

// var to store site menu (array)
const navLinks = [
  { name: "Início", href: "/", isRoute: true }, //Homepage - href -> "/" for back to the root page (homepage)
  { name: "Jogos", href: "#games", isRoute: false }, // Jogos page - href -> anchor (#games) *replace later with actual page path /jogos
  { name: "Sobre Nós", href: "/sobre-nos", isRoute: true }, // Sobre nós page
  { name: "Novidades", href: "/novidades", isRoute: true }, // Novidades page
  { name: "Trabalhe Conosco", href: "/trabalhe-conosco", isRoute: true }, // Trabalhe conosco page
];

/* COMMENTS
  - Array menu melhor do que usar separated links -> Array renderiza deinâmicamente!
  - isRoute: true -> Troca de página sem reload - usar APENAS com path relativo
  - isRoute: false -> scroll até uma seção de página - usar APENAS com ÂNCORA
*/

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // control for mobile menu btn

  return (
    <motion.nav // container ppal. do header -> uses 'motion' from 'framer-motion' library
    // header desliza de cima para baixo 
      initial={{ y: -100 }} // desplazamento de fora da tela
      animate={{ y: 0 }} // desplazamento termina na posição normal do header
      transition={{ duration: 0.6 }} // animação suave
      className="fixed top-0 left-0 right-0 z-50 glass" // tailwind classes 
        // fixed top-0 -> sempre no topo
        // z-50 → acima de tudo
        // glass →  “glassmorphism” effect (custom class)
    >
      <div className="container mx-auto px-4"> {/* container for header layout */}
        {/* container -> tailwind class, set max width auto (mx-auto), padding (px-4) */}
        <div className="flex items-center justify-between h-20"> {/* separa logo e menu */}
          {/* Logo - Link with img and text */}
          <a href="#home" className="flex items-center gap-3 group">
            {/* #home -> Intro section id, gap-3 -> espaço btwn flex child elements, group -> enables animation hovering */}
            <img
              src={logo} // load logo file
              alt="Casa Feu Jogos" // alt text
              className="h-10 w-auto group-hover:scale-110 transition-transform" // tailwind class
              // group-hover:scale-110 -> zoom on mouse hover
              // transition-transform -> hover animation
            />
            <span className="font-display font-bold text-xl bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 bg-clip-text text-transparent">
              FEU GAMES STUDIO
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8"> 
            {/* Responsividade: hidden → escondido por padrão, md:flex → aparece em telas médias ou maiores */}
            {navLinks.map((link) => ( // links dinâmicos -> .map para c/item renderiza o conteúdo de navLinks
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-blue-600 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button variant="hero" size="sm"> {/* CTA btn - componente button */}
              <a
                href="https://store.steampowered.com/curator/44740826-CasaFeuJogos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar Jogos
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2" // md:hidden -> btn só aprece no mobile 
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && ( // O menu só existe no DOM se isOpen === true
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4"> {/* flex-col gap-4 -> Layout em coluna */}
              {navLinks.map((link) => ( // dinamic menu links
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" size="sm" className="w-full"> {/* Mobile CTA btn */}
                <a
                href="https://store.steampowered.com/curator/44740826-CasaFeuJogos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar Jogos
              </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;