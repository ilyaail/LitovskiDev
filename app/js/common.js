(function($) {
$(document).ready(function(){

	// Custom JS
     $('select').niceSelect();	

});
    $(document).ready(function(){
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

        $('.sertificates_slider').slick({
            arrows: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            adaptiveHeight: true
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
    $( function() {
    var spinner = $( ".spinner" ).spinner();

    $( "button" ).button();
  } );
})(jQuery);


