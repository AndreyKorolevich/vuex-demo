export default {
    increaseCount(context, {parameter}) {
        setTimeout(() => {
            context.commit('increaseCount', parameter)
        }, 1000)
    }
}