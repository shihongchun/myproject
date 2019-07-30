<template>
  <div @click="clickHandle">
    <div class="fixed">
      <button open-type="share" >转发</button>
    </div>
    <div style="height: 700rpx;background:red;"></div>
    <!-- <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>
    <button @click="openSetting">打开授权设置</button>
    <button @click="getSetting">获取授权信息</button>
    <button @click="getLocation">获取地理位置授权</button>
    <button open-type="getUserInfo" @getuserinfo="getUser">显示登录信息</button>
    <button @click="login">登录</button>
    <navigator url="/pages/counter/main">跳转</navigator>
    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>
    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>
    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>
    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>-->
  </div>
</template>

<script>
import card from '@/components/card'
// import {api} from '@/utils/api.js'
import {api} from '@/mock/index.js'
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      // mpvue.navigateTo({
      //   url: '/pages/test/main'
      // })
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    getUser (e) {
      console.log(e)
      // console.log(setting)
    },
    getSetting () {
      wx.getSetting({
        success: (res) => {
          console.log(res)
        }
      })
    },
    getLocation () {
      // wx.getLocation({
      //   success: (res) => {
      //     console.log(res)
      //   }
      // })
      const log = wx.authorize({
        scope: 'scope.camera',
        success: (res) => {
          console.log(res)
        },
        fail: (res) => {
          console.log(res)
        }
      })
      console.log(log)
    },
    async login () {
      const rs = await api.getStorage({key: 'code'}).catch(err => err)
      console.log(rs.data)
    },
    openSetting () {
      wx.openSetting({
        success: (res) => {
          console.log(res)
        },
        fail: (res) => {
          console.log('fail' + res)
        }
      })
    }
  },

  created () {
    // let app = getApp()
    wx.setStorage({
      key: 'code',
      data: '55555'
    })
    // api.getName()
    wx.setStorage({
      key: 'mode',
      data: 'aaaa'
    })
    console.log('get' + JSON.stringify(api.get({url: 'auth/lon'})))
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2;
  background-color: #fff;
  padding-top: 0.5rem;
  padding-bottom: 0.2rem;
}
</style>
