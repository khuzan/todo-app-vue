import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        projects: [
            {title : 'Dishes', content: 'Do dishes', person: 'Superman', due: '1st Jan 2017', status: 'ongoing'},
            {title : 'Homework', content: 'Do homework', person: 'Stewie', due: '2nd Feb 2018', status: 'ongoing'}
        ]
    },
    getters: {
        doneTodo: (state) => (content, person) => {
            const completed =  state.projects.find(p => p.content == content && p.person == person)
            completed.status = 'complete'
        }
    }
    // mutations: {
    //     doneTodo: (state, payload) => {
    //         const {content, person} = payload
    //         const completed =  state.projects.find(p => p.content == content && p.person == person)
    //         completed.status = 'complete'
    //     }
        
    // }
})
