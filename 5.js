//array quetion 7 
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10,7]
// var i=1
// while(i<numbers.length){
//     i++
// }console.log(i)




//first max number
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var max=0
// for(var i=0;i<=numbers.length;i++){
//     if(numbers[i]>max){
//     max=numbers[i]
//     }
// }console.log(max)




//second max
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var max=0
// var max1=0
// for(var i=1;i<=numbers.length;i++){
//     if(max<numbers[i]){
//         if(max1<numbers[i]){
//             max1=max
//         }max=numbers[i]
//     }else{
//         if(max1<numbers[i]){
//             max1=numbers[i]
//         }
//     }
// }console.log(max1)





//reverse array
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var rever=[]
// for(var i=numbers.length-1;i>=0;i--){
//     rever.push(numbers[i])
// }console.log(rever)





//palinvar dram array
// var Name=["m","a","m","k"]
// var arr=[]
// for(var i=Name.length-1;i>=0;i--){
//     arr.push(Name[i])
// }
// count=0
// for(var j=0;j<Name.length;j++){
//     if(arr[j]===Name[j]){
//         count++
//     }
// }
// if(count===Name.length){
//     console.log("palnfra")
// }else{
//     console.log("nt plndarm")
// }





//same number
// var elem=[]
// var list1 = [1,2,3,4,5,6]
// var list2 = [2,3,1,0,6,7]
// for(var i of list1){
//     if(!list2.includes(i)){
//     elem.push(i)
//     }
// }console.log(elem)







//sum list sum
// var sum=0
// var marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65, 76],
//     [95, 45, 78, 52, 49]
//  ];
//  for(i of marks){
//     for(j of i){
//         sum=sum+j
//     }
//  }
// console.log(sum)




//two ntwo pairs ye
// var n = [10, 11, 12, 13, 14, 17, 18, 19]
// var number =30;
// var output=[]
// for(var i of n){
//     for(var j of n){
//         if(i+j===number){
//             output.push([i,j])
//         }
//     }
// }
// console.log(output)




 

// even count and odd count
// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var i=1
// var evencount=0
// var oddcount=0
// for(var i of elements){
//     if(i%2===0){
//         evencount+=1
//     }else{
//         oddcount+=1
//     }
// }console.log(evencount)
// console.log(oddcount)








//even sum and odd sum
// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
// var evensum=0
// var oddsum=0
// for(var  i of elements){
//     if(i%2===0){
//         evensum+=i
//     }else{
//         oddsum+=i
//     }
// }console.log(evensum)
// console.log(oddsum)




//average even sum odd sum
// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var evensum=0
// var oddsum=0
// for(var i of elements){
//     if(i%2===0){
//         evensum+=i
//     }else{
//         oddsum+=i
//     }
// }console.log((evensum+oddsum)/2)





//odd even count ,sum,average
// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var evensum=0
// var oddsum=0
// var evencount=0
// var oddcount=0
// for(var i of elements){
//     if(i%2===0){
//         evencount+=1
//         evensum+=i
//     }else{
//         oddcount+=1
//         oddsum+=i
//     }
// }console.log(evensum)
// console.log(oddsum)
// console.log(oddcount)
// console.log(evencount)
// console.log((oddsum+evensum)/2)





//paisa rey 
// var kitnapaisahai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
// var Lakhpaticoumt=0
// var Crorepaticount=0
// var Dilwalecount=0
// for(var i of kitnapaisahai){
//     if(i>=10000000){
//         Crorepaticount+=1
//     }else if(i>=100000){
//         Lakhpaticoumt+=1
//     }else if(i<=10000){
//         Dilwalecount+=1
//     }
// }
// console.log(Dilwalecount)
// console.log(Lakhpaticoumt)
// console.log(Crorepaticount)







//count of same element sin array
// var char_list = ["s","w","a","t","h","i"]
// var unique=[]
// for(var i of char_list){
//     if(!unique.includes(i)){
//         unique.push(i)
//     }
// }console.log(unique)
// var count=0
// for(var j of unique){
//     for(var k of char_list){
//         if(j==k){
//             count+=1
//         }
//     }console.log(count,j,"times")
// }






//duplicate number ni thiyaladam
// var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// var uniques=[]
// var duplicates=[]
// for(var i of number_list){
//     if(!uniques.includes(i))
//     uniques.push(i)
// }
// var count=0
// for(var j of uniques){
//     for(var k of number_list){
//     if(j==k){
//         count+=1
//     }
// }if(count>1){
//     duplicates.push(j)
// }
// }
// console.log(duplicates)





//over di like is
// var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
// var subStr = "over"
// var str=" "
// var k=mainStr.split(" ")
// for(var i of k){
//     if(i===subStr){
//        continue
//     } str=str+i+" "
// }console.log(str)




