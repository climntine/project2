<template>
  <div>
    <div class="box">
      <div class="head">
        <div class="head_left"></div>
        <div class="head_cen">
          <ul>
            <li><a href="/index">音乐馆</a></li>
            <li><a href="/list">我的音乐</a></li>
            <li><a href="/client">客户端</a></li>
            <li><a href="#">开放平台</a></li>
            <li><a href="#">VIP</a></li>
          </ul>
        </div>
        <div class="head_right">
          <div class="head_right_l">
            <input type="text" placeholder="搜索音乐 MV 歌单 用户" />
          </div>
          <div class="head_right_r"></div>
        </div>
        <a href="/PersonalCenter">
          <div class="touxiang"></div>
        </a>
        <div class="head_b1">
          <div class="head_b1_l">
            <input type="submit" value="开通VIP" />
          </div>
          <div class="head_b1_r"></div>
        </div>
        <div class="head_b2">
          <div class="head_b2_l">
            <input type="submit" value="充值" />
            <div style="clear: left"></div>
          </div>
          <div class="head_b2_r"></div>
        </div>
      </div>
      <hr color="#F2F2F2" width="83%" />
      <div class="head2">
        <ul>
          <li>
            <a href="/index">首页</a>
          </li>
          <li>
            <a href="/list">歌手</a>
          </li>
          <li>
            <a href="/album">新碟</a>
          </li>
          <li>
            <a href="RankingList">排行榜</a>
          </li>
          <li>
            <a href="/Classification">分类歌单</a>
          </li>
          <li>
            <a href="/MV">MV</a>
          </li>
          <li>
            <a href="/NumberAlbum">数字专辑</a>
          </li>
        </ul>
      </div>
      <div class="banner" v-for="(v, k) in list" :key="v.id" :tt="k">
        <div class="banner_t">
          <span>{{ v.tname }}</span>
        </div>
        <div class="banner_c">
          <ul>
            <li><a href="">为你推荐</a></li>
            <li><a href="">官方歌单</a></li>
            <li><a href="">情歌</a></li>
            <li><a href="">网络歌曲</a></li>
            <li><a href="">经典</a></li>
            <li><a href="">KTV热歌</a></li>
          </ul>
        </div>
        <div class="banner_b">
          <div class="banner_b_1">
            <div class="banner_b_1_t">
              <img
                src="/status/img/aaf5c9b3f4396d8e6ea67c1f348be9c.png"
                width="100%"
                height="100%"
              />
            </div>
            <div class="banner_b_1_c">
              <span><a href="/ListInfo">[VIP]绿砖专属欧美佳曲欣赏</a></span>
            </div>
            <div class="banner_b_1_b">
              <span><a href="/ListInfo">播放量:&nbsp;&nbsp;201万</a></span>
            </div>
          </div>
          <div class="banner_b_1 tu">
            <div class="banner_b_1_t">
              <img
                src="/status/img/aad9cccbc7772d04e6c98a3415d6d25.png"
                width="100%"
                height="100%"
              />
            </div>
            <div class="banner_b_1_c">
              <span><a href="/ListInfo">说唱：做自己的宝贝 去兴风作浪</a></span>
            </div>
            <div class="banner_b_1_b">
              <span><a href="/ListInfo">播放量:&nbsp;&nbsp;1200万</a></span>
            </div>
          </div>
          <div class="banner_b_1 tu">
            <div class="banner_b_1_t">
              <img
                src="/status/img/70171f8bd761de7d2631d7cdc1cd39c.png"
                width="100%"
                height="100%"
              />
            </div>
            <div class="banner_b_1_c">
              <span><a href="/ListInfo">[韩语节奏控]把耳朵叫醒</a></span>
            </div>
            <div class="banner_b_1_b">
              <span><a href="/ListInfo">播放量:&nbsp;&nbsp;90万</a></span>
            </div>
          </div>
          <div class="banner_b_1 tu">
            <div class="banner_b_1_t">
              <img
                src="/status/img/72747f4b377d7203f52c3a510c3c32c.png"
                width="100%"
                height="100%"
              />
            </div>
            <div class="banner_b_1_c">
              <span><a href="/ListInfo">车载必备|节奏金曲</a></span>
            </div>
            <div class="banner_b_1_b">
              <span><a href="/ListInfo">播放量:&nbsp;&nbsp;5万</a></span>
            </div>
          </div>
          <div class="banner_b_1 tu">
            <div class="banner_b_1_t">
              <img
                src="/status/img/269a880fcbc548db0167185c4752df6.png"
                width="100%"
                height="100%"
              />
            </div>
            <div class="banner_b_1_c">
              <span><a href="/ListInfo">睡眠轻音|声随凤舞|清欢入梦</a></span>
            </div>
            <div class="banner_b_1_b">
              <span><a href="/ListInfo">播放量:&nbsp;&nbsp;10万</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="extra">
      <div class="logo">
        <img src="/status/img/logo.png" alt="" />
      </div>
      <div class="extra_m">千万高品质曲库尽享</div>
      <a href="" class="extra_b"><i class="iconfont">&#xe6e1;</i>客户端下载</a>
    </div>
  </div>
