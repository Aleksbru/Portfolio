// The Alert button
document.addEventListener("DOMContentLoaded", () => {
    const alertButton = document.getElementById("alertButton");
    const defaultLabel = 'Can you click me, I need to tell you something';
    const newLabel = 'It\'s very important...';

    alertButton.addEventListener('click', () => {
        alert("Keep going, you're doing great :-)");
    });

    alertButton.addEventListener('mouseover', () => {
        alertButton.setAttribute('data-content', newLabel);
    });

    alertButton.addEventListener('mouseleave', () => {
        alertButton.setAttribute('data-content', defaultLabel);
    });

    // incrementing button
    let count = 1;
    const btnCounter = document.getElementById('btn-counter');
    const txtCounter = document.getElementById('txt-counter');

    btnCounter.addEventListener('click', () => {
        count += 1;
        txtCounter.innerHTML = `Clicks: ${count}`;

        if (count === 50) {
            alert("Holy moly 50 clicks!");
        }

        if (count === 100) {
            alert("NO WAY!!! 100 CLICKS!!!");
        }

        if (count === 200) {
            alert("Maybe it\'s time to go outside...");
        }


        // footer
        const footer = document.querySelector('footer');
        const currentYear = new Date().getFullYear();
        footer.textContent = `\u00A9 ${currentYear} Aleksandr Brudnyi`;

        // Odd even
        txtCounter.classList.remove('even', 'odd');

        if (count % 2 === 0) {
            txtCounter.classList.add('even');
        } else {
            txtCounter.classList.add('odd');
        }
    });
    // Toggle Number list
    const numbersList = document.getElementById("numbers");
    const toggleButton = document.getElementById("toggleButton");

    // Hide the number list initially
    numbersList.classList.add('hidden');

    for (let i = 1; i <= 100; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
        numbersList.appendChild(listItem);
    }

    toggleButton.addEventListener('click', () => {
        numbersList.classList.toggle('hidden');
    });
});
