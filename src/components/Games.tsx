import { motion } from "framer-motion";
import { Star, Users, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";
import game1 from "../assets/jogo-1.png";
import game2 from "../assets/jogo-2.png";

const games = [
  {
    title: "O Show de Zozo",
    genre:  "Ação, Aventura",
    image: game1,
    rating: 4.9,
    players: "2.5M",
    year: 2025,
    description: "Este é um jogo de terror sobre um programa das camadas mais profundas da internet, onde crianças passam por jogos mortais, com uma ideia distorcida de um programa infantil.",
  },
  {
    title: "O Medo Desconhecido",
    genre: " Ação, Aventura",
    image: game2,
    rating: 4.8,
    players: "1.8M",
    year: 2024,
    description: "Um jogo de terror focado em uma história de mistério. Alem de um sistema experimental onde os eventos do jogo são controlados por uma IA tornando cada jogatina unica.",
  },
];

const Games = () => {
  return (
    <section id="games" className="py-24 bg-surface-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 border border-blue-600/30 text-sm font-medium mb-6">
            Portfólio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 mb-4">
            Nossos <span className="font-display text-3xl md:text-5xl font-bold mt-2 mb-4">Jogos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos títulos mais populares.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-x-6 w-fit mx-auto justify-items-center">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group w-full max-w-sm"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-500">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  
                  {/* Genre Badge */}
                  {/*<div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full">
                      {game.genre}
                    </span>
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-2 transition-colors group-hover:text-blue-500">
                    {game.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {game.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{game.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{game.players}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{game.year}</span>
                    </div>
                  </div>

                  <Button variant="heroOutline" size="sm" className="w-full">
                    Saiba Mais
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg">
            Ver Todos os Jogos
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Games;
