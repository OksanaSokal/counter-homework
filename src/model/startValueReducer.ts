const initialState = 0;
type StateType =  number

export const startValueReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET_START_VALUE':
            return action.payload;

        // case 'SET_ZERO':
        //     return 0;
        default:
            return state
    }
}

export const startValueReducerAC = (value: number) => {
    return {
        type: 'SET_START_VALUE',
        payload: value
    } as const
}
//
// export const setZeroReducerAC = () => {
//     return {
//         type: 'SET_ZERO',
//     } as const
// }
type startValueReducerType = ReturnType<typeof startValueReducerAC>
// type setZeroReducerType = ReturnType<typeof setZeroReducerAC>
type ActionType = startValueReducerType

    //  | setZeroReducerType