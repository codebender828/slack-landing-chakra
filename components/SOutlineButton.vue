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
      fontSize: 'sm',
      fontWeight: 'light',
      variant: 'outline',
      color: 'slack.700',
      borderColor: 'slack.700',
      variantColor: 'slack',
      _hover: { bg: 'slack.800', color: 'white' },
      _active: { bg: 'slack.800', color: 'white' },
      ...vm.$attrs
    })
  }
}
</script>
