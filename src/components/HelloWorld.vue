<template>
  <div>
    <Child title="child1" :list="[{id: 1, name: 'item1'}]" :options="{isCorrect:false}" />
    <hr />
    <Child title="child2" :list="[{id: 1, name1: 'item1'}]" :options="{}" />
  </div>
</template>

<script lang="ts" setup>
import Child from './Child.vue'

</script>
