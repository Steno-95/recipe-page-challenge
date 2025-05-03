function CardPicture({ img }) {
  return (
    <figure className="max-w-fit md:rounded-xl md:max-w-[700px] md:overflow-hidden md:mt-6 md:mx-6">
      <img
        src={img}
        alt="image of the result of the recipe"
        className="min-w-full"
      />
    </figure>
  );
}

export default CardPicture;
