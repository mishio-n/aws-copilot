<template>
  <p class="underline underline-offset-6" :class="{
    'underline-red-400 text-red-400 font-bold text-lg': isImportant,
    'underline-dotted': !isImportant
  }">
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  isImportant: boolean
}>(), {
  isImportant: false
})
</script>