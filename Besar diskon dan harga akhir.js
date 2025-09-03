```javascript
// Function to calculate discount and final price
function calculateDiscount(totalPurchase) {
    // Initialize variables
    let discountPercentage = 0;
    let discountAmount = 0;
    let finalPrice = 0;
    
    // Check conditions and set discount percentage
    if (totalPurchase > 500000) {
        discountPercentage = 20;
    } else if (totalPurchase >= 200000 && totalPurchase <= 500000) {
        discountPercentage = 10;
    } else {
        discountPercentage = 0;
    }
    
    // Calculate discount amount
    discountAmount = (totalPurchase * discountPercentage) / 100;
    
    // Calculate final price
    finalPrice = totalPurchase - discountAmount;
    
    // Return results
    return {
        totalPurchase: totalPurchase,
        discountPercentage: discountPercentage,
        discountAmount: discountAmount,
        finalPrice: finalPrice
    };
}

// Main program with user input (for browser console)
function main() {
    // Get input from user
    let totalPurchase = parseFloat(prompt("Enter the total purchase amount: $"));
    
    // Validate input
    if (isNaN(totalPurchase) || totalPurchase < 0) {
        console.log("Invalid input! Please enter a valid positive number.");
        return;
    }
    
    // Calculate discount
    let result = calculateDiscount(totalPurchase);
    
    // Display output
    console.log("========== PURCHASE SUMMARY ==========");
    console.log(`Total Purchase: $${result.totalPurchase.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
    console.log(`Discount Percentage: ${result.discountPercentage}%`);
    console.log(`Discount Amount: $${result.discountAmount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
    console.log(`Final Price to Pay: $${result.finalPrice.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
    console.log("=====================================");
}

// Example usage with test cases
console.log("Test Case Examples:");
console.log("-------------------");

// Test case 1: Purchase > $500,000
let test1 = calculateDiscount(600000);
console.log(`Purchase: $600,000 → Discount: $${test1.discountAmount.toLocaleString()} → Final: $${test1.finalPrice.toLocaleString()}`);

// Test case 2: Purchase between $200,000 and $500,000
let test2 = calculateDiscount(350000);
console.log(`Purchase: $350,000 → Discount: $${test2.discountAmount.toLocaleString()} → Final: $${test2.finalPrice.toLocaleString()}`);

// Test case 3: Purchase < $200,000
let test3 = calculateDiscount(150000);
console.log(`Purchase: $150,000 → Discount: $${test3.discountAmount.toLocaleString()} → Final: $${test3.finalPrice.toLocaleString()}`);

// Run the main program (comment out if running in Node.js)
// main();
```
