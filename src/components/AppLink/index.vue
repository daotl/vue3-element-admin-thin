<script setup lang="ts">
import { isExternal } from '~/utils/index'

defineOptions({
  name: 'AppLink',
  inheritAttrs: false,
})

const props = defineProps({
  to: {
    type: Object,
    required: true,
  },
})

const isExternalLink = computed(() => {
  return isExternal(props.to.path || '')
})

const linkType = computed(() => (isExternalLink.value ? 'a' : 'router-link'))

function linkProps(to: unknown) {
  if (isExternalLink.value) {
    return {
      href: to.path,
      target: '_blank',
      rel: 'noopener noreferrer',
    }
  }
  return { to }
}
</script>

<template>
  <component :is="linkType" v-bind="linkProps(to)">
    <slot />
  </component>
</template>
