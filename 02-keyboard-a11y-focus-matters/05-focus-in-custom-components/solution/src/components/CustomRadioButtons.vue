<template>
  <section>
    <h2>Custom radio buttons</h2>
    <ul class="customRadioButtons">
      <li
        v-for="(item, index) in items"
        :class="['radio', { checked: item.checked }]"
        :tabindex="item.checked ? 0 : -1"
        @click="select(index)"
        :ref="`radioGroupItem${index}`"
        @keyup.up="selectPrevious()"
        @keyup.left="selectPrevious()"
        @keyup.down="selectNext()"
        @keyup.right="selectNext()"
      >
        {{ item.label }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'CustomRadioButtons',
  data() {
    return {
      items: [
        { label: 'Rubber Ducks', value: 'rubberDucks', checked: true },
        { label: 'Gummy Bears', value: 'gummyBears' },
        { label: 'Cloud Pigs', value: 'cloudPigs' },
        { label: 'Flying Penguins', value: 'flyingPenguins' },
        { label: 'Golden Goats', value: 'goldenGoats' },
        { label: 'Dandy Dingoes', value: 'dandyDingoes' }
      ],
      focusedIdx: 0
    };
  },
  methods: {
    select(index) {
      this.focusedIdx = index;
      this.items = this.items.map((item, index) => ({
        ...item,
        checked: index === this.focusedIdx
      }));
      this.$nextTick(() => {
        this.$refs[`radioGroupItem${this.focusedIdx}`][0].focus();
      });
    },
    selectPrevious() {
      if (this.focusedIdx === 0) {
        this.select(this.items.length - 1);
      }
      this.select(this.focusedIdx - 1);
    },
    selectNext() {
      if (this.focusedIdx === this.items.length - 1) {
        this.select(0);
      } else {
        this.select(this.focusedIdx + 1);
      }
    }
  }
};
</script>

<style>
.customRadioButtons {
  list-style-type: none;
}
.radio {
  line-height: 2;
  position: relative;
  padding-left: 2em;
  cursor: default;
  display: block;
  float: left;
  clear: left;
}
.radio:before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  width: calc(1em + 4px);
  height: calc(1em + 4px);
  border: 2px solid black;
  border-radius: 50%;
  box-shadow: 2px 2px 0px 1px rgba(231, 166, 26, 1);
}

.radio.checked:after {
  content: '';
  display: block;
  position: absolute;
  left: 4px;
  top: 4px;
  width: 1em;
  height: 1em;
  background: orangered;
  border-radius: 50%;
}
</style>
