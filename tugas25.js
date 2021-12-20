let data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];



console.log('Sebelumnya : ' + data);
asc = data.sort();
console.log('Ascending : ' + asc);
dsc = data.reverse();
console.log('Descending : ' + dsc);
fil = data.filter(data => {
    return data > 10
});

console.log('Filter > 10 : ' + fil);