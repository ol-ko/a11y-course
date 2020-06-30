<template>
  <header>
    <a href="https://ally-swag.com" class="logo"><img src="/logo_a11y_swag.svg"/></a>
    <nav class="desktopMenu">
      <a href="/products">Our products</a>
      <a href="/contact">Contact</a>
      <a href="/shopping-cart" name="shopping-cart">
        <img src="/shopping_cart.svg" />
        Shopping cart
      </a>
    </nav>
    <div class="mobileMenu">
      <button @click="isNavOpen = true">
        <img src="/burger.svg" alt="Open navigation" />
      </button>
    </div>
    <nav :class="['drawerMenu', { active: isNavOpen }]">
      <button @click="isNavOpen = false">
        <img src="/close.svg" alt="Close navigation" />
      </button>
      <a href="/products">Our products</a>
      <a href="/contact">Contact</a>
      <a href="/shopping-cart" name="shopping-cart">Shopping cart</a>
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
    display: flex;
  }
}

header button {
  border: 0;
  background: transparent;
  padding: 1em;
  margin-top: 0.5em;
}

.logo img {
  width: 200px;
}

.desktopMenu img {
  width: 24px;
  margin-right: 0.5rem;
}

.desktopMenu a {
  display: flex;
  margin-left: 2rem;
}
</style>
