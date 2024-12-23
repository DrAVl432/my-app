// App.tsx
import React from 'react';
import Listing from './Listing';
import data from '../data/etsy.json';
import '../styles/App.css';

function App() {
    return (
        <div className="App">
            <Listing items={data} />
        </div>
    );
}

export default App;
