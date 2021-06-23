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
          <li><a href="#">首页</a></li>
          <li><a href="#">歌手</a></li>
          <li><a href="#">新碟</a></li>
          <li><a href="#">排行榜</a></li>
          <li><a href="#">分类歌单</a></li>
          <li><a href="#">电台</a></li>
          <li><a href="#">MV</a></li>
          <li><a href="#">数字专辑</a></li>
          <li><a href="#">票务</a></li>
        </ul>
      </div>
      <div class="banner">
        <div class="banner_l"></div>
        <div class="banner_r" v-for="(v, k) in list" :key="v.id" :tt="k">
          <div class="banner_r_t">
            <span style="font-size: 35px; margin-top: 30px">{{ v.sname }}</span>
          </div>
          <div class="banner_r_c" style="margin-top: 20px">
            <span style="font-size: 14px">{{ v.content }}</span>
          </div>
          <div class="banner_r_b">
            <ul>
              <li style="margin-left: 0px">单曲 242</li>
              <li>|</li>
              <li>专辑 18</li>
              <li>|</li>
              <li>MV 1222</li>
            </ul>
          </div>
          <div class="banner_end">
            <div class="banner_end_1" style="color: white">
              <span style="line-height: 40px; margin-left: px">
                <div
                  class="iconfont icon-bofang"
                  style="float: left; margin-left: 20px"
                ></div>
                播放歌手热门歌曲
              </span>
            </div>
            <div class="banner_end_2">
              <span style="line-height: 40px; margin-left: px">
                <div
                  class="iconfont icon-jia3-copy"
                  style="float: left; margin-left: 40px"
                ></div>
                关注:1200万
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="remen">
        <span style="font-size: 25px">热门歌曲</span>
      </div>
      <div class="gedan1">
        <div class="gedan1_l">
          <span><a href="#">歌曲</a></span>
        </div>
        <div class="gedan1_c">
          <span><a href="#">专辑</a></span>
        </div>
        <div class="gedan1_r">
          <span><a href="#">时长</a></span>
        </div>
        <div class="gedan1_e">
          <span><a href="#">播放量</a></span>
        </div>
      </div>
      <div class="gedan2">
        <div class="gedan2_l">
          <span><a href="#">1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;天外来物</a></span>
        </div>
        <div class="gedan2_c">
          <span><a href="#">意外</a></span>
        </div>
        <div class="gedan2_r">
          <span><a href="#">3:44</a></span>
        </div>
        <div class="gedan2_e">
          <span><a href="#">250万</a></span>
        </div>
      </div>
      <div class="gedan3">
        <div class="gedan3_l">
          <span><a href="#">2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;认真的雪</a></span>
        </div>
        <div class="gedan2_c">
          <span><a href="#">薛之谦</a></span>
        </div>
        <div class="gedan2_r">
          <span><a href="#">4:10</a></span>
        </div>
        <div class="gedan2_e">
          <span><a href="#">311万</a></span>
        </div>
      </div>
      <div class="gedan2">
        <div class="gedan2_l">
          <span><a href="#">3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有没有</a></span>
        </div>
        <div class="gedan2_c">
          <span><a href="#">意外</a></span>
        </div>
        <div class="gedan2_r">
          <span><a href="#">4:10</a></span>
        </div>
        <div class="gedan2_e">
          <span><a href="#">425万</a></span>
        </div>
      </div>
      <div class="gedan3">
        <div class="gedan3_l">
          <span><a href="#">4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;潘金莲</a></span>
        </div>
        <div class="gedan2_c">
          <span><a href="#">初学者</a></span>
        </div>
        <div class="gedan2_r">
          <span><a href="#">4:20</a></span>
        </div>
        <div class="gedan2_e">
          <span><a href="#">332万</a></span>
        </div>
      </div>
      <div class="gedan2">
        <div class="gedan2_l">
          <span
            ><a href="#">5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这么久没见</a></span
          >
        </div>
        <div class="gedan2_c">
          <span><a href="#">初学者</a></span>
        </div>
        <div class="gedan2_r">
          <span><a href="#">3:50</a></span>
        </div>
        <div class="gedan2_e">
          <span><a href="#">300万</a></span>
        </div>
      </div>
      <div class="gedan3">
        <div class="gedan3_l">
          <span><a href="#">6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;绅士</a></span>
        </div>
        <div class="gedan2_c">
          <span><a href="#">绅士</a></span>
        </div>
        <div class="gedan2_r">
          <span><a href="#">3:40</a></span>
        </div>
        <div class="gedan2_e">
          <span><a href="#">325万</a></span>
        </div>
      </div>
      <div class="gedan2">
        <div class="gedan2_l">
          <span><a href="#">7 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我害怕</a></span>
        </div>
        <div class="gedan2_c">
          <span><a href="#">绅士</a></span>
        </div>
        <div class="gedan2_r">
          <span><a href="#">4:10</a></span>
        </div>
        <div class="gedan2_e">
          <span><a href="#">344万</a></span>
        </div>
      </div>
      <div class="gedan3">
        <div class="gedan3_l">
          <span><a href="#">8 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下雨了</a></span>
        </div>
        <div class="gedan2_c">
          <span><a href="#">骆驼</a></span>
        </div>
        <div class="gedan2_r">
          <span><a href="#">4:30</a></span>
        </div>
        <div class="gedan2_e">
          <span><a href="#">405万</a></span>
        </div>
      </div>
      <div class="zi1">
        <span><a href="#">查看更多信息，请下载客户端</a></span>
      </div>
      <div class="zi2">
        <a href="#"><input type="button" value="立即下载" /></a>
      </div>
      <div class="remen">
        <span style="font-size: 25px">专辑</span>
      </div>
      <div class="zhuanji">
        <div class="zhanshi_c">
          <div class="zhanshi_c_hang">
            <div class="zhanshi_c_hang_1">
              <div class="hang_1_tu">
                <img
                  src="/status/img/zhanshi1.png"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="hang_1_zi">
                <span style="font-size: 14px">天外来物</span><br />

                <span style="color: #999; font-size: 14px">2020-01-12</span>
              </div>
            </div>
            <div class="zhanshi_c_hang_1" style="margin-left: 22px">
              <div class="hang_1_tu">
                <img
                  src="/status/img/zhanshi2.png"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="hang_1_zi">
                <span style="font-size: 14px">尘</span><br />

                <span style="color: #999; font-size: 14px">2021-01-02</span>
              </div>
            </div>
            <div class="zhanshi_c_hang_1" style="margin-left: 22px">
              <div class="hang_1_tu">
                <img
                  src="/status/img/zhanshi3.png"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="hang_1_zi">
                <span style="font-size: 14px">怪咖</span><br />

                <span style="color: #999; font-size: 14px">2000-01-21</span>
              </div>
            </div>
            <div class="zhanshi_c_hang_1" style="margin-left: 22px">
              <div class="hang_1_tu">
                <img
                  src="/status/img/zhanshi4.png"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="hang_1_zi">
                <span style="font-size: 14px">那是你离开了北京的生活</span
                ><br />

                <span style="color: #999; font-size: 14px">2011-12-12</span>
              </div>
            </div>
            <div class="zhanshi_c_hang_1" style="margin-left: 22px">
              <div class="hang_1_tu">
                <img
                  src="/status/img/zhanshi5.png"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="hang_1_zi">
                <span style="font-size: 14px">渡 The Crossing</span><br />
                <span style="color: #999; font-size: 14px">2018-04-12</span>
              </div>
            </div>
          </div>
          <div class="remen">
            <span style="font-size: 25px; margin-top: 30px">MV</span>
          </div>
          <div class="mv">
            <div class="mv_1">
              <div class="mv_1_t">
                <img src="/status/img/mv1.png" width="100%" height="100%" />
              </div>
              <div class="mv_1_b">
                <span>演员</span><br />
                <span style="font-size: 14px; color: #999">
                  <div
                    class="iconfont icon-bofangliang"
                    style="float: left; color: 14px; margin-top: 2px"
                  ></div>
                  &nbsp;3778.5万
                </span>
              </div>
            </div>
            <div class="mv_1" style="margin-left: 20px">
              <div class="mv_1_t">
                <img src="/status/img/mv2.png" width="100%" height="100%" />
              </div>
              <div class="mv_1_b">
                <span>丑八怪</span><br />
                <span style="font-size: 14px; color: #999">
                  <div
                    class="iconfont icon-bofangliang"
                    style="float: left; color: 14px; margin-top: 2px"
                  ></div>
                  &nbsp;1375万
                </span>
              </div>
            </div>
            <div class="mv_1" style="margin-left: 20px">
              <div class="mv_1_t">
                <img src="/status/img/mv3.png" width="100%" height="100%" />
              </div>
              <div class="mv_1_b">
                <span>刚刚好</span><br />
                <span style="font-size: 14px; color: #999">
                  <div
                    class="iconfont icon-bofangliang"
                    style="float: left; color: 14px; margin-top: 2px"
                  ></div>
                  &nbsp;690万
                </span>
              </div>
            </div>
            <div class="mv_1" style="margin-left: 20px">
              <div class="mv_1_t">
                <img src="/status/img/mv4.png" width="100%" height="100%" />
              </div>
              <div class="mv_1_b">
                <span>绅士</span><br />
                <span style="font-size: 14px; color: #999">
                  <div
                    class="iconfont icon-bofangliang"
                    style="float: left; color: 14px; margin-top: 2px"
                  ></div>
                  &nbsp;3465万
                </span>
              </div>
            </div>
            <div class="mv_1" style="margin-left: 20px">
              <div class="mv_1_t">
                <img src="/status/img/mv5.png" width="100%" height="100%" />
              </div>
              <div class="mv_1_b">
                <span>尘</span><br />
                <span style="font-size: 14px; color: #999">
                  <div
                    class="iconfont icon-bofangliang"
                    style="float: left; color: 14px; margin-top: 2px"
                  ></div>
                  &nbsp;3000.5万
                </span>
              </div>
            </div>
          </div>
          <div class="remen">
            <span style="font-size: 25px; margin-top: 30px">粉丝上传</span>
          </div>
          <div class="mv">
            <div class="mv_1">
              <div class="mv_1_t">
                <img src="/status/img/s1.png" width="100%" height="100%" />
              </div>
              <div class="mv_1_b">
                <span>达拉崩吧</span><br />
                <span style="font-size: 14px; color: #999">
                  <div
                    class="iconfont icon-bofangliang"
                    style="float: left; color: 14px; margin-top: 2px"
                  ></div>
                  &nbsp;3778
                </span>
              </div>
            </div>
            <div class="mv_1" style="margin-left: 20px">
              <div class="mv_1_t">
                <img src="/status/img/s2.png" width="100%" height="100%" />
              </div>
              <div class="mv_1_b">
                <span>初学者</span><br />
                <span style="font-size: 14px; color: #999">
                  <div
                    class="iconfont icon-bofangliang"
                    style="float: left; color: 14px; margin-top: 2px"
                  ></div>
                  &nbsp;3500
                </span>
              </div>
            </div>
            <div class="mv_1" style="margin-left: 20px">
              <div class="mv_1_t">
                <img src="/status/img/s3.png" width="100%" height="100%" />
              </div>
              <div class="mv_1_b">
                <span>意外</span><br />
                <span style="font-size: 14px; color: #999">
                  <div
                    class="iconfont icon-bofangliang"
                    style="float: left; color: 14px; margin-top: 2px"
                  ></div>
                  &nbsp;8.5万
                </span>
              </div>
            </div>
            <div class="mv_1" style="margin-left: 20px">
              <div class="mv_1_t">
                <img src="/status/img/s4.png" width="100%" height="100%" />
              </div>
              <div class="mv_1_b">
                <span>下雨了</span><br />
                <span style="font-size: 14px; color: #999">
                  <div
                    class="iconfont icon-bofangliang"
                    style="float: left; color: 14px; margin-top: 2px"
                  ></div>
                  &nbsp;6685
                </span>
              </div>
            </div>
            <div class="mv_1" style="margin-left: 20px">
              <div class="mv_1_t">
                <img src="/status/img/s5.png" width="100%" height="100%" />
              </div>
              <div class="mv_1_b">
                <span>我好像在哪见过你</span><br />
                <span style="font-size: 14px; color: #999">
                  <div
                    class="iconfont icon-bofangliang"
                    style="float: left; color: 14px; margin-top: 2px"
                  ></div>
                  &nbsp;37万
                </span>
              </div>
            </div>
          </div>
          <div class="remen">
            <span style="font-size: 25px; margin-top: 30px">相似歌手</span>
          </div>
          <div class="xiangsi">
            <div class="xiangsi_1">
              <div class="xiangsi_1_t"></div>
              <div class="xiangsi_1_b">
                <span>林俊杰</span>
              </div>
            </div>
            <div class="xiangsi_1" style="margin-left: 20px">
              <div class="xiangsi_2_t"></div>
              <div class="xiangsi_1_b">
                <span>vava</span>
              </div>
            </div>
            <div class="xiangsi_1" style="margin-left: 20px">
              <div class="xiangsi_3_t"></div>
              <div class="xiangsi_1_b">
                <span>周杰伦</span>
              </div>
            </div>
            <div class="xiangsi_1" style="margin-left: 20px">
              <div class="xiangsi_4_t"></div>
              <div class="xiangsi_1_b">
                <span>赵英俊</span>
              </div>
            </div>
            <div class="xiangsi_1" style="margin-left: 20px">
              <div class="xiangsi_5_t"></div>
              <div class="xiangsi_1_b">
                <span>方大同</span>
              </div>
            </div>
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
                <span
                  >Copyright&copy;1998-2021 Tencent All Rights Reserved</span
                >
              </div>
              <div class="end3">
                <span>腾讯公司 版权所有 腾讯网络文化经营许可证</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSinger } from "../request/api.js";
