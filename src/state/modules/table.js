const state = {
    table: []
}

const mutations = {
    ADD_ITEMS (state, payload) {
        if (payload.action === 'add') {
            state.table.push(payload.form)
        } else {
            let index = state.table.findIndex(x => x.id == payload.prevId)
            state.table[index] = payload.form
        }
        localStorage.setItem('table', JSON.stringify(state.table))
    },
    FETCH_LOCAL_STORAGE (state, payload) {
        state.table = payload
    },
    REMOVE_ITEM (state, payload) {
        let index = state.table.findIndex(x => x.id == payload.id)
        state.table.splice(index, 1)
        localStorage.setItem('table', JSON.stringify(state.table))
    }
}

const actions = {
    addItem ({ commit }, payload) {
        commit('ADD_ITEMS', payload)
    },
    fetchLocalStorage({ commit }) {
        let localStorageVar = JSON.parse(localStorage.getItem('table'))
        commit('FETCH_LOCAL_STORAGE', localStorageVar)
    },
    removeItem({ commit }, payload) {
        /*eslint-disable */
        console.log(payload)
        /*eslint-enable */
        commit('REMOVE_ITEM', payload)
    }
}

export default {
    state,
    mutations,
    actions
}
