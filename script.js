//your JS code here. If required.
const output = document.getElementById("output");

// Create Promise 1
const promise1 = new Promise((resolve) => {
    const time1 = Math.random() * 2 + 1; // 1 to 3 seconds
    setTimeout(() => {
        resolve(time1);
    }, time1 * 1000);
});

// Create Promise 2
const promise2 = new Promise((resolve) => {
    const time2 = Math.random() * 2 + 1;
    setTimeout(() => {
        resolve(time2);
    }, time2 * 1000);
});

// Create Promise 3
const promise3 = new Promise((resolve) => {
    const time3 = Math.random() * 2 + 1;
    setTimeout(() => {
        resolve(time3);
    }, time3 * 1000);
});

// Wait for all promises
Promise.all([promise1, promise2, promise3])
    .then((results) => {

        // Remove Loading row
        const loadingRow = document.getElementById("loading");
        if (loadingRow) {
            loadingRow.remove();
        }

        // Promise 1 row
        const row1 = document.createElement("tr");
        row1.innerHTML = `
            <td>Promise 1</td>
            <td>${results[0].toFixed(3)}</td>
        `;
        output.appendChild(row1);

        // Promise 2 row
        const row2 = document.createElement("tr");
        row2.innerHTML = `
            <td>Promise 2</td>
            <td>${results[1].toFixed(3)}</td>
        `;
        output.appendChild(row2);

        // Promise 3 row
        const row3 = document.createElement("tr");
        row3.innerHTML = `
            <td>Promise 3</td>
            <td>${results[2].toFixed(3)}</td>
        `;
        output.appendChild(row3);

        // Total row (maximum time taken)
        const totalTime = Math.max(...results);

        const totalRow = document.createElement("tr");
        totalRow.innerHTML = `
            <td>Total</td>
            <td>${totalTime.toFixed(3)}</td>
        `;
        output.appendChild(totalRow);
    });
