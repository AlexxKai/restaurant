document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.chips');
    var instances = M.Chips.init(elems, options);
  });

  // Or with jQuery

  $('.chips').chips();
  $('.chips-initial').chips({
    data: [{
      tag: 'Egg',
    }, {
      tag: 'Lactose',
    }, {
      tag: 'Gluten',
    }],
  });
  $('.chips-placeholder').chips({
    placeholder: 'Enter a allergie',
    secondaryPlaceholder: '+ Allergie',
  });
  $('.chips-autocomplete').chips({
    autocompleteOptions: {
      data: {
        'Egg': null,
        'Lactose': null,
        'Gluten': null
      },
      limit: Infinity,
      minLength: 1
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.datepicker').datepicker();
  });

  $(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });