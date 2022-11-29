<template>
    <nav>

        <!-- <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            snackbarText
            <v-btn text color="primary" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar> -->

        <v-snackbar v-model="snackbar" top color="teal accent-3">
            <span>Awesome! You added a new project.</span>

            <template v-slot:action="{ attrs }">
                <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>

        <v-app-bar text>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>App</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- Dropdown Menu -->

            <v-menu bottom :close-on-content-click="closeOnContentClick" :offset-y="true">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn text color="greyblue-grey lighten-4" v-bind="attrs" v-on="on">
                        <v-icon left>expand_more</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="(link, index) in links" :key="index" route :to="link.route">
                        <v-list-item-title>
                            <span>{{ link.text }}</span>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text color="greyblue-grey lighten-4">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-layout row wrap align-center>
                <v-row no-gutters class="mt-10">
                    <v-col cols="12" align="center">
                        <v-avatar size="100">
                            <v-img src="/profile-stewie.png"></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col cols="12" align="center">
                        <p class=" subheading mt-1">Stewie Griffin</p>
                    </v-col>
                </v-row>
                <!-- Pop up -->
                <v-row no-gutters class="mb-10">
                    <v-col cols="12" align="center">
                        <Popup @projectAdded="snackbar=true"></Popup>
                    </v-col>
                </v-row>
            </v-layout>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                    <v-list-item v-for="link in links" :key="link.text" route :to="link.route">
                        <v-list-item-icon>
                            <v-icon>{{ link.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>

                    <!-- <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Account</v-list-item-title>
                    </v-list-item> -->
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './ThePopup'

export default {
    components: {
        Popup
    },
    data: () => ({
        snackbar: false,
        drawer: false,
        group: null,
        closeOnContentClick: true,
        links: [
            { icon: 'dashboard', text: 'Dashboard', route: '/' },
            { icon: 'folder', text: 'My Projects', route: '/projects' },
            { icon: 'person', text: 'Team', route: '/team' },
        ]
    }),
}
</script>

<style>

</style>