<template>
    <v-container>
        <v-layout
                text-center
                wrap
        >
            <v-simple-table v-if="table.length">
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">Id</th>
                        <th class="text-left">Name</th>
                        <th class="text-left">Description</th>
                        <th class="text-left">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in table" :key="index">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.description }}</td>
                        <td>
                            <v-btn
                                    color="blue"
                                    :to="{name: 'create', params: { item: item, id: item.id }}"
                            >
                                Update
                            </v-btn>
                            <v-btn
                                    color="red"
                                    @click="show(item)"
                            >
                                Delete
                            </v-btn>
                        </td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-layout>
        <v-btn
                :to="{name: 'create'}"
                color="primary"
        >
            <span class="mr-2">Create</span>
        </v-btn>
        <modal name="hello-world">
            <v-container>
                <v-layout
                        text-center
                        wrap
                >
                    Are you sure you eant to remove this item?
                </v-layout>
                <v-layout
                        text-center
                        wrap
                >
                    <v-btn
                            color="red"
                            @click="deleteItem"
                    >
                        Yes
                    </v-btn>
                    <v-btn
                            color="primary"
                            @click="hide"
                    >
                        No
                    </v-btn>
                </v-layout>
            </v-container>
        </modal>
    </v-container>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: "Table",
        data() {
            return {
                itemToRemove: null
            }
        },
        methods: {
            ...mapActions([
                'removeItem'
            ]),
            show (item) {
                this.$modal.show('hello-world');
                this.itemToRemove = item
            },
            hide () {
                this.$modal.hide('hello-world');
                this.itemToRemove = null
            },
            deleteItem () {
                this.removeItem(this.itemToRemove)
                this.hide()
            }
        },
        computed:
            mapState({
            table: state => state.table.table
        })
    }
</script>

<style scoped>

</style>
