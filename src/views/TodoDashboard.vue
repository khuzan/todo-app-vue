<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small depressed color="grey lighten-4 mx-3" @click="sortBy('title')" v-on="on">
              <v-icon small class="mr-1">folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by name</span>
        </v-tooltip>

        <v-tooltip top class="small">
          <template v-slot:activator="{ on }">
            <v-btn small depressed color="grey lighten-4 mx-2" @click="sortBy('person')" v-on="on">
              <v-icon small class="mr-1">person</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by name</span>
        </v-tooltip>
      </v-row>

      <v-card flat class="pa-3" v-for="project in projects" :key="project.title">
        <v-row :class="`project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col xs="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col xs="2">
            <div class="caption grey--text">Due Date</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col xs="2">
            <div class="text-right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-divider></v-divider>
        </v-row>
      </v-card>

    </v-container>
  </div>
</template>
  
<script>


// import db from '@/firebase'
// import { collection, query, onSnapshot } from "firebase/firestore";

export default {
  methods: {
    sortBy(data) {
      this.projects.sort((a, b) => a[data] < b[data] ? -1 : 1)
    }
  },
  computed: {
    projects(){
      return this.$store.state.projects;
    }
  },
  created() {
    //Firebase
    // const q = query(collection(db, "projects"));
    // onSnapshot(q, (snapshot) => {
    //   snapshot.docChanges().forEach((change) => {
    //     if (change.type === "added") {
    //       this.projects.push({
    //         ...change.doc.data(),
    //         id: change.doc.id
    //       })
    //     }
    //   });
    // });
  }
}
</script>
  
<style>
.project.complete {
  border-left: 4px solid #3CD1C2;
}

.project.ongoing {
  border-left: 4px solid orange
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2 !important;
}

.v-chip.ongoing {
  background: #ffaa2c !important;
}

.v-chip.overdue {
  background: #f83e70 !important;
}
</style>