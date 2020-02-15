<template lang="pug">
  div.main
    hamburger-button
    navigation-list-item
    skill-progress-bar
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavigationListItem from './components/NavigationListItem.vue'
import HamburgerButton from './components/HamburgerButton.vue'
import SkillProgressBar from './components/SkillProgressBar.vue'
@Component({
  components: {
    NavigationListItem,
    HamburgerButton,
    SkillProgressBar
  }
})
export default class CSS extends Vue {}
</script>
<style lang="scss" scoped>
.main{
  width: 100%;
  height: 100%;
  padding: 10px;
}
</style>
