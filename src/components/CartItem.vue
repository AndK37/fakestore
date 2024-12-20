<template>
    <div v-if="show" @click="removeFromCart" class="cart-item">
        <div class="left">
            <img class="images" :src="prod.image" alt="">
            <span class="title">{{ prod.title }}</span>
        </div>

        <span class="price">{{ prod.price }}$</span>
    </div>
</template>

<script>


export default {
    components: {
        
    },
    data() {
        return {
            show: true,
        }

    },
    methods: {
        removeFromCart() {
            delete localStorage[this.prod.id]
            this.$router.go(this.$router.currentRoute)
        }
    },
    props: {
        prod: undefined,
    }
}
</script>

<style scoped>
.cart-item {
    display: flex;
    background-color: #30292F;
    border-radius: 10px;
    height: 80px;
    justify-content: space-between;
    padding-right: 10px;
    cursor: pointer;
}
.title {
    display: flex;
}
.price {
    display: flex;
    align-self: center;
    font-size: 2rem;
    color: green;
}
.images {
    min-width: 80px;
    min-height: 80px;
    max-width: 80px;
    max-height: 80px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right: solid 3px #355691;
}
.left {
    display: flex;
    align-items: center;
}
@media (max-width: 900px) {
    .price {
        font-size: 1.5rem;

    }
}
@media (max-width: 450px) {
    .price {
        font-size: 1.5rem;
    }
    .images {
        min-width: 60px;
    min-height: 60px;
    max-width: 60px;
    max-height: 60px;
    }
    .title {
        font-size: 0.8rem;
    }
}
</style>