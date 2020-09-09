<template>
  <c-button
    v-bind="attrs$"
  >
    <slot />
  </c-button>
</template>

<script>
export default {
  inheritAttrs: false,
  computed: {
    attrs$: vm => ({
      variantColor: 'slack',
      bg: 'slack.700',
      _hover: { bg: 'slack.800' },
      _active: { bg: 'slack.800' },
      fontSize: 'sm',
      fontWeight: 'light',
      ...vm.$attrs
    })
  }
}
</script>
