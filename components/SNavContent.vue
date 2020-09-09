<template>
  <c-stack v-bind="$attrs">
    <c-link :_hover="{ textDecor: 'none' }" href="#">
      Why Slack?
    </c-link>
    <c-link :_hover="{ textDecor: 'none' }" href="#">
      Solutions
    </c-link>
    <c-link :_hover="{ textDecor: 'none' }" href="#">
      Resources
    </c-link>
    <c-link :_hover="{ textDecor: 'none' }" href="#">
      Contact Sales
    </c-link>
    <c-link :_hover="{ textDecor: 'none' }" href="#">
      Enterprise
    </c-link>
    <c-link :_hover="{ textDecor: 'none' }" href="#">
      Pricing
    </c-link>
    <c-flex ml="auto">
      <c-button mr="5" :d="['none', 'none', 'inline-flex']" variant="link" font-weight="light" color="inherit">
        Contact sales
      </c-button>
      <c-button mr="5" :d="['none', 'none', 'inline-flex']" variant="link" font-weight="light" color="inherit">
        Sign in
      </c-button>
      <s-outline-button :d="['inline-flex', 'inline-flex', 'none']" mr="5">
        SIGN IN
      </s-outline-button>
      <s-primary-button>
        TRY FOR FREE
      </s-primary-button>
    </c-flex>
  </c-stack>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>
