// // function shuffle(arr) {
// //   let length = arr.length,
// //     r = length,
// //     rand = 0;

// //   while (r) {
// //     rand = Math.floor(Math.random() * r--);
// //     [arr[r], arr[rand]] = [arr[rand], arr[r]];
// //   }
// // }

// // function shuffle(arr) {
// //   let len = arr.length, rand = 0
// //   while (len) {
// //     rand = Math.floor(Math.random() * len--);
// //     [arr[len], arr[rand]] = [arr[rand], arr[len]]
// //   }
// // }


// // function cret(arr) {
// //   var len = arr.length
// //   for (var i = Math.floor((len - 1) / 2); i >= 0; i--) {
// //     shift(arr, i, len)
// //   }
// // }
// // function shift(arr, i, len) {
// //   var index = i
// //   var left = 2 * i + 1
// //   var right = 2 * i + 2
// //   if (arr[left] > arr[index] && left < len) {
// //     index = left
// //   }
// //   if (arr[right] > arr[index] && right < len) {
// //     index = right
// //   }
// //   if (index !== i) {
// //     [arr[index], arr[i]] = [arr[i], arr[index]]
// //     shift(arr, index, len)
// //   }
// // }

// // function heapSort(arr) {
// //   cret(arr)
// //   var len = arr.length
// //   for (var i = len - 1; i >= 0; i--) {
// //     [arr[0], arr[i]] = [arr[i], arr[0]]
// //     shift(arr, 0, i)
// //   }
// // }


// // var arr = [1, 2, 5, 6, 3, 6, 7, 42, 1, 2, 3]
// // heapSort(arr)
// // console.log(arr)


// // let arr = [1, 2, 3, 4, 5, 6, 7]
// // shuffle(arr)
// // console.log(arr)




// // function mergeSort(arr, start, mid, end) {
// //   var newArr = []
// //   var i = start, j = mid + 1
// //   var k = 0
// //   while (i <= mid && j <= end) {
// //     if (arr[i] > arr[j]) {
// //       newArr[k++] = arr[j++]
// //     } else {
// //       newArr[k++] = arr[i++]
// //     }
// //   }
// //   while (i <= mid) {
// //     newArr[k++] = arr[i++]
// //   }
// //   while (j <= end) {
// //     newArr[k++] = arr[j++]
// //   }
// //   for (var i = 0; i < k; i++) {
// //     arr[start + i] = newArr[i]
// //   }
// // }

// // function merge(arr, start, end) {
// //   if (start < end) {
// //     var mid = Math.floor((start + end) / 2)
// //     merge(arr, start, mid)
// //     merge(arr, mid + 1, end)
// //     mergeSort(arr, start, mid, end)
// //   }
// // }
// // merge(arr, 0, arr.length - 1)
// // console.log(arr)

// // async function async1() {
// //   console.log("async1 start");
// //   await async2();
// //   console.log("async1 end");
// // }
// // async function async2() {
// //   console.log('async2');
// // }
// // console.log("script start");
// // setTimeout(function () {
// //   console.log("settimeout");
// // }, 0);
// // async1();
// // new Promise(function (resolve) {
// //   console.log("promise1");
// //   resolve();
// // }).then(function () {
// //   console.log("promise2");
// // });
// // console.log('script end')



// // new Promise(resolve => {
// //   // console.log(1)
// //   setTimeout(() => {
// //     // console.log(9)
// //   })
// //   // resolve(2)
// // }).then(res => {
// //   // console.log(res)
// //   process.nextTick(() => {
// //     // console.log(14)
// //   })
// //   new Promise(resolve => {
// //     // console.log(3)
// //     // resolve(4)
// //   }).then(res => {
// //     // console.log(res)
// //   })
// // })

// // setTimeout(() => {
// //   // console.log(5)
// //   new Promise(resolve => {
// //     // console.log(6)
// //     resolve(7)
// //   }).then(res => {
// //     // console.log(res)
// //   })
// //   setTimeout(() => {
// //     console.log(8)
// //   })
// // })


// // setTimeout(() => {
// //   // console.log(10)
// //   new Promise(resolve => {
// //     // console.log(11)
// //     resolve(12)
// //   }).then(res => {
// //     // console.log(res)
// //   })
// //   setTimeout(() => {
// //     console.log(13)
// //   })
// // })

// // 1
// // 2
// // 3
// // 4
// // 14
// // 9
// // 5
// // 6
// // 10
// // 11
// // 7
// // 12
// // 8
// // 13

// // console.log('golb1');


// setImmediate(function () {
//   // console.log('immediate1');
//   process.nextTick(function () {
//     console.log('immediate1_nextTick');
//   })
//   new Promise(function (resolve) {
//     // console.log('immediate1_promise');
//     resolve();
//   }).then(function () {
//     console.log('immediate1_then')
//   })
// })


// setTimeout(function () {
//   // console.log('timeout1');
//   process.nextTick(function () {
//     // console.log('timeout1_nextTick');
//   })
//   new Promise(function (resolve) {
//     // console.log('timeout1_promise');
//     resolve();
//   }).then(function () {
//     // console.log('timeout1_then')
//   })
// })

