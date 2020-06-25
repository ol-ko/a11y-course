<template>
  <div id="app">
    <h1>Select a team of homies!</h1>
    <div class="options">
      <CustomRadioButtons></CustomRadioButtons>
      <NativeRadioButtons></NativeRadioButtons>
    </div>
  </div>
</template>

<script>
import CustomRadioButtons from './components/CustomRadioButtons.vue';
import NativeRadioButtons from './components/NativeRadioButtons.vue';

export default {
  name: 'App',
  components: {
    CustomRadioButtons,
    NativeRadioButtons
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
