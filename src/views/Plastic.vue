<template>
  <div class="container">
    <div class="spacer">
      <div class="product acrylic">
        <router-link to="/material-order" class="router-link">
          <h1 class="title">Acrylic</h1>
          <img src="../assets/img/acrylic.jpg" class="img" />
        </router-link>
      </div>
    </div>
    <div class="spacer">
      <div class="product petg">
        <router-link to="/material-order" class="router-link">
          <h1 class="title">PET G</h1>
          <img src="../assets/img/petg.jpg" class="img" />
        </router-link>
      </div>
    </div>
    <div class="spacer">
      <div class="product polycarb">
        <router-link to="/material-order" class="router-link">
          <h1 class="title">Polycarb</h1>
          <img src="../assets/img/polycarb.jpg" class="img" />
        </router-link>
      </div>
    </div>
    <div class="spacer">
      <div class="product pvc">
        <router-link to="/material-order" class="router-link">
          <h1 class="title">PVC Foam</h1>
          <img src="../assets/img/pvc.jpg" class="img" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Plastic",
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  height: calc(100% - 105px);
  grid-template-areas:
    "acrylic petg"
    "polycarb pvc";
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

.acrylic {
  grid-area: acrylic;
}

.petg {
  grid-area: petg;
}

.polycarb {
  grid-area: polycarb;
}

.pvc {
  grid-area: pvc;
}

.img {
  /* background-color: green; */
  height: 250px;
  width: 250px;
}
</style>
