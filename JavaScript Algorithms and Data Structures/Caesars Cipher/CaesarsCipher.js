function rot13(str) {
    const decode = (char) => {
        const charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) { // Check if it's an uppercase letter
            return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
        } else {
            return char;
        }
    };

    return str.split('').map(decode).join('');
}

// Example usage:
console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP"