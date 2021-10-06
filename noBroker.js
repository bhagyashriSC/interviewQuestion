const prices = [10,12,16,4,2,1,16,8];
let profit=[];
for(let i= 0; i<prices.length; i++){
  for(let i= 0; i<prices.length; i++){
    console.log("buy price:", prices[i], "Sell price:", prices[i+1], "profit:", prices[i+1]-prices[i])
    if(prices[i+1] !== "undefined"){
     profit.push(prices[i+1]-prices[i])
    } 
  }
}
console.log("Max profit", profit.reduce((prv, curr)=>{
  return (prv < curr ? curr : prv)
}))