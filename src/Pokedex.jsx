import './Pokedex.scss';
import Pokecard from './Pokecard';

const Pokedex = props => {
  const {pokemon, exp, isWinner} = props;

  return (
    <div className='Pokedex'>
      <h1 className='Pokedex-title'>
        Pokédex
      </h1>
      <p>Total Experience: {exp}</p>
      <p>{isWinner ? 'WINNER!' : 'LOSER!'}</p>
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