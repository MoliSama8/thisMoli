<template>
    <div id="main">
        <Hearder title="我的神影"></Hearder>
        <div id="content">
            <Login></Login>
        </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
import Hearder from '../components/header.vue'
import TabBar from '../components/tab.vue';
import Login from '../components/Login.vue';
export default {
    components:{
        Hearder,
        TabBar,
        Login
    }
}
</script>