const state = {
    table: [],
    increment: 0
}

export const mutations = {
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
    },
    INCREMENT: state => state.count++
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
        commit('REMOVE_ITEM', payload)
    }
}

export default {
    state,
    mutations,
    actions
}
