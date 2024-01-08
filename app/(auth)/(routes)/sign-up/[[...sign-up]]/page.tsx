// Importation du composant SignUp de la bibliothèque Clerk pour l'authentification
import { SignUp } from "@clerk/nextjs";

// Définition du composant Page
export default function Page() {
  // Retourne le composant SignUp pour permettre à l'utilisateur de s'inscrire
  return <SignUp />;
}
