import React, {Component} from 'react';
import PokeCard from './PokeCard';
import {choice} from './helpers';

import './App.css';
import './Pokedex.css';


class PokeDex extends Component {
    static defaultProps = {
        pokeCardsProps : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            {id: 11, name: 'Metapond', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfee', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Cevee', type: 'normal', base_experience: 65}
        ]
    }
    render() {
        let exp = this.props.exp;
        let isWinner = this.props.isWinner;

        // function zerosHandler() {
        //     const cardIds = pokeCardsProps.map(pokeCard => pokeCard.id);
        //     console.log(cardIds);
        //    return cardIds.map( cardId => {
        //         const sizeId = cardId.toString().length;
        //         console.log(sizeId);
        //         if(sizeId === 3) {
        //             return cardId.toString()
        //         } else if (sizeId === 2) {
        //             return "0" + cardId;
        //         } else {
        //             return "00" + cardId;
        //         }
        //     })
        // }
        // console.log(zerosHandler());
        // let idsWZeros = zerosHandler();
        // function settingIdToImage() {
        //     let img;
        //     let eachImg = idsWZeros.map(idWZero => {
        //         return img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idWZero}.png`;
        //         })
        //         return eachImg;
        // }

        // let imgProps =  settingIdToImage();
        // console.log(imgProps);

        // function addProp() {
        //     for(let pokeCardProp of pokeCardsProps) {
        //         imgProps.forEach (imgProp => {
        //            return pokeCardProp.img = imgProp;
        //         })
        //         console.log(pokeCardProp);
        //     }
        // }
        // console.log(addProp())

        const displayCards = this.props.pokeCardsProps.map(cardProps => (
            <PokeCard
            id={cardProps.id}
            name={cardProps.name}
            type={cardProps.type}
            base_experience={cardProps.base_experience}
            // image={cardProps.img}
            />
        ));

        // let arr = [3,4,5,6,63,6,7,3, 2,3 ,5];
        // let arrofCards = [{displayCards}];
        // console.log(arrofCards);
        // let randomizeCards = Math.floor(Math.random() * pokeCardsProps.length);
        // console.log(randomizeCards)
        // let randomCard = pokeCardsProps[randomizeCards];
        // console.log(randomCard.name);
        // function randomizer( arr) {
        //     for(let i = 0; i < arr.length; i++ ) {
        //         let ran = Math.floor(Math.random() * arr.length)
        //         return pokeCardsProps[ran];
        //     }
        // }
        // let finalRandom = randomizer(pokeCardsProps);
        // let choiceAlt = choice(pokeCardsProps);
        // function sumPoints() {
        //     let totalPoints = randomCard.base_experience + finalRandom.base_experience + choiceAlt.base_experience;
        //     return totalPoints;
        // }
        // let points = sumPoints();
        // console.log(points)
        return (
            <div className="App-wrapper">
            <h2 className='Pokedex-header'>
                Total Points : {exp}
                </h2>
            <h3 className={isWinner ? 'Winner' : 'Looser'}>
                {isWinner ? 'YOU WIN!!!' : 'YOU LOOSE!!!'}
                </h3>
            <div className="Pokedex-wrapper">
                {/* <PokeCard
                name={randomCard.name}
                type={randomCard.type}
                base_experience={randomCard.base_experience}
                image={randomCard.img}
                /> */}
                {displayCards}
                {/* <PokeCard
                name= {finalRandom.name}
                type={finalRandom.type}
                base_experience={finalRandom.base_experience}
                image={finalRandom.img}
                /> */}
                {/* <PokeCard
                name= {choiceAlt.name}
                type={choiceAlt.type}
                base_experience={choiceAlt.base_experience}
                image={choiceAlt.img}
                /> */}
            </div>
        </div>
        )
    }
}

export default PokeDex;
