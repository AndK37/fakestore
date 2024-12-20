<template>
    <div class="nav">
        <span class="title">FILTER:</span>
        <div class="wrapper">
            <div class="back"></div>
            <router-link to="/all/1">all</router-link>
        </div>
        <div class="wrapper">
            <div class="back"></div>
            <router-link to="/electronics/1">electronics</router-link>
        </div>
        <div class="wrapper">
            <div class="back"></div>
            <router-link to="/jewelery/1">jewelery</router-link>
        </div>
        <div class="wrapper">
            <div class="back"></div>
            <router-link to="/men's clothing/1">men's clothing</router-link>
        </div>
        <div class="wrapper">
            <div class="back"></div>
            <router-link to="/women's clothing/1">women's clothing</router-link>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.title {
    font-size: 1.5rem;
    font-weight: bold;
}

.wrapper {
    width: fit-content;
    height: fit-content;
    position: relative;
    z-index: 5;
}

.bac {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-image: conic-gradient(#A100FFFF, #71C4FFFF, #A100FFFF);
    filter: blur(1px);
    border-radius: 50px;
    padding-top: 40px;
    padding-right: 30px;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
}

.nav {
    display: flex;
    margin: 20px;
    gap: 30px;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
}

a {
    z-index: 10;
    background-color: #30292F;
    color: white;
    font-size: 1.5rem;
    padding: 10px;
    border-radius: 50px;
    text-decoration: none;
    border: black 3px solid;
    text-wrap: nowrap;

}

a.router-link-exact-active {
    color: white;
    filter: blur(0.5px);
}

a.router-link-exact-active::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-image: conic-gradient(#A100FFFF, #71C4FFFF, #A100FFFF);
    filter: blur(1px);
    border-radius: 50px;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
}
</style>