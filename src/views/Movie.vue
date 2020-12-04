<template>
    <div id="main">
        <Header title="神影电影"></Header>
        <div id="content">
            <div class="movie_menu">
                <router-link tag="div" to="City" class="city_name">
                <span>北京</span><i class="fa fa-caret-down"></i>
                </router-link>
                <div class="hot_switch">
                    <router-link tag="div" to="nwoplaying" class="hot_item active">正在热映</router-link>
                    <router-link tag="div" to="comingsoon" class="hot_item">即将上映</router-link>
                </div>
                <router-link tag="div" to="search" class="search_entry">
                    <i class="fa fa-search"></i>
                </router-link>
            </div>
            
                <router-view></router-view>
        </div>
        <TabBar></TabBar>
    </div> 
</template>
<script>
import Header from '../components/header.vue'
import TabBar from '../components/tab.vue'
export default {
   components:{
        Header,
        TabBar,
        // City
   }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
    #content .movie_menu{
        width: 100%;
        height: 45px;
        border-bottom:1px solid #e6e6e6;
        display: flex;
        justify-content: space-between;
    }
    .movie_menu .city_name{
        margin-left: 20px;
        height: 100%;
        line-height: 45px;
    }
    .movie_menu .city_name.router-link-active{
        color:#ef4238;
        border-bottom: 2px solid #ef4238;
        box-sizing: border-box;
    }
    .movie_menu .hot_switch{
        display: flex;
        height: 100%;
        line-height: 45px;
    
    }
    .movie_menu .hot_item{
        font-size: 15px;
        color: #666;
        width: 80px;
        text-align: center;
        margin: 0 12px;
        font-weight: 700;
    }
    .movie_menu .hot_item.router-link-active{
        color: #ef4238;
    }
    .movie_menu .search_entry{
        margin-right: 20px;
        height: 100%;
        line-height: 45px;
    }
    .movie_menu .search_entry.router-link-active{
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
        box-sizing: border-box;
    }
    .movie_menu .search_entry i{
        font-size: 24px;
        color: red;
    }
</style>