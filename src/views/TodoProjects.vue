<template>
  <div class="projects">
    <h1 class="subheading grey--text">My Projects</h1>

    <v-container class="my-5">

      <v-expansion-panels popout>
        <v-expansion-panel v-for="project in myProjects" :key="project.title" :class="`project ${project.status}`">
          <v-expansion-panel-header>
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <v-row>
              <v-col xs12 md12 lg6>
                <div class="font-weight-bold">
                  due by {{ project.due }}
                </div>
                <div>{{ project.content }}</div>
                <v-chip small :class="`${project.status} white--text caption my-2`">status: {{ project.status }}</v-chip>
              </v-col>
              <v-col xs12 md12 lg6>
                <div class="text-right">
                  <v-expand-x-transition>
                    <v-btn class="mx-2" dark small color="green lighten-2"  @click="doneTodo(project.content,project.person)">
                    <v-icon dark>
                      done
                    </v-icon>
                    Mark as complete
                  </v-btn>
                  </v-expand-x-transition>
                  
                </div>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

    </v-container>
  </div>
</template>
  
<script>

export default {
  methods: {
    doneTodo(content,person){
      return this.$store.getters.doneTodo(content,person);
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Stewie'
      })
    },
    projects() {
      return this.$store.state.projects;
    },
    
  }
}
</script>
  