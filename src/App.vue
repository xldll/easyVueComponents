<template>
  <div id="easy-components-wrapper">
    <h3>this is easy vue components!</h3>
    <div class="components">
      <easy-slider></easy-slider>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import EasySlider from './components/easy-slider/index.vue';
export default defineComponent({
    setup() {
        return {};
    },
    components: { EasySlider }
})
</script>
<style lang="scss" scoped>
#easy-components-wrapper{
  position: relative;
  margin:0 auto;
  background-color: #fff;
  text-align: center;
}
</style>