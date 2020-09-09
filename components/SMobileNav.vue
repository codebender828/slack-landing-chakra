<template>
  <c-box v-bind="$attrs">
    <c-icon-button bg="none" :icon="isOpen ? 'close' : 'bars'" :aria-label="`${isOpen ? 'Close' : 'Open'} nav menu`" @click="isOpen = !isOpen" />
    <c-drawer :is-open="isOpen" size="full" placement="right" :on-close="close">
      <c-drawer-overlay />
      <c-drawer-content>
        <c-drawer-body pt="5">
          <c-drawer-close-button />
          <s-logo />
          <s-nav-content mt="8" spacing="8" />
        </c-drawer-body>
      </c-drawer-content>
    </c-drawer>
  </c-box>
</template>

<script>
export default {
  inheritAttrs: false,
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    close () {
      this.isOpen = false
    }
  }
}
</script>
