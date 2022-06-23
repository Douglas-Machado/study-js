// segundo menor em um array

let arr = [1,5,2,7,2,7,4,-34,10,6,3,9,-20,11,-1,14,3,0]

arr.sort((a, b) => a - b)

console.log(arr[1])
console.log(arr)
/* -------------------------------------------------------------- */

// mescle dois arrays ordenados

let a = sort([5,7,3,1])
let b = sort([6,4,2,8])

let newArr = []

for(let i = 0; i < b.length; i++){
  newArr.push(a[i], b[i])
}

function sort(arr) {
  return arr.sort((a,b) => a - b)
}

// console.log(newArr)

/* -------------------------------------------------------------- */
