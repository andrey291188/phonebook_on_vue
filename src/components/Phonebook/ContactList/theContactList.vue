<template>
    <ol>
        <li v-for="contact in getVisibleContacts" :key="contact.id">
            <div>
                <div>Name: {{contact.name}}</div>
                Phone number: {{contact.number}}
            </div>
            <button @click="deleted(contact.id)">Delete</button>
        </li>
    </ol>

    <p v-if="getVisibleContacts.length === 0">I'm sorry, but there are not contacts</p>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch("getPhoneBookAction")
    },
    methods: {
        async deleted(id) {
            try {
                await this.$store.dispatch('deleteContactAction', id);
                await this.$store.dispatch("getPhoneBookAction");
            } catch (error) {
              console.log(error)
            }
        }
    },
    computed: {
        getVisibleContacts() {
            const normalizedFilter = this.$store.getters.gFilter.toLowerCase();
            return this.$store.getters.getContact.filter(contact =>
                contact.name.toLowerCase().includes(normalizedFilter)
            )
        }

    }

}
</script>
