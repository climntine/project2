import axios from "axios";
import axi from "./inter.js";

// 个人中心
// 注册
export const zc = (can) => axi.get("/zc/index", { params: can });
// 登录
export const login = (can) => axi.get("/zc/dl", { params: can });
export const getSinger = (can) => axi.get("singer/Singershow", { params: can });
export const getSingerall = (can) => axi.get("singer/Singershowall", { params: can });
export const getType = (can) => axi.get("index/Type", { params: can });
