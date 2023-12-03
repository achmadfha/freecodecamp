function checkCashRegister(price, cash, cid) {
    const currencyUnit = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    let changeNeeded = cash - price;
    let totalCid = 0;

    // Calculate the total amount in the cash drawer (cid)
    for (let i = 0; i < cid.length; i++) {
        totalCid += cid[i][1];
    }
    totalCid = totalCid.toFixed(2);

    // Helper function to round to two decimal places
    const roundToTwoDecimalPlaces = (num) => Math.round(num * 100) / 100;

    // Check if cash-in-drawer is less than change needed
    if (parseFloat(totalCid) < changeNeeded) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    // Check if cash-in-drawer is equal to change needed
    if (parseFloat(totalCid) === changeNeeded) {
        return { status: "CLOSED", change: cid };
    }

    // Calculate change and update cid
    let changeArr = [];
    for (let i = cid.length - 1; i >= 0; i--) {
        const currentUnit = currencyUnit[cid[i][0]];
        let unitCount = cid[i][1] / currentUnit;
        let returnedCount = 0;

        while (changeNeeded >= currentUnit && unitCount > 0) {
            changeNeeded = roundToTwoDecimalPlaces(changeNeeded - currentUnit);
            unitCount = roundToTwoDecimalPlaces(unitCount - 1);
            returnedCount = roundToTwoDecimalPlaces(returnedCount + 1);
        }

        if (returnedCount > 0) {
            changeArr.push([cid[i][0], returnedCount * currentUnit]);
        }
    }

    // Check if change can be made with available denominations
    if (changeNeeded > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: changeArr };
}

// Example usage:
console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));