<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

</script>

<template>
  <h1>Card Component{{ msg }}</h1>

</template>

<style>
h1 {
  color: blue;
}
</style>
