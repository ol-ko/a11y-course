<template>
  <section>
    <h2>Native radio buttons</h2>
    <div v-for="item in items">
      <label>
        <input type="radio" name="team" :value="item.value" :checked="item.checked" />
        {{ item.label }}
      </label>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NativeRadioButtons',
  data() {
    return {
      items: [
        { label: 'Rubber Ducks', value: 'rubberDucks', checked: true },
        { label: 'Gummy Bears', value: 'gummyBears' },
        { label: 'Cloud Pigs', value: 'cloudPigs' },
        { label: 'Flying Penguins', value: 'flyingPenguins' },
        { label: 'Golden Goats', value: 'goldenGoats' },
        { label: 'Dandy Dingoes', value: 'dandyDingoes' }
      ]
    };
  }
};
</script>
