<template>
  <nav>
    <a id="profile" href="/profile">My Profile</a>
    <a v-if="admin" id="admin" href="/admin">Admin</a>
    <a v-show="newbie" id="newbie" href="/newbie">Newbie</a>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const admin = ref(false)
    const newbie = ref(false)

    return {
      admin,
      newbie
    }
  },
})
</script>
