<template>
    <form role="search">
        <input type="text" placeholder="Search" v-model="filterValue" @input="changeFilter"/>
    </form>
</template>

<script>
export default {
    data () {
        return {
            filterValue: ""
        }
    },

    methods: {
        changeFilter() {
            this.$store.commit("filterContact", this.filterValue)
        }
    }
}
</script>

<style></style>