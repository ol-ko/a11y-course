<template>
  <div
    class="modal"
    @keydown.tab="onFocusChange"
    ref="modal"
    role="dialog"
    aria-labelledby="modal-label"
  >
    <div class="modalBackground"></div>
    <div class="modalContainer">
      <h1 id="modal-label" tabindex="0">Your shopping cart</h1>
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
      <button class="close" @click="$emit('close')">
        <img src="/close.svg" alt="Close navigation" />
        Close
      </button>
    </div>
  </div>
</template>

<script>
const focusableElementsQueryString =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

export default {
  data() {
    return {
      focusedElementBeforeModal: undefined,
      firstTabStop: undefined,
      lastTabStop: undefined
    };
  },
  mounted() {
    this.focusedElementBeforeModal = document.activeElement;

    const focusableElements = Array.prototype.slice.call(
      this.$refs.modal.querySelectorAll(focusableElementsQueryString)
    );

    this.firstTabStop = focusableElements[0];
    this.lastTabStop = focusableElements[focusableElements.length - 1];
    this.firstTabStop.focus();
  },
  destroyed() {
    this.focusedElementBeforeModal.focus();
  },
  methods: {
    onFocusChange(e) {
      console.log(document.activeElement);
      if (e.shiftKey) {
        if (document.activeElement === this.firstTabStop) {
          e.preventDefault();
          this.lastTabStop.focus();
        }
      } else {
        if (document.activeElement === this.lastTabStop) {
          e.preventDefault();
          this.firstTabStop.focus();
        }
      }
    }
  }
};
</script>

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
  position: absolute;
  top: 1rem;
  right: 1rem;
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
