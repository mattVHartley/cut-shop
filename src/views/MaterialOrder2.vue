<template>
  <div class="container">
    <h1 class="title">Material Order 2 {{title}}</h1>
    <div class="form-container">
      <form @submit.prevent="handleSubmit" class="form">
        <div class="section color-type border">
          <div class="form-control">
            <label>Colour/Type</label>
            <select v-model="order.colorType">
              <option
                v-for="color in colorTypesOption"
                v-bind:value="color.id"
                v-bind:key="color.id"
              >
                {{ color.text }}
              </option>
            </select>
          </div>
          <div class="form-control">
            <label>Thickness</label>
            <select v-model="order.thickness">
              <option
                v-for="thickness in thicknessOption[order.colorType]"
                v-bind:value="thickness.id"
                v-bind:key="thickness.id"
              >
                {{ thickness.text }}mm
              </option>
            </select>
          </div>
        </div>
        <div class="section width-length border">
          <div class="form-control">
            <label>Width in mm</label>
            <input
              placeholder="mm"
              class="input"
              type="number"
              v-model="order.width"
            />
          </div>
          <div class="form-control">
            <label>Length in mm</label>
            <input
              placeholder="mm"
              class="input"
              type="number"
              v-model="order.length"
            />
          </div>
          <div class="form-control">
            <label>Area</label>
            <div class="area">{{ calculateArea() }} SqM</div>
          </div>
          <div class="form-control">
            <label>Total Number of Pcs To Be Cut</label>
            <input class="input" type="number" v-model="order.totalpcs" />
          </div>
          <div class="form-control">
            <button type="submit" class="btn">Add To Order</button>
          </div>
        </div>

        <div class="section border">
          <div class="display-order">
            <div class="display-order-title">
              <h3 class="display-title">{{title}} Orders</h3>
            </div>
            <div v-for="order in orders" :key="order" class="orders">
              <p>{{ order }}</p>
            </div>
          </div>
        </div>
        
        <div class="section border">
          <div class="show-cost">
            <h1 class="display-title">Show Cost</h1>
            <input type="submit" value="Add To Basket" class="btn input" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaterialOrder2",
  data() {
    return {
      order: {
        colorType: null,
        thickness: null,
        width: null,
        length: null,
        sqm: null,
        totalpcs: null,
      },
      title: 'Acrylic',
      colorTypesOption: [
        {
          text: "Clear",
          id: 1,
        },
        {
          text: "Red 4403",
          id: 2,
        },
        {
          text: "Green 692",
          id: 3,
        },
        {
          text: "Blue 1743",
          id: 4,
        },
        {
          text: "White 069",
          id: 5,
        },
        {
          text: "Black 9030",
          id: 6,
        },
        {
          text: "LED Opal",
          id: 7,
        },
        {
          text: "LED Red",
          id: 8,
        },
      ],
      // colorTypesOption: ['red', 'blue', 'black', 'yellow', 'pink'],
      thicknessOption: {
        1: [
          {
            text: 2,
            id: 1,
          },
          {
            text: 3,
            id: 2,
          },
          {
            text: 5,
            id: 3,
          },
          {
            text: 6,
            id: 4,
          },
          {
            text: 8,
            id: 5,
          },
          {
            text: 10,
            id: 6,
          },
          {
            text: 15,
            id: 7,
          },
          {
            text: 20,
            id: 8,
          },
          {
            text: 30,
            id: 9,
          },
        ],
        2: [
          {
            text: 3,
            id: 1,
          },
          {
            text: 5,
            id: 2,
          },
        ],
        3: [
          {
            text: 3,
            id: 1,
          },
          {
            text: 5,
            id: 2,
          },
        ],
        4: [
          {
            text: 3,
            id: 1,
          },
          {
            text: 5,
            id: 2,
          },
        ],
        5: [
          {
            text: 3,
            id: 1,
          },
          {
            text: 5,
            id: 2,
          },
          {
            text: 10,
            id: 3,
          },
          {
            text: 15,
            id: 4,
          },
          {
            text: 20,
            id: 5,
          },
        ],
        6: [
          {
            text: 3,
            id: 1,
          },
          {
            text: 5,
            id: 2,
          },
          {
            text: 10,
            id: 3,
          },
          {
            text: 15,
            id: 4,
          },
          {
            text: 20,
            id: 5,
          },
        ],
        7: [
          {
            text: 10,
            id: 1,
          },
          {
            text: 30,
            id: 2,
          },
        ],
        8: [
          {
            text: 10,
            id: 1,
          },
          {
            text: 30,
            id: 2,
          },
        ],
      },
      // thicknessOption: ['6mm', '9mm', '12mm', '18mm', '24mm'],
      orders: [],
    };
  },
  methods: {
    calculateArea() {
      let length = (this.order.length / 1000).toFixed(2);
      let width = (this.order.width / 1000).toFixed(2);
      let answer = (length * width).toFixed(2);

      return answer;
    },
    handleSubmit() {
      this.orders.push(`Color/Type: ${this.order.colorType}`);
      this.orders.push(`Thickness: ${this.order.thickness}`);
      this.orders.push(`Area: ${this.calculateArea()} SqM`);
      this.orders.push(`Total Number of Pcs To Be Cut: ${this.order.totalpcs}`);

      console.log(this.orders);

      this.order.colorType = "";
      this.order.thickness = null;
      this.order.length = null;
      this.order.width = null;
      this.order.sqm = null;
      this.order.totalpcs = null;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  /* overflow-y: hidden; */
}

.area {
  height: 50px;
  width: 100px;
  border-radius: 0.3em;
  border: 1px solid #30c016;
}

.orders {
  font-size: 1.2rem;
  /* color: #30c016; */
  /* margin-top: 0.50rem; */
  line-height: 1.5;
}

.display-order-orders {
  font-size: 1.2rem;
  /* color: #30c016; */
}

.display-order-orders > p {
  line-height: 1.5;
}

.orders:nth-child(4n + 1) {
  color: red;
  border-bottom: 1px solid red;
  margin-bottom: 1rem;
}

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
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
  margin: 1.4rem 0;
}

.width-length {
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.input {
  font-family: inherit;
  font-size: 1rem;
  margin: 0.35rem;
  padding: 0.3em;
  border: 1px solid #30c016;
  border-radius: 0.3em;
  outline: none;
}

.input:hover,
.input:focus {
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