

// 1. Count the occurrences.


function countWordOccurrences(input) {
    // initialize the result object
    const result = {};
  
   
    const arr = input.split(' ');
    
    // loop through the array
    for(let word of arr) {
     
      if(result[word]) {
        result[word]++;
      } else {
        
        result[word] = 1;
      }
    }
    
    return result;
  }
  
  // try the function
  console.log(countWordOccurrences('hii hii how are you how'));

