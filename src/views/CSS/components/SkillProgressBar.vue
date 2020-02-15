<template lang="pug">
  div  JavaScript
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SkillProgressBar extends Vue {}
</script>

<style lang="scss" scoped>
  div{
    text-align: left;
    position: relative;
    height: 20px;
    line-height: 20px;
    width: 200px;
    &::before,
    &::after{
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: -20px;
      left: 0;
      background: #1f4a59;
      border-radius: 10px;
    }
    &::after{
      background: linear-gradient(90deg, #0fbcf9, #34e7e4);
      width: 0;
      animation-duration: 1.2s;
      animation-name: progress;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards
    }

    @keyframes progress {
      from {width: 0}
      to {width: 80% }
    }
  }
</style>
