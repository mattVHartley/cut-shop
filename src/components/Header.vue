<template>
    <div class="header">
        <span class="header-logo">The Cut Shop</span>
        <ul class="header-nav">
            <li>> My basket £5.00</li>
            <li><fa class="lg" icon="shopping-cart" /></li>
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
    background: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 5px solid yellow;
}

.header-logo {
    margin-left: 1rem;
    font-weight: 800;
    font-size: 1.85rem;
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
    margin-right: 1rem;
}

.lg {
    font-size: 1.5rem;
}
</style>