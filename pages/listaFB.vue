<template>
    <lista-tareas :tasks="store.tasks" >
    </lista-tareas>
    
    <input v-model="name" style="border: 1px solid black; padding: 3px; margin-right: 5px;"/>
    <button @click="store.addTask(name); name=''" 
        style="border: 1.5px solid black; padding: 3px; margin-right: 5px;">
        Añadir a lista
    </button>
    <button @click="store.setTaskDone(name); name=''"
        style="border: 1.5px solid black; padding: 3px; margin-right: 5px;">
        Carrito
    </button>
    <button @click="store.deleteTasks();"
        style="border: 1.5px solid black; padding: 3px;">
        Borrar
    </button>

</template>
<script setup>
   import {useTasksFirebaseStore} from "~/stores/tasksfirebase.js"
   const store = useTasksFirebaseStore()
    onMounted(() => store.subscribe())
    onUnmounted(() => store.unsubscribe())
   const name=ref('')
</script>
