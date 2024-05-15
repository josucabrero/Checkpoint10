const bottegaMenu = {
    breakfast: {
        entrees: {
            pancakes: 5.99,
            omelette: 6.99,
            frenchToast: 5.49
        },
        sides: {
            bacon: 2.99,
            toast: 1.99,
            hashbrowns: 2.49
        }
    },
    lunch: {
        entrees: {
            burger: 8.99,
            salad: 7.99,
            sandwich: 6.99
        },
        sides: {
            fries: 2.99,
            coleslaw: 1.99,
            onionRings: 3.49
        }
    },
    dinner: {
        entrees: {
            burger: 9.99,
            salad: 8.99,
            sandwich: 7.99
        },
        sides: {
            fries: 3.49,
            coleslaw: 2.99,
            onionRings: 4.49
        }
    }
};

const comments = [
    "Great choice!",
    "Yummy!",
    "That’s a classic!",
    "You’ll love it!",
    "Excellent pick!"
];

function getRandomComment() {
    return comments[Math.floor(Math.random() * comments.length)];
}

function selectItem(items, itemType) {
    let selected = prompt(`Please select a ${itemType}:\n${Object.keys(items).map(item => `${item} - $${items[item].toFixed(2)}`).join("\n")}`).toLowerCase();
    if (!items[selected]) {
        alert("Item not found, please try again.");
        return selectItem(items, itemType);
    }
    alert(`You selected ${selected}. ${getRandomComment()}`);
    return selected;
}

function calculateTotal(entreePrice, side1Price, side2Price, entreeName, side1Name, side2Name) {
    const total = entreePrice + side1Price + side2Price;

    let bill = `=== Your Bill ===\n`;
    bill += `${entreeName}: $${entreePrice.toFixed(2)}\n`;
    bill += `${side1Name}: $${side1Price.toFixed(2)}\n`;
    bill += `${side2Name}: $${side2Price.toFixed(2)}\n`;
    bill += `============\n`;
    bill += `Total: $${total.toFixed(2)}`;

    alert(bill);
}

function runBottega() {
    alert("Welcome to Bottega Restaurant");
    const hour = parseInt(prompt("Please enter the current hour (in 24-hour format):"));
    let mealType;

    if (hour >= 6 && hour < 11) {
        mealType = "breakfast";
    } else if (hour >= 11 && hour < 16) {
        mealType = "lunch";
    } else if (hour >= 16 && hour < 22) {
        mealType = "dinner";
    } else {
        alert("Sorry, the restaurant is closed at this hour.");
        return;
    }

    const menu = bottegaMenu[mealType];

    let entreeName = selectItem(menu.entrees, "entree");
    let side1Name = selectItem(menu.sides, "side");
    let side2Name = selectItem(menu.sides, "side");

    let entreePrice = menu.entrees[entreeName];
    let side1Price = menu.sides[side1Name];
    let side2Price = menu.sides[side2Name];

    calculateTotal(entreePrice, side1Price, side2Price, entreeName, side1Name, side2Name);
}

runBottega();
