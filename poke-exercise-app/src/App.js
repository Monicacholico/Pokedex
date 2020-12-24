import React, {Component} from 'react';
import PageWrapper from './PageWrapper';
import PokeDex from './Pokedex';
import './App.css';


class App extends Component {

    render() {
        return (
            <PageWrapper>
                <div className="App-section">
                <h2> Will render Pokedex here!</h2>
                   <PokeDex/>
                </div>
            </PageWrapper>
        )
    }
}

export default App;