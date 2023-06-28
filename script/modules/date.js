flatpickr(".booking__date", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    minDate: "today",
});

flatpickr(".booking__time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
});
