$(document).ready(function() {
 	// girişteki animation
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);//şimidlik bölü 3000 yaptım çalışmalarımı hızlandırmak amacıyla

	// when menu button is clicked
	document.getElementById('open-menu-button').addEventListener('click', function(){
		$('body').addClass('menu-button-pressed');
	});


	// when menu's X button is clicked
	document.getElementById('close-menu-button').addEventListener('click', function(){
		$('body').removeClass('menu-button-pressed');
	});

});