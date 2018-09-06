import * as React from 'react';
import './App.css';
import LibraryDemo from './demo/LibraryDemo';

const logo = require('./logo.svg');

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">React Component Library</h1>
                </header>
                <div className="App-intro">
                    <p>
                        Create your library components within /src/lib.
                        <br />
                        Don't forget to register them in /src/lib/index.ts.
                        <br />
                        Create demos within /src/demo, and register them in /src/demo/Demo.tsx.
                        <br />
                        Happy library-ing!
                    </p>

                    <LibraryDemo />
                </div>
            </div>
        );
    }
}

export default App;