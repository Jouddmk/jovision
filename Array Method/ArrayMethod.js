document.getElementById("buttonONE").addEventListener("click", function () {
    let arr = [];
    for (let i = 0; i <= 100; i++) {
        arr.push(i);
    }
    let Removed = arr.filter(number => number % 3 !== 0);
    console.log(Removed);

});

document.getElementById("buttontwo").addEventListener("click", function () {
    let arr1 = [];
    for (let i = 0; i <= 100; i++) {
        arr1.push(i);
    }
    let addnum = [];
    for (let i = 101; i <= 150; i++) {
        addnum.push(i);
    }
    console.log(addnum);
});
document.getElementById("buttonthree").addEventListener("click", function () {
    let arr2 = [];
    for (let i = 0; i <= 100; i++) {
        arr2.push(i);
    }
    let add = arr2.map(num => num + 3);
    console.log(add);
});
document.getElementById("buttonfour").addEventListener("click", function () {
    let arr3 = [];
    for (let i = 0; i <= 100; i++) {
        arr3.push(i);
    }
    let num = arr3.slice(20, 41);
    console.log(num);
});
document.getElementById("buttonfive").addEventListener("click", function () {
    let arr4 = [];
    for (let i = 0; i <= 100; i++) {
        arr4.push(i);
    }
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // رقم عشوائي بين 0 و i
            [array[i], array[j]] = [array[j], array[i]]; // تبادل القيمتين
        }
    }
    // let num = [...arr4];
    shuffleArray(arr4);
    let sorted = arr4.sort((a, b) => b - a);
    console.log(sorted);
});

