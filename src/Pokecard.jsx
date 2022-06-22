import { Component } from "react";
import "./index.css";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

export class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    return (
      <div className='flex flex-col justify-center items-center bg-gray-200 w-44 rounded-xl px-3 py-3 shadow-lg'>
        <h2 className='text-blue-700 font-bold text-lg '>{this.props.name}</h2>
        <img
          className='hover:scale-125 hover:opacity-70 transition duration-300 cursor-pointer'
          src={imgSrc}
          alt={this.props.name}
        />
        <p>Type: {this.props.type}</p>
        <p>EXP: {this.props.exp}</p>
      </div>
    );
  }
}
