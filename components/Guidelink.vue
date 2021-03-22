<template>
  <div class="guide-links">
    <span v-if="backLink">
      → <nuxt-link :to="backLink">{{ backLinkName }}</nuxt-link></span
    >
    <span v-else></span>
    <span v-if="nextLink">
      <nuxt-link :to="nextLink">{{ nextLinkName }}</nuxt-link> ←
    </span>
    <span v-else></span>
  </div>
</template>

<script>
export default {
  props: ["nextLink", "nextLinkName", "backLink", "backLinkName"],
};
</script>

<style lang="scss" scoped>
.guide-links {
  margin-top: 2rem;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  a {
    color: #42b983;
    font-weight: 600;
    text-decoration: none;
  }
}
</style>