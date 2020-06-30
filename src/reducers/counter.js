function counterReducer(state = { age: 1 }, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state, age: state.age + 1
            }
        case 'reduce': 
        return {
            ...state, age: state.age - 0
        }
        default:
            return state
    }
}

export { counterReducer }