// process.nextTick(function () {
//   // console.log('glob1_nextTick');
// })
// new Promise(function (resolve) {
//   // console.log('glob1_promise');
//   resolve();
// }).then(function () {
//   // console.log('glob1_then')
// })

// setTimeout(function () {
//   // console.log('timeout2');
//   process.nextTick(function () {
//     // console.log('timeout2_nextTick');
//   })
//   new Promise(function (resolve) {
//     // console.log('timeout2_promise');
//     resolve();
//   }).then(function () {
//     // console.log('timeout2_then')
//   })
// })

// process.nextTick(function () {
//   // console.log('glob2_nextTick');
// })
// new Promise(function (resolve) {
//   // console.log('glob2_promise');
//   resolve();
// }).then(function () {
//   // console.log('glob2_then')
// })

// setImmediate(function () {
//   console.log('immediate2');
//   process.nextTick(function () {
//     console.log('immediate2_nextTick');
//   })
//   new Promise(function (resolve) {
//     console.log('immediate2_promise');
//     resolve();
//   }).then(function () {
//     console.log('immediate2_then')
//   })
// })


// var subsets = function (nums) {
//   var len = nums.length
//   var arr = [[]]
//   for (var i = 0; i < len; i++) {
//     var len2 = arr.length
//     for (var j = 0; j < len2; j++) {
//       arr.push(arr[j].concat(nums[i]))
//     }
//   }
//   return arr
// };

// var nums = [1, 2, 3]
// var x = subsets(nums)
// console.log(x)

// var nums = [1, 2, 3]

// var isPalindrome = function (x) {
//   if (x < 0) {
//     return false
//   }
//   var arr = []
//   var c = 0
//   var t = x
//   while (t > 0) {
//     c = t % 10
//     t = Math.floor(t / 10)
//     arr.push(c)
//   }
//   var len = arr.length
//   var rev = 0
//   for (let i = 0; i < len; i++) {
//     rev += Math.pow(10, i) * arr[len - i - 1]
//   }
//   return rev === x
// }
// isPalindrome(121)

// var majorityElement = function (nums) {
//   var obj = {}
//   var len = nums.length
//   for (var i = 0; i < len; i++) {
//     if (obj[nums[i]]) {
//       obj[nums[i]] += 1
//     } else {
//       obj[nums[i]] = 1
//     }
//   }
//   console.log(obj)
//   var max = 0
//   var val
//   Object.keys(obj).forEach(item => {
//     if (obj[item] > max) {
//       max = obj[item]
//       val = item
//     }
//   })
//   return val
// }
// var nums = [3, 2, 3]

// var x = majorityElement(nums)
// console.log(x)


// var twoSum = function (nums, target) {
//   var len = nums.length
//   var i
//   var obj = {}
//   for (i = 0; i < len; i++) {
//     if (obj[target - nums[i]] !== undefined) {
//       return [obj[target - nums[i]], i]
//     }
//     obj[nums[i]] = i
//   }
//   return []
// }

// x = twoSum([3, 2, 4], 6)
// console.log(x)

// var findMedianSortedArrays = function (nums1, nums2) {
//   var len1 = nums1.length
//   var len2 = nums2.length
//   var lenSum = len1 + len2
//   var i = 0, j = 0
//   var arr = []
//   console.log(lenSum)
//   while (i < len1 && j < len2 && (i + j) <= Math.floor((lenSum) / 2)) {
//     if (nums1[i] > nums2[j]) {
//       arr.push(nums2[j])
//       j++
//     } else {
//       arr.push(nums1[i])
//       i++
//     }
//   }
//   while (i < len1 && (i + j) <= Math.floor((lenSum) / 2)) {
//     arr.push(nums1[i])
//     i++
//   }
//   while (j < len2 && (i + j) <= Math.floor((lenSum) / 2)) {
//     arr.push(nums2[j])
//     j++
//   }
//   console.log(arr)
//   console.log(i) // 2
//   console.log(j) // 1
//   if (lenSum % 2 === 0) {
//     if (i < len1) {
//       return (arr[lenSum / 2 - 1] + arr[lenSum / 2]) / 2
//     } else {
//       return (arr[lenSum / 2 - 1] + arr[lenSum / 2]) / 2
//     }
//   } else {
//     return arr[Math.floor(lenSum / 2)]
//   }
// }

// x = findMedianSortedArrays([1, 2], [3, 4])
// console.log(x)

// setTimeout(() => {
//   console.log('timer1')

//   Promise.resolve().then(function () {
//     console.log('promise1')
//   })
// }, 0)

// process.nextTick(() => {
//   console.log('nextTick')
//   process.nextTick(() => {
//     console.log('nextTick')
//     process.nextTick(() => {
//       console.log('nextTick')
//       process.nextTick(() => {
//         console.log('nextTick')
//       })
//     })
//   })
// })

// function create(build, ...args) {
//   var obj = {}
//   obj.__proto__ = build.prototype
//   build.apply(obj, args)
//   return obj
// }

function myInstance(left, right) {
  while (left.__proto__) {
    if (left.__proto__ === right.prototype) {
      return true
    }
    left = left.__proto__
  }
  return false
}