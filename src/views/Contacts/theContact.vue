<script setup>
import theContactForm from "../../components/Phonebook/ContactForm/theContactForm.vue"
import theFilterList from "../../components/Phonebook/FilterList/theFilterList.vue"
import theContactLists from "../../components/Phonebook/ContactList/theContactList.vue"
</script>

<template>
  <div className='container'>
      <h1>Phonebook</h1>
      <theContactForm />
      <theFilterList />
      <h2>Contacts</h2>
      <theContactLists />
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>