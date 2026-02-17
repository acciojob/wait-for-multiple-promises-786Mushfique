//your JS code here. If required.
<script>
    const output = document.getElementById("output");

    const startTime = performance.now();

    
    const promise1 = new Promise((resolve) => {
        const time1 = Math.random() * 2 + 1;
        setTimeout(() => {
            resolve(time1);
        }, time1 * 1000);
    });

    const promise2 = new Promise((resolve) => {
        const time2 = Math.random() * 2 + 1;
        setTimeout(() => {
            resolve(time2);
        }, time2 * 1000);
    });


    const promise3 = new Promise((resolve) => {
        const time3 = Math.random() * 2 + 1;
        setTimeout(() => {
            resolve(time3);
        }, time3 * 1000);
    });

    Promise.all([promise1, promise2, promise3])
        .then((results) => {

            const endTime = performance.now();
            const totalTime = (endTime - startTime) / 1000;

            
            document.getElementById("loading").remove();

            
            const row1 = document.createElement("tr");
            row1.innerHTML = `
                <td>Promise 1</td>
                <td>${results[0].toFixed(3)}</td>
            `;
            output.appendChild(row1);

           
            const row2 = document.createElement("tr");
            row2.innerHTML = `
                <td>Promise 2</td>
                <td>${results[1].toFixed(3)}</td>
            `;
            output.appendChild(row2);

            
            const row3 = document.createElement("tr");
            row3.innerHTML = `
                <td>Promise 3</td>
                <td>${results[2].toFixed(3)}</td>
            `;
            output.appendChild(row3);

           
            const totalRow = document.createElement("tr");
            totalRow.innerHTML = `
                <td>Total</td>
                <td>${totalTime.toFixed(3)}</td>
            `;
            output.appendChild(totalRow);
        });
</script>
