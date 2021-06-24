<template>
  <div>
    <div id="max">
      <div class="nav">
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
      </div>
      <div class="main">
        <div class="SongInfo">
          <div class="SongInfo_l">
            <img
              src="../../public/status/img/T002R300x300M000001cVzqC42R9Oi_1.jpg"
              alt=""
            />
          </div>
          <div class="SongInfo_r">
            <div class="SongName">A New Day feat. Phum Viphurit</div>
            <div class="singer">
              <i class="iconfont">&#xe602;&nbsp;</i>Nulbarich /Phum Viphurit
            </div>
            <div class="album">专辑：A New Day feat. Phum Viphurit</div>
            <div class="language">语种:英语</div>
            <div class="schools">流派:Rock</div>
            <div class="compony">唱片公司:JVCKENWOO...</div>
            <div class="OpenTime">发行时间:2021-06-16</div>
            <div class="btn">
              <a href=""><i class="iconfont">&#xe636;</i> 播放</a>
              <a href=""><i class="iconfont">&#xe603;</i> 收藏</a>
              <a href=""><i class="iconfont">&#xe608;</i> 评论</a>
              <a href=""><i class="iconfont">&#xe604;</i> 更多</a>
            </div>
          </div>
        </div>
        <div class="lyric">
          <div class="lyric_t">歌词</div>
          A New Day feat. Phum Viphurit - Nulbarich/Phum Viphurit Lyrics
          by：Jeremy Quartus／Phum Viphurit Composed by：Jeremy Quartus／Phum
          Viphurit I yeah I&apos;ve been feeling lonely I wonder if you hear me
          Calling to the night It&apos;s not right this life in isolation What
          if tomorrow never comes I just want to be alright Alright Lately
          I&apos;ve been lost in thoughts Thinking about what&apos;s above What
          will it take to feel the love Then I arise a new day My head held high
          I&apos;ll find my way My friend I&apos;ll pinky promise you I&apos;ll
          find you let&apos;s Pull the puppet strings out Don&apos;t be afraid
          I&apos;ll be your parachute It&apos;s time to sneak out the room Why
          don&apos;t you come back tonight Lately we&apos;ve been lost in
          thoughts Thinking about what&apos;s above What will it take to feel
          the love Lately we&apos;ve been lost in thoughts Thinking about
          what&apos;s above What will it takе to feel the love Then we arise a
          new day When the time comes see you there
        </div>
        <div class="bottom">
          <div class="comment">
            <div class="comment_t">评论</div>
            <div class="comment_m">
              <textarea name="" id="" cols="124" rows="4"></textarea>
            </div>
            <div class="comment_b">
              <button>发表评论</button>
            </div>
          </div>
          <div class="wonderful">
            <div class="won">精彩评论</div>
            <div class="user">
              <div class="user_t">
                <div class="user_l">
                  <img src="../../public/status/img/1.jpg" alt="" />
                </div>
                <div class="user_r">
                  <div class="user_r_t">崔博文</div>
                  <div class="user_r_b">2019年12月12日23:59</div>
                  <div class="user_m">周杰伦唱歌和我差不多</div>

                  <div class="user_b">
                    <div class="user_b_l">
                      <a href=""> <i class="iconfont">&#xe601;</i>10000+ </a>
                    </div>
                    <div class="user_b_r"><a href="">回复</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
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

.song_main_head div {
  float: left;
  padding: 14px;
  font-size: 14px;
  background-color: rgb(253, 247, 247);
}

.head_main_name {
  width: 520px;
  margin-left: 88px;
  text-align: left;
}

.song_head div {
  float: left;
  padding: 14px;
  color: #aaa;
  background-color: rgb(253, 247, 247);
}

.head_name {
  width: 35.3%;
  margin-left: 6%;
  text-align: left;
}

.head_singer {
  width: 16.9%;
}

.head_album {
  width: 17.7%;
}

.head_time {
  width: 10.6%;
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
.nav {
  width: 100%;
  height: 150px;
}

ul li {
  list-style: none;
}

a {
  text-decoration: none;
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

.nav {
  width: 100%;
}

.main {
  width: 100%;
  float: left;
}

.SongInfo {
  width: 80%;
  margin-left: 120px;
  float: left;
}

.SongInfo_l {
  width: 250px;
  height: 250px;
  float: left;
  margin-top: 40px;
}

.SongInfo_l img {
  width: 100%;
  height: 100%;
}

.SongInfo_r {
  width: 500px;
  margin-left: 45px;
  margin-top: 60px;
  float: left;
}

.SongName {
  font-size: 23px;
  margin-bottom: 8px;
}

.singer i {
  font-size: 22px;
  color: rgb(163, 162, 162);
}

.singer {
  margin-bottom: 8px;
  font-weight: 200;
}

.album {
  width: 310px;
  margin-bottom: 8px;
  float: left;
}

.language {
  margin-bottom: 8px;
  width: 160px;
  float: left;
  margin-left: 30px;
}

.schools {
  width: 340px;
  float: left;
  margin-bottom: 8px;
}

.compony {
  float: left;
  margin-bottom: 8px;
}

.OpenTime {
  margin-bottom: 8px;
}

.btn {
  width: 100%;
  float: left;
}

.btn a {
  display: block;
  padding: 10px;
  border: 1px solid #bbb;
  width: 19%;
  float: left;
  text-align: center;
  color: black;
  margin-right: 5px;
}

.btn i {
  color: #aaa;
}

.lyric {
  margin-top: 50px;
  float: left;
  width: 20%;
  margin-left: 120px;
}

.lyric_t {
  font-size: 20px;
}

.comment {
  margin-top: 30px;
  float: left;
  width: 100%;
}

.comment_t {
  font-size: 24px;
}

.comment_m {
  margin-bottom: 30px;
}

.comment_b button {
  background-color: #31c27c;
  border: 0px;
  width: 120px;
  height: 40px;
  color: #fff;
}

.won {
  width: 86%;
  margin-top: 40px;
  padding-bottom: 20px;
  float: left;
  font-size: 22px;
  border-bottom: 1px solid #ccc;
}

.user {
  float: left;
}

.user_l {
  width: 70px;
  height: 70px;
  border-radius: 42px;
  overflow: hidden;
  margin-top: 20px;
  margin-right: 20px;
  float: left;
}

.user_l img {
  width: 100%;
  height: 100%;
}

.user_r {
  float: left;
}

.user_r_t {
  color: #aaa;
  margin-top: 20px;
  margin-bottom: 10px;
}

.user_r_b {
  color: #aaa;
  margin-bottom: 20px;
}

.user_m {
  margin-bottom: 15px;
}

.user_b_l {
  float: left;
}

.user_b_r {
  float: left;
  margin-left: 15px;
}

.bottom {
  margin-left: 120px;
}
</style>