const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Personnes célèbres" },
        { name: "Films & TV" },
        { name: "Musiciens" },
        { name: "Jeux" },
        { name: "Animaux" },
        { name: "Philosophes" },
        { name: "Scientifiques" },
      ],
    });
  } catch (error) {
    console.error(
      "Erreur lors de l'initialisation des catégories par défaut",
      error
    );
  } finally {
    await db.$disconnect();
  }
}

main();
