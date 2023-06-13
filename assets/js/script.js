$(function() {

    $('.navbar-toggle').click(function() {
        $(this).toggleClass('act');
            if($(this).hasClass('act')) {
                $('.main-menu').addClass('act');
            }
            else {
                $('.main-menu').removeClass('act');
            }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.site-header',
        offset: 10
    });

	/* Progress bar */
    var $section = $('.section-skills');
    function loadDaBars() {
	    $('.progress .progress-bar').progressbar({
	        transition_delay: 500
	    });
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });

    /* Counters  */
    if ($(".section-counters .start").length>0) {
        $(".section-counters .start").each(function() {
            var stat_item = $(this),
            offset = stat_item.offset().top;
            $(window).scroll(function() {
                if($(window).scrollTop() > (offset - 1000) && !(stat_item.hasClass('counting'))) {
                    stat_item.addClass('counting');
                    stat_item.countTo();
                }
            });
        });
    };

	// another custom callback for counting to infinity
	$('#infinity').data('countToOptions', {
		onComplete: function (value) {
		  count.call(this, {
		    from: value,
		    to: value + 1
		  });
		}
	});

	$('#infinity').each(count);

	function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }

    // Navigation overlay
    var s = skrollr.init({
            forceHeight: false,
            smoothScrolling: false,
            mobileDeceleration: 0.004,
            mobileCheck: function() {
                //hack - forces mobile version to be off
                return false;
            }
    });
    
});

function validatefname(){
    let text=document.getElementById("fname").value
    let regex=/^[a-zA-Z ]+$/;

   if(regex.test(text)){
     document.getElementById("fname-warning").innerHTML="succes"
     document.getElementById("fname-warning").style.color="green"
   return true
    }
   else{
    document.getElementById("fname-warning").innerHTML="failed"
    document.getElementById("fname-warning").style.color="red"
    return false
   }
}

function validatesname(){
    let text=document.getElementById("sname").value
    let regex=/^[a-zA-Z ]+$/;

    if(regex.test(text)){
        document.getElementById("sname-warning").innerHTML="succes"
        document.getElementById("sname-warning").style.color="green"
        return true 
    }
    else{
        document.getElementById("sname-warning").innerHTML="failed"
        document.getElementById("sname-warning").style.color="red"
       return false
    }
}

function validatemail(){
    let text=document.getElementById("email").value
    let regex=/^[a-zA-Z1-9@$\.]+$/;

    if(regex.test(text)){
        document.getElementById("mail-warning").innerHTML="succes"
        document.getElementById("mail-warning").style.color="green" 
    return true
    }
    else{
            document.getElementById("mail-warning").innerHTML="failed"
            document.getElementById("mail-warning").style.color="red"
          return false
       }
}

function validatenum(){
    let text=document.getElementById("mob").value
    let regex=/^[0-9]{10}$/;

    if(regex.test(text)){
        document.getElementById("num-warning").innerHTML="succes"
        document.getElementById("num-warning").style.color="green" 
    return true
    }
    else{
        document.getElementById("num-warning").innerHTML="failed"
        document.getElementById("num-warning").style.color="red"
      return false
   }
}
 function validatesubmission(){
    validatefname()
    validatesname()
    validatemail()
    validatenum()
    if( validatefname()&&  validatesname()&& validatemail()&& validatenum())
    return true
    else
    return false

 }