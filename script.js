
// 1. push()
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
fruits.push("Pineapple", "Guava", "Papaya");
console.log("1.", fruits);

// 2. pop()
let numbers = [10, 20, 30, 40, 50, 60];
numbers.pop();
console.log("2.", numbers);

// 3. shift()
let names = ["Arun", "Bala", "David", "John", "Ravi"];
names.shift();
console.log("3.", names);

// 4. unshift()
let nums = [30, 40, 50, 60];
nums.unshift(10, 20);
console.log("4.", nums);

// 5. splice() - remove 2 elements from index 1
let arr1 = [10, 20, 30, 40, 50];
arr1.splice(1, 2);
console.log("5.", arr1);

// 6. splice() - replace 3 with 100
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 1, 100);
console.log("6.", arr2);

// 7. fill()
let arr3 = [1, 2, 3, 4, 5];
arr3.fill("hello", 2, 5);
console.log("7.", arr3);


// 8. concat()
let a1 = [10, 20, 30];
let a2 = [40, 50, 60];
let combined = a1.concat(a2);
console.log("8.", combined);

// 9. slice()
let arr4 = [10, 20, 30, 40, 50, 60];
console.log("9.", arr4.slice(1, 4));

// 10. flat(Infinity)
let nested = [1, [2, 3], [4, [5, 6]]];
console.log("10.", nested.flat(Infinity));

// 11. includes()
let arr5 = [10, 20, 30, 40, 50];
console.log("11.", arr5.includes(30));

// 12. indexOf()
let arr6 = [5, 10, 15, 20, 25];
console.log("12.", arr6.indexOf(20));

// 13. lastIndexOf()
let arr7 = [1, 2, 3, 2, 1, 2];
console.log("13.", arr7.lastIndexOf(2));

// 14. sort()
let sortNumbers = [40, 10, 50, 20, 30];
sortNumbers.sort((a, b) => a - b);
console.log("14.", sortNumbers);

// 15. reverse()
let reverseNumbers = [1, 2, 3, 4, 5, 6, 7];
reverseNumbers.reverse();
console.log("15.", reverseNumbers);


// 16. Spread operator - merge arrays
let firstArray = [1, 2, 3, 4];
let secondArray = [5, 6, 7, 8];
let mergedArray = [...firstArray, ...secondArray];
console.log("16.", mergedArray);

// 17. Spread operator - merge objects
let student = {
    name: "Zeion",
    age: 26
};

let job = {
    role: "Devaloper",
    location: "Salem"
};

let details = { ...student, ...job };
console.log("17.", details);

// 18. Rest operator - collect remaining arguments
function showNumbers(a, b, ...c) {
    console.log("First:", a);
    console.log("Second:", b);
    console.log("Remaining:", c);
}

showNumbers(10, 20, 30, 40, 50);
console.log("18. See the values above");

// 19. Sum using function one(a, b, ...c)
function one(a, b, ...c) {
    let sum = a + b + c[0] + c[1];
    console.log("19.", sum);
}

one(10, 20, 30, 40);

// 20. Spread operator - copy an array
let original = [10, 20, 30, 40];
let copied = [...original];
console.log("20.", copied);


// 21. Extract four values
let values = [10, 20, 30, 40];
let [v1, v2, v3, v4] = values;
console.log("21.", v1, v2, v3, v4);

// 22. Nested array destructuring
let nestedValues = [1, 2, [3, 4, [5, 6]]];
let [n1, n2, [n3, n4, [n5, n6]]] = nestedValues;
console.log("22.", n1, n2, n3, n4, n5, n6);

// 23. Student details using destructuring
let studentData = ["Zeion", 26, 8.5];
let [studentName, studentAge, cgpa] = studentData;
console.log("23.", studentName, studentAge, cgpa);

// 24. Object Destructuring

let person = {
    name: "Zeion",
    role: "Developer",
    location: "Salem"
};

let {
    name: personName,
    role: personRole,
    location: personLocation
} = person;

console.log("24.", personName, personRole, personLocation);

// 25. Nested object destructuring
let studentInfo = {
    name: "Arun",
    address: {
        city: "Salem",
        state: "Tamil Nadu"
    }
};

let {
    address: { city, state }
} = studentInfo;

console.log("25.", city, state);

// 26. Nested location object
let employee = {
    name: "John",
    role: "Manager",
    location: {
        mainLocation: "Chennai",
        currentLocation: "Salem"
    }
};

let {
    name: employeeName,
    role: employeeRole,
    location: { mainLocation, currentLocation }
} = employee;

console.log("26.", employeeName, employeeRole);
console.log("Main Location:", mainLocation);
console.log("Current Location:", currentLocation);


// PART 6: MIXED PRACTICAL CHALLENGES

// 27. Remove first and last, add two at beginning
let tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

tenNumbers.shift();
tenNumbers.pop();
tenNumbers.unshift(100, 200);

console.log("27.", tenNumbers);

// 28. includes(), indexOf(), lastIndexOf()
let duplicateNumbers = [10, 20, 30, 20, 40, 20];
let selectedNumber = 20;

console.log("28. Exists:", duplicateNumbers.includes(selectedNumber));
console.log("First index:", duplicateNumbers.indexOf(selectedNumber));
console.log("Last index:", duplicateNumbers.lastIndexOf(selectedNumber));

// 29. Merge employee objects and destructure
let employee1 = {
    name: "Zeion",
    age: 26
};

let employee2 = {
    role: "Developer",
    department: "IT"
};

let mergedEmployee = { ...employee1, ...employee2 };

let {
    name: finalName,
    role: finalRole
} = mergedEmployee;

console.log("29.", finalName, finalRole);

// 30. Flatten and reverse a nested array
let numberArray = [1, [2, 3], [4, [5, 6]], 7];

let flatArray = numberArray.flat(Infinity);
flatArray.reverse();

console.log("30.", flatArray);
