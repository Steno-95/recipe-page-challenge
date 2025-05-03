import SectionTitle from "./SectionTitle";
import ListElement from "./ListElement";
import SubTitle from "./SubTitle";

function Section({ bg = false, title, content, type = "list-disc!" }) {
  return (
    <article
      className={
        bg
          ? "bg-(--ingredient-bg) p-5 rounded-2xl mt-5"
          : "not-last:border-b-1 py-4 border-(--border-color)"
      }
    >
      <SectionTitle color={bg}>{title}</SectionTitle>
      <ul
        className={
          type +
          " list-outside " +
          `${bg ? "text-(--ingredient-title)" : "text-(--text-dark)"}`
        }
      >
        {content.map((item, i) => (
          <ListElement ml={true} key={i}>
            {item.title && <SubTitle>{item.title}</SubTitle>} {item.description}
          </ListElement>
        ))}
      </ul>
    </article>
  );
}

export default Section;
