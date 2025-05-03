function TableRow({ tag, value }) {
  return (
    <tr className="not-last:border-b-1 not-last:border-(--border-color) ">
      <td className="pl-4 py-2 font-semibold">{tag}</td>
      <td className="text-(--text-dark) font-bold">{value}</td>
    </tr>
  );
}

export default TableRow;
