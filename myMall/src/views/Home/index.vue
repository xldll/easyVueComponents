<template>
  <div class="home">
    <div class="header">
        <div class="search">
            <div class="searchIcon">
                <svg-icon class="search-icon" icon-class="search"></svg-icon>
            </div>
            <div class="search-keywords">搜索 关键词</div>
        </div>
        <svg-icon class="service-icon" icon-class="customer-service"></svg-icon>
    </div>
    <div class="banner">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(imgUrl,index) in images" :key="index">
                <img v-lazy="imgUrl" />
            </van-swipe-item>
        </van-swipe>
    </div>
  </div>
</template>

<script>
import SvgIcons from '../../components/SvgIcon.vue'
export default {
  components: { SvgIcons },
  name: 'Home',
  data () {
    return {
      images: [
        require('@/assets/imgs/banner1.jpg'),
        require('@/assets/imgs/banner2.jpg'),
        require('@/assets/imgs/banner3.jpg')
      ]
    }
  }
}
</script>
<style scoped>
.banner{
    width: 100%;
}
.banner img{
    width: 100%;
    height: 250px;
}
.header{
    position: fixed;
    top: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    box-sizing: border-box;
    z-index: 999;
}
.search{
    display: flex;
    width: 90%;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border-radius: 6px;
}
.search-keywords{
    box-sizing: border-box;
    font-size: 16px;
    color: #999;
    padding-left: 50px;
}
.search-icon{
    max-width: 22px;
    max-height: 22px;
    padding: 8px 10px;
}
</style>
