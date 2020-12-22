import React, {Component} from 'react';
import PageWrapper from './PageWrapper';
import PokeCard from './PokeCard';


class App extends Component {
    render() {
        return (
            <PageWrapper>
                <div className="App-section">
                <h2> Will render Pokedex here!</h2>
                <PokeCard/>
                </div>
            </PageWrapper>
        )
    }
}

export default App;