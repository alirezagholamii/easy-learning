<template>
  <div class="header">
    <div 
    :class="[sidebarState === 'show' ? 'header__menu-icon--close-x' : '']"
      @click="toggle"
      class="header__menu-icon"
    >
      <div class="menu-icon__middle"></div>
    </div>

    <div class="logo">
      <nuxt-link to="/">
        <img src="~/assets/images/shuttle.svg" alt="" />
      </nuxt-link>
      <nuxt-link to="/"> <h3>یادگیری کارآمد</h3> </nuxt-link>
    </div>
    <div>
      <ul class="list">
        <li class="list__item">
          <nuxt-link to="/">صفحه نخست</nuxt-link>
        </li>
        <li class="list__item">
          <nuxt-link to="/introduction">تماس با ما</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState ,mapMutations } from "vuex";
export default {
  data() {
    return {
      // sidebarIsOpen: false,
    };
  },
  computed: {
    ...mapState(['sidebarState'])
  },
  methods: {
    ...mapMutations(["toggleSidebar"]),

    toggle() {
      // this.sidebarIsOpen = (this.sidebarState === 'hidden');
      const param = (this.sidebarState === 'hidden') ? "show" : "hidden";
      this.toggleSidebar(param);
    },
  },
};
</script>

<style lang="scss" >
// div {
//   background-color: $green;
// }
</style>