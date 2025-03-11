// Function to count the number of properties in an object
function countProperties(obj) {
    // Using Object.keys() to get an array of the object's keys and return its length
    return Object.keys(obj).length;
}

// Example usage
const exampleObject = { a: 1, b: 2, c: 3 };
console.log(countProperties(exampleObject)); // Output: 3