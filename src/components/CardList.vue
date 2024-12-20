<template>
    <div class="list" v-if="products != undefined">
        <card-item v-for="n in 10" :key="n" :prod="pagination(n)" />
        
    </div>
    <div class="load" v-else>/>
        <span style="font-size: 3rem; letter-spacing: 5px;">LOADING</span>
    </div>
    <my-pagination class="pagi" :prod="products"/>
</template>

<script>
import CardItem from '@/components/CardItem.vue'
import MyPagination from '@/components/MyPagination.vue'

export default {
    components: {
        "card-item": CardItem,
        "my-pagination": MyPagination,
    },
    props: {
        products: JSON,
    },
    methods: {
        pagination(n) {
            return this.products[n + (this.$route.params.page - 1) * 10 -1]
        }
    },
}
</script>

<style scoped>
.list {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;

    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
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

@media (max-width: 1399px) {
    .list {
        max-width: 830px;
    }
}
@media (max-width: 930px) {
    .list {
        max-width: 400px;
    }
}
</style>