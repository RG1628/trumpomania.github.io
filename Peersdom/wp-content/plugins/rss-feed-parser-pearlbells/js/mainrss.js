var $jqueryRSS = jQuery.noConflict();
$jqueryRSS(document).ready(function(){
   $jqueryRSS('.pearl_container').each(function(i) {   
    $jqueryRSS(this).siblings('.rss_pagination').paginate({ 
            itemsToPaginate : $jqueryRSS(this).find("div.pearl_rss_section"),
            'items_per_page' : rssPearlpluginOptions.feed_per_page
        }) ;
    });
       
    $jqueryRSS('.popup-modal').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#username',
      modal: true
    });
    
});
$jqueryRSS(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $jqueryRSS.magnificPopup.close();
});


     
	