export default {
  name: "Singer",
  data() {
    return {
      list: [],
    };
  },
  created() {
    getSinger().then((res) => {
      console.log(res);
      this.list = res;
      console.log(this.list);
    });
  },
};
</script>

<style scoped>
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
  background: url("/status/img/1.png") 1px -53px no-repeat;
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
  height: 350px;
  background-color: #f6f6f6 !important;
  overflow: hidden;
}
.banner_l {
  margin-left: 180px;
  width: 250px;
  height: 250px;
  margin-top: 55px;
  border-radius: 50%;
  background: url("/status/img/T001R150x150M0000025NhlN2yWrP4.jpg") 0px 0px
    no-repeat;
  background-size: 100% 100%;
  float: left;
}
.banner_r {
  height: 250px;
  width: 800px;
  margin-top: 55px;
  margin-left: 60px;
  float: left;
}
.banner_r_t {
  width: 100%;
  height: 50px;

  margin-top: 30px;
}
.banner_r_b ul li {
  float: left;
  font-size: 24px;
  margin-left: 20px;
  margin-top: 20px;
}
.banner_end {
  width: 100%;
  height: 40px;
  margin-top: 70px;
}
.banner_end_1 {
  width: 190px;
  float: left;
  height: 100%;
  text-align: center;
  background-color: #31c27c;
}
.banner_end_2 {
  width: 190px;
  text-align: center;
  float: left;
  height: 100%;
  margin-left: 20px;
  border: 1px solid #c9c9c9;
}
.remen {
  width: 200px;
  height: 30px;
  margin-top: 20px;
  margin-left: 90px;
}
.gedan1 {
  width: 1300px;
  height: 50px;
  margin-left: 90px;
  margin-top: 20px;
  background-color: #f7f7f7;
}
.gedan1_l {
  width: 50px;
  height: 50px;

  float: left;
  margin-left: 20px;
}
.gedan1_l span a {
  line-height: 50px;
  color: #999999;
  font-size: 14px;
}
.gedan1_c {
  width: 50px;
  height: 50px;

  float: left;
  margin-left: 500px;
}
.gedan1_c span a {
  line-height: 50px;
  color: #999999;
  font-size: 14px;
}
.gedan1_r {
  width: 50px;
  height: 50px;

  float: left;
  margin-left: 250px;
}
.gedan1_r span a {
  line-height: 50px;
  color: #999999;
  font-size: 14px;
}
.gedan1_e {
  width: 50px;
  height: 50px;

  float: left;
  margin-left: 250px;
}
.gedan1_e span a {
  line-height: 50px;
  color: #999999;
  font-size: 14px;
}
.gedan2 {
  width: 1300px;
  height: 50px;
  margin-left: 90px;
}
.gedan2_l {
  width: 200px;
  height: 50px;
  border: 1px solid white;
  float: left;
  margin-left: 20px;
}
.gedan2_l span a {
  line-height: 50px;
  color: black;
  font-size: 14px;
}
.gedan2_c {
  width: 50px;
  height: 50px;
  float: left;
  margin-left: 348px;
}
.gedan2_c span a {
  line-height: 50px;
  color: black;
  font-size: 14px;
}
.gedan2_r {
  width: 80px;
  height: 50px;

  float: left;
  margin-left: 250px;
}
.gedan2_r span a {
  line-height: 50px;
  color: black;
  font-size: 14px;
}
.gedan2_e {
  width: 50px;
  height: 50px;

  float: left;
  margin-left: 220px;
}
.gedan2_e span a {
  line-height: 50px;
  color: #999999;
  font-size: 14px;
}
.gedan3 {
  width: 1300px;
  height: 50px;
  margin-left: 90px;
  background-color: #f7f7f7;
}
.gedan3_l {
  width: 200px;
  height: 50px;
  border: 1px solid #f7f7f7;
  float: left;
  margin-left: -202px;
  line-height: 50px;
}
.gedan3_l span a {
  line-height: 50px;
  color: black;
  font-size: 14px;
}
.zi1 {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  text-align: center;
}
.zi1 span a {
  line-height: 50px;
  font-size: 20px;
  color: black;
}
.zi2 {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  text-align: center;
}
.zi2 input {
  width: 200px;
  line-height: 50px;
  font-size: 20px;
  background-color: #31c27c;
  border-radius: 25px;
  border: 1px solid white;
}
.zhuanji {
  width: 100%;
  height: 300px;

  margin-top: 20px;
}
.zhanshi_c {
  width: 100%;
  height: 1200px;

  margin-top: 10px;
}
.zhanshi_c_hang {
  width: 100%;
  height: 300px;
}
.zhanshi_c_hang_1 {
  width: 233px;
  height: 300px;

  float: left;
  margin-left: 130px;
}
.hang_1_tu {
  width: 100%;
  height: 210px;
}
.hang_1_zi {
  width: 100%;
  height: 70px;

  margin-top: 20px;
}
.mv {
  width: 100%;
  height: 200px;

  margin-top: 25px;
}
.mv_1 {
  width: 235px;
  height: 200px;

  margin-left: 125px;
  float: left;
}
.mv_1_t {
  width: 100%;
  height: 130px;
}
.mv_1_b {
  width: 100%;
  height: 50px;

  margin-top: 10px;
}
.xiangsi {
  width: 100%;
  height: 240px;
  margin-top: 20px;
}
.xiangsi_1 {
  margin-left: 125px;
  width: 235px;
  height: 100%;
  background-color: #fbfbfd;
  float: left;
}
.xiangsi_1_t {
  width: 140px;
  height: 140px;
  margin-top: 30px;
  margin-left: 48px;
  border-radius: 50%;
  background: url("/status/img/T001R150x150M000001BLpXF2DyJe2.jpg") 0px 0px
    no-repeat;
  background-size: 100% 100%;
}
.xiangsi_2_t {
  width: 140px;
  height: 140px;
  margin-top: 30px;
  margin-left: 48px;
  border-radius: 50%;
  background: url("/status/img/T001R150x150M00000067r4p0wBDDN.jpg") 0px 0px
    no-repeat;
  background-size: 100% 100%;
}
.xiangsi_3_t {
  width: 140px;
  height: 140px;
  margin-top: 30px;
  margin-left: 48px;
  border-radius: 50%;
  background: url("/status/img/T001R150x150M0000025NhlN2yWrP4.jpg") 0px 0px
    no-repeat;
  background-size: 100% 100%;
}
.xiangsi_4_t {
  width: 140px;
  height: 140px;
  margin-top: 30px;
  margin-left: 48px;
  border-radius: 50%;
  background: url("/status/img/T001R150x150M000002sfdNU1f3nHD.jpg") 0px 0px
    no-repeat;
  background-size: 100% 100%;
}
.xiangsi_5_t {
  width: 140px;
  height: 140px;
  margin-top: 30px;
  margin-left: 48px;
  border-radius: 50%;
  background: url("/status/img/T001R150x150M000002YetSZ06c9c9.jpg") 0px 0px
    no-repeat;
  background-size: 100% 100%;
}
.xiangsi_1_b {
  width: 100px;
  height: 30px;
  margin-left: 90px;
  margin-top: 20px;
}
.footer {
  width: 100%;
  height: 700px;
  background-color: #333333;
  margin-top: 40px;
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
  background: url("/status/img/fbf292c98217d04e67f063be771715c.png") 0px 0px
    no-repeat;
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
  background: url("/status/img/843ceaaaee6ad6cfa1196e1057f5cb0.png") 0px -4px no-repeat;
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
  background: url("/status/img/af1d37b603ebb634cf398999d6286f4.png") 5px -5px no-repeat;
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
  background: url("/status/img/2ebb857a9623b3438f96e9dffd1c17a.png") 0px -2px no-repeat;
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
  background: url("/status/img/f1c49d2c12536eeb36e56958785ac10.png") -16px -4px
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
  background: url("/status/img/0390aa6c625952f119da529c487bc47.png") -4px -4px
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
  background: url("/status/img/2bae16968c3f6ab945c1a7606b98363.png") -9px -4px
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
  background: url("/status/img/bd63e209e2c96ba74e1c16e44b4661c.png") 0px 1px
    no-repeat;
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