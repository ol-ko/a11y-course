<template>
  <div id="app">
    <p class="siteTitle">
      Lorem ipsum
    </p>
    <router-view ref="routerView" />
    <footer>
      <h2>Check out all the chapters:</h2>
      <router-link to="/">What is Lorem Ipsum?</router-link>
      <router-link to="/why">Why do we use it?</router-link>
      <router-link to="/where">Where does it come from?</router-link>
      <router-link to="/get">Where can I get some?</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      this.$nextTick(this.setFocus);
    }
  },
  methods: {
    setFocus() {
      const focusTarget =
        this.$refs.routerView.$refs.componentFocusTarget !== undefined
          ? this.$refs.routerView.$refs.componentFocusTarget
          : this.$refs.routerView.$el;

      // allows us to set focus programmatically regardless whether the element is naturally focusable or not
      focusTarget.setAttribute('tabindex', '-1');
      focusTarget.focus();
      //focusTarget.removeAttribute('tabindex');
    }
  }
};
</script>

<style>
html {
  font-size: 18px;
  line-height: 2;
}
body {
  padding: 0 2rem;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 800px;
  position: relative;
  margin: 0 auto;
}

.siteTitle {
  color: coral;
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
}

footer {
  background: blanchedalmond;
  padding: 2rem;
  margin: 2rem 0;
}

footer a {
  display: block;
}

a {
  font-weight: bold;
}
</style>
