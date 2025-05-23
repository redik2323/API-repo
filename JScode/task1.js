const cMassive = [4, 4, 8, 3, 3, 3, 2, 4, 4];
let   vSum = 0;

console.log("Вивести кожен елемент масиву"); 

cMassive.forEach((vElement) => {
  console.log(vElement);
});

console.log("-----------------------------------------------------------------");
console.log("Вивести перші 3 елементи масиву"); 
for (let i = 0; i < 3; i++) {
  console.log(cMassive[i]);
};
console.log("-----------------------------------------------------------------");

console.log("Вивести суму всіх елементів");

cMassive.forEach((vElement) => {
  vSum += vElement;
});
console.log(vSum);


console.log("-----------------------------------------------------------------");

console.log("Вивести суму всіх елементів окрім елемента що = 4");
vSum = 0;
cMassive.forEach((vElement) => {
  if (vElement !== 4) {
    vSum += vElement;
  };
});
console.log(vSum);