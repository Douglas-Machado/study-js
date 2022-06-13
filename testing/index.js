// let num = 777

// function descendingOrder(num){
//   let str = num.toString()
//   const stringArray = str.split('').sort()
//   const newString = stringArray.reverse().toString()
//   const result = newString.replace(/,/g, '')
//   console.log(result)
// }

// descendingOrder(num)
const a = new Date()
const date = new Date(a).toUTCString()
console.log(date)