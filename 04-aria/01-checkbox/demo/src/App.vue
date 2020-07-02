<template>
  <div id="app">
    <h1>Ticking all the boxes</h1>
    <div class="options">
      <CustomCheckbox></CustomCheckbox>
      <NativeCheckbox></NativeCheckbox>
    </div>
  </div>
</template>

<script>
import CustomCheckbox from './components/CustomCheckbox.vue';
import NativeCheckbox from './components/NativeCheckbox.vue';

export default {
  name: 'App',
  components: {
    CustomCheckbox,
    NativeCheckbox
  }
};
</script>

<style>
.options {
  display: flex;
}
.options section {
  flex: 1 1 50%;
}
</style>
