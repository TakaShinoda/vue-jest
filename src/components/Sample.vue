<template>
  <div>{{ msg }}</div>
  <div>{{ upperCaseName }}</div>
</template>


<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Sample',
  props: {
    msg: {
      type: String,
      default: 'aaa',
      requier: true
    }
  },
  setup() {
    const name = ref('john')
    const upperCaseName = computed(() => name.value.toUpperCase)

    return {
      upperCaseName
    }
  },
})
</script>
