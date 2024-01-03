// const fib = function(n){
// // if(n<=1) return n;
// // return fib(n-1) + fib(n-2);
// const arr = [0,1];

// for(let i=2; i<=n ;i++ ){
//     arr.push(arr[i-1]+arr[i-2]);
// }
// return arr[n];
// }

// const um = fib(5);
// console.log(um);

//f series 0,1,1,2,3,5,8,13  f(0)=0 f(1)=1 f(n ) = f(n-1) + f(n-2);


// const isAnagram = function(a,b){
// //     if(a.length !== b.length) return false;
// //    return a.split("").sort().join("") === b.split("").sort().join("");
// if(a.length !== b.length) return false;
// let obja = {};
// let objb={};

// for( let key of a){
//     console.log(key);
//     obja[key] = (obja[key] || 0)+1;
//     objb[key] = (objb[key] || 0)+1;

// }
// for(let key in obja){
//     if(obja[key] !== objb[key]) return false;
// }

// return true
// }

// console.log(isAnagram("anaam","anaam"));

// // split / sort / join ===

// const twoSum = function(nums,target){
// //     let map = {};
// //     for(let i=0; i<nums.length; i++){
// //         let n = nums[i]; 
// //         if(map[target-n] > 0) return [map[target-n],i];
// //       else{
// //         map[nums[i]] = i;
// //     }
// // }
// for(let i=0; i< nums.length ; i++){
//     for(let j=i+1; j<nums.length; j++){
//         if(nums[i] + nums[j] === target){
//             return [i,j];

//         }
//     }
// }
// }

// console.log(twoSum([2,7,11,15],26));

// const maxProfit = function(prices){
// let maxProfit =0;
// let purchasePrice = prices[0] || 0;
// for(let i=1; i<prices.length; i++){
//     if(prices[i] < purchasePrice){
//       purchasePrice = prices[i]

//     }

//     maxProfit = Math.max(maxProfit,prices[i]- purchasePrice)



// }
// return [maxProfit,purchasePrice];
// }

// console.log(maxProfit([7,1,5,3,6,4]));

// reverse a string using recurssion 

// function reverse(str){
//     if(str.length < 1) return " ";
    
//    return reverse(str.slice(1)) + str.charAt(0)
//   }
//   console.log(reverse("hello"))

// factorial using recurssion

// function factorial(n){
//     if(n==1) return 1;
    
//     return n * factorial(n-1)
    
// }

// console.log(factorial(5))

// function range(strt,end){
//     if(end < strt) return [];
   
   
//     let numbers = range(strt,end-1);
//       numbers.push(end);
   
//     return numbers
    
// }

// console.log(range(1,5))

function recursiveSubsets(nums){
result = [];
temp = [];
function subsets(nums,i){
  if (i == nums.length){
    result.push([...temp]);
  }
  else{
    temp.push(nums[i]);
    subsets(nums, i+1);
    temp.pop();
    subsets(nums, i+1);

  }

}
subsets(nums,0)
return result;
}

console.log(recursiveSubsets([1,2,3,4]))

