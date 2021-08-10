import './App.css';
import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";
import {useState} from "react";

function App() {
    const [min, setMin] = useState(10)
    const [max, setMax] = useState(1000)

    return (
        <div className="App">
            <h1>Exercício React-Redux (Simples)</h1>
            <div className="row">
                <Intervalo min={min} max={max}
                           onMinChange={setMin} onMaxChange={setMax} />
            </div>
            <div className="row">
                <Media min={min} max={max}/>
                <Soma min={min} max={max}/>
                <Sorteio min={min} max={max}/>
            </div>
        </div>
    );
}

export default App;
