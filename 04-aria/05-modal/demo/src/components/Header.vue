<template>
  <header>
    <a href="/" class="logo">A11y swag</a>
    <nav class="desktopMenu">
      <a href="/products">Our products</a>
      <a href="/contact">Contact</a>
      <a href="/shopping-cart" name="shopping-cart">Shopping cart</a>
    </nav>
    <div class="mobileMenu">
      <button @click="isNavOpen = true">
        <img src="/burger.svg" alt="Open navigation" />
      </button>
    </div>
    <nav :class="['drawerMenu', { active: isNavOpen }]">
      <button @click="isNavOpen = false" :tabindex="isNavOpen ? 0 : -1">
        <img src="/close.svg" alt="Close navigation" />
      </button>
      <a href="/products" :tabindex="isNavOpen ? 0 : -1">Our products</a>
      <a href="/contact" :tabindex="isNavOpen ? 0 : -1">Contact</a>
      <a href="/shopping-cart" name="shopping-cart" :tabindex="isNavOpen ? 0 : -1">Shopping cart</a>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false
    };
  }
};
</script>

<style>
.desktopMenu {
  display: none;
}
.drawerMenu {
  position: fixed;
  background: mistyrose;
  z-index: 1;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: left;
  width: 300px;
  padding-top: 60px;
  transform: translateX(300px);
  transition: transform 0.2s ease-in-out;
}

.drawerMenu a {
  display: block;
}

.drawerMenu button {
  position: absolute;
  right: 1rem;
  top: 1rem;
}

.drawerMenu.active {
  transform: translateX(0);
}

@media (min-width: 600px) {
  .mobileMenu {
    display: none;
  }

  .desktopMenu {
    display: block;
  }
}

header button {
  border: 0;
  background: transparent;
  padding: 1em;
  margin-top: 0.5em;
}
</style>
