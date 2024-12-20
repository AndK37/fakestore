<template>
  <div>
    <my-hero/>
    <my-nav/>
    <card-list :products="prod" />
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'
import MyHero from '@/components/MyHero.vue'
import MyNav from '@/components/MyNav.vue'

export default {
  components: {
    "card-list": CardList,
    "my-hero": MyHero,
    "my-nav": MyNav,
  },
  data() {
    return {
      prod: undefined,
    }

  },
  methods: {
    filter() {
      if (this.$route.params.category == "all") {
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(json => {
            this.prod = json;
          })
      } else {
        fetch(`https://fakestoreapi.com/products/category/${this.$route.params.category}`)
          .then(res => res.json())
          .then(json => {
            this.prod = json;
          })
      }
    }
  },
  watch: {
    $route() {
      this.prod = undefined
      this.filter()
    }
  },

  mounted() {
    this.filter()
  }
}
</script>

<style scoped></style>