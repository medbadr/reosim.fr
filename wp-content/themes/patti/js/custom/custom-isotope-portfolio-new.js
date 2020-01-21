jQuery(document).ready(function() {
	'use strict';
	

jQuery('.patti-grid[id^="gridwrapper_"]').each( function() { 

	var $div = jQuery(this);
	var token = $div.data('token');
	var settingObj = window['dt_grid_' + token];	
	
	var $container = '';
	var $optionSets = '';

	$initial_filter = '';

	if (typeof settingObj === 'undefined') {
		$container = jQuery(" .grid_portfolio");
		$optionSets = jQuery('#gridwrapper_portfolio #options .option-set');
	}
	else {
		if(settingObj.initial_word != '') {
			$initial_filter = '.'+settingObj.initial_word+'';
		}			
		$container = jQuery(".grid_"+settingObj.id+"");
		$optionSets = jQuery('#gridwrapper_'+settingObj.id+'  #options .option-set');
	}

	colWidth = function () {
		var w = $container.width(), 
			columnNum = 1,
			columnWidth = 0;

		// apply default settings
		if(vals.grid_manager != 1) {
			if (w > 1440) {
				columnNum  = 7;
			} else if (w > 1365) {
				columnNum  = 5;
			} else if (w > 1279) {
				columnNum  = 5;
			} else if (w > 1023) {
				columnNum  = 5;
			} else if (w > 767) {
				columnNum  = 3;
			} else if (w > 479) {
				columnNum  = 2;
			}	
		}	

		// apply custom settings
		else {
			if (w > 1440) {
				columnNum  = vals.grid_very_wide;
			} else if (w > 1365) {
				columnNum  = vals.grid_wide;
			} else if (w > 1279) {
				columnNum  = vals.grid_normal;
			} else if (w > 1023) {
				columnNum  = vals.grid_small;
			} else if (w > 767) {
				columnNum  = vals.grid_tablet;
			} else if (w > 479) {
				columnNum  = vals.grid_phone;
			} else if (w > 319) {
				columnNum  = vals.grid_small_phone;
			}				
		}


		columnWidth = Math.floor(w/columnNum);

		$container.find('.grid-item').each(function() {
			var $item = jQuery(this);

			var gwidth = 4;
			if(vals.grid_manager == 1) {
				gwidth = vals.grid_gutter_width
			} 

			$item.css({'margin': gwidth/2});
			$item.css({'width': columnWidth});

				if ($item.hasClass('item-hd')) {
					jQuery('.item-hd').css({
						'width'		 : ((columnWidth)-gwidth) + 'px',
						// 'height' : Math.round(((columnWidth)-gwidth) * 0.5625) + 'px'
					});
					jQuery('.item-hd img').css({
						'width'		 : ((columnWidth)-gwidth) + 'px',
						'height' : 'auto'
					});	
				}	

				if ($item.hasClass('item-regular')) {
					jQuery('.item-regular').css({
						'width'		 : ((columnWidth)-gwidth) + 'px',
						// 'height' : Math.round(((columnWidth)-gwidth) * 0.75) + 'px'
					});
					jQuery('.item-regular img').css({
						'width'		 : ((columnWidth)-gwidth) + 'px',
						'height' : 'auto'
					});						
				}	

				if ($item.hasClass('item-portrait')) {
					jQuery('.item-portrait').css({
						'width'		 : ((columnWidth)-gwidth) + 'px',
						// 'height' : Math.round(((columnWidth)-gwidth) * 1.30) + 'px'
					});
					jQuery('.item-portrait img').css({
						'width'		 : ((columnWidth)-gwidth) + 'px',
						'height' : 'auto'
					});						
				}												

				if ($item.hasClass('item-wide')) {
					if (w < 480) {
						jQuery('.item-wide').css({
							'width'		 : ((columnWidth)-gwidth) + 'px',
							'height' : Math.round(((columnWidth)-gwidth) * 0.7777777) + 'px'
						});
						jQuery('.item-wide img').css({
							'width'		 : ((columnWidth)-gwidth) + 'px',
							'height' : 'auto'
						});	
					}
					else {
						jQuery('.item-wide').css({
							'width'		 : ((columnWidth*2)-gwidth) + 'px',
							'height' : Math.round((2*(((columnWidth)-gwidth) * 0.7777777))+gwidth) + 'px'
						});
						jQuery('.item-wide img').css({
							'width'		 : ((columnWidth*2)-gwidth) + 'px',
							'height' : 'auto'
						});				
					}
				}	
				
				if ($item.hasClass('item-small')) {
					jQuery('.item-small').css({
						'width'		 : ((columnWidth)-gwidth) + 'px',
						'height' : Math.round(((columnWidth)-gwidth) * 0.7777777) + 'px'
					});
					jQuery('.item-small img').css({
						'width'		 : ((columnWidth)-gwidth) + 'px',
						'height' : 'auto'
					});						
				}			
					
				if ($item.hasClass('item-long')) {
					if (w < 480) {
						jQuery('.item-long').css({
							'width'		 : ((columnWidth)-gwidth) + 'px',
							'height' : Math.round(((columnWidth)-gwidth) * 0.7777777/2) + 'px'
						});
						jQuery('.item-long img').css({
							'width'		 : ((columnWidth)-gwidth) + 'px',
							'height' : 'auto'
						});		
					}
					else {
						jQuery('.item-long').css({
							'width'		 : ((columnWidth*2)-gwidth) + 'px',
							'height' : Math.round(((columnWidth)-gwidth) * 0.7777777) + 'px'
						});
						jQuery('.item-long img').css({
							'width'		 : ((columnWidth*2)-gwidth) + 'px',
							'height' : 'auto'
						});					
					}
				}
				
				if ($item.hasClass('item-high')) {
					jQuery('.item-high').css({
						'width'		 : ((columnWidth)-gwidth) + 'px',
						'height' : Math.round((2*(((columnWidth)-gwidth) * 0.7777777))+gwidth) + 'px'
					});
					jQuery('.item-high img').css({
						'width'		 : ((columnWidth)-gwidth) + 'px',
						'height' : 'auto'
					});				
				}
			

		});
		return columnWidth;
	}

	var $del_grid = $container.isotope({
		layoutMode: 'packery',
		masonry: { columnWidth: colWidth(), gutterWidth: 0 },
		itemSelector: '.grid-item',
		filter: $initial_filter,
		percentPosition: true
	});	

	$del_grid.imagesLoaded().progress( function() {
		$del_grid.isotope('layout');
	});


	jQuery(window).on("resize", function(){
		$del_grid.isotope('layout');
		$del_grid.isotope({masonry: { columnWidth: colWidth(), gutterWidth: 0 }});
	});

	var $optionLinks = $optionSets.find('a');
	
	if($initial_filter != '') {
		$optionLinks.each(function(){
			var $this = jQuery(this);
			if ( $this.hasClass('selected') ) {
				$this.removeClass('selected');
			}
			if($this.attr('data-filter') == $initial_filter) {
				$this.addClass('selected');
			}
		});
	}	

	// bind filter button click
	$optionSets.on( 'click', 'li a', function() {
		var filterValue = jQuery( this ).attr('data-filter');
		// use filterFn if matches value
		$del_grid.isotope({ filter: filterValue });
	});
	// change selected class on buttons
	$optionSets.each( function( i, buttonGroup ) {
		var $buttonGroup = jQuery( buttonGroup );
		$buttonGroup.on( 'click', 'li a', function() {
		  $buttonGroup.find('.selected').removeClass('selected');
		  jQuery( this ).addClass('selected');
		});
	});	


	});
});