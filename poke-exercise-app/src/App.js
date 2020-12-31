import React, {Component} from 'react';
import PageWrapper from './PageWrapper';
import Pokegame from './Pokegame';
import './App.css';


class App extends Component {

    render() {
        return (
            <PageWrapper>
                <div className="App-section">
                <h2> Will render Pokegame here!</h2>
                   {/* <PokeDex
                   />
                   <PokeDex
                   /> */}
                    <Pokegame/>
                </div>
            </PageWrapper>
        )
    }
}

export default App;