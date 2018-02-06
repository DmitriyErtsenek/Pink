var navMain   = document.querySelector('.main-nav'),
    navToggle = document.querySelector('.main-nav__toggle');
const formError = document.querySelector('.form-error');
const formClose = document.querySelector('.form-error__close');



navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');

  }
});


$(document).ready(function(){
  $(function() {
    $("#competitionForm").validate({
      rules: {
        user_surname: {
          required: true
        },
        user_name: {
          required: true
        },
        user_tel: {
          required: true,
          digits: true
        },
        user_email: {
          required: true,
          email: true
        },
        competition__textarea: {
          required: true
        }
      },
      errorPlacement: function(error, element) {
        return true;
      },

      invalidHandler: function(event, validator) {
        $('.form-error').css('display','block');

        formClose.addEventListener('click', function(){
          formError.style.display = 'none';
        });
      }
    });
  });
});


