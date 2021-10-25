let arr = [1,2,3,4,5];
// arr.map((item) =>{
//   console.log(item * 2)
// })

//this is pointing towards arr
Array.prototype.myMap = function(callback){
  let result=[];
  for(let index=0; index<this.length; index++){   
    //result.push(callback(this[index], index, this))
    result.push(callback(this[index]))
  }
  return result;
}

arr.myMap((item)=>{
  console.log(item * 3)
})