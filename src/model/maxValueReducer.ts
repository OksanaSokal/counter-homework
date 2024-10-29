const initialState = 5;
type StateType = number

export const maxValueReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET_MAX_VALUE':
            return action.payload;

        // case 'SET_ZERO':
        //     return 0;
        default:
            return state
    }
}

export const maxValueReducerAC = (maxValue: number) => {
    return {
        type: 'SET_MAX_VALUE',
        payload: maxValue

    } as const
}

export const setZeroReducerAC = () => {
    return {
        type: 'SET_ZERO',
    } as const
}

type maxValueReducerType = ReturnType<typeof maxValueReducerAC>
// type setZeroReducerType = ReturnType<typeof setZeroReducerAC>
type ActionType =  maxValueReducerType

//   setZeroReducerType |