<template>
  <div class="page page--gray page--login">
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <div class="header__left">
            <a class="header__logo-link" href="main.html" @click.prevent="this.$router.push('/')">
              <img class="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41">
            </a>
          </div>
        </div>
      </div>
    </header>

    <main class="page__main page__main--login">
      <div class="page__login-container container">
        <section class="login">
          <h1 class="login__title">Sign in</h1>
          <form class="login__form form" action="#" method="post" @submit.prevent="submit">
            <div class="login__input-wrapper form__input-wrapper">
              <label class="visually-hidden">E-mail</label>
              <input class="login__input form__input" type="email" name="email" placeholder="Email" required="" v-model.trim="email">
            </div>
            <div class="login__input-wrapper form__input-wrapper">
              <label class="visually-hidden">Password</label>
              <input class="login__input form__input" type="password" name="password" placeholder="Password"
                     required="" v-model="password">
            </div>
            <button class="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section class="locations locations--login locations--current">
          <div class="locations__item">
            <a class="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  provide () {
    return {
      email: 'email'
    }
  },
  inject: ['login'],
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isValid () {
      return this.email !== '' && this.password !== ''
    }
  },
  methods: {
    submit () {
      if (this.isValid) {
        this.login()
      }
    }
  }
}
</script>

<style scoped>
</style>
