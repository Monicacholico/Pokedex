import React, {Component} from 'react';
import PageWrapper from './PageWrapper';
import PokeCard from './PokeCard';
import './App.css';


class App extends Component {

    render() {
        const pokeCardsProps = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: '62'},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: '63'},
            {id: 11, name: 'Metapond', type: 'bug', base_experience: '72'},
            {id: 12, name: 'Butterfee', type: 'flying', base_experience: '178'},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: '112'},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: '95'},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: '225'},
            {id: 133, name: 'Cevee', type: 'normal', base_experience: '65'},
        ]
        const eachCard = pokeCardsProps.map(cardProps => {
                    return <PokeCard
                    name={cardProps.name}
                    type={cardProps.type}
                    base_experience={cardProps.base_experience}
                    />
                });
        return (
            <PageWrapper>
                <div className="App-section">
                <h2> Will render Pokedex here!</h2>
                    <div className="App-wrapper">
                    {eachCard}
                    {/* <PokeCard
                    name="Charmander"
                    image="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png?raw=true"
                    type="fire"
                    base_experience='62'
                    /> */}
                    </div>
                </div>
            </PageWrapper>
        )
    }
}

export default App;