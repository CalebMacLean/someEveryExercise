// Has Odd Number Function
function hasOddNumber(arr) {
    return arr.some(num => {
        return !(num % 2 === 0);
    })
};

// Has a Zero Function
function hasAZero(num) {
    const numStr = num.toString();
    const numArr = Array.from(numStr);
    return numArr.some(num => {
        return num === '0';
    })
};

// Has Only Odd Numbers
function hasOnlyOddNumbers(arr) {
    return arr.every(num => {
        return num % 2 !== 0;
    })
};

// Has No Duplicates Function
function hasNoDuplicates(arr) {
    return arr.every(val => {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
};

// Has Certain Key Function
function hasCertainKey(arr, key) {
    return arr.every(obj => {
        if(obj[key]) {
            return true;
        }
        return false;
    })
};

// Has Certain Value Function
function hasCertainValue(arr, key, val) {
    arr.every(obj => {
        if(obj[key] === val) {
            return true;
        }
        return false;
    })
};
