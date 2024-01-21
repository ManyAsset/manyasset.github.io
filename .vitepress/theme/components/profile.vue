<script setup>
    defineProps(['username','handle', 'profileImage'])
</script>

<template>
    <div class="profile-box">
        <img :src='profileImage' alt="profile">
        <div class="profile-div">
            <p>Tutorial by</p>
            <h2>{{ username }}</h2>
            <br>
            <p>Discord: @{{ handle }}</p>
        </div>
    </div>
</template>

<style scoped>
.profile-div {
    display: flex;
    width: 285px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    align-items: center;
}

img
{
    width: 150px;
    height: 150px;
    border-radius: 100%;
    flex-shrink: 0;
}

h2, p
{
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    font-family: var(--vp-font-family-base);
}

h2
{
    font-size: 2rem;
    font-weight: 600;
}

br
{
    display: block;
    content: "";
    margin-top: 30px;
}

@media (min-width: 640px) {
    .profile-div
    {
        align-items: flex-start;
    }
}

.profile-box {
    margin-top: 48px;
    display: flex;
    padding: 20px 0px;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 50px 100px;
    flex-wrap: wrap;

    border-radius: 8px;
    background-color: var(--vp-c-gray-3);
}
</style>