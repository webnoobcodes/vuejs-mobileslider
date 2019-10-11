<template>
  <div class="card-list">
    <ul :style="listLength">
      <li v-for="(card, index) in cards"
          :key="index" :style="listPosition">
        <Card :item="card" 
              :active="index == currentIndex" />
      </li>
    </ul>
  </div>
</template>

<script>
  import Card from './Card'

  export default {
    data: () => {
      return {
        touch: {
          startX: 0,
          endX: 0
        }
      }
    },
    computed: {
      cards() {
        return this.$store.getters.cards;
      },
      currentIndex() {
        return this.$store.getters.currentIndex;
      },
      listLength() {
        return { width: this.cards.length * 100 + '%' };
      },
      listPosition() {
        return { transform: 'translateX(-'+ this.currentIndex * 100 +'%)' };
      }
    },
    components: {
      Card
    },
    methods: {
      touchstart(event) {
        this.touch.startX = event.touches[0].clientX;
        this.touch.endX = 0;
      },
      touchmove(event) {
        this.touch.endX = event.touches[0].clientX;
      },
      touchend() {
        if(!this.touch.endX || Math.abs(this.touch.endX - this.touch.startX) < 20)
          return;
          
        if(this.touch.endX < this.touch.startX)
          this.$store.commit('nextIndex');
        else
          this.$store.commit('prevIndex');
      }
    },
    mounted() {
      this.$el.addEventListener('touchstart', event => this.touchstart(event));
      this.$el.addEventListener('touchmove', event => this.touchmove(event));
      this.$el.addEventListener('touchend', () => this.touchend());
    }
  }
</script>

<style lang="scss" scoped>
  .card-list {
    margin: 0 30px;

    ul {
      display: flex;
      list-style: none;
    }
    li {
      padding: 10px;
      transition: all .5s ease;
    }
  }
</style>