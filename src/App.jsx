import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Map from './Components/Map';
import Node from './Components/Node/Node';
import Music from './Components/Apps/Music/Music';

function App() {
    const [u, setU] = useState(1);

    return (
        <Router basename="/athanor">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Map u={u}>
                            <Node u={u} />
                        </Map>
                    }
                />
                <Route path="/app-music" element={<Music />} />
                <Route path="*" element={<h1>Ruta no encontrada</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
