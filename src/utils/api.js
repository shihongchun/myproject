import store from '@/utils/store.js'
// import { resolve } from 'url';
// import { reject } from 'q';

function check () {
  if (store.state.login !== 1) {
    console.log(1111)
    wx.navigateTo({
      url: '/pages/logs/main'
    })
  }
}

check()

function test () {
  console.log('test')
  const x = true
  if (x) {
    return
  }
  return test()
}
test()
export const api = {}

function promisify (name) {
  return function (obj) {
    return new Promise((resolve, reject) => {
      obj = obj || {}
      obj.success = resolve
      obj.fail = function (res) {
        reject(res)
      }
      wx[name](obj)
    })
  }
}

api.getStorage = promisify('getStorage')
api.getName = promisify('getName')
api.login = promisify('login')
api.getName = function () {
  console.log('constant')
}
function aa () {
  const origin = api._getName = api.getName
  api.getName = function () {
    console.log(test)
    return origin()
  }
}
aa()
