<template>
  <div id="app">
    <div>
      <Header></Header>
      <main>
        <Product
          :isShoppingCartModalOpen="isShoppingCartModalOpen"
          @order="isShoppingCartModalOpen = true"
        ></Product>
      </main>
      <Footer></Footer>
    </div>
    <ShoppingCartModal
      v-if="isShoppingCartModalOpen"
      @close="isShoppingCartModalOpen = false"
    ></ShoppingCartModal>
  </div>
</template>

<script>
import Product from './components/Product.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import OrderForm from './components/OrderForm.vue';
import ShoppingCartModal from './components/ShoppingCartModal.vue';

export default {
  name: 'App',
  components: {
    Product,
    Header,
    Footer,
    OrderForm,
    ShoppingCartModal
  },
  data() {
    return {
      isShoppingCartModalOpen: false
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: Arial;
  font-size: 18px;
  background: lavenderblush;
}

body {
  padding: 0;
  margin: 0;
}

main,
header,
footer {
  max-width: 800px;
  width: 100%;
  position: relative;
  margin: 0 auto;
}

.logo {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-weight: bold;
  font-size: 3rem;
  color: salmon;
  text-decoration: none;
}

header {
  background: white;
  padding: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
}

footer {
  background: mistyrose;
  padding: 2rem;
  display: flex;
}

nav {
  flex: 0 0 auto;
  text-align: right;
}

nav a {
  color: black;
  font-weight: bold;
  margin-left: 1rem;
  line-height: 3.8;
}

aside {
  padding: 1rem;
  border-radius: 0.5rem;
  background: mistyrose;
}

input,
select {
  font-size: 1rem;
  box-sizing: border-box;
}

input:not([type='radio']):not([type='checkbox']),
select {
  width: 100%;
  padding: 0.5rem;
}

form div {
  margin: 1rem 0;
}

label {
  margin: 0 0 8px 0;
}

label {
  display: inline-block;
}

.cta {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  box-sizing: border-box;
  border: none;
  background: crimson;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.cta.secondary {
  background: white;
  color: crimson;
}

.center {
  text-align: center;
}

img {
  max-width: 100%;
}

.description {
  display: flex;
}

main {
  background: white;
  padding: 1rem;
}

section {
  flex: 0 0 60%;
  padding-right: 1rem;
}

aside {
  flex: 0 0 40%;
}

.newsletter {
  flex: 1 1 40%;
}

footer ul {
  list-style-type: none;
  margin: 0;
  padding: 0 1rem 0 0;
  flex: 1 1 60%;
}
</style>
