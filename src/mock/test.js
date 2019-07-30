var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  var newA = []
  var newB = []
  for (var i = 0; i < s.length; i++) {
    for (var j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        newA.push(j)
      }
      if (t[i] === t[j]) {
        newB.push(j)
      }
    }
  }
  return newA.toString() === newB.toString()
}

console.log(isIsomorphic('abadd', 'bcbaa'))
