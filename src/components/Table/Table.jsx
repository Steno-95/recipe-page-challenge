import SectionTitle from "../../ui/SectionTitle";

function Table({ title, description }) {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <p>{description}</p>
    </section>
  );
}

export default Table;
