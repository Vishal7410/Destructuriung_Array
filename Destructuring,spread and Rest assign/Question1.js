// let oneArray = [1,2,3,4,5,6]
// let twoArray = [7,8,9,10,11]

// const threeArray = [...oneArray,...twoArray]
// console.log(threeArray);

// 1. Count the occurrences.

function countWords(string) 
{
    const wordCounts = new Map();
    const wordss = string.split('')

    for (const word of wordss) {
        if (wordCounts.has(word)){
            wordCounts.set(word, wordCounts.get(word) + 1)
        }
        else{
            wordCounts.set(word, 1)
        }
        
    }
    
    return wordCounts;
}

let text = "hii raju hii chau";
const wordCounts = countWords(text);

for (const [word,Count] of wordCounts) {

    console.log(`${word}: ${Count}`);
    
}

