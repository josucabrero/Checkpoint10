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
    let selected = prompt(`Please select a ${itemType}: ${Object.keys(items).join(", ")}`);
    if (!items[selected]) {
        alert("Item not found, please try again.");
        return selectItem(items, itemType);
    }
    alert(`You selected ${selected}. ${getRandomComment()}`);
    alert(`Price: $${items[selected].toFixed(2)}`);
    return items[selected];
}

function calculateTotal(entreePrice, side1Price, side2Price) {
    const total = entreePrice + side1Price + side2Price;
    alert(`Total cost of your meal: $${total.toFixed(2)}`);
}

function runBottega() {
    alert("Welcome to Bottega Restaurant");
    const mealType = prompt("Would you like Breakfast, Lunch, or Dinner?").toLowerCase();
    const menu = bottegaMenu[mealType];

    if (!menu) {
        console.log("Invalid meal type, please try again.");
        return runBottega();
    }

    let entreePrice = selectItem(menu.entrees, "entree");

    let side1Price = selectItem(menu.sides, "side");
    
    let side2Price = selectItem(menu.sides, "side");
    

    calculateTotal(entreePrice, side1Price, side2Price);
}

runBottega();
