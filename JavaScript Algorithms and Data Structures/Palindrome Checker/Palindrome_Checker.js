function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the cleaned string is equal to its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage:
console.log(palindrome("eye")); // Output: true
console.log(palindrome("RaceCar")); // Output: true
console.log(palindrome("2A3*3a2")); // Output: true
console.log(palindrome("2_A3*3#A2")); // Output: true
console.log(palindrome("notapalindrome")); // Output: false