<template>
  <section>
    <h2>Custom checkbox</h2>
    <div
      role="checkbox"
      :class="['checkbox', { checked: isChecked }]"
      :aria-checked="isChecked"
      tabindex="0"
      @click="isChecked = !isChecked"
      @keydown.space="isChecked = !isChecked"
    >
      I agree with everything.
    </div>
  </section>
</template>

<script>
export default {
  name: 'CustomCheckbox',
  data() {
    return {
      isChecked: false
    };
  }./
};
</script>

<style>
.checkbox {
  position: relative;
  padding-left: 2rem;
  line-height: calc(1.2rem + 4px);
}
.checkbox:before {
  content: '';
  color: crimson;
  font-weight: bold;
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  left: 0;
  border: 2px solid black;
  text-align: center;
}

.checkbox.checked:before {
  content: '✔';
}
</style>
