<template>
   <div class="block">
    <el-carousel height="400px" type="card">
      <el-carousel-item v-for="(item,index) in carouselImgs" :key="item">
        <img style='width:100%;height:100%' :src="carouselImgs[index]">
      </el-carousel-item>
    </el-carousel>
   <div style="margin:60px 100px;">
    <el-row :gutter="40">
    <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="el-card-div">
                <div class="img-div">
                <el-avatar style="width: 150px; height:150px" :src="carouselImgs[1]"></el-avatar>
                </div>
                <div class="msg-div">
                    <h3>地卜师</h3>
                    XXXXXXXX
                </div>
            </div>
            <div><el-button type="primary" plain class="button">查看详情</el-button></div>
        </el-card>
    </el-col>
     <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="el-card-div">
                <div class="img-div">
                <el-avatar style="width: 150px; height:150px" :src="carouselImgs[2]"></el-avatar>
                </div>
                <div class="msg-div">
                    <h3>屠夫</h3>
                    XXXXXXXX
                </div>
            </div>
            <div><el-button type="primary" plain class="button">查看详情</el-button></div>
        </el-card>
    </el-col>
     <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="el-card-div">
                <div class="img-div">
                <el-avatar style="width: 150px; height:150px" :src="carouselImgs[3]"></el-avatar>
                </div>
                <div class="msg-div">
                    <h3>双头龙</h3>
                    XXXXXXXX
                </div>
            </div>
            <div><el-button type="primary" plain class="button">查看详情</el-button></div>
        </el-card>
    </el-col>
     <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="el-card-div">
                <div class="img-div">
                <el-avatar style="width: 150px; height:150px" :src="carouselImgs[4]"></el-avatar>
                </div>
                <div class="msg-div">
                    <h3>女王</h3>
                    XXXXXXXX
                </div>
            </div>
            <div><el-button type="primary" plain class="button">查看详情</el-button></div>
        </el-card>
    </el-col>
    </el-row>
   </div>
  </div>
</template>

<script>
import first from '../assets/index/1.jpg'
import sec from '../assets/index/2.jpg'
import third from '../assets/index/3.jpg'
import four from '../assets/index/4.jpg'
import five from '../assets/index/5.jpg'

export default {
  name: 'index',
  data () {
    return {
        carouselImgs:[first,sec,third,four,five],
        currentDate: new Date()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .el-card-div{
      height:390px; 
      border-bottom: 1px solid #eaeefb;
      text-align: center;
  }

   .el-card:hover{
      margin-top: -20px;
  }

  .el-card-div .img-div{
      padding-top:20%;
      height: 200px;
  }

  .el-card-div .msg-div{
      height: 200px;
  }

  .button{
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    font-weight: 350;
    text-align: center;
    border: 0;
    padding: 0;
    width: 100%;
    bottom: 0;
    /* left: 0; */
    background-color: #fff;
    border-radius: 0 0 0 0;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .el-card {
    /* width: 250px; */
    height: 450px;
  }
</style>
