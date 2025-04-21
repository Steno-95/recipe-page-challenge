import SectionTitle from "../../ui/SectionTitle";
import TableRow from "./TableRow";

function Table({ title, description, content }) {
  return (
    <section className="py-4">
      <SectionTitle>{title}</SectionTitle>
      <p>{description}</p>
      <table className="min-w-full mt-3">
        <tbody>
          {content.map((item, i) => (
            <TableRow tag={item.tag} value={item.value} key={i} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
