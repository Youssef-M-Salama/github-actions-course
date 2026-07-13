function greet(name) {
    return `Hello, ${name}!`;
}

// Export function
module.exports = greet;

// Run directly for debugging
if (require.main === module) {
    console.log(greet("World"));
}