<template>
  <div>
    {{title}}
    <ul>
        <li v-for="item in list" :key="item.id">
            {{item.id}}: {{item.name}}
        </li>
    </ul>
    {{options.isCorrect}}
  </div>
</template>

<script lang="ts" setup>
    type Item = {
        id: number;
        name: string;
    }

    defineProps<{
        title: string;
        list: Item[];
        options: {
            isCorrect: boolean;
        }
    }>()
</script>
