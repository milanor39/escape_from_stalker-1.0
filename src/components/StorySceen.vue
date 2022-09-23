<template>
    <div class="plot-setting">
        <slot></slot>
    </div>
</template>

<style lang="scss">
/*對話框尺寸設定 */
.plot-setting {
    background-color: white;
    opacity: 0.5;
    width: 1160px;
    height: 200px;
    margin: 0 auto;
    margin-bottom: 10px;
    padding-left: 10px;

    p {
        font-size: 1.5rem;
    }
}
</style>
