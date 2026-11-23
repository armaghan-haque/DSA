function hash(key) {
    return key % 10;
}

console.log(hash(101)); // 1
console.log(hash(102)); // 2
console.log(hash(103)); // 3