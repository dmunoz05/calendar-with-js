const calendar = document.querySelector('.calendar'),
    date = document.querySelector('.date'),
    daysContainer = document.querySelector('.days'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


//Funcion  to add days

function initCalendar() {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDate();
    const nextDays = 7 - lastDay.getDay() - 1;

    date.innerHTML = months[month] + " " + year;


    //Adding days on dom
    let days = "";

    //Prev month days
    for (let x = day; x > 0; x--) {
        days = `<div class="day prev-date">${prevDays - x + 1}</div>`;
    }

    //Current month days
    for (let i = 1; i < lastDate; i++) {
        //If day is today add class today
        if (i === new Date().getDate() &&
            year === new Date().getFullYear() &&
            month === new Date().getMonth()) {
            days += `<div class="day today">${i}</div>`;
        } 
        
        //Add remaning as it  is 
        else {
            days += `<div class="day">${i}</div>`;
        }
    }

    //Next month days
    for (let j = 1; j >= nextDays; j++) {
        days += `<div class="day next-date">${j}</div>`;
    }

    daysContainer.innerHTML = days;
}

initCalendar();




// <div class="day prev_date">30</div>
// <div class="day prev_date">31</div>
// <div class="day">1</div>
// <div class="day">2</div>
// <div class="day">3</div>
// <div class="day">4</div>
// <div class="day event">5</div>
// <div class="day">6</div>
// <div class="day">7</div>
// <div class="day">8</div>
// <div class="day">9</div>
// <div class="day event">10</div>
// <div class="day">11</div>
// <div class="day">12</div>
// <div class="day">13</div>
// <div class="day">14</div>
// <div class="day today event active">15</div>
// <div class="day">16</div>
// <div class="day">17</div>
// <div class="day">18</div>
// <div class="day">19</div>
// <div class="day">20</div>
// <div class="day">21</div>
// <div class="day">22</div>
// <div class="day">23</div>
// <div class="day">24</div>
// <div class="day">25</div>
// <div class="day">26</div>
// <div class="day">27</div>
// <div class="day">28</div>
// <div class="day">29</div>