import { Component } from "react";
import { Pokecard } from "./Pokecard";
export default class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className='winner text-green-400'>Winning Hand</h1>;
    } else {
      title = <h1 className='loser text-red-400'>Losing Hand</h1>;
    }

    return (
      <div className='Pokedex'>
        <h1 className='text-2xl text-gray-400 font-bold text-center my-6'>
          Pokedex
        </h1>
        <p className='text-center'>Total Experince: {this.props.exp}</p>
        <p className='text-center font-bold'>{title}</p>
        <div className='flex flex-wrap justify-center gap-16 mx-auto my-8 max-w-screen-lg'>
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}
