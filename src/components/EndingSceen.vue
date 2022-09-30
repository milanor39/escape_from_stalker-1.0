<template>
    <div class="set">
        <div class="ending-background-setting">
            <h2>Game Over</h2>
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ending-background-setting {
    background-color: whitesmoke;
    opacity: 0.8;
    width: 600px;
    padding: 20px;
    margin-left: 20px;

    h2 {
        text-align: center;
        margin: 0;
        font-size: 3rem;
    }
}
</style>