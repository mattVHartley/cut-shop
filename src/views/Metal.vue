<template>
  <div class="container">
    <div class="spacer">
      <div class="product carbon">
        <router-link to="/material-order" class="router-link">
          <h1 class="title">Carbon</h1>
          <img src="../assets/img/carbon.jpg" class="img" />
        </router-link>
      </div>
    </div>
    <div class="spacer">
      <div class="product stainless">
        <router-link to="/material-order" class="router-link">
          <h1 class="title">Stainless</h1>
          <img src="../assets/img/stainless.jpg" class="img" />
        </router-link>
      </div>
    </div>
    <div class="spacer">
      <div class="product aluminium">
        <router-link to="/material-order" class="router-link">
          <h1 class="title">Aluminium</h1>
          <img src="../assets/img/aluminium.jpg" class="img" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Metal",
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  height: calc(100% - 105px);
  grid-template-areas:
    "carbon stainless"
    "aluminium aluminium ";
}

.product {
  /* margin: 1rem; */
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

.router-link {
  text-decoration: none;
  text-align: center;
}

.spacer {
  padding: 2rem;
}

.title {
  color: #30c016;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 800;
}

.carbon {
  grid-area: carbon;
}

.stainless {
  grid-area: stainless;
}

.aluminium {
  grid-area: aluminium;
}

.img {
  /* background-color: green; */
  height: 250px;
  width: 250px;
}
</style>
