// Importation de l'icône de menu de la bibliothèque lucide-react
import { Menu } from "lucide-react";

// Importation des composants Sheet et Sidebar
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";

// Définition du composant MobileSidebar
export const MobileSidebar = () => {
  // Retourne un composant Sheet qui contient un déclencheur et un contenu
  return (
    <Sheet>
      {/*} Le déclencheur est un icône de menu qui n'est visible que sur les écrans de taille moyenne et inférieure */}
      <SheetTrigger className="md:hidden pr-4">
        <Menu />
      </SheetTrigger>
      {/* Le contenu est un composant Sidebar qui est affiché sur le côté gauche de l'écran */}
      {/* Il a une marge supérieure de 10 et une largeur de 32 */}
      <SheetContent side="left" className="p-0 bg-secondary pt-10 w-32">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
