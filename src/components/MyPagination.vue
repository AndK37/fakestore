<template>
    <div v-if="prod != undefined" class="pagi">
        <button @click="prevPage" v-bind:class="{disable: this.$route.params.page == 1}">⬅️</button>
        <span>{{ this.$route.params.page }}</span>
        <button @click="nextPage" v-bind:class="{disable: (this.$route.params.page >= (Math.ceil(prod.length / 10))) }">➡️</button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        prod: JSON,
    },
    methods: {
        nextPage() {
            this.$router.push(`/${this.$route.params.category}/${Number(this.$route.params.page) + 1}`)
        },
        prevPage() {
            this.$router.push(`/${this.$route.params.category}/${Number(this.$route.params.page) - 1}`)
        }
    },

}
</script>

<style scoped>
.pagi {
    display: flex;
    gap: 10px;
    height: fit-content;
    width: 1300px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
}
button {
    background-color: #30292F;
    border-radius: 50px;
    font-size: 2rem;
}
span {
    font-size: 2rem;
    font-weight: bold;
}
.disable {
    pointer-events: none;
    opacity: 50%;
}
@media (max-width: 1399px) {
    .pagi {
        max-width: 830px;
    }
}
@media (max-width: 930px) {
    .pagi {
        max-width: 400px;
    }
}
@media (max-width: 430px) {
    .pagi {
        max-width: 100%;
    }
}
</style>