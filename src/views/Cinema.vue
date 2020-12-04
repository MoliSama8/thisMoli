<template>
    <div id="main">
        <Hearder title="神影影院"></Hearder>
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">
                    全城<i class="fa fa-caret-down"></i>
                </div>
                <div class="city_switch">
                    品牌<i class="fa fa-caret-down"></i>
                </div>
                <div class="city_switch">
                    特色<i class="fa fa-caret-down"></i>
                </div>
            </div>
            <cilist></cilist>
        </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
import Hearder from '../components/header.vue'
import TabBar from '../components/tab.vue';
import cilist from '../components/CiList.vue';
export default {
    components:{
        Hearder,
        TabBar,
        cilist
    }
}
</script>
<style scoped>
    #content .cinema_menu{
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: white;
    }
</style>