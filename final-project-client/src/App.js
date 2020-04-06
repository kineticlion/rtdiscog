import React, { useState } from 'react';
import './App.css';
import DiscogsComponent from './Components/DiscogsComponent/DiscogsComponent';
import PlaylistComponent from './Components/PlaylistComponent/PlaylistComponent';

function App () {
    const [selection, setSelection] = useState(1);
    const [update, setUpdate] = useState(false);

    const toggleUpdate = () => {
        if (update) {
            setUpdate(false);
        } else {
            setUpdate(true);
        }
    }
    return (
        <div className="App">
            <PlaylistComponent setSelection={setSelection} selection={selection} update={update}/>
            <DiscogsComponent selection={selection} setUpdate={toggleUpdate}/>
        </div>
    );
}

export default App;
