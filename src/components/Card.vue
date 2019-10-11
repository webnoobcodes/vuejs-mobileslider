<template>
  <div class="card" :class="{'open': open && active}"
        @click="open = !open">
    <div class="img" :style="backgroundImage"></div>
    <div class="title">{{ item.title }}</div>
    <div class="description">{{ item.description }}</div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        open: false
      }
    },
    props: [
      'item',
      'active'
    ],
    computed: {
      backgroundImage() {
        return { 'background-image': 'url('+ require('../assets'+ this.item.img) +')' };
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    position: relative;
    width: 100%;
    height: 600px;
    background-color: #efefef;
    overflow: hidden;
    transition: all .5s ease;

    &.open {
      height: 800px;
      transform: translateY(-50px);
    }

    .img {
      width: 100%;
      height: 600px;
      background-position: center;
      background-size: cover; 
    }

    .title {
      position: absolute;
      top: 50px;
      padding: 5px 20px;
      width: calc(100% - 20px);
      height: 40px;
      font-size: 1.6rem;
      color: #fff;
      background-color: rgba($color: #000000, $alpha: .5);
    }

    .description {
      padding: 20px;
      color: #333;
    }
  }
</style>