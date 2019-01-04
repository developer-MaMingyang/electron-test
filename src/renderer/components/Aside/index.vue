/*
* author: mamingyang@baofeng.com
* date: 2019/1/4
*/

<template>
    <el-aside>
        <el-menu :default-active="$route.path.substr(1)" router>
            <el-menu-item index="home">
                home
            </el-menu-item>
            <el-menu-item index="default">
                default
            </el-menu-item>
            <el-menu-item index="good">
                I'm feeling good today!
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        name: 'm-aside',
        data: () => ({}),
        methods: {},
        created() {

        },
    };
</script>

<style lang="scss" scoped>

</style>