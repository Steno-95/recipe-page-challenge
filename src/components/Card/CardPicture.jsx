function CardPicture({ img }) {
  return (
    <picture>
      <img
        src={img}
        alt="image of the result of the recipe"
        className="min-w-full"
      />
    </picture>
  );
}

export default CardPicture;
