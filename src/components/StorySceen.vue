<template>
    <div class="plot-setting">
        <slot></slot>
        <span><i class="fa-solid fa-caret-down"></i>請點擊滑鼠繼續</span>
    </div>
</template>

<style lang="scss">
/*對話框尺寸設定 */
.plot-setting {
    position: relative;
    background-color: white;
    opacity: 0.5;
    width: 1160px;
    height: 200px;
    margin: 0 auto;
    margin-bottom: 10px;
    padding: 0 0 20px 10px;

    p {
        font-size: 1.5rem;
    }

    span {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: darkred;
    }
}
</style>
