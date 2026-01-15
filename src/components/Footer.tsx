import { motion } from "framer-motion";
import { Mail, Twitter, Instagram, Youtube, Twitch } from "lucide-react";
import { Button } from "../components/ui/button";
import ctaBg from "../assets/fundo_da_pagina.png";
import characterPng from "../assets/game-char.png";
import logo from "../assets/logo-doug.png"; // logo

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitch, href: "#", label: "Twitch" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-surface-darker border-t border-border">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 relative overflow-hidden"
        style={{
        backgroundImage: `url(${ctaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // parallel efect (wix like)
        }}
      >
        {/* Overlay por cima da imagem de fundo */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />

        {/* Personagem (PNG sem fundo) */}
        <img
          src={characterPng}
          alt="Personagem do jogo FEU"
          className="
            absolute
            right-4 bottom-0
            w-40 sm:w-56 md:w-72 lg:w-80
            h-auto
            pointer-events-none select-none
            z-10
            drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]
          "
        />

        {/* CTA content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 text-center p-12 rounded-3xl"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Pronto para Jogar?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Entre em contato conosco para saber mais sobre nossos jogos ou parcerias.
            Estamos sempre abertos a novas ideias e colaborações!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Mail className="w-5 h-5" />
              Contato
            </Button>
            <Button variant="heroOutline" size="lg">
              Ver Vagas
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 border-t border-border">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            {/* Logo - Link with img and text */}
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img
                src={logo} // load logo file
                alt="Casa Feu Jogos" // alt text
                className="h-10 w-auto group-hover:scale-110 transition-transform"
              />
              <span className="font-display font-bold text-l bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 bg-clip-text text-transparent">
                FEU GAMES STUDIO
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 text-center">
              Criando experiências de jogos extraordinárias desde 2020
            </p>
            <div className="flex gap-3 justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-blue-600 hover:text-blue-100 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3 text-muted-foreground">
              {["Início", "Jogos", "Sobre", "Novidades", "Carreiras"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Games */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Nossos Jogos</h3>
            <ul className="space-y-3 text-muted-foreground">
              {["O Show do Zozo", "O Medo Desconhecido"].map((game) => (
                <li key={game}>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    {game}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-4 text-muted-foreground">
              {/*
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span>Av. Paulista, 1234<br />São Paulo, SP - Brasil</span>
              </li> 
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+55 (11) 99999-9999</span>
              </li>
              */}
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>contato@feugames.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 FEU Games Studio. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="/emconstrucao" className="hover:text-blue-600 transition-colors">Política de Privacidade</a>
            <a href="/emconstrucao" className="hover:text-blue-600 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
