<template>
  <div>
    <form @submit.prevent="formSubmit">
      <div>
        <label htmlFor="exampleInputEmail1">
          Email address
        </label>
        <input @input="changeFormLogin" type="email" id="exampleInputEmail1" name="email" aria-describedby="emailHelp"
          v-model="loginValue.email" />
      </div>
      <div>
        <label htmlFor="exampleInputPassword1">
          Password
        </label>
        <input @input="changeFormLogin" type="password" name="password" id="exampleInputPassword1"
          v-model="loginValue.password" />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginValue: {
        email: "",
        password: "",
      }
    }
  },
  methods: {
    changeFormLogin(event) {
      const { value, name } = event.target
      this.loginValue = {
        ...this.loginValue,
        [name]: value
      }
    },

    formSubmit() {
      this.$store.dispatch("loginAction", this.loginValue)
      this.loginValue = { email: "", password: "" }
    }
  }

}
</script>

<style></style>