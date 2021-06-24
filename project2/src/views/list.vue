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
      <div class="banner">
        <div class="banner_top">
          <span style="color: #ffffff; font-size: 55px">万千歌手 尽在眼前</span>
        </div>
        <div class="banner_c">
          <span style="color: #ffffff; font-size: 25px"
            >登录查看你的关注歌手</span
          >
        </div>
        <div class="banner_b">
          <button
            style="
              width: 100%;
              height: 100%;
              font-size: 20px;
              background-color: black;
              color: white;
            "
          >
            立即登录
          </button>
        </div>
      </div>
      <div class="mingzhi" style="font-size: 14px">
        <div class="mingzhi_1">
          <ul>
            <li style="background-color: #31c27c">
              <a href="" style="color: white">热门</a>
            </li>
            <li><a href="">A</a></li>
            <li><a href="">B</a></li>
            <li><a href="">C</a></li>
            <li><a href="">D</a></li>
            <li><a href="">E</a></li>
            <li><a href="">F</a></li>
            <li><a href="">G</a></li>
            <li><a href="">H</a></li>
            <li><a href="">I</a></li>
            <li><a href="">J</a></li>
            <li><a href="">K</a></li>
            <li><a href="">L</a></li>
            <li><a href="">M</a></li>
            <li><a href="">N</a></li>
            <li><a href="">O</a></li>
            <li><a href="">P</a></li>
            <li><a href="">Q</a></li>
            <li><a href="">R</a></li>
            <li><a href="">S</a></li>
            <li><a href="">T</a></li>
            <li><a href="">U</a></li>
            <li><a href="">V</a></li>
            <li><a href="">W</a></li>
            <li><a href="">X</a></li>
            <li><a href="">Y</a></li>
            <li><a href="">Z</a></li>
            <li><a href="">#</a></li>
          </ul>
        </div>
        <div class="mingzhi_1" style="margin-top: 25px">
          <ul>
            <li style="background-color: #31c27c">
              <a href="" style="color: white">全部</a>
            </li>
            <li><a href="">内地</a></li>
            <li><a href="">港台</a></li>
            <li><a href="">欧美</a></li>
            <li><a href="">韩国</a></li>
            <li><a href="">日本</a></li>
            <li><a href="">其他</a></li>
          </ul>
        </div>
        <div class="mingzhi_1" style="margin-top: 25px">
          <ul>
            <li style="background-color: #31c27c">
              <a href="" style="color: white">全部</a>
            </li>
            <li><a href="">男</a></li>
            <li><a href="">女</a></li>
            <li><a href="">组合</a></li>
          </ul>
        </div>
        <div class="mingzhi_1" style="margin-top: 25px">
          <ul>
            <li style="background-color: #31c27c">
              <a href="" style="color: white">全部</a>
            </li>
            <li><a href="">流行</a></li>
            <li><a href="">嘻哈</a></li>
            <li><a href="">摇滚</a></li>
            <li><a href="">电子</a></li>
            <li><a href="">说唱</a></li>
            <li><a href="">情歌</a></li>
            <li><a href="">R&B</a></li>
            <li><a href="">民谣</a></li>
            <li><a href="">怀旧</a></li>
            <li><a href="">古典</a></li>
            <li><a href="">乡村</a></li>
            <li><a href="">蓝调</a></li>
          </ul>
        </div>
      </div>
      <div class="zhanshitu">
        <div class="zhanshitu_yi">
          <div class="zhanshitu_yi_1">
            <div class="zhanshitu_yi_1_t"></div>
            <div class="zhanshitu_yi_1_b">
              <span>朱茵</span>
            </div>
          </div>
          <div class="zhanshitu_yi_1" style="margin-left: 100px">
            <div class="zhanshitu_yi_2_t"></div>
            <div class="zhanshitu_yi_1_b">
              <span>黄霄云</span>
            </div>
          </div>
          <div class="zhanshitu_yi_1" style="margin-left: 100px">
            <div class="zhanshitu_yi_3_t"></div>
            <div class="zhanshitu_yi_1_b">
              <span>林俊杰</span>
            </div>
          </div>
          <div class="zhanshitu_yi_1" style="margin-left: 100px">
            <div class="zhanshitu_yi_4_t"></div>
            <div class="zhanshitu_yi_1_b">
              <span>邓紫棋</span>
            </div>
          </div>
          <div class="zhanshitu_yi_1" style="margin-left: 100px">
            <div class="zhanshitu_yi_5_t"></div>
            <div class="zhanshitu_yi_1_b">
              <span>郭碧婷</span>
            </div>
          </div>
        </div>
        <div class="zhanshitu_yi" style="margin-top: 60px">
          <div class="zhanshitu_yi_1">
            <div class="zhanshitu_yi_6_t"></div>
            <div class="zhanshitu_yi_1_b">
              <span>周杰伦</span>
            </div>
          </div>
          <div class="zhanshitu_yi_1" style="margin-left: 100px">
            <div class="zhanshitu_yi_7_t"></div>
            <div class="zhanshitu_yi_1_b">
              <span>薛之谦</span>
            </div>
          </div>
          <div class="zhanshitu_yi_1" style="margin-left: 100px">
            <div class="zhanshitu_yi_8_t"></div>
            <div class="zhanshitu_yi_1_b">
              <span>赵英俊</span>
            </div>
          </div>
          <div class="zhanshitu_yi_1" style="margin-left: 100px">
            <div class="zhanshitu_yi_9_t"></div>
            <div class="zhanshitu_yi_1_b">
              <span>方大同</span>
            </div>
          </div>
          <div class="zhanshitu_yi_1" style="margin-left: 100px">
            <div class="zhanshitu_yi_10_t"></div>
            <div class="zhanshitu_yi_1_b">
              <span>鞠婧祎</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bangdan">
        <div
          class="bangdan_1"
          style="margin-left: 40px"
          v-for="(v, k) in list"
          :key="v.id"
          :tt="k"
        >
          <ul>
            <li>
              <a href="javascript:void(0)" @click="info(v.id)">{{ v.sname }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="fenye">
        <ul>
          <li style="background-color: #31c27c">
            <a href="" style="color: white">1</a>
          </li>
          <li><a href="">2</a></li>
          <li><a href="">3</a></li>
          <li><a href="">...</a></li>
          <li><a href="">281</a></li>
          <li><a href="">&gt;</a></li>
        </ul>
      </div>
      <div class="footer">
        <div class="footer_t">
          <div class="footer_t1">
            <div class="footer_t1_t">
              <span>下载QQ音乐客户端</span>
            </div>
            <div class="footer_t1_c">
              <div class="footer_t1_c1">
                <div class="footer_t1_c1_t"></div>
                <div class="footer_t1_c1_b">
                  <span>PC版</span>
                </div>
              </div>
              <div class="footer_t1_c2">
                <div class="footer_t1_c2_t"></div>
                <div class="footer_t1_c2_b">
                  <span>Mac版</span>
                </div>
              </div>
              <div class="footer_t1_c3">
                <div class="footer_t1_c3_t"></div>
                <div class="footer_t1_c3_b">
                  <span>Android版</span>
                </div>
              </div>
              <div class="footer_t1_c4">
                <div class="footer_t1_c4_t"></div>
                <div class="footer_t1_c4_b">
                  <span>iphone版</span>
                </div>
              </div>
            </div>
          </div>
          <div class="footer_t2">
            <div class="footer_t2_t">
              <span>特色产品</span>
            </div>
            <div class="footer_t2_c">
              <div class="footer_t2_c1">
                <div class="footer_t2_c1_t"></div>
                <div class="footer_t2_c1_b">
                  <span>全民K歌</span>
                </div>
              </div>
              <div class="footer_t2_c2">
                <div class="footer_t2_c2_t"></div>
                <div class="footer_t2_c2_b">
                  <span>Sound</span>
                </div>
              </div>
              <div class="footer_t2_c3">
                <div class="footer_t2_c3_t"></div>
                <div class="footer_t2_c3_b">
                  <span>Qplay</span>
                </div>
              </div>
              <div class="footer_t2_c4">
                <div class="footer_t2_c4_t"></div>
                <div class="footer_t2_c4_b">
                  <span>直播伴侣</span>
                </div>
              </div>
            </div>
          </div>
          <div class="footer_t3">
            <div class="footer_t3_t">
              <span>合作链接</span>
            </div>
            <div class="footer_t3_c">
              <div class="footer_t3_c_1">
                <ul>
                  <li>CJ ENM</li>
                  <li>最新版QQ</li>
                  <li>QQ浏览器</li>
                  <li>CJ ENM</li>
                </ul>
              </div>
              <div class="footer_t3_c_2">
                <ul>
                  <li>腾讯视频</li>
                  <li>腾讯社交广告</li>
                  <li>腾讯微云</li>
                  <li>智能电视网</li>
                </ul>
              </div>
              <div class="footer_t3_c_3">
                <ul>
                  <li>手机QQ空间</li>
                  <li>电脑管家</li>
                  <li>腾讯云</li>
                  <li>当贝市场</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="weizi">
          <span>开放平台</span>
          <span style="float: right">TME集团官网</span>
        </div>
        <div class="weizi2">
          <span>QQ开放平台 腾讯音乐人</span>
          <span style="float: right"
            >腾讯音乐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          >
        </div>
        <div class="end">
          <div class="end1">
            <ul>
              <li><a href="#">关于腾讯</a></li>
              <li><span>|</span></li>
              <li><a href="#">About Tencent</a></li>
              <li><span>|</span></li>
              <li><a href="#">服务条款</a></li>
              <li><span>|</span></li>
              <li><a href="#">用户服务协议</a></li>
              <li><span>|</span></li>
              <li><a href="#">隐私政策</a></li>
              <li><span>|</span></li>
              <li><a href="">权利声明</a></li>
              <li><span>|</span></li>
              <li><a href="">广告服务</a></li>
              <li><span>|</span></li>
              <li><a href="#">腾讯招聘</a></li>
              <li><span>|</span></li>
              <li><a href="#">客服中心</a></li>
              <li><span>|</span></li>
              <li><a href="#">网站导航</a></li>
            </ul>
          </div>
          <div class="end2">
            <span>Copyright&copy;1998-2021 Tencent All Rights Reserved</span>
          </div>
          <div class="end3">
            <span>腾讯公司 版权所有 腾讯网络文化经营许可证</span>
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
import { getSingerall } from "../request/api.js";
export default {
  name: "Singer",
  data() {
    return {
      list: [],
      id:""
    };
  },
  methods: {
    info(id) {
      this.$router.push("/info/" + id);
    },
  },
  created() {
    getSingerall().then((res) => {
      console.log(res);
      this.list = res;
      console.log(this.list);
    });
  },
};
</script>

<style scoped>
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
@font-face {
  font-family: "iconfont";
  /* Project id 2605510 */
  src: url("http://at.alicdn.com/t/font_2605510_nzhg4omnsh.woff2?t=1623841002985")
      format("woff2"),
    url("http://at.alicdn.com/t/font_2605510_nzhg4omnsh.woff?t=1623841002985")
      format("woff"),
    url("http://at.alicdn.com/t/font_2605510_nzhg4omnsh.ttf?t=1623841002985")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
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
  background: url("/status/img/logo.png") 2px 21px no-repeat;
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
  width: 180px;
  height: 40px;
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
  background: url("/status/img/1.jpg") 0px 0px no-repeat;
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
  background: url("/status/img/mytag.png") -449px -79px no-repeat;
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
  background: url("/status/img/mytag.png") -454px -79px no-repeat;
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
  height: 370px;
  background-color: #000;
  border: 1px solid white;
}

.banner_top {
  width: 500px;
  height: 70px;
  margin-left: 530px;
  margin-top: 95px;
}

.banner_c {
  width: 300px;
  height: 30px;
  margin-left: 630px;
  margin-top: 15px;
}

.banner_b {
  width: 150px;
  height: 50px;
  border: 1px solid white;
  margin-left: 680px;
  margin-top: 30px;
}

.mingzhi {
  width: 100%;
  height: 200px;
  margin-top: 50px;
}

.mingzhi_1 {
  width: 1200px;
  height: 30px;
  margin-left: 175px;
}

.mingzhi_1 ul li {
  float: left;
  margin-left: 15px;
  padding: 5px;
}

.mingzhi_1 ul li:hover {
  background-color: #31c27c;
}

.mingzhi_1 a {
  color: #000;
}

.zhanshitu {
  width: 100%;
  height: 500px;
  margin-top: 70px;
}

.zhanshitu_yi {
  width: 100%;
  height: 210px;
}

.zhanshitu_yi_1 {
  width: 150px;
  height: 200px;
  margin-left: 170px;
  float: left;
}

.zhanshitu_yi_1_t {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url("/status/img/T001R150x150M00000067r4p0wBDDN.jpg") 0px 0px
    no-repeat;
  background-size: 100% 100%;
}

.zhanshitu_yi_1_b {
  width: 100px;
  height: 30px;
  text-align: center;
  margin-top: 15px;
}

.zhanshitu_yi_1_b {
  margin-left: 22px;
}

.zhanshitu_yi_2_t {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url("/status/img/T001R150x150M000000oCQfT3kdonw.jpg") 0px 0px
    no-repeat;
  background-size: 100% 100%;
}

.zhanshitu_yi_3_t {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url("/status/img/T001R150x150M000001BLpXF2DyJe2.jpg") 0px 0px
    no-repeat;
  background-size: 100% 100%;
}

.zhanshitu_yi_4_t {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url("/status/img/T001R150x150M000001fNHEf1SFEFN.jpg") 0px 0px
    no-repeat;
  background-size: 100% 100%;
}

.zhanshitu_yi_5_t {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url("/status/img/T001R150x150M000001r6H560AOJMq.jpg") 0px 0px
    no-repeat;
  background-size: 100% 100%;
}

.zhanshitu_yi_6_t {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url("/status/img/T001R150x150M0000025NhlN2yWrP4.jpg") 0px 0px
    no-repeat;
  background-size: 100% 100%;
}

.zhanshitu_yi_7_t {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url("/status/img/T001R150x150M000002J4UUk29y8BY.jpg") 0px 0px
    no-repeat;
  background-size: 100% 100%;
}

.zhanshitu_yi_8_t {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url("/status/img/T001R150x150M000002sfdNU1f3nHD.jpg") 0px 0px
    no-repeat;
  background-size: 100% 100%;
}

.zhanshitu_yi_9_t {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url("/status/img/T001R150x150M000002YetSZ06c9c9.jpg") 0px 0px
    no-repeat;
  background-size: 100% 100%;
}

.zhanshitu_yi_10_t {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url("/status/img/T001R150x150M000003iPzNg35cWzp.jpg") 0px 0px
    no-repeat;
  background-size: 100% 100%;
}

.bangdan {
  width: 100%;
}

.bangdan_1 {
  width: 220px;
  float: left;
  margin-left: 90px !important;
}

.bangdan_1 ul li {
  margin-top: 20px;
}

.bangdan_1 ul li a {
  color: #000;
  font-size: 14px;
}

.fenye {
  width: 550px;
  float: left;
  height: 50px;
  margin-left: 290px;
  margin-top: 50px;
}

.fenye ul li {
  float: left;
  margin-left: 30px;
  padding: 10px;
}

.fenye ul li:hover {
  background-color: #31c27c;
}

.fenye ul li a {
  color: #a2a7b0;
}

.footer {
  width: 100%;
  height: 700px;
  background-color: #333333;
  margin-top: 50px;
  float: left;
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