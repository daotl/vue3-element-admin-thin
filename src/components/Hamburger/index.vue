<script setup lang="ts">
defineProps({
  isActive: {
    required: true,
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['toggleClick'])

function toggleClick() {
  emit('toggleClick')
}
</script>

<template>
  <div
    class="flex items-center justify-center px-[15px] color-[var(--el-text-color-regular)]"
    @click="toggleClick"
  >
    <svg-icon
      class="hamburger"
      :class="{ 'is-active': isActive }"
      icon-class="indent-decrease"
    />
  </div>
</template>

<style scoped lang="scss">
.hamburger {
  vertical-align: middle;
  cursor: pointer;
  transform: scaleX(-1);
}

.hamburger.is-active {
  transform: scaleX(1);
}
</style>
