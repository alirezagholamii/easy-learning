<template>
  <div class="page">
    <h1 class="main-header">یادگیری کارآمد؛ مهارت یادگرفتن را بیاموزیم!</h1>
    <h3 class="second-header">آنچه شما در این سایت یاد خواهید گرفت:</h3>
    <div>
      <ul class="skills">
        <li class="skill">
          <h4>
            <span class="tick"
              ><img src="~/assets/images/tick-sign.svg" alt=""
            /></span>
            روش فراگیری کامل مطالب در کمترین زمان
          </h4>
        </li>
        <li class="skill">
          <h4>
            <span class="tick"
              ><img src="~/assets/images/tick-sign.svg" alt=""
            /></span>
            یادگیری سریعتر، بهتر و موثر تر با استفاده از آخرین استراتژی های علمی
          </h4>
        </li>
        <li class="skill">
          <h4>
            <span class="tick"
              ><img src="~/assets/images/tick-sign.svg" alt=""
            /></span>
            فراگیری مهارت هایی که قهرمانان جهانی حافظه از آنها استفاده می کنند
          </h4>
        </li>
        <li class="skill">
          <h4>
            <span class="tick"
              ><img src="~/assets/images/tick-sign.svg" alt=""
            /></span>
            ایجاد یک سیستم و چهارچوب شخصی برای هر یادگیری
          </h4>
        </li>
        <li class="skill">
          <h4>
            <span class="tick"
              ><img src="~/assets/images/tick-sign.svg" alt=""
            /></span>
            ایجاد عادت های درست برای تبدیل شدن به یک یادگیرنده و شتاب دادن به
            فرآیند یادگیری
          </h4>
        </li>
        <li class="skill">
          <h4>
            <span class="tick"
              ><img src="~/assets/images/tick-sign.svg" alt=""
            /></span>
            یادگیری استراتژی‌ها و تکنیک‌ها از 25 استاد در سطح جهانی
          </h4>
        </li>
        <li class="skill">
          <h4>
            <span class="tick"
              ><img src="~/assets/images/tick-sign.svg" alt=""
            /></span>
            یادگیری انتخاب درست موضوع مطالعه برای موفقیت، بدون اتلاف وقت
          </h4>
        </li>
        <li class="skill">
          <h4>
            <span class="tick"
              ><img src="~/assets/images/tick-sign.svg" alt=""
            /></span>
            یادگیری اینکه چگونه نسبت به یک فرد معمولی بهتر بیاموزید و در حرفه و
            زندگی خود موفق باشید
          </h4>
        </li>
      </ul>
    </div>
    <guidelink nextLink="/introduction" nextLinkName="شروع"  />

  </div>
</template>

<script>
import Guidelink from '~/components/Guidelink.vue';
export default {
  components: { Guidelink },};
</script>

<style lang="scss" scoped>
.skills {
  display: flex;
  flex-direction: column;
  .skill {
    margin-bottom: 0.4rem;
    display: flex;
    list-style: none;
    .tick {
      position: relative;
      top: 5px;
      img {
        height: auto;
        width: 22px;
      }
    }
  }
}
</style>
