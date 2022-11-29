<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <v-btn rounded x-small dark color="red lighten-2" v-bind="attrs" v-on="on">
                    Add new Project
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    Add New Project
                </v-card-title>

                <v-card-text>
                    <v-form ref="form" lazy-validation>
                        <v-text-field v-model="project.title" label="Project Title" prepend-icon="folder" :rules="inputRules" required>
                        </v-text-field>

                        <v-textarea text v-model="project.content" label="Information" prepend-icon="edit" :rules="inputRules"  auto-grow>
                        </v-textarea>

                        <v-menu v-model="picker" :close-on-content-click="false" :nudge-right="40"
                            transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field :value="formattedDate" label="Picker without buttons" prepend-icon="mdi-calendar"
                                    readonly v-bind="attrs" v-on="on" :rules="inputRules"></v-text-field>
                            </template>
                            <v-date-picker v-model="project.due" @input="picker = false"></v-date-picker>
                        </v-menu>

                        <v-spacer></v-spacer>

                        <v-btn color="error" small class="mr-4" :loading="loading" @click="addProject">
                            Add Project
                        </v-btn>
                    </v-form>
                </v-card-text>

            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export default {
    data() {
        return {
            picker: false,
            dialog: false,
            loading: false,
            project: {
                title: "",
                content: "",
                due: null
            },
            inputRules: [
                v => !!v || 'Required.'
            ]
        }
    },
    methods: {
        addProject() {
            
            if(this.$refs.form.validate()){
                this.loading = true;
                const data = {
                    title: this.project.title,
                    content: this.project.content,
                    due: format(parseISO(this.project.due), 'do MMM yyyy'),
                    person: 'Stewie',
                    status: 'ongoing',
                }

                this.$store.state.projects.push(data);
                this.loading = false;
                this.dialog = false;
                this.$emit('projectAdded');
                this.$refs.form.reset();
            }
            
        }
    },
    computed: {
        formattedDate(){
            return this.project.due ? format(parseISO(this.project.due), 'do MMM yyyy') : ''
        }
    }
}
</script>