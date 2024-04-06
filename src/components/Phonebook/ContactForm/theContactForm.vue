<template>
    <form @submit.prevent="formSubmit">
        <div>
            <label htmlFor="name">
                <p>Enter Name</p>
            </label>
            <input @input="changeFormContact" type="text" name="name" placeholder="Enter name" v-model="contactValue.name"/>
        </div>
        <div>
            <label htmlFor="phone">
                <p>Enter Phone</p>
            </label>
            <input @input="changeFormContact" type="tel" name="phone" placeholder="Enter number" v-model="contactValue.phone"/>
        </div>
        <div>
            <button type="submit">
                Add contacts
            </button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            contactValue: {
                name: "",
                phone: "",
            }
        }
    },
    methods: {
        changeFormContact(event) {
            const { value, name } = event.target
            this.contactValue = {
                ...this.contactValue,
                [name]: value
            }
        },
        async formSubmit() {
            try {
                await this.$store.dispatch('addContactAction', this.contactValue);
                this.contactValue = { name: "", phone: "" };
                await this.$store.dispatch("getPhoneBookAction");
            } catch (error) {
                console.log(error)
            }
        }
    },
}
</script>

<style></style>