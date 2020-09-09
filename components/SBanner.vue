<template>
  <c-box bg="slack.700" color="white">
    <c-flex
      min-h="100px"
      p="5"
      :flex-dir="['column', 'column', 'row']"
      :align="['start', 'start', 'center']"
      :max-w="['100vw', '100vw', '2xl']"
      mx="auto"
    >
      <c-text :max-w="['lg']" :mb="[3, 3, 0]" mr="auto">
        Slack Frontiers is a free, virtual event to help you
        bring digital transformation to your organization and employees.
      </c-text>
      <c-button
        :_hover="{ bg: 'white', color: 'slack.700' }"
        :_active="{ bg: 'white', color: 'slack.700' }"
        :d="['none', 'none', 'inline-flex']"
        variant="outline"
        font-size="sm"
        font-weight="light"
        color="inherit"
        border-color="inherit"
      >
        TRY FOR FREE
      </c-button>
      <c-button
        :d="['inline-flex', 'inline-flex', 'none']"
        variant="link"
        font-weight="light"
        color="inherit"
        text-decoration="underline"
        right-icon="arrow-forward"
      >
        Register Today
      </c-button>
    </c-flex>
  </c-box>
</template>
