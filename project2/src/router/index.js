import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: "/index",
    name: "zc",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/index.vue"),
  },
  {
    path: "/zc",
    name: "zc",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../zc.vue"),
  },
  {
    path: "/dl",
    name: "dl",

    component: () => import("../dl.vue"),
  },
  {
    path: "/album",
    name: "album",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/album.vue"),
  },
  {
    path: "/Classification",
    name: "Classification",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Classification.vue"),
  },
  {
    path: "/client",
    name: "client",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/client.vue"),
  },
  {
    path: "/info",
    name: "info",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/info.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/list.vue"),
  },
  {
    path: "/MV",
    name: "MV",
    component: () => import(/* webpackChunkName: "about" */ "../views/MV.vue"),
  },
  {
    path: "/NumberAlbum",
    name: "NumberAlbum",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NumberAlbum.vue"),
  },
  {
    path: "/PersonalCenter",
    name: "PersonalCenter",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PersonalCenter.vue"),
  },
  {
    path: "/RankingList",
    name: "RankingList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RankingList.vue"),
  },
  {
    path: "/SongInfo",
    name: "SongInfo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SongInfo.vue"),
  },
  {
    path: "/ListInfo",
    name: "ListInfo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListInfo.vue"),
  },
  {
    path: "/AlbumInfo",
    name: "AlbumInfo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AlbumInfo.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
