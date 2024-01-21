<script setup>
    import { DocumentIcon } from '@heroicons/vue/24/solid'
    import { ArrowDownTrayIcon } from '@heroicons/vue/24/solid'
</script>

<template>
    <button @click="download">
        <div class="wrapper">
        <DocumentIcon class="attach-img" />
        <div>
            <h2>{{ name }}</h2>
            <p>{{ size }}</p>
        </div>

        <ArrowDownTrayIcon class="attach-img download-img" />
    </div>
    </button>
</template>

<style scoped>
.attach-img
{
    width: 50px;
    color: var(--vp-c-white-1);
}

.download-img
{
    margin-left: auto;
    width: 30px;
    opacity: 0.5;
}

button
{
    text-align: left;
    margin-right: 10px;
    margin-top: 10px;
    min-width: 100%;
}

@media (min-width: 640px) {
    button
    {
        min-width: auto;
    }
}

.wrapper
{
    display: flex;
    flex-flow: row;
    justify-content: left;
    gap: 0px 20px;

    padding: 15px;
    border-radius: 8px;
    background-color: var(--vp-c-gray-3);
}

p
{
    opacity: 0.5;
    font-size: 0.8rem;
}

h2, p
{
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
}

h2
{
    font-size: 1rem;
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
}
</style>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
            },
            size: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
        methods: {
            download () {
                window.location.href = this.url;
            }
        },
    };
</script>