`use strict`;

// const countText = document.querySelectorAll(".count-text");
// const DisplayMessage = document.querySelector(".heading-primary");

const day = document.getElementById("days");
const hour = document.getElementById("hours");
const mins = document.getElementById("min");
const secs = document.getElementById("secs");
const container = document.querySelector(".countdown-container");

const heading = document.querySelector(".heading-tertiary");

// // 1.Get the current date for today and the deadline
const date = new Date();
const deadline = new Date("2022/02/28");

const startCount = function () {
  let timer = deadline - date;
  console.log(timer);

  let timerSeconds = Math.trunc(timer / 1000);
  console.log(timerSeconds);

  //   call each second
  const timerFunc = setInterval(function () {
    // set minutes
    const days = String(Math.trunc(timer / (1000 * 60 * 60 * 24))).padStart(
      2,
      0
    );

    const hours = String(Math.trunc(timerSeconds / (60 * 60))).padStart(2, 0);
    const minutes = String(Math.trunc(timerSeconds / 60) % 60).padStart(2, 0);
    const seconds = String(Math.trunc(timerSeconds % 60)).padStart(2, 0);

    // console.log(`${days}:${hours}:${minutes}:${seconds}`);

    // container.textContent = `${days}:${hours}:${minutes}:${seconds}`;

    day.querySelector(".count-text").textContent = `${days}`;
    hour.querySelector(".count-text").textContent = `${hours}`;
    mins.querySelector(".count-text").textContent = `${minutes}`;
    secs.querySelector(".count-text").textContent = `${seconds}`;

    if (timerSeconds === 0) {
      container.style.opacity = 0;
      heading.textContent = "Welcome to BionTech";
    }

    timerSeconds--;
  }, 1000);
};

startCount();

// const startLogOutTimer = function () {
//     // 1. set time to 10 seconds
//     let timer = ;

//     //  call each second
//     const timerFunc = setInterval(function () {
//       //   set hours
//       const hours = String(Math.trunc((timer / 60) * 60)).padStart(2, 0);
//       // set minutes
//       const min = String(Math.trunc(timer / 60)).padStart(2, 0);
//       // set seconds
//       const sec = String(timer % 60).padStart(2, 0);

//       // in each call back, print the remaining time
//       labelTimer.textContent = `${min}:${sec}`;

//       // when timer =0/ experies stop timer
//       if (timer === 0) {
//         clearInterval(timerFunc);
//         labelTimer.style.opacity = '0';
//         textTimer.textContent = 'The timer completed';
//       }
//       // decrease 1s

//       timer--;
//     }, 1000);
//   };

//   startLogOutTimer();

// const countDown = function () {
//   const newDeadline = new Date(deadline);
//   const currentDate = new Date(date);

//   //   time in  milliseconds
//   const timeDiff = newDeadline - currentDate;
//   const timeSeconds = Math.trunc(timeDiff / 1000);
//   const days = Math.trunc(timeSeconds / (3600 * 24));
//   const hours = timeSeconds / 3600;
//   console.log(hours);
//   const minutes = timeSeconds % 60;
//   //   console.log(minutes);
//   console.log(`This are the days ${days}`);
//   console.log(`This are the seconds ${timeSeconds}`);
// };
// countDown();

// const startCount = function () {
//   // 2.Get the difference btnw deadline and date
//   let newDates = Math.trunc(deadline - date) / 1000;
//   console.log(newDates);
// };
// startCount();
// setInterval(startCount, 1000);
//   // 3.call each second
//   const countDown = setInterval(function () {
//       //   get days
//       const days = String(Math.trunc(newDates / (60 * 60 * 24))).padStart(2, 0);

//       // get hours
//       const hours = Math.trunc(Math.floor(newDates / 3600));

//       // get minutes
//       const minutes = Math.trunc(Math.floor(newDates / 60) % 60);
//       // console.log(minutes);

//       // get seconds
//       const second = Math.trunc(Math.floor(newDates % 60));

//       newDates--;

//       console.log(days, hours, minutes, second);

//     ,1000});

// });

// startCount();
// 1b.Get the difference between the two dates(deadline date-current date )
// const countDown = function () {
//   const newDeadline = new Date(deadline);
//   const currentDate = new Date(date);

//   const diffDates = newDeadline - currentDate;

//   //   console.log(`This is the time in millisecond ${diffDates}`);
//   //   console.log(
//   //     `This is the conversion of time from millisecond to days  ${Math.trunc(
//   //       diffDates / (1000 * 60 * 60 * 24)
//   //     )} days`
//   //   );
//   };

//   countDown();
//   // setInterval(countDown, 1000);

//   const startCount = function () {
//     let daysCount = countDown();
//     console.log(daysCount);

//     //   const timeFunc = setInterval(function () {
//     //     // get days
//     //     const days = daysCount / (1000 * 60 * 60 * 24).padStart(2, 0);
//     //     // get hours
//     //     const hours = days;
//     //     // get minutes
//     //     const minutes = hours;
//     //     // get seconds
//     //     const seconds = minutes;
//     //   }, 1000);
//   };
//   startCount();
// // };

// const calcDaysPassed = function () {
//   const days = Math.abs(deadline - date) / (1000 * 60 * 60 * 24);
//   console.log(Math.trunc(days));
// };

// calcDaysPassed()

//

// const days = deadline / (1000 * 60 * 60 * 24);
// console.log(`You have ${days}days to complete your project`);

// const calcDaysPassed = function (date1, date2) {
//   date2 - date1;
// };

// console.log(date);

// steps to take
// 1.Get the current date for today
// -get the future date
// -Get the difference between the two dates(deadline date-current date )
// -convert the total number of days into days minutes and seconds

// 2.write a timer  function

///////////////////////////////////////
// Operations With Dates
// const future = new Date(2037, 10, 19);
// // console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
// console.log(days1);
