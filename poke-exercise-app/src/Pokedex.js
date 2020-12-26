import React, {Component} from 'react';
import PokeCard from './PokeCard';
import {choice} from './helpers';

import './App.css';


class PokeDex extends Component {
    render() {
        const pokeCardsProps = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            {id: 11, name: 'Metapond', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfee', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Cevee', type: 'normal', base_experience: 65},
        ];
        const displayCards = pokeCardsProps.map(cardProps => {
            return <PokeCard
            name={cardProps.name}
            type={cardProps.type}
            base_experience={cardProps.base_experience}
            />
        });
        let arr = [3,4,5,6,63,6,7,3, 2,3 ,5];
        let arrofCards = [{displayCards}];
        console.log(arrofCards);
        let randomizeCards = Math.floor(Math.random() * pokeCardsProps.length);
        // console.log(randomizeCards)
        let randomCard = pokeCardsProps[randomizeCards];
        console.log(randomCard.name);
        function randomizer( arr) {
            for(let i = 0; i < arr.length; i++ ) {
                let ran = Math.floor(Math.random() * arr.length)
                return pokeCardsProps[ran];
            }
        }
        let finalRandom = randomizer(pokeCardsProps);
        let choiceAlt = choice(pokeCardsProps);
        return (
            <div className="App-wrapper">
                <PokeCard
                name={randomCard.name}
                />
                {/* {displayCards} */}
                <PokeCard
                name= {finalRandom.name}
                type={finalRandom.type}
                />
                <PokeCard
                name= {choiceAlt.name}
                type={choiceAlt.type}
                />
            </div>
        )
    }
}

export default PokeDex;