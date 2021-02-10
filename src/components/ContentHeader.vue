<template>
    <section class="content-header">
        <h1>{{ title }}</h1>
    </section>
</template>

<script>
export default {
    name: 'ContentHeader',
    props: {
        title: {
            type: String,
            required: true,
        }
    }
}
</script>

<style>

</style>