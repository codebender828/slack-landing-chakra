<template>
  <c-flex
    justify="center"
    color="white"
    bg="slack.700"
    bg-size="1300px 700px"
    bg-repeat="repeat"
    :py="[12, 12, 32]"
    px="5"
    flex-dir="column"
    align="center"
    bg-image="url(https://a.slack-edge.com/80588/spacesuit/source/images/backgrounds/bg-halftone-black-20p.png)"
  >
    <c-heading mb="10" text-align="center" :font-size="['2em', '2em', '3em']" as="h3">
      Choose a better way to work
    </c-heading>
    <c-flex :w="['full', 'full', 'auto']" :flex-dir="['column', 'column', 'row']">
      <c-button
        text-transform="uppercase"
        font-size="md"
        bg="white"
        :w="['full', 'full', 'auto']"
        size="lg"
        font-weight="light"
        color="slack.700"
        :_hover="{ bg: 'slack.50' }"
        :_active="{ bg: 'slack.100' }"
      >
        Try for free
      </c-button>
      <c-button
        border-color="white"
        :ml="[0, 0, 5]"
        :mt="[5, 5, 0]"
        bg="transparent"
        :w="['full', 'full', 'auto']"
        font-weight="light"
        color="white"
        size="lg"
        variant="outline"
        :_hover="{ bg: 'slack.50', color: 'slack.700' }"
        :_active="{ bg: 'slack.100', color: 'slack.700' }"
        text-transform="uppercase"
      >
        Contact Sales
      </c-button>
    </c-flex>
  </c-flex>
</template>
