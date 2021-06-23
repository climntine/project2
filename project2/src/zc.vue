<template>
  <div>
      <content>
        <div class="rbb fl" >
            <div class="rrbox fl" style="background: url(/status/img/3.jpg) ; background-repeat:no-repeat;">
                <div class="regbox">
                    <div class="reg_title" style="margin-left:55%;">
                        <h4>注册音乐账号</h4>
                    </div>
                    <div class="reg_inp" style="margin-left:75%;">
                            <label for="" class="regl fl">&#xe725;</label>
                            <input class="ru fr" type="text" name="user" autocomplete="off" placeholder='请输入用户名' id="inp" v-model="t.username"/><br /> <span id="myfont"></span><br />
                            
                            <label for="" class="regl2 fl" >&#xe66c;</label>
                            <input class="ru2 fr" type="password" name="user" id="inp1" autocomplete="off" placeholder='请输入密码' v-model="t.password"/><span id="myfont1"></span><br />
                            <div class="but fl">
                                <button @click="submit()" style="width:200px; margin-top:30px; height:40px; margin-left:40px; background-color:#a0d24c">立即注册</button>
                            </div>  
                    </div>
                    <div class='reg_p fl' style="margin-left:50%;">
                      <input type="checkbox"><p id="zi">已阅读并同意 <a href="">用户协议 </a> 和<a href="">隐私政策</a> </p>
                    </div>
                </div> 
            </div>
        </div>
    </content>
  </div>
</template>

<script>
import {zc} from "./request/api.js"
export default {
     data(){
        return{
            t:{username:"",password:""}
        }
    },
    methods:{
        submit(){
            zc(this.t).then(res=>{
                 if (res.code == '200') {
                        alert("注册成功");
                    } else {
                        alert(res.msg);
                        return;
                    }
              })
        }
    }
}
</script>
