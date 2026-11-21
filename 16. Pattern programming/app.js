// square 

// let n = 4;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= n; j++) {
//         row += "* ";
//     }

//     console.log(row);
// }

// Right angle triangle

// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }

//     console.log(row);
// }

// 3. Inverted right-angle triangle

// let n = 5;

// for (let i = n; i >= 1; i--) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }

//     console.log(row);
// }

// 4. Pyramid pattern
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }

//     for (let k = 1; k <= i; k++) {
//         row += "* ";
//     }

//     console.log(row);
// }

//  5. Number triangle

// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += j + " ";
//     }

//     console.log(row);
// }

// 6. Repeated number triangle

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += i + " ";
    }

    console.log(row);
}