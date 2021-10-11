<template>
    <div>
        <ContentHeader :title="headerText"/>

        <section class="content">
            <slot></slot>
        </section>
    </div>
</template>

<script>
import ContentHeader from '@/components/ContentHeader'

export default {
    name: 'AppLayout',
    props: {
        headerText: {
            type: String,
            required: true,
        },
        title: {
            type: String,
<<<<<<< HEAD
            required: true,
        }
=======
            required: true
        },
>>>>>>> 572edda74e3a61f69d5b864e9522b1d757814206
    },
    components: { ContentHeader },

    watch: {
        title: {
            immediate: true,
            handler(title) {
<<<<<<< HEAD
                document.title = `Account | ${title}`
=======
                document.title = `${title} || GPH`
>>>>>>> 572edda74e3a61f69d5b864e9522b1d757814206
            },
        },
    },
}
</script>

<style>

</style>