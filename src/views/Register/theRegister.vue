<template>
  <div>
    <form @submit.prevent="formSubmit">
      <div>
        <label htmlFor="exampleInputName">
          Your name
        </label>
        <input @input="changeFormRegister" type="text" id="exampleInputName" name="name" required
          v-model="registeredValue.name" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1">
          Email address
        </label>
        <input @input="changeFormRegister" type="email" id="exampleInputEmail1" name="email" required
          v-model="registeredValue.email" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1">
          Password
        </label>
        <input @input="changeFormRegister" type="password" id="exampleInputPassword1" name="password" required
          v-model="registeredValue.password" />
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
      registeredValue: {
        name: "",
        email: "",
        password: "",
      }
    }
  },
  methods: {
    changeFormRegister(event) {
      const { value, name } = event.target
      this.registeredValue = {
        ...this.registeredValue,
        [name]: value
      }
    },

    formSubmit() {
      this.$store.dispatch("signUpAction", this.registeredValue)
      this.registeredValue = { name: "", email: "", password: "" };
    }
  }

}
</script>

<style></style>