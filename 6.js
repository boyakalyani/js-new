// even or not even 
// function checknumberslist(list1,list2){
//     for(var i of list1){
//         for(var j of list2){
//             if(i%2===0 && j%2===0){
//                 console.log("dono even ")
//             }else{
//                 console.log("not even")
//             }
//         }break
//     }
// }
// var x=checknumberslist([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])


// 


// function eligibleforvote(age){
//     if(age<18){
//         console.log("not eligible")
//     }else{
//         console.log("eligible")
//     }
// }eligibleforvote(16)
// eligibleforvote(18)




// function  perfect(num){
//     var sum=0
//     for(var i=1; i<num; i++){
//         if(num%i===0){
//             sum+=i
//         }
//     }if(sum===num){
//         console.log("perfect number")
//     }else{
//         console.log("not perfect number")
//     }
// } perfect(13) 





// function average(num1,num2,num3){
//     console.log(`sum of 3 numbers :-${ num1+num2+num3}`)
//     console.log(`average of 3 numbers is :-${(num1+num2+num3)/3}`)
// }average(3,4,5)







// function showNumbers(list){
//     for(var i=0;i<=list;i++){
//         if(i%2===0){
//             console.log(`even ${i}`)
//         }else{
//             console.log(`odd ${i}`)
//         }
//     }
// }showNumbers(3)




// function isequallenth(str1,str2){
//     if(str1.length === str2.length){
//         console.log(str1)
//         console.log(str2)
//     }else if(str1.lenght>str2.lenght){
//         console.log(str1)
//     }else{
//         console.log(str2)
//     }
// }isequallenth("hello","welcome")
// isequallenth("sonu","monu")





// function squaresofnumbers(num){
//     var str=""
//     var jk={}
//     for(var i=1;i<=num;i++){
//         jk[i]=i*i
//     }console.log(jk)
// }squaresofnumbers(20)





// d1 = {'a': 100, 'b': 200, 'c':300}
// d2 = {'a': 300, 'b': 200, 'd':400}
// d3={}
// for(var i in d2){
//     if( i in d1){
//         d1[i]=d1[i]+d2[i]
//     }else{
//         d1[i]=d2[i]
//     }
// }console.log(d1)





// var num=require("readline-sync").questionInt("enter the num:-")
// var str=""
// var obj={}
// for(var i =1;i<=num;i++){
//     obj[i]=i*i
// }console.log(obj)





// var mainString="My name is kumar, and my friend’s name is Dhamu"
// var subString="is"
// var str=" "
// var k=mainString.split(" ")
// var count=0
// for(var i of k){
//     if(i===subString){
//         count+=1
//     }
// }console.log(`The substring is there ${count} times in main string`)





// var dic1={1:10, 2:20}

// var dic2={3:30,2:40}

// var dic3={5:50,6:60}

// for(var i in dic1){
//     for(var j in dic2){
//         if(i===j){
//             dic3[i]=dic2[j]+dic1[i]
//             break
//         }else{
//             dic3[i]=dic1[i]
//             dic3[j]=dic2[j]
//         }
//     }
// }console.log(dic3)
// {1: 10, 2: 60, 3: 30, 5: 50, 6: 60}







// var dict={"name":"Raju", 'marks':56}
//  var j=require("readline-sync").question("enter the character:-")
// for(var i in dict){
//     if(i===j){
//         console.log("exist")
//         break
//     }else{
//         console.log("not exist")
//         break
//     }
// }





// my_dict = {

//     'data1':100,
    
//     'data2': -54,
    
//     'data3': 247
    
//     }
//     var sum=0
//     for(var i in my_dict){
//         sum=sum+my_dict[i]
//     }console.log(`total sum is :-${sum}`)






// myDict= {
//     1: 'NAVGURUKUL',
//     2: 'IN',
//     3:{
//     'A' : 'WELCOME',
//     'B' : 'To',
//     'C' : 'DHARAMSALA'
//     }
//     }
// delete myDict[3]['A']
// console.log(myDict)






// var list1=["one",'two','three','four','five']
// var list2=[1,2,3,4,5,]
// var k={}
// for(var i in list2){
//     k[list1[i]]=list2[i]
// }console.log(k)




// var list=[
//     {"first":"1"},
//     {"second": "2"},
//     {"third": "1"},
//     {"four": "5"},
//     {"five":"5"},
//     {"six":"9"},
//     {"seven":"7"}
//     ]
// var uniqu_list=[]
// for(var i of list){
//     for(j in i){
//         if(!uniqu_list.includes(i[j]))
//         uniqu_list.push(i[j])
//     }
// }console.log(uniqu_list)




// )var unique={}
// for(var i=1;i<=10;i++){
//     var names=require("readline-sync").question(":ENTER the names:-")
//     var marks=require("readline-sync").questionInt(":ENTER the marks:-")
//     unique[names]=marks
// }console.log(unique




// const word="MISSISSIPPI"
// var unique=[]
// var obj={}
// for(var i of word){
//     if(unique.includes(i)){
//         obj[i]=obj[i]+1
//     }else{
//         unique.push(i)
//         obj[i]=1

//     }
// }console.log(obj)





// var dict = {

//     'Alex': ['subj1', 'subj2', 'subj3'],
    
//     'David': ['subj1', 'subj2']
    
//     }
//     var count=0
// for(var i in dict){
//     for(var a in dict[i]){
//         count+=1
//     }
// }console.log(count)




var my_dict = {
    'a':50,
    'b':58,
    'c':56,
    'd':40,
    'e':100,
    'f':20
    }
//     var Counter=0
// for(var i in my_dict){
    
// }
max1 = max(my_dict)
console.log(max1)