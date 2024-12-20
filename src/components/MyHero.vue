<template>
    <div class="hero">
        <div class="images">
            <img id="i1" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" width="300px"
                height="300px">
            <img id="i2" src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt="" width="300px"
                height="300px">
            <img id="i3" src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="" width="300px"
                height="300px">
        </div>
        <div class="t">
            <span class="text">FakeStore - the real one</span>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.hero {
    display: flex;
    justify-content: space-between;
    background-color: #30292F;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    padding: 50px;
    position: relative;

    margin-top: 50px;
    margin-bottom: 50px;
}

.hero::after {
    content: '';
    position: absolute;
    background: #30292F;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    border-radius: 10px;
    filter: blur(2rem);
}

.t {
    display: flex;
    align-items: center;

}

.text {
    display: flex;
    text-wrap: nowrap;
    letter-spacing: 0.1rem;
    font-size: 2rem;
    border-right: 21px solid white;
    overflow: hidden;
    animation: 4s writing steps(24, end);
    height: fit-content;
    z-index: 14;
}

@keyframes writing {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}


.images {
    position: relative;
    height: 500px;
    width: 50%;
}

img {
    border-radius: 10px;
}


#i1 {
    position: absolute;
    z-index: 13;
    rotate: -30deg;
    top: 20%;
    left: 10%;
    animation: 0.5s onLoadImages;
}

#i2 {
    position: absolute;
    z-index: 12;
    top: 10%;
    left: 30%;
    animation: 0.5s onLoadImages;
}

#i3 {
    position: absolute;
    z-index: 11;
    rotate: 30deg;
    top: 20%;
    left: 50%;
    animation: 0.5s onLoadImages;
}

@keyframes onLoadImages {
    from {
        top: 50%;
        rotate: 0deg;
        left: 30%;
    }
}

@media (max-width: 800px) {
    .text {
        font-size: 1rem;
    }
    .images {
        height: 250px;
    }
    img {
        width: 200px;
        height: 200px;
    }
}
@media (max-width: 800px) {
    .text {
        font-size: 0.7rem;
    }

}
</style>