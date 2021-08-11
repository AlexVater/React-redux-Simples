import './Intervalo.css'
import Card from "./Card";
import {connect} from "react-redux";

import {alterarNumMaximo, alterarNumMinimo} from "../store/actions/numerosAction";

const Intervalo = props => {
    const {min, max} = props
    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                <strong>Mínimo:</strong>
                <input type="number" value={min}
                    onChange={e => props.alterarMin(+e.target.value)}/>
            </span>
                <span>
                <strong>Máximo:</strong>
                <input type="number" value={max}
                       onChange={e => props.alterarMax(+e.target.value)}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        alterarMin(novoNum) {
            //action-creator -> action
            const action = alterarNumMinimo(novoNum)
            dispatch(action)
        },
        alterarMax(novoNum) {
            const action = alterarNumMaximo(novoNum)
            dispatch (action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Intervalo)