	$(window).ready(function() {
		var oTurn = $('#magazine').turn({
							start: function (event, pageObject, corner) {
            if (pageObject.next === 1)
                event.preventDefault();
        },
        turning: function (event, page, view) {
            if (page === 1)
                event.preventDefault();
        },
							display: 'double',
							acceleration: true,
							gradients: !$.isTouch,

							elevation:50,
							when: {
								turned: function(e, page) {
									/*console.log('Current view: ', $(this).turn('view'));*/
								}
							}
						});
		if($(window).width() < 770) {
			$("#magazine").turn('display', 'single');
		}
		else {
			$("#magazine").turn('display', 'double');
		}

	});
	
	
	$(window).bind('keydown', function(e){
		
		if (e.keyCode==37)
			$('#magazine').turn('previous');
		else if (e.keyCode==39)
			$('#magazine').turn('next');
			
	});

	jQuery(document).ready(function() {
        $('#previousPage').click(function(){
            $('#magazine').turn('previous');
        });
        $('#nextPage').click(function(){
            $('#magazine').turn('next');
        });
});

	
	