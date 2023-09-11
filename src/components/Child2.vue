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
import { PropType } from 'vue';

    type Item = {
        id: number;
        name: string;
    }

    defineProps({
        title: String,
        list: Array as PropType<Item[]>,
        options: Object as PropType<{isCorrect: boolean;}>
    })
</script>
