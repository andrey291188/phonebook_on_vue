<template>
  <div className="container top images">
    <ul className="d-grid gap-2 d-md-flex justify-content-md-end">
      <h2>Hello, this is an online contact book, you can register or login</h2>
      <li>
        <RouterLink to="/registered">Registered</RouterLink>
      </li>
      <li>
        <RouterLink to="/login">Login</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>