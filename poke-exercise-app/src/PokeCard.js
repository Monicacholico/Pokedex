import React, {Component} from 'react';
import './PokeCard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = number => (number <= 999 ? `00${number}`.slice(-3): number);

class PokeCard extends Component {
    render() {
        const {id, name, type, base_experience} = this.props;
        console.log(this.props);
        let imgSource = `${POKE_API}${padToThree(id)}.png`;
        return (
            <div className="PokeCard-card">
                <div className="PokeCard-header">
                <h2 className="PokeCard-Title">{name}</h2>
                <img src={imgSource} className="PokeCard-img" alt={name}/>
                </div>
                <div className="PokeCard-body">
                <p className="Pokecard-type">{type}</p>
                <p className="Pokecard-experience">{base_experience}</p>
                </div>
            </div>
        )
    }
}

export default PokeCard;