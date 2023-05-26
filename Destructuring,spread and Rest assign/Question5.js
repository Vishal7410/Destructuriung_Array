function minMaxvalue(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    console.log(`${min},${max}`);

}

let arr = [1,2,3,4,6,8,9,71];
minMaxvalue(arr);
