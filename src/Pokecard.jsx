import './Pokecard.scss';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

const Pokecard = props => {
  const {id, name, type, exp} = props;
  const imgSrc = `${POKE_API}${padToThree(id)}.png`;

  return (
    <div className='Pokecard'>
      <h1 className='Pokecard-title'>{name}</h1>
      <img src={imgSrc} alt={name} />
      <div className='Pokecard-data'>Type: {type}</div>
      <div className='Pokecard-data'>EXP: {exp}</div>
    </div>
  );
}

export default Pokecard;