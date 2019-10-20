<template>
  <v-app>
    <v-content>
        <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'App',
    computed:
        mapState({
            table: state => state.table.table
        }),
    methods: {
        ...mapActions([
            'fetchLocalStorage'
        ]),
    },
    mounted() {
        if (!this.table.length && localStorage.getItem('table') !== null) {
            this.fetchLocalStorage()
        }
    }
};
</script>
