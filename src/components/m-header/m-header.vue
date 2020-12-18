<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Chicken Music</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  //@import ~是stylus-loader的东西，~common表示相对common,和webpack相关
  @import '~common/stylus/variable';
  @import '~common/stylus/mixin';

  .m-header
    position relative
    height 44px
    text-align center
    color $color-theme
    font-size 0
    .icon
      bg-image('logo')
      width 30px
      height 32px
      display inline-block
      vertical-align top
      background-size 30px 32px
      margin-top 6px
      margin-right 9px
    .text
      display inline-block
      line-height 44px
      font-size $font-size-large
      // vertical-align top

</style>