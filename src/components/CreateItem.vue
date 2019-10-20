<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col
                        cols="12"
                        md="4"
                >
                    <v-text-field
                            v-model="form.id"
                            label="Id"
                            :rules="[
                                v => !!v || 'Id is required',
                                v => (v && !idsCollection.includes(v)) || 'Id should be unique'
                            ]"
                            required
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="12"
                        md="4"
                >
                    <v-text-field
                            v-model="form.name"
                            label="Name"
                            :rules="nameRules"
                            required
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="12"
                        md="4"
                >
                    <v-text-field
                            v-model="form.description"
                            label="Description"
                            :rules="descriptionRules"
                            required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                        cols="12"
                        md="6"
                >
                    <v-btn
                            :disabled="!valid"
                            color="success"
                            class="mr-4"
                            @click="create"
                    >
                        Save
                    </v-btn>
                </v-col>
                <v-col
                        cols="12"
                        md="6"
                >
                    <v-btn
                            color="secondary"
                            class="mr-4"
                            :to="{name: 'table'}"
                    >
                        Cancel
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: "CreateItem",
    data: () => ({
        form: {
            id: '',
            name: '',
            description:''
        },
        valid: true,
        isEdit: false,
        nameRules: [
            v => !!v || 'Name is required'
        ],
        descriptionRules: [
            v => !!v || 'Description is required'
        ]
    }),
    methods: {
        ...mapActions([
            'addItem'
        ]),
        create () {
            if (!this.isEdit) {
                this.addItem({ form: this.form, action: 'add' })
            } else {
                this.addItem({ form: this.form, action: 'edit', prevId: this.$route.params.id })
            }
        }
    },
    computed: {
        ...mapState({table: state => state.table.table}),
        idsCollection () {
            let result = this.table.filter(a => a.id !== this.$route.params.id)
            result = result.map(a => a.id);
            return result
        }
    },
    watch: {
        table(value) {
            if (this.$route.params.id && !this.$route.params.item) {
                let table = JSON.parse(JSON.stringify(value))
                this.isEdit = true
                this.form = table.find(o => o.id == this.$route.params.id)
            }
        },
    },
    mounted () {
        if (this.$route.params.item) {
            this.form = JSON.parse(JSON.stringify(this.$route.params.item))
            this.isEdit = true
        }
    }
}
</script>

<style scoped>

</style>
