import Card from "./Card";
import {connect} from "react-redux";

const Sorteiro =  props => {
    const {min, max} = props
    const ale = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{ale}</strong>
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

export default connect(mapStateToProps)(Sorteiro)