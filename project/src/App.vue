<template>
    <router-view></router-view>
</template>

<script>
import index from '@/store'

export default {
  provide () {
    return {
      login: this.login,
      logout: this.logout
    }
  },
  methods: {
    login () {
      index.state.isAuth = true
      this.$router.push('/')
    },
    logout () {
      index.state.isAuth = false
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
</style>
