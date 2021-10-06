<template>
  <div class="container">
    <h1 class="title">Material Order 2</h1>
    <div class="form-container">
      <form class="form">
        <div class="section color-type border">
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
        </div>
        <div class="section width-height border">
          <div class="form-control">
            <label>Width</label>
            <input type="text" />
          </div>
          <div class="form-control">
            <label>Height</label>
            <input type="text" />
          </div>
          <div class="form-control">
            <label>Total Number of Pcs To Be Cut</label>
            <input type="text" />
          </div>
          <div class="form-control">
            <input type="submit" value="Add Another Pcs" class="btn" />
          </div>
        </div>
        <div class="section border">
          <div class="display-order">
              <div class="display-order-title">
                  <h3 class="display-title">Display Order</h3>
              </div>
              <div class="display-order-orders">
                  <p>This is order one</p>
                  <p>This is order two</p>
                  <p>This is order three</p>
                  <p>This is order fore</p>
                  <p>This is order five</p>
              </div>
          </div>
        </div>
        <div class="section border">
          <div class="show-cost">
            <h1 class="display-title">Show Cost</h1>
            <input type="submit" value="Add To Basket" class="btn" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaterialOrder2",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 70vh;
}

.title {
  padding-top: 1rem;
  text-align: center;
  color: #30c016;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 800;
}

.display-title {
  
  color: #30c016;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 800;
}

.section {
  margin: 2rem;
  padding: 2rem;
}

.color-type {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.color-type > .form-control {
  margin: 1.40rem 0;
}

.width-height {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.form-control {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-control > label {
  color: #30c016;
  font-weight: 700;
  font-size: 1.25rem;
}

.form-control > input {
  font-family: inherit;
  font-size: 1rem;
  margin: 0.35rem;
  padding: 0.3em;
  border: 1px solid #30c016;
  border-radius: 0.3em;
  outline: none;
}

.form-control:hover > input,
.form-control:focus > input {
  box-shadow: 0 0 5px #1ba702;
}

.form-control > select {
  font-family: inherit;
  font-size: 1rem;
  margin: 0.35rem;
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

.border {
  background: linear-gradient(to right, #30c016 5px, transparent 5px) 0 0,
    linear-gradient(to right, #30c016 5px, transparent 5px) 0 100%,
    linear-gradient(to left, #30c016 5px, transparent 5px) 100% 0,
    linear-gradient(to left, #30c016 5px, transparent 5px) 100% 100%,
    linear-gradient(to bottom, #30c016 5px, transparent 5px) 0 0,
    linear-gradient(to bottom, #30c016 5px, transparent 5px) 100% 0,
    linear-gradient(to top, #30c016 5px, transparent 5px) 0 100%,
    linear-gradient(to top, #30c016 5px, transparent 5px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 40px 40px;
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
  justify-items: end;
}

.display-order {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.show-cost {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
</style>