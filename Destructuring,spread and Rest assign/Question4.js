// Access random elements.


function RandomElement(arr) {

   // LastElement = arr[arr.lenght-1];
   
   let firstElement = arr[0];
   let secondElement = arr[1];
   let LastElement = arr.pop();

   console.log(`${firstElement},${secondElement},${LastElement}`);

   
    
}

let arr = [9,6,3,2,54,58,2,3,56,6,69,6,5]

RandomElement(arr);