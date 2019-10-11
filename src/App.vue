<template>
  <div id="app">
    <h1>Mobile Card Slider</h1>
    <CardList />
  </div>
</template>

<script>
  import CardList from './components/CardList'

  export default {
    components: {
      CardList
    }
  };
</script>

<style lang="scss">
  * {
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 2rem;
    padding-left: 40px;
  }

  body {
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", Tahoma;
    background-color: #333;
    color: #fff;
  }

  #app {
    position: relative;
    padding: 20px 0;
    overflow: hidden;
  }
</style>
