// var name=2;
// function functionName(name,par2){
//     console.log(par1+par2);
// }
// functionName(3)

// var a =["kalyani","vijitha","ayushi","mahesh","veera"];
// var b=a.splice(1,2)
// console.log(b)



// reverse an array
// var a=[1,2,3,4,5,6,7,8,9]
// var b=[]
// for(var i=a.length-1;i>=0;i--){
//     b.push(a[i])
// }console.log(b)





// 
// var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// var uniques=[]
// var duplicates=[]
// for(var i of number_list){
// 	 if(!uniques.includes(i)){
//       uniques.push(i)
// 	  }
// }	 
// for(var j of uniques){
// 	 count=0
// 	  for(var k of number_list){
// 	      if (j === k){
// 	          count+=1
// 	      }
// 	  }
// 	 if(count >1){
// 	   duplicates.push(j);
// 	};
// }
// console.log(duplicates);




//sortmerge
// function mergeSortdArray(a,b){
// 	for(var i=0;i<b.length;i++){
// 		a.push(b[i]);
// 	}
// 	console.log(a);
// }
// mergeSortdArray([1,2,3,4,5,6],[7,8,9])




// var a=[4,9,5]
// var b=[9,4,9,8,4];
// var union = [...new Set([...a, ...b])];
// console.log(union)


var unionArr = _.union([34,35,45,48,49], [48,55]);
console.log(unionArr);
