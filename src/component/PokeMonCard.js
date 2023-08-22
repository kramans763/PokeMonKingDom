function PokeMonCard(props) {
  const { pokemon } = props;
  return (
    <div className={`card-container ${pokemon.type}`}>
      <div className="number">{pokemon.id}</div>

      <img src={pokemon.image} alt={pokemon.name} />

      <div className="detail-container">
        <h3>{pokemon.name.toUpperCase()}</h3>
        <h4>Type: {pokemon.type}</h4>
      </div>
    </div>
  );
}
export default PokeMonCard;
