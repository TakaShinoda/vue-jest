<template>
  <p>Count is: {{ count }}</p>
  <button @click="increment">+</button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  setup() {
    const data = ref(0)
    const count = computed(() => data.value += 1)

    return {
      count
    }
  },
})
</script>
