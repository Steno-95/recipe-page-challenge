function ListElement({ children }) {
  return (
    <li className="not-last:mb-1 pl-3 ml-4">
      <span className="text-[var(--text-color)] text-[1rem] space-x-2 ">
        {children}
      </span>
    </li>
  );
}

export default ListElement;
