<template>
    <lista-tareas :tasks="store.tasks" >
    </lista-tareas>
    
    <input v-model="name" style="border: 1px solid black; padding: 3px; margin-right: 5px;"/>
    <button @click="store.addTask(name); name=''" 
        style="border: 1.5px solid black; padding: 3px; margin-right: 5px;">
        Añadir a lista
    </button>
    <button @click="store.setTaskDone(name); name=''"
        style="border: 1.5px solid black; padding: 3px;">
        Carrito
    </button>

</template>
<script setup>
   import {useTasksStore } from "~/stores/tasks.js"
   const store = useTasksStore()
   const name=ref('')
</script>
