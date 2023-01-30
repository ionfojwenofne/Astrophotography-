const settingsMenu = document.querySelector('.settings-menu');

settingsBtn.addEventListener('click', () => {
  settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Your message has been sent. Thank you!');
});
// Code to implement lunar calendar functionality

calendar.render();

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

// Calculate the number of days in the current month
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

// Get the first day of the current month
const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

// Calculate the number of rows needed to display the calendar
const numberOfRows = Math.ceil((daysInMonth + firstDayOfMonth) / 7);

// Create an array to store the dates for each day of the month
const calendarDates = [];

// Add blank cells for the days of the previous month
for (let i = 0; i < firstDayOfMonth; i++) {
  calendarDates.push('');
}

// Add the dates for the current month
for (let i = 1; i <= daysInMonth; i++) {
  calendarDates.push(i);
}

// Generate the HTML for the calendar
const calendarHTML = `
  <table>
    <thead>
      <tr>
        <th>Sun</th>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
      </tr>
    </thead>
    <tbody>
      ${Array.from({ length: numberOfRows }, (_, rowIndex) => `
        <tr>
          ${Array.from({ length: 7 }, (_, colIndex) => {
            const dateIndex = rowIndex * 7 + colIndex;
            const date = calendarDates[dateIndex];
            return `<td>${date}</td>`;
          }).join('')}
        </tr>
      `).join('')}
    </t
