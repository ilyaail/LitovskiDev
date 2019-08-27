(function($) {
$(document).ready(function(){

	// Custom JS
     $('select').niceSelect();	

});

    $(document).ready(function(){
          $('.sertificates_slider').slick({
            arrows: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            adaptiveHeight: true
        });
    $('#cookie-button-yes').on('click', function(){
      $('#cookie-box').hide();
    });
    var cleave = new Cleave('#card-exp', {
    date: true,
    datePattern: ['m', 'y']

    });


    function checkForInput(e) {
 
  


   if ($('#card-number').val().length > 0) {
    $('#card-number').addClass('input-has-value');
  } 
    if ($('#card-exp').val().length > 0) {
    $('#card-exp').addClass('input-has-value');
  } 
    if ($('#card-cvv').val().length > 0) {
    $('#card-cvv').addClass('input-has-value');
  }  else {
    $('input.text', this).removeClass('input-has-value');
  }
}


$('input.text').each(function() {
  checkForInput(this);
});


$('input.text').on('change keyup', function() {
  checkForInput(this);  
});

/*select-bank-icon*/

$('.method-pay-link', this).on('click', function(){
  $('.method-pay-link, .selected-method').removeClass('selected-method');
  $(this).addClass('selected-method');
});
/*visible input*/
  $(".radio_del").change(function() {

    if ($('#regular-del').prop("checked")) {
      $('.address').fadeIn(300);
      $('.city').fadeIn(300);
      $('.zip').fadeIn(300);
      $('.comments').fadeIn(300);

    } else {
      $('.address').fadeOut(300);
      $('.city').fadeOut(300);
      $('.zip').fadeOut(300);
      $('.comments').fadeOut(300);
    }
    
  });
  /*radio check*/

  $(".radio_option").change(function() {

    if ($('#pay-sera').prop("checked")) {
      $('.pay-sera-method').fadeIn(300);
    } else {
      $('.pay-sera-method').fadeOut(300);
    }
    if ($('#paypal').prop("checked")) {
      $('.paypal-method').fadeIn(300);
    } else {
      $('.paypal-method').fadeOut(300);
    }
        if ($('#bank').prop("checked")) {
      $('.bank-method').fadeIn(300);
    } else {
      $('.bank-method').fadeOut(300);
    }
  });

  var input = document.querySelector("#phone");
  window.intlTelInput(input, {
      // allowDropdown: false,
      // autoHideDialCode: false,
      //autoPlaceholder: "off",
      dropdownContainer: document.body,
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
      // geoIpLookup: function(callback) {
      //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
      //     var countryCode = (resp && resp.country) ? resp.country : "";
      //     callback(countryCode);
      //   });
      // },
      // hiddenInput: "full_number",
      // initialCountry: "auto",
      // localizedCountries: { 'de': 'Deutschland' },
      // nationalMode: false,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      // preferredCountries: ['cn', 'jp'],
      // separateDialCode: true,
      utilsScript: "build/js/utils.js",
    });


        $('.certificate_open').on('click', function(){
            $('.sertificates_drop').fadeToggle('2800');
        });
       $(".collapse.show").each(function(){
            $(this).prev(".card-header").find(".material-icons").text('remove');
        });
        
         $(".collapse").on('show.bs.collapse', function(){
            $(this).prev(".card-header").find(".material-icons").text('remove')
        }).on('hide.bs.collapse', function(){
            $(this).prev(".card-header").find(".material-icons").text('add');
        });
    });
    $(function () {
    $('select').on('change', function () {
        $('.current').html(this.value);
    }).change();

    $('.current').on('click', function () {
        $('select').focus();
    });
});
  
$(function(){
  
});
    $( function() {
    var spinner = $( ".spinner" ).spinner();

    $( "button" ).button();
  } );
})(jQuery);


