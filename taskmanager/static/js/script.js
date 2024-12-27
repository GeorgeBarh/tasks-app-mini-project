document.addEventListener('DOMContentLoaded', function() {
  // Initialize sidenav
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  let modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker,{
    format: " dd mmmm,yyyy",
    i18n: {done: "Select"}
  })

});



