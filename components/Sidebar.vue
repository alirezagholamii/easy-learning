<template>
  <aside class="sidebar">
    <div
      class="sidebar-inner"
      :class="[sidebarState === 'show' ? 'show-sidebar' : '']"
    >
      <div class="list">
        <ul class="menu-root" @click="sidebarClicked($event)">
          <li>
            <nuxt-link class="sidebar-link" to="/">صفحه نخست</nuxt-link>
          </li>
          <li>
            <nuxt-link class="sidebar-link" to="/introduction">معرفی</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="sidebar-link"
              :class="{ current: $route.fullPath.startsWith('/principles') }"
              to="/principles"
              >اصل‌ها</nuxt-link
            >
            <ul
              v-if="$route.fullPath.startsWith('/principles')"
              class="sub-menu"
            >
              <li>
                <nuxt-link to="/principles/learning-vs-winning-the-system"
                  >یادگیری در برابر برنده شدن</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/principles/what-is-success"
                  >موفقیت چیست؟</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/principles/the-obstacle">موانع</nuxt-link>
              </li>

              <li>
                <nuxt-link to="/principles/the-dip">فرو رفتن</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/principles/compound-learning"
                  >یادگیری مرکب</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/principles/failures-dont-count"
                  >شکست‌ها حساب نیستند</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/principles/choice-vs-chore"
                  >اختیار در برابر اجبار</nuxt-link
                >
              </li>
            </ul>
          </li>
          <li>
            <nuxt-link
              :class="{ current: $route.fullPath.startsWith('/lies') }"
              class="sidebar-link"
              to="/lies"
              >دروغ‌ها</nuxt-link
            >
            <ul v-if="$route.fullPath.startsWith('/lies')" class="sub-menu">
              <li>
                <nuxt-link to="/lies/follow-your-passion"
                  >برو دنبال علایقت</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/lies/you-can-avoid-risk">موفقیت بدون ریسک</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/lies/trust-this-one-person">به یک نفر اعتماد کن</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/lies/10000-hours-rule">قانون ده هزار ساعت</nuxt-link
                >
              </li>
            </ul>
          </li>
          <li>
            <nuxt-link class="sidebar-link" to="/pillars">ستون‌ها</nuxt-link>
          </li>
          <li>
            <nuxt-link class="sidebar-link" to="/science">دانش</nuxt-link>
          </li>
          <li>
            <nuxt-link class="sidebar-link" to="/techniques"
              >تکنیک‌ها</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  // beforeCreate (){
  // console.log(this.$smoothScroll);
  // }

  computed: {
    ...mapState(["sidebarState"]),
  },
  methods: {
    ...mapMutations(["toggleSidebar"]),
    sidebarClicked(e) {
      if (this.sidebarState === "show" && e.target.tagName === "A") {
        this.toggleSidebar("hidden");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.show-sidebar {
  // display: block !important;
  // z-index: 40;
  width: 260px !important;
  // transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
}
</style>