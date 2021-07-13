import './Pokedex.scss';
import Pokecard from './Pokecard';

const Pokedex = () => {
  const pokemon = [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
  ]

  return (
    <div className='Pokedex'>
      <h1 className='Pokedex-title'>
        Pokédex
      </h1>
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