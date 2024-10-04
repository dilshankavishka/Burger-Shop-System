// Food items categorized
var foodItems = {
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

let orders = [
    { orderId: 101, orderDate: '2024-10-04', total: 7000.00 },
    { orderId: 102, orderDate: '2024-10-03', total: 4500.00 },
    { orderId: 103, orderDate: '2024-10-02', total: 3600.00 },
];

function generateOrderId() {
    var lastOrderId = localStorage.getItem('lastOrderId');
    if (!lastOrderId) {
        lastOrderId = 10000;
    } else {
        lastOrderId = parseInt(lastOrderId, 10);
    }
    var newOrderId = lastOrderId + 1;
    localStorage.setItem('lastOrderId', newOrderId);
    return 'O' + newOrderId;
}

function renderFoodTable() {
    var tableBody = document.getElementById('food-table');
    tableBody.innerHTML = ''; 

    for (var category in foodItems) {
        if (foodItems.hasOwnProperty(category)) {
            var items = foodItems[category];

            // Create category header row
            var categoryHeader = document.createElement('tr');
            categoryHeader.className = 'category-header bg-light';

            var categoryCell = document.createElement('th');
            categoryCell.colSpan = 4;
            categoryCell.innerHTML = category;
            categoryHeader.appendChild(categoryCell);

            tableBody.appendChild(categoryHeader);

            // Create rows for each food item
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var row = document.createElement('tr');

                var codeCell = document.createElement('td');
                codeCell.innerHTML = item.code;
                row.appendChild(codeCell);

                var nameCell = document.createElement('td');
                nameCell.innerHTML = item.name;
                row.appendChild(nameCell);

                var priceCell = document.createElement('td');
                if (item.discount !== '-') {
                    priceCell.innerHTML = item.price.toFixed(2) + ' PKR (' + item.discount + ')';
                } else {
                    priceCell.innerHTML = item.price.toFixed(2) + ' PKR';
                }
                row.appendChild(priceCell);

                var quantityCell = document.createElement('td');
                var input = document.createElement('input');
                input.type = 'number';
                input.className = 'form-control spinner';
                input.min = '0';
                input.max = '99';
                input.value = '0';
                input.setAttribute('data-code', item.code);
                input.setAttribute('data-name', item.name);
                input.setAttribute('data-price', item.price);
                input.setAttribute('data-discount', item.discount);
                quantityCell.appendChild(input);
                row.appendChild(quantityCell);

                tableBody.appendChild(row);
            }
        }
    }
}

function calculateTotalPrice(price, discount, quantity) {
    var finalPrice = price;
    if (discount !== '-') {
        var discountPercentage = parseFloat(discount);
        finalPrice = price - (price * (discountPercentage / 100));
    }
    return finalPrice * quantity;
}

function calculateOrderTotal(items) {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total += items[i].totalPrice;
    }
    return total.toFixed(2);
}

function getUserInput() {
    var inputs = document.getElementsByClassName('spinner');
    var orderedItems = [];

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var quantity = parseInt(input.value, 10);
        if (quantity > 0) {
            var code = input.getAttribute('data-code');
            var name = input.getAttribute('data-name');
            var price = parseFloat(input.getAttribute('data-price'));
            var discount = input.getAttribute('data-discount');

            var totalPrice = calculateTotalPrice(price, discount, quantity);

            var item = {
                code: code,
                name: name,
                price: price,
                discount: discount,
                quantity: quantity,
                totalPrice: totalPrice
            };
            orderedItems.push(item);
        }
    }

    if (orderedItems.length === 0) {
        alert("Please select at least one item to order.");
        return null;
    }

    var order = {
        orderId: generateOrderId(),
        items: orderedItems,
        orderDate: new Date().toLocaleString(),
        totalAmount: calculateOrderTotal(orderedItems)
    };

    return order;
}

// Function to handle order submission
function handleOrderSubmission() {
    var order = getUserInput();
    if (order !== null) {
        console.log(order);
        alert("Order ID: " + order.orderId + "\nTotal Amount: PKR " + order.totalAmount + "\nOrder successfully placed!");
        orders.push({
            orderId: order.orderId,
            orderDate: new Date().toLocaleString(),
            total: order.totalAmount
        });       
        resetOrderForm();
    }
}
    
function resetOrderForm() {
    var inputs = document.getElementsByClassName('spinner');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

// Initialize the table on page load
window.onload = function() {
    renderFoodTable();
    var submitButton = document.getElementById('submit-order');
    if (submitButton) {
        submitButton.onclick = handleOrderSubmission;
    }

    var orderTable = document.getElementById('order-table');
    if (orderTable) {
        renderOrderTable();
    }
};

// Function to render orders in the table
function renderOrderTable() {
    const tableBody = document.querySelector("#order-table-body");

    if (!tableBody) {
        console.error("Table body element not found");
        return;
    }
    tableBody.innerHTML = '';

    orders.forEach(order => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${order.orderId}</td>
            <td>${order.orderDate}</td>
            <td>PKR ${parseFloat(order.total).toFixed(2)}</td>
        `;

        tableBody.appendChild(row);
    });
}
function SubmitOrder(){
    handleOrderSubmission();
    resetOrderForm();
    renderOrderTable();
}

window.onload = renderOrderTable();

