<template>
  <main>
    <img src="/product.jpg" />
    <div class="description">
      <section>
        <h1><a name="product-description"></a>Cute cat sleep mask</h1>
        <p>CHF 99.95</p>
        <p>
          Debug your websites for accessibility issues like never before with this fluffy sleep
          mask. Experience the web the way screen reader users do!
        </p>
        <p>
          A <a href="https://en.wikipedia.org/wiki/Screen_reader">screen reader</a> is a form of
          assistive technology (AT) that renders text and image content as speech or braille output.
          Screen readers are essential to people who are blind, and are useful to people who are
          visually impaired, illiterate, or have a learning disability.
        </p>
        <p>
          Screen readers are software applications that attempt to convey what people with normal
          eyesight see on a display to their users via non-visual means, like text-to-speech, sound
          icons, or a Braille device. They do this by applying a wide variety of techniques that
          include, for example, interacting with dedicated accessibility APIs, using various
          operating system features (like inter-process communication and querying user interface
          properties), and employing hooking techniques.
        </p>
      </section>
      <OrderForm @submitForm="$emit('order')"></OrderForm>
    </div>
  </main>
</template>

<script>
import OrderForm from './OrderForm.vue';

export default {
  name: 'Product',
  components: {
    OrderForm
  },
  props: {
    isShoppingCartModalOpen: Boolean
  }
};
</script>
