type rduplicate = (arr: number[]) => number[];

const removeDuplicates: rduplicate =  (array) =>{
    const remvdep =  array.filter((value, index) => array.indexOf(value) === index);
    return remvdep;
}

const removeDupli =  removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    
console.log(removeDupli); 
    



