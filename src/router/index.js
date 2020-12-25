import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Oldbaby from '../components/Oldbaby'
import Littlebaby from '../components/Littlebaby'
import Superbaby from '../components/Superbaby'

Vue.use(Router)

/* 解决element导航栏 使用vue router时 双击报错的异常 */
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {path: '/', redirect:'/index'},
    {path: '/index', component: Index},
    {path: '/oldbaby', component: Oldbaby},
    {path: '/littlebaby', component: Littlebaby},
    {path: '/superbaby', component: Superbaby}
  ]
})
