import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Table from '@/components/Table.vue'
const localVue = createLocalVue()
localVue.use(Vuex)
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
