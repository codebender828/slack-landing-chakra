<template>
  <c-box as="section" bg="white" py="20">
    <c-stack spacing="10" :max-w="['90%', '90%', '80rem']" mx="auto">
      <c-heading text-align="center" line-height="1" mx="auto" font-size="3rem" as="h2">
        Over 750,000 companies use Slack <br> to get work done
      </c-heading>
      <c-button
        variant="link"
        font-weight="light"
        color="inherit"
        text-decoration="underline"
        right-icon="arrow-forward"
        size="lg"
      >
        See all customer reviews
      </c-button>
      <c-grid
        px="8"
        :template-columns="['1fr', '1fr', 'repeat(2, 1fr)']"
        gap="6"
      >
        <c-stack spacing="10">
          <c-text
            as="blockquote"
            font-style="italic"
            text-decoration="italic"
            line-height="1"
            font-size="1.4em"
            font-family="Helvetica"
            font-weight="light"
          >
            “I help to bring product from the wild to the kitchen, and all across the dining room,” Koseba explains. “[With Slack] there’s no wasted time or wasted product because you’re able to communicate things right away.”
          </c-text>
          <c-text w="80%">
            <strong>Katina Connaughton<br></strong>
            Head Farmer, SingleThread
          </c-text>
        </c-stack>
        <c-box
          as="img"
          w="100%"
          :src="require('@/assets/images/customer-story.png')"
        />
      </c-grid>
    </c-stack>
  </c-box>
</template>
