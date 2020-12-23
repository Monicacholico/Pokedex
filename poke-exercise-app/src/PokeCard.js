import React, {Component} from 'react';
import './PokeCard.css';

class PokeCard extends Component {
    static defaultProps = {
        id: 4,
        name: 'Chandeler',
        type: 'fire',
        base_experience: 62
    }
    render() {
        const {id, name, type, base_experience, image} = this.props;
        return (
            <div className="PokeCard-card">
                <div className="PokeCard-header">
                <h2 className="PokeCard-Title">{name}</h2>
                <img src={image} className="PokeCard-img"/>
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