// Importation des bibliothèques et composants nécessaires
import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Définition du composant ModeToggle
export function ModeToggle() {
  // Utilisation du hook useTheme pour obtenir la fonction setTheme
  const { setTheme } = useTheme();

  // Retourne un menu déroulant pour changer le thème
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon">
          {/* Icône du soleil pour le thème clair */}
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          {/* Icône de la lune pour le thème sombre */}
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          {/* Texte pour les lecteurs d'écran */}
          <span className="sr-only">Changer le thème</span>{" "}
          {/* Traduction de "Toggle theme" */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* Option pour choisir le thème clair */}
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Clair {/* Traduction de "Light" */}
        </DropdownMenuItem>
        {/* Option pour choisir le thème sombre */}
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Sombre {/* Traduction de "Dark" */}
        </DropdownMenuItem>
        {/* Option pour choisir le thème du système */}
        <DropdownMenuItem onClick={() => setTheme("system")}>
          Système {/* Traduction de "System" */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
