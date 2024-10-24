import Tabelas from "@/components/dashboard/DiagramaGrafico";
import GraficoVisitor from "@/components/dashboard/GraficoVisitor";
import TopContent from "@/components/dashboard/TopContent";
import TopChannels from "@/components/dashboard/TopChannels";
import TopProducts from "@/components/dashboard/TopProducts";
import ImagemMapa from "@/components/dashboard/MapaImg";
import GraficoPizza from "@/components/dashboard/GraficoPizza";
import { CalendarForm } from "@/components/dashboard/Calendario"; // Certifique-se de que esse componente exista
import Daily from "@/components/dashboard/Daily";
import Pagina from "@/components/template/Pagina";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Pagina>
        <div>
          <h1 className="text-2xl font-bold">Inicio</h1>
          
          {/* Exibe o conteúdo do dashboard */}
          <TopContent />
          <TopChannels />
          <TopProducts />
          
          {/* Gráficos */}
          <GraficoVisitor />
          <GraficoPizza />

          {/* Tabelas */}
          <Tabelas />

          {/* Mapa e Imagem */}
          <ImagemMapa />

          {/* Calendário */}
          <CalendarForm />

          {/* Daily Dashboard */}
          <Daily />
        </div>
      </Pagina>
    </div>
  );
}
