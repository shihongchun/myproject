import Mock from 'mockjs'

const urlA = 'https://www.haha.com/'
Mock.mock(`${urlA}auth/login`, {
  status: 0
})
Mock.mock(`${urlA}auth/lon`, {
  status: 1
})
// console.log(Mock['_mocked']['https://www.haha.com/login'].template)
// console.log(Object.keys(Mock['_mocked']).indexOf('https://www.haha.com/login'))

export const api = {}

function promisify (name) {
  return function (obj) {
    return new Promise((resolve, reject) => {
      obj = obj || {}
      obj.success = resolve
      obj.fail = reject
      wx[name](obj)
    })
  }
}
api._request = api.request = promisify('request')
api.requestA = async function (obj) {
  if (obj.header) {
    obj.header.accept = 'application/json'
    obj.header['X-Requested-With'] = 'XMLHttpRequest'
  } else {
    obj.header = {
      accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  }
  return api._request(obj)
}

const mocks = Object.keys(Mock['_mocked'])
api.get = api.request = function (obj) {
  const url = `${urlA}${obj.url}`
  obj.url = url
  if (mocks.indexOf(url) !== -1) {
    return Mock['_mocked'][url].template
  } else {
    return api.requestA(obj)
  }
}
api.post = function (obj) {
  obj.method = 'post'
  return api.request(obj)
}
