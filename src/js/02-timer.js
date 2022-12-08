import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const refs = {
dataInput : document.querySelector("#datetime-picker"),
dataBtn : document.querySelector("button[data-start]"),
dataDay : document.querySelector("span[data-days]"),
dataHours : document.querySelector("span[data-hours]"),
dataMinutes : document.querySelector("span[data-minutes]"),
dataSeconds : document.querySelector("span[data-seconds]"),
}
refs.dataBtn.disabled = true;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] - new Date() < 0 ) {
        Notiflix.Notify.failure("Please choose a date in the future");
      }
      else {
        refs.dataBtn.disabled = false;
        refs.dataBtn.addEventListener('click', dataTimer);
      function dataTimer() {
        const timerId = setInterval(() => {
          let diff = selectedDates[0] - new Date();
            let countTime = convertMs(diff);
             if (diff < 1000 ) {
              clearInterval(timerId)
              }
              if (timerId) {
                refs.dataBtn.disabled = true;
              };
             refs.dataDay.textContent = countTime.days;
             refs.dataHours.textContent = countTime.hours;
             refs.dataMinutes.textContent = countTime.minutes;
             refs.dataSeconds.textContent = countTime.seconds; }, 1000);
        };
      };
    },
  };
flatpickr(refs.dataInput, options);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}