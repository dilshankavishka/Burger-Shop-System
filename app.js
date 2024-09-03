// Store orders in an array
let orders = [
    "Order 1 details",
    "Order 2 details",
    "Order 3 details",
    // Add more orders here
];

// Function to render orders
function renderOrders() {
    const tableBody = document.querySelector('#order-table tbody');
    tableBody.innerHTML = ''; // Clear the table before re-rendering
    orders.forEach((order, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${order}</td>
                <td><button class="btn btn-danger" onclick="deleteOrder(${index})">Delete</button></td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

// Function to delete an order
function deleteOrder(index) {
    orders.splice(index, 1);
    renderOrders(); // Re-render the table
}

// Initial render
renderOrders();
