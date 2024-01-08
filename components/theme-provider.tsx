"use client";

// Importation des bibliothèques et des types nécessaires
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

// Définition du composant ThemeProvider
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Retourne le composant NextThemesProvider avec les props et les enfants passés
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
