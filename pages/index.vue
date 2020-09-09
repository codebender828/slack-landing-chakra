<template>
  <c-box>
    <s-banner />
    <s-hero />
    <s-testimonials />
    <s-cta />
    <s-footer />
  </c-box>
</template>

<script>
const STestimonials = () => import(/* webpackChunkName: "STestimonials-component" */'@/async/STestimonials.vue')
const SCta = () => import(/* webpackChunkName: "SCta-component" */'@/async/SCta.vue')
const SFooter = () => import(/* webpackChunkName: "SFooter-component" */'@/async/SFooter.vue')

export default {
  components: {
    STestimonials,
    SCta,
    SFooter
  }
}

</script>
