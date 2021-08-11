//action-creator
import {NUM_MIN_ALTERADO, NUM_MAX_ALTERADO} from "./actionTypes";

export function alterarNumMinimo(novoNum) {
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNum,
    }
}

export function alterarNumMaximo(novoNum) {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNum,
    }
}