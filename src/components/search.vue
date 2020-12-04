<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="fa fa-search"></i>
                <input type="text">
            </div>
        </div>
        <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li>
                    <div class="img">
                        <img src="../assets/images/001.png" alt="">
                    </div>
                    <div class="info">
                        <p><span>机械师2</span><span>8.9</span></p>
                        <p>剧情，喜剧，犯罪</p>
                        <p>2020-6-30</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"Search"
}
</script>
<style>
    #content .search_body{
        flex: 1;
        overflow: auto
    }
    .search_body .search_input{
        padding: 8px 10px;
        background-color: #f5f5f5;
        border-bottom: 1px solid #e5e5e5;
    }
    .search_body .search_input_wrapper i{
        padding: 0 10px;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
        background-color: #fff;
        display: flex;
    }
    .search_body .search_input_wrapper input{
        border: none;
        font-size: 13px;
        color: #333;
        padding: 4px 0;
        outline:none;
    }
    .search_body .search_result h3{
        font-size: 15px;
        color: #999;
        padding: 9px 15px;
        border-bottom: 1px solid #e6e6e6;
    }
    .search_body .search_result .img{
        widows: 60px;
        float: left
    }
</style>