<template>
  <button :class="colorful && 'colorful'">
    <div class="icon-container">
      <font-awesome-icon :icon="[prefix, icon]" />
    </div>
    <div class="text-container">{{ text }}</div>
  </button>
</template>
<script>
export default {
  props: ["icon", "text", "prefix", "colorful"],
};
</script>
<style lang="scss" scoped>
button {
  border: none;
  outline: none;
  border-radius: 12px;
  height: 47px;
  width: 100%;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 20px 20px -16px #f1f3f5;
  border: 1px solid #f1f3f5;
  color: #f5b144;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  position: relative;
  margin-bottom: 25px;
  transition: .2s;
  :active{
      background: rgba($color: #000000, $alpha: 0.05);
  }
  .icon-container {
    height: 47px;
    width: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-container {
    width: 100%;
    height: 47px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.colorful {
  background: #f5b144 !important;
  box-shadow: 0px 20px 20px -16px rgba(245, 177, 68, 0.4) !important;
  color: #ffffff !important;
  border: none !important;
}
</style>
