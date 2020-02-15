<template lang='pug'>
  nav
    ul
      each val in ['Home', 'About', 'Contact']
        li
          a(href='#')= val
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
@Component
export default class NavigationListItem extends Vue {}

</script>

<style lang="scss" scoped>
nav ul{
  list-style: none;
  overflow: hidden;
  li{
    float: left;
    a{
      position: relative;
      display: block;
      color: #222;
      text-align: center;
      padding: 8px 12px;
      text-decoration: none;

      &::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        bottom:0;
        left:0;
        background-color: #f6c126;
        border-radius: 5px;
        box-shadow: 2px 1px 1px #222;
        z-index: -1;
        transform: scale(0);
        transition: transform 0.5s ease-in-out;
      }
      &:hover::before{
        transform: scale(1)
      }
      &:focus::before{
        transform: scale(1)
      }
    }
  }
}
</style>
