// Part 1: Variable Declarations and Conditionals


// Variable declarations using different keywords
var globalVar = "I'm a global variable"; // Function-scoped
let blockVar = "I'm a block-scoped variable"; // Block-scoped
const constantVar = "I'm a constant"; // Cannot be reassigned

// DOM elements for Part 1
const conditionalBtn = document.getElementById('conditionalBtn');
const conditionalResult = document.getElementById('conditionalResult');
const numberInput = document.getElementById('numberInput');

// Conditional example
conditionalBtn.addEventListener('click', function() {
    const number = parseFloat(numberInput.value);
    
    if (isNaN(number)) {
        conditionalResult.textContent = "Please enter a valid number!";
        conditionalResult.className = "highlight";
        setTimeout(() => conditionalResult.classList.remove("highlight"), 1000);
    } else if (number > 10) {
        conditionalResult.textContent = `${number} is greater than 10`;
    } else if (number < 10) {
        conditionalResult.textContent = `${number} is less than 10`;
    } else {
        conditionalResult.textContent = `${number} is exactly 10`;
    }
});


// Part 2: Custom Functions


// Function 1: Calculate area of a rectangle
function calculateArea(width, height) {
    return width * height;
}

// Function 2: Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// DOM elements for Part 2
const function1Btn = document.getElementById('function1Btn');
const function2Btn = document.getElementById('function2Btn');
const functionResult = document.getElementById('functionResult');

// Using the functions with button clicks
function1Btn.addEventListener('click', function() {
    const width = Math.floor(Math.random() * 10) + 1;
    const height = Math.floor(Math.random() * 10) + 1;
    const area = calculateArea(width, height);
    functionResult.textContent = `Area of ${width} x ${height} rectangle is ${area}`;
});

function2Btn.addEventListener('click', function() {
    const originalString = "Hello JavaScript!";
    const reversed = reverseString(originalString);
    functionResult.textContent = `Original: ${originalString} | Reversed: ${reversed}`;
});


// Part 3: Loops


// Loop 1: For loop (count to 10)
function countToTen() {
    let result = "Counting: ";
    for (let i = 1; i <= 10; i++) {
        result += i;
        if (i < 10) result += ", ";
    }
    return result;
}

// Loop 2: For...of loop (iterate through array)
function iterateArray() {
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    let result = "Fruits: ";
    for (const fruit of fruits) {
        result += fruit + ", ";
    }
    // Remove the trailing comma and space
    return result.slice(0, -2);
}

// DOM elements for Part 3
const loop1Btn = document.getElementById('loop1Btn');
const loop2Btn = document.getElementById('loop2Btn');
const loopResult = document.getElementById('loopResult');

// Using the loops with button clicks
loop1Btn.addEventListener('click', function() {
    loopResult.textContent = countToTen();
});

loop2Btn.addEventListener('click', function() {
    loopResult.textContent = iterateArray();
});


// Part 4: DOM Interactions


// DOM Interaction 1: Change background color
const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', function() {
    const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffccff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    
    // Add a temporary animation class to the button
    this.classList.add('color-change');
    setTimeout(() => this.classList.remove('color-change'), 2000);
});

// DOM Interaction 2: Add list item
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');
addItemBtn.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemList.children.length + 1} (added)`;
    itemList.appendChild(newItem);
});

// DOM Interaction 3: Toggle visibility
const toggleVisibilityBtn = document.getElementById('toggleVisibilityBtn');
const visibilityText = document.getElementById('visibilityText');
toggleVisibilityBtn.addEventListener('click', function() {
    visibilityText.classList.toggle('hidden');
    
    if (visibilityText.classList.contains('hidden')) {
        this.textContent = "Show Text";
    } else {
        this.textContent = "Hide Text";
    }
});

// Additional DOM Interaction: Change section colors on mouseover
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#f0f8ff';
    });
    
    section.addEventListener('mouseout', function() {
        this.style.backgroundColor = 'white';
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript Practice Project Loaded!");
    console.log("Global variable:", globalVar);
    console.log("Block variable:", blockVar);
    console.log("Constant variable:", constantVar);
});