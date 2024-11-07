const sumofarray =  (array: number[]): number =>{
    let totalsum = 0;
    for (let num of array){
        totalsum = totalsum + num; 
    }
    return totalsum;
}

const totalsumofarray =  sumofarray([1,2,3,4,5]);
console.log(totalsumofarray);