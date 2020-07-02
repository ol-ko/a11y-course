<template>
  <aside aria-labelledby="orderForm">
    <h2 id="orderForm"><a name="order-form"></a>Order</h2>
    <form action="">
      <div>
        <label for="size">Size</label>
        <select name="size" id="size">
          <option value="xs">S</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">L</option>
        </select>
      </div>
      <div>
        <label for="color">Color</label>
        <select name="color" id="color">
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="pink">Pink</option>
        </select>
      </div>
      <div>
        <label for="quantity">Quantity</label>
        <input type="number" id="quantity" name="quantity" value="1" />
      </div>
      <button type="button" class="cta" @click="$emit('submitForm')">Place an order</button>
    </form>
  </aside>
</template>
