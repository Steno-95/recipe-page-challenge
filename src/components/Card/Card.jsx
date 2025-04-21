import CardPicture from "./CardPicture";
import Section from "../../ui/Section";
const preparation = [
  {
    title: "Total",
    description: "Approximately 10 minutes",
  },
  {
    title: "Preparation",
    description: "5 minutes",
  },
  {
    title: "Cooking",
    description: "5 minutes",
  },
];

const ingredients = [
  { description: "2-3 large eggs" },
  { description: "Salt, to taste" },
  { description: "Pepper, to taste" },
  { description: "1 tablespoon of butter or oil" },
  {
    description:
      "Optional fillings: cheese, diced vegetables, cooked meats,    herbs",
  },
];

const instructions = [
  {
    title: "Beat the eggs",
    description:
      "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    title: "Heat the pan",
    description:
      "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    title: "Cook the omelette",
    description:
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    title: "Add fillings (optional)",
    description:
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    title: "Fold and serve",
    description:
      "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    title: "Enjoy",
    description: "Serve hot, with additional salt and pepper if needed.",
  },
];

function Card() {
  return (
    <main className="bg-[var(--card-bg)] p-4 max-w-[700px] rounded-2xl">
      <CardPicture img={"/images/image-omelette.jpeg"} />
      <h1 className="text-[2rem] py-2 text-[var(--title-color)]">
        Simple Omelette Recipe
      </h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <Section
        bg={true}
        title={"Preparation time"}
        content={preparation}
      ></Section>
      <Section title={"Ingredients"} content={ingredients}></Section>
      <Section
        title={"Instructions"}
        content={instructions}
        type="list-decimal! marker:font-bold"
      ></Section>
    </main>
  );
}

export default Card;
/*     
    
    Nutrition The table
    below shows nutritional values per serving without the additional fillings.
    Calories 277kcal Carbs 0g Protein 20g Fat 22g
*/
