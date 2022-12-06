function dontGiveMeFive(start, end) {
    let myCnt = 0;
    for (var i = start; i <= end; i++) {
        if (String(i).includes('5')) {
            myCnt = myCnt;
        }
        else {
            myCnt = myCnt + 1;
        }
    }
    return myCnt;
}

console.log(dontGiveMeFive(1, 9)); // 8
console.log(dontGiveMeFive(4, 17)); // 12
console.log(dontGiveMeFive(1, 22)); // 20