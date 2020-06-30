<template>
  <aside>
    <h3>See also</h3>
    <div class="recommendations">
      <a href="/product2"><img src="/product2.jpg" />LED Magnifying glass</a>
      <a href="/product3"><img src="/product3.jpg" />Switch input device</a>
      <a href="/product4"><img src="/product4.jpg" />"Accessibility For Everyone" book</a>
    </div>
  </aside>
</template>

<style>
.recommendations {
  display: flex;
  margin: 0 -1rem;
}

.recommendations a {
  flex: 1 0 33.33%;
  padding: 1rem;
}

.recommendations a img {
  margin-bottom: 1rem;
}
</style>
