import {defineStore} from 'pinia'

export const useTasksStore =
    defineStore('tasks', () => {
        const tasks = ref([
            {action: 'Macarrones', done: false},
            {action: 'Tomate', done: false},
            {action: 'Sopa de pollo', done: true},
            {action: 'Salchichas', done: false}
        ])

        const done = computed(() =>
            tasks.value.filter((t) => t.done))

        const pending = computed(() =>
            tasks.value.filter((t) => !t.done))

        function addTask(action) {
            tasks.value.push({action, done: false})         
        }

        function deleteTasks() {
            tasks.value = [];
        }

        function setTaskDone(action) {
            const task = tasks.value.find((t) =>
                t.action === action)
            if (task) task.done = true

        }

        return {tasks, done, pending, addTask, setTaskDone, deleteTasks}
    })
