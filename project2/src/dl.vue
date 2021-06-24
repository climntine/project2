<template>
  <div>
       <content>
        <div class="logbox" style="background: url(/status/img/3.jpg) ; ">
            <div class="log_box">
                <div class="log_cont">
                    <div class="log_inp fr">
                            <div  class="r_f2" style="margin-left:10%;">
                            <div class="reg_title2">
                                <h4>登录帐号</h4>
                            </div>                     
                            <label for="" class="regl fl">&#xe725;</label>
                            <input class="ru fr" type="text"   autocomplete="off" placeholder='请输入用户名' v-model="t.username"/>
                            <label for="" class="regl2 fl">&#xe66c;</label>
                            <input class="ru2 fr" type="password"  autocomplete="off" placeholder='请输入密码' v-model="t.password"/>                           
                           
                                 <button @click="submit()" class="but fl">登录</button>
                        </div>                
                        <p><a href="/zc">立即注册</a></p>
                        <div class="log_li fr">
                            <a href="" class="l1">&#xe629;</a>
                            <a href="" class="l2">&#xe797;</a>
                            <a href="" class="l3">&#xe63b;</a>
                            <a href="" class="l4">&#xe637;</a>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </content>    
  </div>
</template>

<script>
import {login} from "./request/api.js"
export default {
    data(){
        return{
            t:{username:"",password:""}
        }
    },
     methods:{
        submit(){
            login(this.t).then(res=>{
                console.log(res);
                 if (res.code == '200') {
                        alert("登录成功");
                    } else {
                        alert(res.msg);
                        return;
                    }
              })
        }
    }
}
</script>