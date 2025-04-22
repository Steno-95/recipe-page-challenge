function CardPicture({ img }) {
  return (
    <div className="max-w-fit md:rounded-xl md:max-w-[700px] md:overflow-hidden">
      <img
        src={img}
        alt="image of the result of the recipe"
        className="min-w-full"
      />
    </div>
  );
}

export default CardPicture;
