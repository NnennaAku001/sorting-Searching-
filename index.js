//Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.
// Each time we take a new card we put it in the right place in our hand. 
//Each time work only with the first i-1 element from of the array
//Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.

function insertionSort (newArr){
let n= newArr.length;

for (let i=1;i<n;i++){
    let current=newArr[i];
     let j=i-1
      
     while ((j>-1) && (current<newArr)){
     newArr[j+1]=newArr[j]
}

newArr[j+1] =current;
}

return newArr;
}