<template>
    <div v-if="load">
        <span class="title">Cart</span>
        <cart-list v-if="load" :products="prod" />
    </div>
    <div class="load" v-else>/>
        <span style="font-size: 3rem; letter-spacing: 5px;">LOADING</span>
    </div>
</template>

<script>
import CartList from '@/components/CartList.vue';

export default {
    components: {
        "cart-list": CartList,
    },
    data() {
        return {
            load: false,
            prod: {},
            prod_t: undefined,
        }
    },
    methods: {
        loadCart() {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => {
                    this.prod_t = json;
                    let ids = Object.keys(localStorage)

                    for (let i of ids) {
                        if (!(this.prod_t.id == i)) {
                            this.prod[i] =  this.prod_t[i-1]
                        }
                    }
                    this.load = true
                })
        }
    },
    mounted() {
        this.load = false
        this.loadCart()

    },
}
</script>

<style scoped>
.title {
    font-size: 3rem;
    letter-spacing: 5px;
    display: flex;
    justify-content: center;
}
.load {
    animation: loading 1s linear infinite;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-self: center;
}
@keyframes loading {
    from {
        rotate: 0deg;
    }
    to {
        rotate: 360deg;
    }
}
</style>