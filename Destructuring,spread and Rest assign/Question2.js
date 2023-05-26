
//Only unique items are allowed.

function UniqueElement(arr){
    const unique = Array.from(new Set(arr));
     console.log(unique);

}
const arr = [1,2,3,4,6,5,6,2,5]
UniqueElement(arr);