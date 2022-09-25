export default {
    counter(state) {
        return state.count
    },
    doubleCounter(state, _, rootState) {
        console.log(state, rootState)
        return state.count * 2
    },
    normalizedCounter(state, getters) {
        const finalCounter = getters.doubleCounter
        if (finalCounter < 0) {
            return 0
        } else if (finalCounter > 100) {
            return 100
        }
        return finalCounter
    },
}
