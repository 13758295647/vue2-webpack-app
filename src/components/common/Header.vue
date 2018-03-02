<template>
  <header class="header">
      <span class="place">杭州<i class="iconfont icon-unfold"></i></span>
      <div class="search">
          <i class="iconfont icon-sousuo"></i>
          <input class="search-input" :placeholder="history" />
      </div>
      <span class="add"><i class="iconfont icon-add"></i></span>
  </header>
</template>

<script>
    export default {
        name: 'Header',
        data(){
            return{
                history:'横店'
            }
        }
    }
</script>

<style>
    .header {
        background: #fcfcfc;
        height: 2.55rem;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2;
        line-height: 2.5rem;
        padding-left: 10px;
    }
    .header span{
        float: left;
        padding-left:5px;
    }
    .header .add{
        float:right;
        margin-right:16px;
    }
    .place{
        font-size:1rem;
    }
    .search {
        display: inline-block;
        float: left;
        color: #fff;
        font-size: 1rem;
        margin-left: 0.833rem;
        width: 16.5rem;
        margin-right: 0.833rem;
        border: 1px solid #8b8a8a;
        border-radius: 11px;
        height: 1.6rem;
        margin-top: 0.4rem;
        line-height: 1.6rem;
    }

    .search .icon-sousuo{
            float: left;
            margin:0 5px;
        }
    .search-input{
        border:none;
        outline: none;
        float: left;
        margin-top: 0.22rem;
        font-size: 0.85rem;
    }
    
</style>
