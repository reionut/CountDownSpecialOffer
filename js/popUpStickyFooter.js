// Window trigger event
var disableBanner = false;

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 && disableBanner == false) {
        document.getElementById('offerWatch').className = 'offerWatch-fixed';
		disableBanner = true;
    } 
	
// Close Button

document.getElementById('buttonClose').addEventListener('click', function(){
	document.getElementById('offerWatch').className = 'offerWatch-hidden';
});
};

// CountDown Clock

// ======= Set the date we're counting down to here =======

var countDownDate = new Date('Dec 31, 2018 00:00:00').getTime(); 

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // ======= Output the result in an element with id="countDown" =======
	
    document.getElementById('countDown').innerHTML = days + 'd '  + hours + 'h '
    + minutes + 'm ' + seconds + 'm ';
    
    // If the count down is over, write some text 
    if (distance < 0) {
       
        document.getElementById('countDown').innerHTML = 'OFFER EXPIRED';
    }
}, 1000);