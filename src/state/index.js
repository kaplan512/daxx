import Vuex from 'vuex'
import table from './modules/table'

export default function () {
    const store = new Vuex.Store({
        modules: {
            table
        },

        strict: process.env.DEV
    })

    return store
}
