<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-span">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-span">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-span">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-span">搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable";
  .tab
    display flex
    height 44px
    line-height 44px
    font-size $font-size-medium //14px
    .tab-item
      flex 1
      text-align center
      .tab-span
        padding-bottom: 5px
        color $color-text-l
      &.router-link-active
        .tab-span
          color $color-theme
          border-bottom 2px solid $color-theme

    // .tab-item:hover
    //     .tab-span
    //       color $color-theme // #ffcd32
    //       border-bottom 2px solid $color-theme

</style>>