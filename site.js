'use strict';

// FizzBuzz Function 
// Returns an array containing fizzbuzz values
function fizzBuzz(val1, val2) {
    let fbItems = [];
    for (let i = 1; i <= 100; i++)

        if (i % val1 === 0 && i % val2 === 0) {
            fbItems.push('fizzbuzz');
        }
        else if (i % val1 === 0) {
            fbItems.push('fizz');
        }
        else if (i % val2 === 0) {
            fbItems.push('buzz');
        }
        else {
            fbItems.push(i);
        }
    
    return fbItems;
}

function buzzIt() {
    // Get Slider Input Values
    let val1 = document.getElementById('fizz-slider').value;
    let val2 = document.getElementById('buzz-slider').value;

    // Call FizzBuzz with input values
    let fbItems = [];
    fbItems = fizzBuzz(val1, val2);

    // Grab Template
    var tableBody = document.getElementById('fizzBuzzBody');

    // Clear table body contents
    tableBody.innerHTML = "";
    var template = document.getElementById('fizzBuzzRow');

    // Clone the first node in template and all children
    var clone = template.content.cloneNode(true);
    var columns = clone.querySelectorAll("td");
    // Get the number of columns from template
    var columnCount = columns.length;

    for (let i = 0; i < fbItems.length; i+=columnCount) {
        clone = template.content.cloneNode(true);
        columns = clone.querySelectorAll("td");

        for (let colIndex = 0; colIndex < columnCount; colIndex++) {
            columns[colIndex].setAttribute("class", fbItems[i + colIndex]);
            columns[colIndex].textContent = fbItems[i+colIndex];
        }
        tableBody.appendChild(clone);
    }
}
