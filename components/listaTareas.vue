<template>
    <table>
        <tr>
            <th colspan="2">{{ name }}</th>
        </tr>
        <tr v-for="(t, i) in tasks" :key="i">
            <td>{{ t.action }}</td>
            <td v-if="t.done">- En Carrito</td>
            <td v-else>- Pendiente</td>
        </tr>
    </table>
</template>
<script setup>
   const name = ref('Miércoles, 13 de diciembre')
   const props= defineProps ({
        tasks: {type: Array, default: () => []}
   })
</script>