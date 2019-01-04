<template>
    <el-container>
        <m-aside></m-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: 'electron-test2',
        components: {
            MAside: () => import('./components/Aside'),
        },
        data: () => ({}),
        created() {
            console.log(__dirname);
        },
    };
</script>

<style lang="scss">
</style>
