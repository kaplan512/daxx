import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import Table from '@/components/Table.vue'
const localVue = createLocalVue()
localVue.use(Vuex)
Vue.use(Vuetify)
import { mutations } from '../../src/state/modules/table'
const { INCREMENT } = mutations

const store = new Vuex.Store({
    state: {
        table: {
            table: []
        }
    }
})

describe('Table Component', () => {
    it('check if h1 calls table', () => {
        const wrapper = shallowMount(Table, {
            store,
            localVue
        })
        expect(wrapper.find('h1').text()).equal('Table')
    })
})

describe('mutations', () => {
    it('INCREMENT', () => {
        const state = { count: 0 }
        INCREMENT(state)
        expect(state.count).to.equal(1)
    })
})

describe('Table.vue', () => {
    it('setup correctly', () => {
        expect(true).to.equal(true)
    })
})

