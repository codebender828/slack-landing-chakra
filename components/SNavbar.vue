<template>
  <c-box as="nav" bg="white" shadow="lg" z-index="1">
    <c-flex p="5" max-w="80rem" mx="auto" align="center">
      <s-logo />
      <c-box
        align="center"
        mr="auto"
        width="100%"
        ml="5"
        :d="['none', 'none', 'flex']"
      >
        <s-nav-content
          w="full"
          align="center"
          spacing="6"
          is-inline
        />
      </c-box>
      <s-mobile-nav ml="auto" :d="['flex', 'flex', 'none']" />
    </c-flex>
  </c-box>
</template>
