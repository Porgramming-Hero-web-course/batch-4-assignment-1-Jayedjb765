type sumtotalarray = (arr:number[]) =>  number;

const sumArray : sumtotalarray =  (array) =>{
    let totalsum = 0;
    for (let num of array){
        totalsum = totalsum + num; 
    }
    return totalsum;
}

const totalsumofarray : number =  sumArray([1,2,3,4,5]);
console.log(totalsumofarray);