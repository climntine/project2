<template>
  <div>
    <div class="banner">
      <div class="menu">
        <div class="logo">
          <a href="/index">
            <img src="../../public/status/img/logo (1).png" alt="" />
          </a>
        </div>
        <div class="production">
          <div class="production_l"><a href="">产品动态</a></div>
          <div class="production_r"><a href="">下载</a></div>
        </div>
        <div class="introduction">
          <div class="introduction_l"><a href="">PC版介绍</a></div>
          <div class="introduction_m"><a href="">MAC版介绍</a></div>
          <div class="introduction_r"><a href="">轻听介绍</a></div>
        </div>
      </div>
      <div class="banner_download">
        <div class="mod_banner_pc">
          <span>QQ音乐 &nbsp;PC客户端</span><br />
          <div class="sea">海量高品质曲库尽享</div>
        </div>
        <a href="" id="download">立即下载</a>
      </div>
    </div>
    <div class="singer">
      <div class="song">
        <div class="sing_t">3000万正版歌曲</div>
        <div class="sing_m">拥有千万级丰富多元的音乐库内容</div>
        <div class="sing_b">你想听的都在这里</div>
      </div>
    </div>
    <div class="lyric">
      <div class="lyric_l">
        <div class="lyric_l_1">社交互动</div>
        <div class="lyric_l_2">分享你的音乐感动</div>
        <div class="lyric_l_3">歌词海报记录生活，单曲弹幕邂逅共鸣</div>
        <div class="lyric_l_4">更多惊喜等你来玩！</div>
      </div>
      <div class="lyric_r">
        <img src="../../public/status/img/lyric_phonebox.png" alt="" />
      </div>
    </div>
    <div class="lyric2">
      <div class="lyric_l2">
        <div class="lyric_l2_1">智能推荐</div>
        <div class="lyric_l2_2">随刻遇见喜欢的音乐</div>
        <div class="lyric_l2_3">懂你的猜你喜欢，最新最热独家首发、排行榜、</div>
        <div class="lyric_l2_4">电台，全方位的音乐推荐都在这里！</div>
      </div>
    </div>
    <div class="lyric3">
      <div class="lyric_l3">
        <div class="lyric_l3_1">多终端云同步</div>
        <div class="lyric_l3_2">分享你的音乐感动</div>
        <div class="lyric_l3_3">歌词海报记录生活，单曲弹幕邂逅共鸣</div>
        <div class="lyric_l3_4">更多惊喜等你来玩！</div>
      </div>
      <div class="phone">
        <img src="../../public/status/img/synchro_phone.png" alt="" />
      </div>
      <div class="computer">
        <div class="computer_t">
          <img src="../../public/status/img/synchro_mac1.png" alt="" />
        </div>
        <div class="computer_b">
          <img src="../../public/status/img/synchro_mac2.png" alt="" />
        </div>
      </div>
      <div class="mod_footer" id="frame_bottom">
        <!--p class="footermenu"><a target="new" href="http://www.tencent.com/">关于腾讯</a>|<a target="new" href="http://www.tencent.com/index_e.shtml">About Tencent</a>|<a target="new" href="http://www.qq.com/contract.shtml">服务条款</a>|<a target="new" href="http://adver.qq.com/">广告服务</a>|<a target="new" href="http://hr.tencent.com/">腾讯招聘</a>|<a target="new" href="http://service.qq.com/">客服中心</a>|<a target="new" href="http://www.qq.com/map/">网站导航</a></p-->
        <p class="copyrighten" id="data_p">Copyright © 1998 - 2021</p>
        <p class="copyrightzh">
          腾讯公司
          <a
            target="new"
            href="http://www.tencent.com/zh-cn/le/copyrightstatement.shtml"
            >版权所有</a
          >
          网络文化经营许可证：<a
            target="_blank"
            href="https://y.qq.com/music/common/upload/t_cm3_photo_publish/3525317.jpg"
            title="粤网文[2018]6725-2386号"
            >粤网文[2018]6725-2386号</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 3;
}
.logo {
  float: left;
}
.logo a img {
  margin-top: 10.3%;
  margin-left: 150%;
  float: left;
}
.production {
  float: left;
  margin-left: 21%;
  margin-top: 1.6%;
  width: 14%;
}
.production_l,
.production_r {
  float: left;
  margin-left: 4%;
}
.production_l a,
.production_r a {
  font-size: 22px;
  color: #fff;
  text-decoration: none;
}
.production_r {
  margin-left: 30%;
}
.introduction {
  float: left;
  width: 26%;
  margin-left: 13%;
  margin-top: 1.6%;
}
.introduction_l,
.introduction_m,
.introduction_r {
  margin-left: 5%;
  float: left;
}
.introduction_l a,
.introduction_m a,
.introduction_r a {
  color: #fff;
  font-size: 22px;
  text-decoration: none;
}
.banner_download {
  height: 655px;
  width: 100%;
  background-image: url("../../public/status/img/banner_pc.jpg");
  background-size: 100%;
}
.mod_banner_pc {
  position: absolute;
  top: 17%;
  left: 30%;
  width: 587px;
  height: 148px;
}
.mod_banner_pc {
  font-size: 67px;
  color: #fff;
}
.sea {
  width: 90%;
  margin-left: 9%;
  font-size: 53px;
}
#download {
  display: block;
  background-color: #31c27c;
  width: 19%;
  height: 10%;
  color: #fff;
  position: absolute;
  top: 48%;
  left: 40%;
  font-size: 35px;
  text-align: center;
  text-decoration: none;
  border-radius: 40px;
  font-weight: lighter;
  line-height: 66px;
}
.singer {
  width: 100%;
  height: 1000px;
  background-image: url("../../public/status/img/sprite2.jpg");
  background-position: 0px -848px;
  position: relative;
}
.song {
  color: #fff;
  position: absolute;
  top: 48%;
  left: 33%;
}
.sing_t {
  font-size: 70px;
}
.sing_m,
.sing_b {
  text-align: center;
  font-size: 29px;
  margin-top: 2%;
}
.lyric {
  width: 100%;
  height: 880px;
  background-image: url("../../public/status/img/bg_lyric.jpg");
  float: left;
  position: relative;
}
.lyric_l_1,
.lyric_l_2 {
  font-size: 59px;
  color: #fff;
  position: absolute;
  left: 16%;
}
.lyric_l_1 {
  top: 42%;
}
.lyric_l_2 {
  top: 50%;
}
.lyric_l_3,
.lyric_l_4 {
  font-size: 26px;
  color: #cbcec9;
  font-weight: 200;
  position: absolute;
  left: 16%;
}
.lyric_l_3 {
  top: 60%;
}
.lyric_l_4 {
  top: 65%;
}
.lyric_r {
  float: left;
  margin-left: 56%;
}
.lyric2 {
  width: 100%;
  height: 880px;
  background-image: url("../../public/status/img/bg_like.jpg");
  float: left;
  position: relative;
}
.lyric_l2_1,
.lyric_l2_2 {
  font-size: 59px;
  color: #fff;
  position: absolute;
  left: 50%;
}
.lyric_l2_1 {
  top: 38%;
}
.lyric_l2_2 {
  top: 47%;
}
.lyric_l2_3,
.lyric_l2_4 {
  font-size: 26px;
  color: #cbcec9;
  font-weight: 200;
  position: absolute;
  left: 50%;
}
.lyric_l2_3 {
  top: 57%;
}
.lyric_l2_4 {
  top: 61%;
}
.lyric3 {
  width: 100%;
  height: 880px;
  background-image: url("../../public/status/img/bg_synchro.jpg");
  float: left;
  position: relative;
}
.lyric_l3_1,
.lyric_l3_2 {
  font-size: 59px;
  position: absolute;
  left: 16%;
}
.lyric_l3_1 {
  top: 18%;
}
.lyric_l3_2 {
  top: 26%;
}
.lyric_l3_3,
.lyric_l3_4 {
  font-size: 26px;
  font-weight: 200;
  position: absolute;
  left: 16%;
}
.lyric_l3_3 {
  top: 36%;
}
.lyric_l3_4 {
  top: 41%;
}
.lyric_r {
  float: left;
  margin-left: 56%;
}
.phone {
  position: absolute;
  top: 48%;
  left: 26%;
}
.computer_t {
  position: absolute;
  top: 4%;
  left: 56%;
}
.computer_b {
  position: absolute;
  top: 50%;
  left: 56%;
}

.mod_footer {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 44px;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr='#4C000000', endColorstr='#4C000000');
  background: rgba(0, 0, 0, 0.3);
  z-index: 3;
  width: 100%;
}
.mod_footer p {
  height: 22px;
  line-height: 22px;
  text-align: center;
  font-size: 12px;
  color: #fff;
}
.copyrightzh a{
    color: #fff;
    text-decoration: none;
}

</style>