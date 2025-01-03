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

  //select initialization
  let selects = document.querySelectorAll('select');
   M.FormSelect.init(selects);

   //collapsible inititalization
   let collapsibles = document.querySelectorAll('.collapsible');
   M.Collapsible.init(collapsibles);

});