</template>

<script>
import { getType } from "../request/api.js";
export default {
  name: "Type",
  data() {
    return {
      list: [],
    };
  },
  created() {
    getType().then((res) => {
      console.log(res);
      this.list = res;
      console.log(this.list);
    });
  },
};
</script>

<style scoped>
@font-face {
    font-family: "iconfont";
    /* Project id 2605510 */
    src: url("http://at.alicdn.com/t/font_2605510_nzhg4omnsh.woff2?t=1623841002985") format("woff2"),
        url("http://at.alicdn.com/t/font_2605510_nzhg4omnsh.woff?t=1623841002985") format("woff"),
        url("http://at.alicdn.com/t/font_2605510_nzhg4omnsh.ttf?t=1623841002985") format("truetype");
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
.extra {
  width: 200px;
  height: 170px;
  position: fixed;
  background-color: #fff;
  float: left;
  top: 220px;
  right: 0px;
  box-shadow: 0px 0px 7px #ccc;
}
.logo {
  width: 120px;
  height: 30px;
  margin: 0 auto;
  margin-top: 30px;
}
.logo img {
  width: 100%;
  height: 100%;
}
.extra_m {
  color: #aaa;
  font-size: 14px;
  width: 130px;
  height: 30px;
  margin: 0 auto;
  margin-top: 15px;
}
.extra_b {
  display: block;
  width: 130px;
  margin: 0 auto;
  margin-top: 10px;
  height: 30px;
  text-decoration: none;
  color: #fff;
  text-align: center;
  line-height: 30px;
  background-color: #31c27c;
}
* {
  margin: 0px;
  padding: 0px;
}
.box {
  width: 100%;
  margin: 0px auto;
}
.head {
  width: 100%;
  height: 90px;
}
.head_left {
  width: 216px;
  height: 90px;

  float: left;
  margin-left: 180px;
  background: url("../../public/status/img/logo.png") 2px 21px no-repeat;
}
.head_cen {
  width: 420px;
  height: 90px;

  float: left;
  margin-left: 40px;
}
ul li {
  list-style: none;
}
.head_cen ul li {
  float: left;
}
a {
  text-decoration: none;
}
.head_cen ul li a {
  color: #000;
  line-height: 90px;
  font-size: 18px;
  padding: 12px;
}
.head_cen ul li:hover {
  background-color: #31c27c;
}
.head_cen ul li a:hover {
  background-color: #31c27c;
}
.head_right {
  width: 220px;
  height: 40px;
  border: 1px solid #c9c9c9;
  float: left;
  margin-left: 40px;
  margin-top: 25px;
  border-radius: 3px;
}
.head_right_l {
  width: 180px;
  height: 40px;
  float: left;
}
.head_right_l input {
  height: 40px;
  width: 180px;
  line-height: 40px;
  border: 0px;
  font-size: 17px;
}
.head_right_r {
  width: 30px;
  height: 40px;

  float: right;
  background: url("../../public/status/img/1.png") 1px -53px no-repeat;
}
.touxiang {
  width: 40px;
  height: 40px;

  float: left;
  margin-left: 20px;
  margin-top: 25px;
  background: url("../../public/status/img/touxiang.jpg") 0px 0px no-repeat;
  border-radius: 50%;
}
.head_b1 {
  width: 110px;
  height: 40px;
  border: 1px solid #c9c9c9;
  float: left;
  margin-left: 20px;
  margin-top: 25px;
  border-radius: 3px;
}
.head_b1_l {
  width: 80px;
  height: 40px;

  float: left;
}
.head_b1_l input {
  width: 80px;
  height: 40px;
  background-color: #31c27c;
  color: #eee;
  border: 0px;
}
.head_b1_r {
  width: 25px;
  height: 40px;
  float: right;
  background: url("../../public/status/img/mytag.png") -449px -79px no-repeat;
}
.head_b2 {
  width: 100px;
  height: 40px;
  border: 1px solid #c9c9c9;
  float: left;
  margin-left: 20px;
  margin-top: 25px;
  border-radius: 3px;
}
.head_b2_l {
  width: 70px;
  height: 40px;

  float: left;
}
.head_b2_l input {
  width: 70px;
  height: 40px;
  background-color: #ffffff;
  border: 0px;
}
.head_b2_r {
  width: 20px;
  height: 40px;
  float: right;
  background: url("../../public/status/img/mytag.png") -454px -79px no-repeat;
}
hr {
  margin-left: 180px;
}
.head2 {
  width: 100%;
  height: 50px;
}
.head2 ul li {
  float: left;
  line-height: 50px;
  margin-left: 40px;
}
.head2 a {
  color: black;
  font-size: 15px;
}
.head2_1 {
  margin-left: 100px;
}
.head2 ul {
  margin-left: 430px;
}
.banner {
  width: 100%;
  height: 500px;
  background-color: #f3f3f3;
  overflow: hidden;
}
.banner_t {
  width: 300px;
  height: 100px;

  margin: 0px auto;
  margin-top: 20px;
}
.banner_t span {
  font-size: 28px;
  font-weight: bold;
  line-height: 100px;
  margin-left: 55px;
}
.banner_c {
  width: 550px;
  height: 50px;

  margin: 0px auto;
}
.banner_c ul li {
  float: left;
  padding-left: 35px;
}
.banner_c ul li a {
  color: #000;
}
.banner_b {
  width: 1200px;
  height: 300px;
  margin: 0px auto;
}
.banner_b_1 {
  width: 232px;
  height: 90%;

  float: left;
}
.banner_b_1_t {
  width: 100%;
  height: 78%;
}
.banner_b_1_c {
  width: 100%;
  height: 10%;

  margin-top: 5px;
}
.banner_b_1_c span a {
  color: #000;
  font-size: 14px;
}
.banner_b_1_b {
  width: 100%;

  height: 10%;
}
.banner_b_1_b a {
  font-size: 14px;
  color: #999999;
}
.tu {
  margin-left: 10px;
}
.xinge {
  width: 100%;
  height: 520px;
}
.xingetu {
  width: 100%;
  height: 330px;
  margin-top: 10px;
}
.xingetu_diyihang {
  width: 80%;
  height: 100px;
  margin-left: 150px;
  margin-top: 0px;
}
.diyihang_1 {
  width: 33%;
  height: 100%;
  float: left;
}
.hangyi_1_tu {
  width: 110px;
  height: 100%;
  float: left;
}
.hangyi_1_zi {
  width: 240px;
  height: 80%;

  float: left;
}
.zi_left {
  width: 100px;
  height: 100%;
  float: left;
  margin-top: 25px;
  margin-left: 10px;
}
.zi_left_t {
  width: 100%;
  height: 30%;
}
.zi_left_t span {
  margin-top: 10px;
}
.zi_left_b {
  width: 100%;
  height: 50%;
}
.zi_right {
  width: 50px;
  height: 50%;
  float: right;
  margin-top: 35px;
}
.jingcai {
  width: 100%;
  height: 370px;
  margin-top: 10px;
  background-color: #f3f3f3;
}
.jingcaitu {
  width: 100%;
  height: 240px;
}
.caitu1 {
  width: 578px;
  height: 100%;

  float: left;
  margin-left: 150px;
}
.caitu2 {
  width: 578px;
  height: 100%;

  float: left;
  margin-left: 20px;
}
.xindie {
  width: 100%;
  height: 750px;
}
.xindie_c {
  width: 100%;
  height: 620px;
  margin-top: 10px;
}
.xindie_c_l {
  width: 1170px;
  height: 300px;

  margin-left: 150px;
}
.xindie_c_l_1 {
  width: 220px;
  height: 100%;
  float: left;
}
.xindie_tu {
  width: 100%;
  height: 230px;
}
.xindie_zi {
  width: 100%;
  height: 40px;
  margin-top: 15px;
}
.paihangbang {
  width: 100%;
  height: 630px;
  background-color: #f3f3f3;
  margin-top: 40px;
}
.bang_c {
  width: 100%;
  height: 500px;
}
.bang_c_1 {
  width: 220px;
  height: 100%;
  background-color: #d87b96;
  float: left;
  margin-left: 150px;
}
.bang_c_1_t {
  width: 100%;
  height: 30px;
  margin-top: 50px;
}
.bang_c_1_t_s {
  width: 100%;
  height: 50px;
}
.bang_zi {
  width: 100%;
  height: 50px;
  margin-top: 30px;
}
.mv {
  width: 100%;
  height: 650px;
}
.mv_c {
  width: 100%;
  height: 470px;
}
.mv_c_t {
  width: 100%;
  height: 230px;
}
.mv_c_t_1 {
  width: 220px;
  height: 100%;
  float: left;
  margin-left: 150px;
}
.mv_c_t_1_t {
  width: 100%;
  height: 120px;
}
.mv_zi {
  width: 100%;
}
.footer {
  width: 100%;
  height: 700px;
  margin-top: 10px;
  background-color: #333333;
}
.footer_t {
  width: 100%;
  height: 250px;
}
.footer_t1 {
  width: 420px;
  height: 200px;

  margin-left: 100px;
  margin-top: 40px;
  float: left;
}
.footer_t1_t {
  width: 100%;
  height: 50px;
}
.footer_t1_t span {
  line-height: 50px;
  color: #c9c9c9;
}
.footer_t1_c {
  width: 100%;
  height: 200px;
}
.footer_t1_c1 {
  width: 90px;
  margin-top: 20px;
  height: 100px;

  float: left;
}
.footer_t1_c1_t {
  width: 100%;
  height: 60px;
  background: url("../../public/status/img/fbf292c98217d04e67f063be771715c.png")
    0px 0px no-repeat;
}
.footer_t1_c1_b {
  width: 100%;
  height: 30px;
}
.footer_t1_c1_b span {
  color: #c9c9c9;
  margin-left: 10px;
}
.footer_t1_c2 {
  width: 90px;
  margin-top: 20px;
  height: 100px;

  float: left;
  margin-left: 10px;
}
.footer_t1_c2_t {
  width: 100%;
  height: 60px;
  background: url("../../public/status/img/843ceaaaee6ad6cfa1196e1057f5cb0.png")
    0px -4px no-repeat;
}
.footer_t1_c2_b {
  width: 100%;
  height: 30px;
}
.footer_t1_c2_b span {
  color: #c9c9c9;
  margin-left: 10px;
}
.footer_t1_c3 {
  width: 90px;
  margin-top: 20px;
  height: 100px;

  float: left;
  margin-left: 10px;
}
.footer_t1_c3_t {
  width: 100%;
  height: 60px;
  background: url("../../public/status/img/af1d37b603ebb634cf398999d6286f4.png")
    5px -5px no-repeat;
}
.footer_t1_c3_b {
  width: 100%;
  height: 30px;
}
.footer_t1_c3_b span {
  color: #c9c9c9;
  margin-left: 10px;
}
.footer_t1_c4 {
  width: 90px;
  margin-top: 20px;
  height: 100px;

  float: left;
  margin-left: 10px;
}
.footer_t1_c4_t {
  width: 100%;
  height: 60px;
  background: url("../../public/status/img/2ebb857a9623b3438f96e9dffd1c17a.png")
    0px -2px no-repeat;
}
.footer_t1_c4_b {
  width: 100%;
  height: 30px;
}
.footer_t1_c4_b span {
  color: #c9c9c9;
  margin-left: 10px;
}
.footer_t2 {
  width: 420px;
  height: 200px;

  margin-left: 50px;
  margin-top: 40px;
  float: left;
}
.footer_t2_t {
  width: 100%;
  height: 50px;
}
.footer_t2_t span {
  line-height: 50px;
  color: #c9c9c9;
}
.footer_t2_c {
  width: 100%;
  height: 150px;
}
.footer_t2_c1 {
  width: 90px;
  margin-top: 20px;
  height: 100px;

  float: left;
  margin-left: 10px;
}
.footer_t2_c1_t {
  width: 100%;
  height: 60px;
  background: url("../../public/status/img/f1c49d2c12536eeb36e56958785ac10.png") -16px -4px
    no-repeat;
}
.footer_t2_c1_b {
  width: 100%;
  height: 30px;
}
.footer_t2_c1_b span {
  color: #c9c9c9;
  margin-left: 10px;
}
.footer_t2_c2 {
  width: 90px;
  margin-top: 20px;
  height: 100px;

  float: left;
  margin-left: 10px;
}
.footer_t2_c2_t {
  width: 100%;
  height: 60px;
  background: url("../../public/status/img/0390aa6c625952f119da529c487bc47.png") -4px -4px
    no-repeat;
}
.footer_t2_c2_b {
  width: 100%;
  height: 30px;
}
.footer_t2_c2_b span {
  color: #c9c9c9;
  margin-left: 10px;
}
.footer_t2_c3 {
  width: 90px;
  margin-top: 20px;
  height: 100px;

  float: left;
  margin-left: 10px;
}
.footer_t2_c3_t {
  width: 100%;
  height: 60px;
  background: url("../../public/status/img/2bae16968c3f6ab945c1a7606b98363.png") -9px -4px
    no-repeat;
}
.footer_t2_c3_b {
  width: 100%;
  height: 30px;
}
.footer_t2_c3_b span {
  color: #c9c9c9;
  margin-left: 10px;
}
.footer_t2_c4 {
  width: 90px;
  margin-top: 20px;
  height: 100px;

  float: left;
  margin-left: 10px;
}
.footer_t2_c4_t {
  width: 100%;
  height: 60px;
  background: url("../../public/status/img/bd63e209e2c96ba74e1c16e44b4661c.png")
    0px 1px no-repeat;
}
.footer_t2_c4_b {
  width: 100%;
  height: 30px;
  margin-top: 2px;
}
.footer_t2_c4_b span {
  color: #c9c9c9;
  margin-left: 10px;
}
.footer_t3 {
  width: 420px;
  height: 200px;

  margin-left: 50px;
  margin-top: 40px;
  float: left;
}
.footer_t3_t {
  width: 100%;
  height: 50px;
}
.footer_t3_t span {
  line-height: 50px;
  color: #c9c9c9;
}
.footer_t3_c {
  width: 100%;
  height: 150px;
}
.footer_t3_c_1 {
  width: 125px;
  height: 150px;

  float: left;
}
.footer_t3_c_2 {
  width: 125px;
  height: 150px;

  float: left;
  margin-left: 10px;
}
.footer_t3_c_3 {
  width: 125px;
  height: 150px;

  float: left;
  margin-left: 10px;
}
.footer_t3_c ul li {
  color: #c9c9c9;
  margin-top: 10px;
}
.weizi {
  width: 650px;
  height: 50px;
  margin-top: 180px;
  margin-left: 100px;
  float: left;
}
.weizi span {
  color: #c9c9c9;
}
.weizi2 {
  width: 650px;
  height: 50px;
  margin-left: 100px;
  margin-top: 250px;
}
.weizi2 span {
  color: #c9c9c9;
}
.end {
  width: 800px;
  height: 100px;

  margin-left: 360px;
  margin-top: 50px;
}
.end1 {
  width: 800px;
  height: 30px;
}
.end1 ul li {
  float: left;
  font-size: 12px;
  color: #c9c9c9;
  margin-left: 8px;
  line-height: 30px;
}
.end1 ul li a {
  color: #c9c9c9;
}
.end2 {
  width: 800px;
  height: 30px;
}
.end2 span {
  color: #c9c9c9;
  font-size: 12px;
  margin-left: 200px;
}
.end3 {
  width: 800px;
  height: 30px;
}
.end3 span {
  color: #c9c9c9;
  font-size: 12px;
  margin-left: 230px;
}
</style>