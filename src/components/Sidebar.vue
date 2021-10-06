<template>
  <div class="sidebar">
    <div class="search-box">
        <button for="search-box" class="search-box-icon"><fa icon="search" /></button>
      <input type="text" />
    </div>
    <div class="title">Categories</div>
    <div class="menu-items">
      <router-link to="/wood" active-class="active" tag="button" class="side-btn">
        <div class="link-container">> Wood</div>
      </router-link>
      <router-link to="/plastic" active-class="active" tag="button" class="side-btn">
        <div class="link-container">> Plastic</div>
      </router-link>
      <router-link to="/metal" active-class="active" tag="button" class="side-btn">
        <div class="link-container">> Metal</div>
      </router-link>
      <router-link to="/material-order2" active-class="active" tag="button" class="side-btn">
        <div class="link-container">> Aluminium Composite</div>
      </router-link>
      <router-link to="/about" active-class="active" tag="button" class="side-btn">
        <div class="link-container">> About</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
    padding: 1rem;
    position: fixed;
    width: min-content;
}

.search-box {
    display: flex;
}

.search-box input {
    outline: none;
    border-radius: 0.30em;
    border: 1px solid #30C016;
    padding: 0.45rem 0.50rem;
    margin-left: -6px;
    font-size: inherit;
    font-family: inherit;
}


.search-box-icon {
    background-color: white;
    padding: 0.15rem 0.50rem;
    padding-right: calc(0.50rem + 6px);
    font-size: 1.55rem;
    border: 1px solid #30C016;
    border-top-left-radius: 0.30em;
    border-bottom-left-radius: 0.30em;
    color: #30C016;
    cursor: pointer;

}

.title {
    margin: 1rem 0;
    padding: 0.45rem 0.80rem;
    border-radius: 0.30em;
    background-color: #30C016;
    color: white;
    font-size: 1.45rem;
}

.menu-items {
    display: flex;
    flex-direction: column;
    font-size: 1.25rem;
    font-weight: 700;
}

.menu-items > * {
    margin-top: 1rem
}

.link-container {
    border-bottom: 1px solid #30C016;
    text-decoration: none;
    padding-left: 1rem;
}

.side-btn:focus {
    outline: none;
}

.side-btn {
    text-decoration: none;
    color: #30C016;
}
</style>