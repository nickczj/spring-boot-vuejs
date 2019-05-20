import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Service from '@/components/Service'
import Bootstrap from '@/components/Bootstrap'
import User from '@/components/User'
import Moon from '@/components/Moon'
import Game from '@/components/Game'
import Sun from '@/components/Sun'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/callservice',
      name: 'Service',
      component: Service
    },
    {
      path: '/bootstrap',
      name: 'Bootstrap',
      component: Bootstrap
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/🌚',
      name: 'Moon',
      component: Moon
    },
    {
      path: '/🎮',
      name: 'Game',
      component: Game
    },
    {
      path: '/sun',
      name: 'Sun',
      component: Sun
    }
  ]
})
