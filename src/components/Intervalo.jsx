import './Intervalo.css'
import Card from "./Card";
import {connect} from "react-redux";

const Intervalo = props => {
    const {min, max} = props
    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                <strong>Mínimo:</strong>
                <input type="number" value={4}/>
            </span>
                <span>
                <strong>Máximo:</strong>
                <input type="number" value={5}/>
            </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connect(mapStateToProps)(Intervalo)