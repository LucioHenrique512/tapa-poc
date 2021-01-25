<template>
  <div class="navigation-container">
    <div class="container">
      <button>
        <font-awesome-icon icon="chevron-left" />
      </button>
      <p v-show="title">{{ title }}</p>

      <button v-show="onCloseButtonPress">
        <font-awesome-icon icon="times" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String },
    onBackButtonPress: { type: Function },
    onCloseButtonPress: { type: Function },
  },
};
</script>
<style lang="scss" scoped>
.navigation-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 10vh;
  //background: red;
  button {
    border: none;
    background: none;
    color: #ffff;
    font-size: 16px;
    outline: none;
    :active {
      color: rgba($color: #000000, $alpha: 0.3);
    }
  }
}
</style>