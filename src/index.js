import getView from './getview';

class ImotoRouter {
  /***
  * hashbang, history
  */
  constructor (config) {

  }

  map (routes) {
    this.$$map = routes;
  }

  redirect (routes) {
    this.$$redirect = routes;
  }

  start (app, el) {
    // 实例化并且渲染在这个app当中
    // 根据当前路由以及路由表得到当前需要渲染的页面组件
    var e = new app();
    e.render(el);
    e.setComponent('router-view', getView(ImotoRouter.$imoto));
  }

  static init (that) {
    this.$imoto = that;
    that.$router = {};
    that.$route = {};
  }
}

export default ImotoRouter;
