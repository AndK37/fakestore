<template>
    <div class="list">
        <cart-item v-for="item in products" :key="item"  :prod="item" />
        <div class="info">
        <span>Items:{{ items }} </span>
        <div>
            <span>Price: </span>
            <span style="color: green;">{{ price }}$</span>
        </div>
        <button>Buy</button>
    </div>
    </div>

</template>

<script>
import CartItem from './CartItem.vue';

export default {
    components: {
        "cart-item": CartItem,
    },
    data() {
        return {
            price: 0,
            items: 0
        }
    },
    props: {
        products: JSON,
    },
    computed: {

    },
    methods: {
        finalPrice() {
            for (let item in this.products) {
                this.price += this.products[item].price
                this.items += 1
            }
            this.price = this.price.toFixed(2)
        }
    },
    mounted() {
        this.finalPrice()
    }
}
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
}
.info {
    border-top: 5px solid white;
    font-size: 2rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: end;
    align-self: flex-end;
}
button {
    background-color: transparent;
    color: green;
    border: green solid 3px;
    padding: 5px;
    font-size: 2rem;
}
button:hover {
    background-color: green;
    color: black;
}
</style>