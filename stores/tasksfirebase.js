import {defineStore} from 'pinia'
import { useFirestoreCollection } from '~/composables/useFirestoreCollection'

export const useTasksFirebaseStore = defineStore('tasks', () => {

        const { path, filter, documents, listener, error, ids, docsArray: tasks, unsubscribe, 
            subscribe: subscribeCol, clearError, add, update } = useFirestoreCollection()

        function subscribe (){
            subscribeCol('Compra')
        }

        const done = computed(() => tasks.value.filter((t) => t.done))
        const pending = computed(() => tasks.value.filter((t) => !t.done))

        function addTask(action) {
            add({action, done: false}) 
        }

        function deleteTasks() {
            tasks.value = [];
        }

        function setTaskDone(action) {
            const task = tasks.value.find((t) =>
                t.action === action)
            if (task) task.done = true
        }
        return {tasks, done, pending, addTask, setTaskDone, deleteTasks, path, 
        filter, documents, listener, error, unsubscribe, subscribe}
    })
