/*
* author: mamingyang@baofeng.com
* date: 2019/1/4
*/

<template>
    <div>
        <div>default</div>
        <el-button type="text" @click="open('https://www.google.cn')">打开Google</el-button>
    </div>
</template>

<script>
    export default {
        data: () => ({}),
        methods: {
            open(url) {
                window.open(url);
            },
        },
        created() {

        },
    };
</script>

<style lang="scss" scoped>

</style>