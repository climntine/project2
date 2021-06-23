module.exports = {
    devServer:{
        //设置端口号
        
        //设置代理
        proxy:{

            "/project2-tp/":{
                target:"http://localhost"
            }
        }
    }
}