<template>
  <div class="container">
    <h1 class="title">Material Order</h1>
    <div class="form-container">
      <form class="form">
        <div class="form-control">
          <label>Colour/Type</label>
          <select name="color">
            <option value="">Please Select</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="black">black</option>
            <option value="yellow">yellow</option>
            <option value="pink">pink</option>
          </select>
        </div>
        <div class="form-control">
          <label>Thickness</label>
          <select name="thickness">
            <option value="">Please Select</option>
            <option value="6mm">6mm</option>
            <option value="9mm">9mm</option>
            <option value="12mm">12mm</option>
            <option value="18mm">18mm</option>
            <option value="24mm">24mm</option>
          </select>
        </div>
        <div class="width-Height">
          <div class="form-control">
            <label>Width</label>
            <input type="text" />
          </div>
          <div class="form-control">
            <label>Height</label>
            <input type="text" />
          </div>
        </div>

        <div class="form-control">
          <label>Total Number of Pcs To Be Cut</label>
          <input type="text" />
        </div>
        <div class="form-control">
          <input type="submit" value="Add to Basket" class="btn" />
        </div>
        <div class="customer-order-info">
          <div class="display-sizes-orderd">
            <h1>display-sizes-orderd</h1>
          </div>
          <div class="show-cost">
            <h1>show cost</h1>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaterialOrder",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

.form-container {
  margin: 1rem 2rem;
}

.form-control {
  display: flex;
  flex-direction: column;

  padding: 2rem;
}

.width-height {
  display: flex;
  flex-direction: column;
}

.form-control > label,
.form-control > .size {
  color: #30c016;
  font-weight: 700;
  font-size: 1.25rem;
}

.form-control > select {
  font-family: inherit;
  font-size: 1rem;
  padding: 0.3em;
  border: 1px solid #30c016;
  border-radius: 0.3em;
  outline: none;
}

.form-control:hover > select,
.form-control:focus > select {
  border: 1px solid #1ba702;
  box-shadow: 0 0 5px #1ba702;
}

.form-control > input {
  font-family: inherit;
  font-size: 1rem;
  padding: 0.3em;
  border: 1px solid #30c016;
  border-radius: 0.3em;
  outline: none;
}

.btn {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 800;
  padding: 0.3em;
  border: 1px solid #30c016;
  border-radius: 0.3em;
  outline: none;
  cursor: pointer;
  background: #30c016;
  color: white;
}

.btn:hover {
  border: 1px solid #1ba702;
  box-shadow: 0 0 5px #1ba702;
}

.form-control:hover > input,
.form-control:focus > input {
  box-shadow: 0 0 5px #1ba702;
}

.border {
 background: linear-gradient(to right, #30c016 6px, transparent 6px) 0 0,
    linear-gradient(to right, #30c016 6px, transparent 6px) 0 100%,
    linear-gradient(to left, #30c016 6px, transparent 6px) 100% 0,
    linear-gradient(to left, #30c016 6px, transparent 6px) 100% 100%,
    linear-gradient(to bottom, #30c016 6px, transparent 6px) 0 0,
    linear-gradient(to bottom, #30c016 6px, transparent 6px) 100% 0,
    linear-gradient(to top, #30c016 6px, transparent 6px) 0 100%,
    linear-gradient(to top, #30c016 6px, transparent 6px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 60px 60px;
}

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
}
  

.title {
  padding-top: 1rem;
  text-align: center;
  color: #30c016;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 800;
}
/* 
.customer-order-info {
  display: flex;
  justify-content: space-between;
  margin: 1rem 2rem;
} */

.display-sizes-orderd {
    padding: 0 4rem;
    border: 1px solid #30c016;
}

.show-cost {
    padding: 0 4rem;
    border: 1px solid #30c016;
}
</style>