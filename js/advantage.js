jQuery(document).ready(function(){
  
  var navList = $('.logo-nav li');
  var editTable = $('.edit-wrapper .edit-dots');

  $('.user-dropdown, .user-dropdown-mobile').on('click', function(e){
  	 e.stopPropagation() // To Stop The Bubbling Of Click Event
  	$('.help-dropdown').slideToggle('fast');
  	$('.help-dropdown-user').slideUp('fast');
  });
  
  $('.profile-dropdown, .profile-dropdown-mobile').on('click', function(e){
  	 e.stopPropagation() // To Stop The Bubbling Of Click Event
  	$('.help-dropdown-user').slideToggle('fast');
  	$('.help-dropdown').slideUp('fast');
  });

  navList.on('click', function(){
  	navList.removeClass('active');
  	$(this).addClass('active');
  });

  $('.overview').on('click', function(){
  	$('.overview').removeClass('overlay-active');
  	$(this).addClass('overlay-active');
  });

  editTable.on('click', function(e){
  	 e.stopPropagation() // To Stop The Bubbling Of Click Event
  	$('.edit').fadeToggle('fast');
  });

  $('.toggle-table-content').on('click', function() {
     $(this).find('.accordian .fa').toggleClass('hide-icon');
     $('.toggle-row').slideToggle('fast');
  });

  $("#myInput, #myInput2").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr:not('.toggle-row')").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $(".custom-file-input").on("change", function() {
	  var fileName = $(this).val().split("\\").pop();
	  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });

  $('.open-task-on-mobile').on('click', function(e){
  	e.stopPropagation() // To Stop The Bubbling Of Click Event
     $('.mobile-add-task').slideToggle();
  });

  $(window).on('click', function(){
	$('.help-dropdown, .help-dropdown-user').slideUp('fast');
	$('.edit').fadeOut('fast');
	$('.custom-file').removeClass('make-bg-blue');
	if($(window).width() < 768) {
		$('.open-filters').slideUp('fast');
	}
	if($(window).width() < 1281) {
		$('.mobile-add-task').slideUp();
	}
  });

  $('#assigned').on('change', function(){
  	$('.open-for-assigned-top').slideDown('fast');
  });

  $('.open-advance-options').on('click', function(e){
	e.stopPropagation() // To Stop The Bubbling Of Click Event
      $(this).text(function(i, text){
          return text === "Advance Options" ? "Close Advance Options" : "Advance Options";
      })
	$('.advance-options').slideToggle('fast');
  });

  $('.open-filter-options').on('click', function(e){
	e.stopPropagation() // To Stop The Bubbling Of Click Event
     $(this).text(function(i, text){
         return text === "Open Filter:" ? "Close Filter:" : "Open Filter:";
     });
    $('.open-filters').slideToggle('fast');
  });

  $('.custom-file').on('click', function(e){
  	console.log('prashant here clicked')
  	$('.custom-file').addClass('make-bg-blue');
  	e.stopPropagation() // To Stop The Bubbling Of Click Event
  });
  
  var formMenu = $('.new-task-form');
  var overlay = $('.overlay');
  $('.add-task').on('click', function(){
    if(formMenu[0].style.right !== "0%") {
    	formMenu[0].style.right = "0%";
    	overlay[0].style.display = "block";
    	$('body').css("overflow","hidden");
    }else {
    	formMenu[0].style.right !== "-85%";
    	overlay[0].style.display = "none";
    	$('body').css("overflow","visible");
    }
  },);

  $('.close-form, .overlay, .cancel-form-btn').on('click', function(){
  	formMenu[0].style.right = "-85%";
  	overlay[0].style.display = "none";
  	$('body').css("overflow","visible");
  })

 $('.demo').tokenize2();

 $('#nav-icon3, .overlay2').click(function(){ //JQuery for Toggle Navigation and Overlay//
   $('#nav-icon3').toggleClass('open');
   var mobileMenu = $('.toggle-menu');
   var overLay = $('.overlay2');
   if(mobileMenu[0].style.left !== "0%"){
    mobileMenu[0].style.left = "0%";
    overLay[0].style.display = "block";
    $('body').css("overflow","hidden");
   }else{
    mobileMenu[0].style.left = "-80%";
    overLay[0].style.display = "none";
    $('body').css("overflow","visible");
   }
 });//JQuery for Toggle Navigation and Overlay//

});