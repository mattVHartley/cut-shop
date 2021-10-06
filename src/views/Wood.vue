<template>
  <div class="container">
    <div class="spacer">
      <div class="product ply">
        <router-link to="/material-order" class="router-link">
          <h1 class="title">Ply Wood</h1>
          <img src="../assets/img/ply.jpg" class="img" />
        </router-link>
      </div>
    </div>
    <div class="spacer">
      <div class="product MDF">
        <router-link to="/material-order" class="router-link">
          <h1 class="title">MDF</h1>
          <img src="../assets/img/MDF.jpg" class="img" />
        </router-link>
      </div>
    </div>
    <div class="spacer">
      <div class="product chipbord">
        <router-link to="/material-order" class="router-link">
          <h1 class="title">Chipbord</h1>
          <img src="../assets/img/chipbord.jpg" class="img" />
        </router-link>
      </div>
    </div>
    <div class="spacer">
      <div class="product particle">
        <router-link to="/material-order" class="router-link">
          <h1 class="title">Particle Bord</h1>
          <img src="../assets/img/OSB.jpg" class="img" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wood",
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  height: calc(100% - 105px);
  grid-template-areas:
    "ply MDF"
    "chipbord particle";
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

.ply {
  grid-area: ply;
}

.MDF {
  grid-area: MDF;
}

.chipbord {
  grid-area: chipbord;
}

.particle {
  grid-area: particle;
}

.img {
  /* background-color: green; */
  height: 250px;
  width: 250px;
}
</style>
