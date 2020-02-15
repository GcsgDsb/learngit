<template lang="pug">
  div.hamburger-menu
    div.bar.top
    div.bar.middle
    div.bar.bottom
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class HamburgetButton extends Vue {}
</script>

<style lang="scss" scoped>
.hamburger-menu{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
  .bar{
    height: 5px;
    background: #000;
    border-radius: 5px;
    margin: 3px 0;
    transform-origin: left;
    transition: all 0.5s;
  }
  &:hover .top{
    transform: rotate(45deg)
  }
  &:hover .bottom{
    transform: rotate(-45deg)
  }
  &:hover .middle{
    opacity: 0;
  }
}
</style>
