import React, {Component} from 'react';
import PageWrapper from './PageWrapper';
import Pokegame from './Pokegame';
import './App.css';

class App extends Component {
    render() {
        return (
            <PageWrapper>
                <div className="App-section">
                <h2> Will render Pokedex here!</h2>
                <Pokegame/>
                   {/* <PokeDex
                   />
                   <PokeDex/> */}
                </div>
            </PageWrapper>
        )
    }
}

export default App;