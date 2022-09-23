<template>
    <div class="display-setting title-screen">
        <h1>夜班歸途</h1>
        <slot name="button"></slot>
    </div>
</template>

<style lang="scss" scoped>
    .title-screen{
        background-image: url("../assets/title.jpg");
        background-position: center;
        background-size: cover;
        position: relative;
        h1{
            position: absolute;
            color: whitesmoke;
            font-size: 10rem;
            top: 0;
            right: 100px;
        }
    }
</style>
