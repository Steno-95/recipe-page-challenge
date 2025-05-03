function SectionTitle({ children, color = false }) {
  return (
    <h2
      className={
        color
          ? `text-(--ingredient-title) text-[1.1rem] mb-1 font-semibold  font-[Outfit]!`
          : " text-(--text-dark) text-[1.4rem] mb-1"
      }
    >
      {children}
    </h2>
  );
}

export default SectionTitle;
