// Food items categorized
const foodItems = {
    "Burgers": [
        { code: "B1001", name: "Classic Burger (Large)", price: 750.00, discount: "-" },
        { code: "B1002", name: "Classic Burger (Regular)", price: 1500.00, discount: "15%" },
        { code: "B1003", name: "Turkey Burger", price: 1600.00, discount: "-" },
        { code: "B1004", name: "Chicken Burger (Large)", price: 1400.00, discount: "-" },
        { code: "B1005", name: "Chicken Burger (Regular)", price: 800.00, discount: "20%" },
        { code: "B1006", name: "Cheese Burger (Large)", price: 1000.00, discount: "-" },
        { code: "B1007", name: "Cheese Burger (Regular)", price: 600.00, discount: "-" },
        { code: "B1008", name: "Bacon Burger", price: 650.00, discount: "15%" },
        { code: "B1009", name: "Shawarma Burger", price: 800.00, discount: "-" },
        { code: "B1010", name: "Olive Burger", price: 1800.00, discount: "-" },
        { code: "B1012", name: "Double-Cheese Burger", price: 1250.00, discount: "20%" },
        { code: "B1013", name: "Crispy Chicken Burger (Regular)", price: 1200.00, discount: "-" },
        { code: "B1014", name: "Crispy Chicken Burger (Large)", price: 1600.00, discount: "10%" },
        { code: "B1015", name: "Paneer Burger", price: 900.00, discount: "-" }
    ],
    "Submarines": [
        { code: "B1016", name: "Crispy Chicken Submarine (Large)", price: 2000.00, discount: "-" },
        { code: "B1017", name: "Crispy Chicken Submarine (Regular)", price: 1500.00, discount: "-" },
        { code: "B1018", name: "Chicken Submarine (Large)", price: 1800.00, discount: "3%" },
        { code: "B1019", name: "Chicken Submarine (Regular)", price: 1400.00, discount: "-" },
        { code: "B1020", name: "Grinder Submarine", price: 2300.00, discount: "-" },
        { code: "B1021", name: "Cheese Submarine", price: 2200.00, discount: "-" },
        { code: "B1022", name: "Double Cheese n Chicken Submarine", price: 1900.00, discount: "16%" },
        { code: "B1023", name: "Special Horgie Submarine", price: 2800.00, discount: "-" },
        { code: "B1024", name: "MOS Special Submarine", price: 3000.00, discount: "-" }
    ],
    "Fries": [
        { code: "B1025", name: "Steak Fries (Large)", price: 1200.00, discount: "-" },
        { code: "B1026", name: "Steak Fries (Medium)", price: 600.00, discount: "-" },
        { code: "B1027", name: "French Fries (Large)", price: 800.00, discount: "-" },
        { code: "B1028", name: "French Fries (Medium)", price: 650.00, discount: "-" },
        { code: "B1029", name: "French Fries (Small)", price: 450.00, discount: "-" },
        { code: "B1030", name: "Sweet Potato Fries (Large)", price: 600.00, discount: "-" }
    ],
    "Pasta": [
        { code: "B1031", name: "Chicken n Cheese Pasta", price: 1600.00, discount: "15%" },
        { code: "B1032", name: "Chicken Penne Pasta", price: 1700.00, discount: "-" },
        { code: "B1033", name: "Ground Turkey Pasta Bake", price: 2900.00, discount: "10%" },
        { code: "B1034", name: "Creamy Shrimp Pasta", price: 2000.00, discount: "-" },
        { code: "B1035", name: "Lemon Butter Pasta", price: 1950.00, discount: "-" },
        { code: "B1036", name: "Tagliatelle Pasta", price: 2400.00, discount: "1%" },
        { code: "B1037", name: "Baked Ravioli", price: 2000.00, discount: "1%" }
    ],
    "Chicken": [
        { code: "B1038", name: "Fried Chicken (Small)", price: 1200.00, discount: "-" },
        { code: "B1039", name: "Fried Chicken (Regular)", price: 2300.00, discount: "10%" },
        { code: "B1040", name: "Fried Chicken (Large)", price: 3100.00, discount: "5%" },
        { code: "B1041", name: "Hot Wings (Large)", price: 2400.00, discount: "-" },
        { code: "B1042", name: "Devilled Chicken (Large)", price: 900.00, discount: "-" },
        { code: "B1043", name: "BBQ Chicken (Regular)", price: 2100.00, discount: "-" }
    ],
    "Beverages": [
        { code: "B1044", name: "Pepsi (330ml)", price: 990.00, discount: "5%" },
        { code: "B1045", name: "Coca-Cola (330ml)", price: 1230.00, discount: "-" },
        { code: "B1046", name: "Sprite (330ml)", price: 1500.00, discount: "3%" },
        { code: "B1047", name: "Mirinda (330ml)", price: 850.00, discount: "7%" }
    ]
};

// Function to render food items in the table
function renderFoodTable() {
    const table = document.getElementById('food-table');
    
    for (let category in foodItems) {
        // Insert category header
        const categoryHeader = `
            <tr class="category-header bg-light">
                <th colspan="4">${category}</th>
            </tr>
        `;
        table.insertAdjacentHTML('beforeend', categoryHeader);
        
        // Insert each item under the category
        foodItems[category].forEach(item => {
            const row = `
                <tr>
                    <td>${item.code}</td>
                    <td>${item.name}</td>
                    <td>${item.price.toFixed(2)} ${item.discount !== '-' ? `(${item.discount})` : ''}</td>
                    <td><input type="number" class="form-control spinner" min="0" max="99" data-code="${item.code}" data-name="${item.name}" data-price="${item.price}" data-discount="${item.discount}"></td>
                </tr>
            `;
            table.insertAdjacentHTML('beforeend', row);
        });
    }
}

function getUserInput() {
    const inputs = document.querySelectorAll('#food-table .spinner');
    const order = [];

    inputs.forEach(input => {
        const quantity = parseInt(input.value, 10);
        if (quantity > 0) {
            const itemCode = input.id;

            // Find the item details from the foodItems object
            let itemDetails = {};
            for (let category in foodItems) {
                const item = foodItems[category].find(item => item.code === itemCode);
                if (item) {
                    itemDetails = item;
                    break;
                }
            }

            const item = {
                code: itemDetails.code,
                name: itemDetails.name,
                price: itemDetails.price,
                discount: itemDetails.discount,
                quantity: quantity
            };
            order.push(item);
        }
    });
    return order;
}

// Initialize the table on page load
document.addEventListener('DOMContentLoaded', renderFoodTable);

document.getElementById('submit-order').addEventListener('click', () => {
    const order = getUserInput();
    console.log(order); // This will print the order details to the console
});

