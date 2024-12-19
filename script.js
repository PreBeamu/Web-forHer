// Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        loader.remove();
    });
});

// Calculate Dates
function calculateDateDifference(startDate, endDate) {
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

function updateDateDifference() {
    const startDate = new Date("2024-06-25");
    const endDate = new Date();
    const difference = calculateDateDifference(startDate, endDate);
    const yearsNum = document.getElementById("years_display");
    const monthsNum = document.getElementById("months_display");
    const daysNum = document.getElementById("days_display");

    yearsNum.textContent = `${Math.abs(difference.years)}`;
    monthsNum.textContent = `${Math.abs(difference.months)}`;
    daysNum.textContent = `${Math.abs(difference.days)}`;
}
setInterval(updateDateDifference, 1000);
updateDateDifference();