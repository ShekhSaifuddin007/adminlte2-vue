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
            required: true,
        }
    },
    components: { ContentHeader },

    watch: {
        title: {
            immediate: true,
            handler(title) {
                document.title = `Account | ${title}`
            },
        },
    },
}
</script>

<style>

</style>