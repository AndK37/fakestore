<template>
    <div v-bind:class="{ shadow: isFullscreen, show: !isFullscreen }" @click="isFullscreen = !isFullscreen"></div>
    <div v-if="prod != undefined" v-bind:class="{ cardA: !isFullscreen, cardB: isFullscreen }"
        @click="isFullscreen = !isFullscreen">
        <img class="image" :src="prod.image" alt="">

        <div style="display: flex; flex-direction: column; padding: 5px;">
            <span class="title">{{ prod.title }}</span>
            <div v-bind:class="{ desc: isFullscreen }"
                style="display: flex; flex-direction: column; justify-content: space-between;">

                <span v-bind:class="{ show: !isFullscreen }" class="description" style="align-self: start;">{{
                    prod.description }}</span>
                <div style="display: flex; flex-direction: column;">
                    <div style="display: flex; justify-content: space-between;">
                        <div class="rating">
                            <span class="ratingF">⭐⭐⭐⭐⭐</span>
                            <span class="ratingB">⭐⭐⭐⭐⭐<span v-bind:class="{ show: !isFullscreen }"
                                    style="font-size: 0.8rem; opacity: 50%; align-self: center;">{{ prod.rating.rate
                                    }}<br>{{ prod.rating.count }}</span></span>
                        </div>
                        <div style="display: flex; flex-direction: column;">
                            <span class="price">{{ prod.price }}</span>
                            <button @click="addToCart" v-bind:class="{ show: !isFullscreen }" class="cart">Add to
                                cart</button>
                        </div>

                    </div>
                    <span class="category">{{ prod.category }}</span>
                </div>
            </div>

        </div>

    </div>
    <div class="card" v-else></div>
</template>

<script>

export default {
    props: {
        prod: JSON,
    },
    data() {
        return {
            r: 0,
            isFullscreen: false,
            cart: 0,
        }
    },
    methods: {
        addToCart() {
            if (localStorage[this.prod.id] == 1) {
                delete localStorage[this.prod.id]
            } else {
                localStorage[this.prod.id] = 1
            }

        }
    },
    mounted() {
        if (this.prod == undefined) {
            this.r = "0px"
        } else {
            this.r = `${(Math.floor(this.prod.rating.rate) * 33) + 4 + ((this.prod.rating.rate - Math.floor(this.prod.rating.rate)) * 25)}px`
        }
    }
}

</script>

<style scoped>
.cardA {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 400px;
    height: 500px;

    background-color: #30292F;
    border-radius: 20px;

    z-index: 2;
}

.cardA:hover {
    /* scale: 1.3; */
    cursor: pointer;
    z-index: 10;
}

.image {
    width: 100%;
    height: 60%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom: #355691 5px solid;
}

.title {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    text-overflow: ellipsis;
    width: 100%;
    height: 6rem;
    text-overflow: ellipsis;
    overflow: scroll;
}

.price {
    color: green;
    font-size: 2.5rem;
}

.price::after {
    content: "$";
}

.category {
    color: #57595f;
}

.rating {
    position: relative;
}

.ratingF,
.ratingB {
    display: flex;
    font-size: 1.5rem;
    position: absolute;
}

.ratingF {
    width: v-bind(r);
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
}

.ratingB {
    z-index: 1;
    filter: grayscale();
}

.show {
    display: none;
}

.desc {
    height: 100%;
}

.shadow {
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 50%;
    top: 0;
    left: 0;
    z-index: 50;
}

.cardB {
    z-index: 100;
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 1000px;
    height: 500px;
    transition: 0s;
    background-color: #30292F;
    border-radius: 20px;
}

.cardB .image {
    height: 500px;
    width: 400px;
    border-bottom: none;
    border-right: #355691 5px solid;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 20px;
}

.cardB .title {
    height: 100px;
}

.cart {
    background-color: transparent;
    border: green solid 3px;
    cursor: pointer;
}

.cart:hover {
    background-color: green;
}

@media (max-width: 400px) {
    .price {
        font-size: 1.5rem;
    }
}

@media (max-width: 1100px) {
    .cardB {
        width: 800px;
    }
}
@media (max-width: 850px) {
    .cardB {
        width: 400px;
        height: fit-content;
        flex-direction: column;
    }
    .cardB .image {
        width: 100%;
        height: 300px;
    }
}
@media (max-width: 500px) {
    .cardB {
        width: 300px;
        height: fit-content;
        flex-direction: column;
    }
    .cardB .image {
        display: none;
    }
}
</style>