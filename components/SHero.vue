<template>
  <c-box as="section" pb="12">
    <c-grid
      :max-w="['90%', '90%', '80rem']"
      px="8"
      :pt="[10, 10, 24]"
      mx="auto"
      :template-columns="['1fr', '1fr', '1fr 1.5fr']"
      gap="6"
    >
      <c-stack align="start" spacing="10">
        <c-heading as="h1" line-height="1" :font-size="['3rem', '3rem', '4rem']">
          Welcome to your new HQ
        </c-heading>
        <c-text font-size="lg">
          Teamwork can be hard, messy, complicated… <br> and still the best way to work. That’s why we made Slack — a place where people get work done, together.
        </c-text>
        <s-primary-button size="lg" transform="scale(1.2)">
          TRY FOR FREE
        </s-primary-button>
      </c-stack>
      <c-box
        w="100%"
        as="video"
        aria-describedby="hero-image"
        autoplay=""
        loop=""
        muted=""
        playsinline=""
        poster="https://a.slack-edge.com/5f6f2/marketing/img/homepage/hp-prospect/hero/hero-image@2x.png"
      >
        <source src="https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/desktop/mp4/hero-image.mp4" type="video/mp4"><source src="https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/desktop/webm/hero-image.webm" type="video/webm">
      </c-box>
    </c-grid>
    <c-grid
      :max-w="['90%', '90%', '75rem']"
      px="8"
      :pt="[10, 10, 24]"
      mx="auto"
      :template-columns="['1fr', '1fr', 'repeat(2, 1fr)']"
      gap="20"
    >
      <c-box
        as="video"
        w="full"
        rounded="lg"
        shadow="lg"
        aria-describedby="bring-your-team-together-in-channels-video"
        autoplay=""
        loop=""
        muted=""
        playsinline=""
        poster="https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/channels/image/bring-your-team-together-in-channels.jpg"
      >
        <source src="https://a.slack-edge.com/5f6f2/marketing/img/homepage/hp-prospect/channels/bring-your-team-together-in-channels.mp4" type="video/mp4"><source src="https://a.slack-edge.com/5f6f2/marketing/img/homepage/hp-prospect/channels/bring-your-team-together-in-channels.webm" type="video/webm">
      </c-box>
      <c-stack align="start" spacing="10">
        <c-heading as="h3" line-height="1" font-size="2rem">
          A better way to communicate
        </c-heading>
        <c-text font-size="lg" w="80%">
          Unlike email, conversations in Slack are easy to follow. And they’re more than conversations — you can make calls, share files, and even connect with other apps.
        </c-text>
        <s-outline-button size="lg">
          SEE ALL FEATURES
        </s-outline-button>
      </c-stack>
    </c-grid>
  </c-box>
</template>
