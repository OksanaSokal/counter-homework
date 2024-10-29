
const initialState = {startValue: 0, maxValue: 5,value:0};
type StateType = {startValue: number, maxValue: number, value:number};

export const valueReducer = (state:  StateType = initialState, action: ActionType): StateType   => {
    switch (action.type) {
        case 'SET_VALUE':
             return {...state, value: action.payload}
        case 'SET_START_VALUE':
            return {...state, startValue: action.payload}
        case 'SET_MAX_VALUE':
            return {...state, maxValue: action.payload}
        default:
            return state
    }
}

export const setValueReducerAC = (value: number) => {
    return {
        type: 'SET_VALUE',
        payload: value
    } as const
}
export const setStartValueReducerAC = (startValue: number) => {
    return {
        type: 'SET_START_VALUE',
        payload: startValue
    } as const
}
export const setMaxValueReducerAC = (maxValue: number) => {
    return {
        type: 'SET_MAX_VALUE',
        payload: maxValue
    } as const
}

type setValueReducerType = ReturnType<typeof setValueReducerAC>
type setStartValueReducerType = ReturnType<typeof setStartValueReducerAC>
type setMaxValueReducerType = ReturnType<typeof setMaxValueReducerAC>
type ActionType = setValueReducerType | setStartValueReducerType | setMaxValueReducerType

//---------------------------------------------------

// export const valueReducerAC = (value: number) => {
//     return {
//         type: 'INCREASE',
//         payload: value
//     } as const
// }

// export const setValueReducerAC = (newValue: number) => {
//     return {
//         type: 'SET_VALUE',
//         payload: newValue
//     } as const
// }
//
// export const setZeroReducerAC = () => {
//     return {
//         type: 'SET_ZERO',
//     } as const
// }
// type valueReducerType = ReturnType<typeof valueReducerAC>
// type setValueReducerType = ReturnType<typeof setStartValueReducerAC>
// type setZeroReducerType = ReturnType<typeof setZeroReducerAC>
// type ActionType = valueReducerType | setZeroReducerType | setValueReducerType