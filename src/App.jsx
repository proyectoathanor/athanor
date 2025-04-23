import { useState } from 'react';
import Map from './Components/Map';
import Node from './Components/Node/Node';

function App() {
    const [u, setU] = useState(1);
    return (
        <>
            <Map u={u}>
                <Node u={u} />
            </Map>
        </>
    );
}

export default App;
