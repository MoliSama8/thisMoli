<template>
    <header id="header">
        <h1>{{title}}</h1>
    </header>
</template>
<style scoped>
    #header{
        width: 100%;
        height: 50px;
        color: white;
        border: 1px solid #e54847;
        background: red;
        position: relative;
    }
    #header h1{
        font-size: 18px;
        text-align: center;
        line-height: 50px;
        font-weight: normal;
    }
    #header i{
        position: absolute;
        left: 5px;top: 50%;
        font-size: 26px;
    }
</style>
<script>
export default {
    name:"Header",
    props:{
        title:{
            type:String,
            default:'神影电影'
        }
    }
}
</script>