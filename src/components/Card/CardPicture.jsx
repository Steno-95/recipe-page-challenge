function CardPicture({ img }) {
  return (
    <div className="max-w-full md:rounded-xl md:max-w-[600] md:overflow-hidden">
      <img
        src={img}
        alt="image of the result of the recipe"
        className="min-w-full"
      />
    </div>
  );
}

export default CardPicture;
