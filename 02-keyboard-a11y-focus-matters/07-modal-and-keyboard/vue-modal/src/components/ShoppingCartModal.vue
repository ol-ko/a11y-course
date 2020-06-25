<template>
  <div class="modal">
    <div class="modalBackground"></div>
    <div class="modalContainer">
      <button class="close" @click="$emit('close')">
        <img src="/close.svg" alt="Close navigation" />
        Close
      </button>
      <h1>Your shopping cart</h1>
      <div class="item">
        <div class="itemDetails">
          <img src="/product.jpg" />
          <div>
            <p><strong>Cute cat sleep mask</strong></p>
            <p>Color: Black</p>
            <a href="/remove">Remove</a>
          </div>
          <div class="price">
            <p>1 x CHF 99.95</p>
          </div>
        </div>
      </div>
      <div class="total">
        Total: CHF 99.95
      </div>
      <div class="buttonRow">
        <button class="cta secondary" @click="$emit('close')">Continue shopping</button>
        <button class="cta" @click="$emit('close')">Proceed to checkout</button>
      </div>
    </div>
  </div>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modalBackground {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.modalContainer {
  position: relative;
  background: white;
  padding: 2rem;
  flex: 1 0 auto;
  margin: 0 25%;
}

.item img {
  max-width: 100px;
  flex: 0 0 100px;
}
.close {
  float: right;
  clear: right;
  border: none;
  background: none;
  font-size: 1rem;
  display: flex;
  line-height: 24px;
}
.close img {
  margin-right: 0.3rem;
}
.itemDetails {
  display: flex;
  align-items: center;
  margin: 0 -1rem;
}
.itemDetails > * {
  flex: 1 1 auto;
  padding: 1rem;
}
.price {
  text-align: right;
  align-self: flex-end;
}
.total {
  text-align: right;
  border-top: 4px solid salmon;
  padding: 1rem 0;
}
.buttonRow {
  display: flex;
}
</style>
