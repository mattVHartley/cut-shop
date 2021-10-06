<template>
    <div class="header">
        <router-link to="/" class="link-container">
            <span class="header-logo">The Cut Shop</span>
        </router-link>
        <ul class="header-nav">
            <li>> My basket: £5.00</li>
            <li><fa class="shopping-cart" icon="shopping-cart" /></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
.header {
    height: 100px;
    background: #131415;
    color: #FFFFFF;
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    z-index: 10;
    justify-content: space-between;
    align-items: center;
    border-bottom: 5px solid #FAED27;
}

.header-logo {
    margin-left: 1.5rem;
    font-weight: 800;
    font-size: 1.85rem;
    cursor: pointer;
    color: #FFFFFF;
}

.header-nav {
    display: flex;
    align-items: center;
}

.header-nav li {
    list-style-type: none;
    margin: 0 .25rem;
}

.header-nav li:last-child {
    margin-right: 1.5rem;
}

.shopping-cart {
    cursor: pointer;
    font-size: 2rem;
}

.link-container {
    text-decoration: none;
}
</style>