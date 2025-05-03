import CardPicture from "./CardPicture";
import Section from "../../ui/Section";
import Table from "../Table/Table";
import {
  preparation,
  ingredients,
  instructions,
  table,
} from "../../../data/data.json";
function Card() {
  return (
    <main className="bg-[var(--card-bg)] max-w-[700px] rounded-2xl md:my-20">
      <CardPicture img={"/images/image-omelette.jpeg"} />
      <article className="px-6 pb-6">
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
        <Table
          title={"Nutrition"}
          description={
            "The table   below shows nutritional values per serving without the additional fillings."
          }
          content={table}
        />
      </article>
    </main>
  );
}

export default Card;
