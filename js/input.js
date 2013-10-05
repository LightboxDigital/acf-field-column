(function($){
	
	
	/*
	*  acf/setup_fields
	*
	*  This event is triggered when ACF adds any new elements to the DOM. 
	*
	*  @type	function
	*  @since	1.0.0
	*  @date	01/01/12
	*
	*  @param	event		e: an event object. This can be ignored
	*  @param	Element		postbox: An element which contains the new HTML
	*
	*  @return	N/A
	*/
	
	$(document).live('acf/setup_fields', function(e, postbox){
		$(postbox).find('.acf-column').each(function(){
			var columns = $(this).data('columns');
			columns = columns.replace( '/' , '_' );
			var root = $(this).parents('.field_type-columns');
			$(root)	.nextUntil('.field_type-columns, .field_type-tab')
					.wrapAll('<div class="acf-column column-layout-' + columns + '"><div class="column-pad"></div></div>');
		});
		$(postbox).find('.acf_postbox .inside').append('<div class="acf-column column-layout-1">');
		$('.field_type-columns').remove();
	});

})(jQuery);
