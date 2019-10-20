/*eslint-disable */
// import Vue from 'vue'
/*eslint-enable */
import Vuex from 'vuex'
import table from './modules/table'

export default function (/* { ssrContext } */) {
    const store = new Vuex.Store({
        modules: {
            table
        },

        strict: process.env.DEV
    })

    return store
}
