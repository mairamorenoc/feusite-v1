import { Toaster } from "./components/ui/toaster"; // gestão error msj 
import { TooltipProvider } from "./components/ui/tooltip"; // para os tooltips dos botões
import { BrowserRouter, Routes, Route } from "react-router-dom"; // navegação sem recarregar páginas
import Index from "./pages/Index"; // homepage
import EmConstrucao from "./pages/EmConstrucao";

const App = () => (
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* LINKANDO AS PÁGINAS NO HOME */}
          <Route path="/" element={<Index />} /> {/* Homepage */}
          {/* Substituir pelas páginas prontas */}
          <Route path="/sobre-nos" element={<EmConstrucao />} />  
          <Route path="/trabalhe-conosco" element={<EmConstrucao />} />
          <Route path="/novidades" element={<EmConstrucao />} />
          <Route path="/emconstrucao" element={<EmConstrucao />} />
          {/* Colocar os outras paths embaixo */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
);

export default App;