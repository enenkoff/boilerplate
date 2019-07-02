export default {
    nonce: false,
    state: {
        currentPage: 'home'
    },
    actions: {
        changePage({commit}, value) {
            commit('page', value)
        },
    },
    mutations: {
        page(state, value) {
            state.currentPage = value;
        },
    },
    getters: {}
}
