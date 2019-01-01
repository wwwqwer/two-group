// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入插件
import ElementUI from 'element-ui';
// 引入文件样式
import 'element-ui/lib/theme-chalk/index.css';
// 使用ui插件
Vue.use(ElementUI);





//关闭生产阶段日志的输出
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 那把el管理的试图进行替换
  components: { App },
  template: '<App/>'
})
