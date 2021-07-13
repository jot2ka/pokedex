import './Pokedex.scss';
import Pokecard from './Pokecard';

const Pokedex = props => {
  const {pokemon, exp, isWinner} = props;

  let title;
  if(isWinner) {
    title = <h1 className='Pokedex-title Pokedex-winner'>Winning Hand</h1>
  } else {
    title = <h1 className='Pokedex-title Pokedex-loser'>Losing Hand</h1>
  }
  return (
    <div className='Pokedex'>
      {title}
      <h4 className='Pokedex-sub-title'>
        (with {exp} experience)
      </h4>
      <div className='Pokedex-cards'>
        {pokemon.map(item => (
          <Pokecard
            key={item.id}
            id={item.id}
            name={item.name}
            type={item.type}
            exp={item.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;