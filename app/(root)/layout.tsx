// Importation des composants nécessaires
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

// Définition du composant RootLayout
// Il prend en paramètre un objet contenant une propriété "children" de type ReactNode
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  // Le composant retourne une div qui contient une barre de navigation, une barre latérale et une section principale
  return (
    <div className="h-full">
      <Navbar /> {/* Barre de navigation en haut */}
      <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
        <Sidebar />{" "}
        {/* Barre latérale sur le côté, cachée sur les petits écrans */}
      </div>
      <main className="md:pl-20 pt-16 h-full">{children}</main>{" "}
      {/* Section principale qui contient les "enfants" du composant */}
    </div>
  );
};

// Exportation du composant RootLayout comme exportation par défaut du module
export default RootLayout;
