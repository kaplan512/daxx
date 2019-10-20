<template>
  <v-app>
<!--    <v-app-bar app>-->
<!--      <v-toolbar-title class="headline text-uppercase">-->
<!--        <span>Vuetify</span>-->
<!--        <span class="font-weight-light">MATERIAL DESIGN</span>-->
<!--      </v-toolbar-title>-->
<!--      <v-spacer></v-spacer>-->
<!--      <v-btn-->
<!--        text-->
<!--        href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
<!--        target="_blank"-->
<!--      >-->
<!--        <span class="mr-2">Latest Release</span>-->
<!--      </v-btn>-->
<!--    </v-app-bar>-->

    <v-content>
<!--      <HelloWorld/>-->
        <router-view />
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import { mapState, mapActions } from 'vuex'
export default {
    name: 'App',
    // components: {
    //   HelloWorld,
    // },
    data: () => ({
    //
    }),
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
