<template>
  <article class="cities__place-card place-card">
    <div class="place-card__mark" v-if="premium">
      <span>Premium</span>
    </div>
    <div class="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img class="place-card__image" :src="picture" width="260" height="200"
             alt="Place image">
      </a>
    </div>
    <div class="place-card__info">
      <div class="place-card__price-wrapper">
        <div class="place-card__price">
          <b class="place-card__price-value">&euro;{{ price }}</b>
          <span class="place-card__price-text">&#47;&nbsp;night</span>
        </div>
      </div>
      <div class="place-card__rating rating">
        <div class="place-card__stars rating__stars">
          <span :style="stars"></span>
          <span class="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 class="place-card__name">
        <a href="#">{{ title }}</a>
      </h2>
      <p class="place-card__type">{{ type }}</p>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      stars: 'width: ' + this.raiting * 20 + '%'
    }
  },
  props: {
    title: {
      type: String
    },
    type: {
      type: String
    },
    price: {
      type: Number
    },
    picture: {
      type: String
    },
    premium: {
      type: Boolean
    },
    raiting: {
      type: Number
    }
  }
}
</script>

<style scoped>

</style>
