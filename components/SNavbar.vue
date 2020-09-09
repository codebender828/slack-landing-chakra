<template>
  <c-box as="nav" bg="white" shadow="lg" z-index="1">
    <c-flex p="5" max-w="80rem" mx="auto" align="center">
      <s-logo />
      <s-nav-content
        :display="['none', 'none', 'flex']"
        ml="5"
        w="full"
        align="center"
        spacing="6"
        is-inline
      />
      <s-mobile-nav ml="auto" :display="['flex', 'flex', 'none']" />
    </c-flex>
  </c-box>
</template>
