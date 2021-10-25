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
//------------------------------------------------------
const ages = [32, 33, 16, 40];
ages.filter(checkAdult)    // Returns [32, 33, 40]
function checkAdult(age) {
  return age >= 18;
}

Array.prototype.myFilter = function(callback) {
    const filterArr = [];
    for(let index = 0; index<this.length; index++) {
        if(!!callback(this[index], index, this)) {
            filterArr.push(this[index]);
        }
    }
    return filterArr;
}
//-----------------------------------------------------------
Array.prototype.myReduce = function(callback, accumulator) {
    if(this.length < 1) {
        throw new Error("Array is Empty")
    }

    if(!accumulator) {
        if(typeof this[0] === "string") {
            accumulator = '';
        } else if(typeof this[0] === "number") {
            accumulator = 0;
        }
    }

    for(let index=0; index < this.length; index++) {
        accumulator = callback(accumulator, this[index]);
    }
    return accumulator;
}

const names = ['Zakir', 'Rashid', 'Harish'];
const filterNames = names.myFilter(name => name !== 'Zakir');
const statment = names.myReduce((acc, ele) => acc + ele);

console.log(filterNames) // [ 'Rashid', 'Harish' ]
console.log(statment); // Zakir Rashid Harish