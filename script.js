const calendarMonths = document.querySelectorAll(".calendar-month");
const previousMonthButton = document.querySelector("#previous-month");
const nextMonthButton = document.querySelector("#next-month");
const calendarMonthTitle = document.querySelector("#calendar-month-title");

let currentMonthIndex = 0;

function displayCalendarMonth(index) {
    calendarMonths.forEach((month) => {
        month.classList.remove("active");
    });

    calendarMonths[index].classList.add("active");

    calendarMonthTitle.textContent =
        calendarMonths[index].dataset.monthName;

    previousMonthButton.disabled = index === 0;
    nextMonthButton.disabled = index === calendarMonths.length - 1;
}

previousMonthButton.addEventListener("click", () => {
    if (currentMonthIndex > 0) {
        currentMonthIndex -= 1;
        displayCalendarMonth(currentMonthIndex);
    }
});

nextMonthButton.addEventListener("click", () => {
    if (currentMonthIndex < calendarMonths.length - 1) {
        currentMonthIndex += 1;
        displayCalendarMonth(currentMonthIndex);
    }
});

displayCalendarMonth(currentMonthIndex);