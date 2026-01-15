import { Button } from "../components/ui/button";
import { Link } from "react-router-dom"; // para linkar a página Home (Inedx) no botão

const EmConstrucao = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-display mb-4">Página em construção 🚧</h1>
      <p className="text-muted-foreground max-w-md">
        Estamos trabalhando nesta página. Em breve teremos novidades!
      </p>
      <br />
      <Button variant="hero" size="sm"> {/* CTA btn - componente button */}
              <Link to="/">VOLTAR PARA A PÁGINA INICIAL</Link>
      </Button>
    </div>
  );
};

export default EmConstrucao;