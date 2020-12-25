<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="24">
            <el-menu :default-active="activeIndex"
                     class="el-menu-demo"
                     mode="horizontal"
                     @select="handleSelect">
              <img style="width: 40px; height: 40px;padding-top:10px"
                   :src="logo" />
              <el-menu-item index="/superbaby"
                            class="menu-item">大波波的地盘</el-menu-item>
              <el-menu-item index="/littlebaby"
                            class="menu-item">二蛋蛋的地盘</el-menu-item>
              <el-menu-item index="/oldbaby"
                            class="menu-item">小仙女的地盘</el-menu-item>
              <el-menu-item index="/index"
                            class="menu-item">欢迎来到我的酒馆</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
    <back-top></back-top>
    <el-footer class="footer">
        <div class="container">
            <div class="footer-main">
                <h4>链接</h4>
                <span class="footer-main-link">代码仓库</span>
                <span class="footer-main-link">更新日志</span>
                <span class="footer-main-link">常见问题</span>
                <span class="footer-main-link">合作厂商</span>
                <span class="footer-main-link">特别鸣谢</span>
            </div>
            <div class="footer-main">
                <h4>社区</h4>
                <span class="footer-main-link">在线讨论</span>
                <span class="footer-main-link">反馈建议</span>
                <span class="footer-main-link">贡献指南</span>
                <span class="footer-main-link">打赏支持</span>
            </div>
            <div class="footer-main">
                <h4>联系</h4>
                <span class="footer-main-link">电话：18852950813</span>
                <span class="footer-main-link">邮箱：451127413@qq.com</span>
                <span class="footer-main-link">地址：江苏省苏州市吴江区天城花园2期40幢</span>
            </div>
            <!-- <div class="footer-main" style="float:right;margin-right:0px;">
                <img style="width: 80px; height: 80px;"
                   src="./assets/logo.jpg" />
            </div> -->
        </div>
    </el-footer>
  </div>
</template>

<script>
import index from './assets/logo.jpg'
import littlebaby from './assets/littlebaby.jpeg'
import oldbaby from './assets/oldbaby.png'
import superbaby from './assets/superbaby.png'
import BackTop from './components/common/BackTop.vue'

export default {
  name: 'App',
  data() {
    return {
      activeIndex: '/index',
      logo: index,
    }
  },
  components:{
    BackTop
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key, 
      this.$router.push(key), 
      this.changeLogo()
    },
    changeLogo() {
      if (this.$route.path === '/index') {
        this.logo = index
      } else if (this.$route.path === '/littlebaby') {
        this.logo = littlebaby
      } else if (this.$route.path === '/oldbaby') {
        this.logo = oldbaby
      } else if (this.$route.path === '/superbaby') {
        this.logo = superbaby
      }
    },
  },
  created() {
    this.activeIndex = this.$route.path
    this.changeLogo()
  },
}
</script>

<style>
.menu-item {
  float: right !important;
}
.footer {
    background-color: #f7fbfd;
    /* background-color: #F9F9F9; */
    width: 100%;
    padding: 40px 200px;
    box-sizing: border-box;
    height: 340px !important;
}
.footer .container {
    box-sizing: border-box;
    width: auto;
}
.footer .footer-main {
    font-size: 0;
    display: inline-block;
    vertical-align: top;
    margin-right: 120px;
}
.footer .footer-main h4 {
    font-size: 18px;
    color: #333;
    line-height: 1;
    margin: 0 0 15px;
}
.footer .footer-main .footer-main-link {
    display: block;
    margin: 0;
    line-height: 2;
    font-size: 14px;
    color: #666;
    text-decoration: none;
    
}
.footer .footer-main .footer-main-link:hover{
    color:#333
}
</style>
