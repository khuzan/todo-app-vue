<template>
    <div class="team">
      <h1 class="subheading grey--text">Project Team</h1>

      <v-container class="my-5">
        <v-row>
          <v-col xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card text class="text-center ma-3">
              <v-responsive class="pt-4">
                <v-avatar
                  size="95"
                  color="grey lighten--2"
                >
                  <img :src="person.avatar">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{person.name}}</div>
                <div class="grey--text">{{person.role}}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn x-small text color="grey">
                  <v-icon left>message</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  
    export default {
      data() {
        return {
          team: [
                { name: 'Stewie Griffin', role: 'Web developer', avatar: '/stewie.png' },
                { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
                { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
                { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
                { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'}
              ]
        }
      }
    }
  </script>
  