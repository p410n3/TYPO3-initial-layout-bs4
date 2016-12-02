!function ($) {
    /**
     * Popover for Typo3
     */
    // $('[data-toggle="popover"]').popover({
    //   html: true,
    //   content: function () {
    //     selector = $(this).data('innerhtml');
    //     return $(selector).html();
    //   },
    //   placement: function(){
    //     placement = this.$element.data('placement');
    //     id = this.$element.data('id');
    //     this.$tip.attr('id', id);
    //     return placement;
    //   }
    // });

    /**
     * modal
     */
    // $('.modal').on('show.bs.modal',function(e){
    //   window.location.hash = e.target.id;
    //
    //   form = $(this).find('form');
    //   if(form.length > 0 && form.attr('action').indexOf('#') == -1)
    //      form.attr('action',form.attr('action') + window.location.hash);
    // });
    // $('.modal').on('hide.bs.modal',function(e){
    //   if(window.location.hash == '#'+e.target.id)
    //     window.location.hash = '';
    // });
    // if(window.location.hash){
    //   var hashID = window.location.hash;
    //   if(hashID.indexOf('/') == -1) {
    //     hashID = $(hashID);
    //     if(hashID.hasClass('modal')){
    //       hashID.modal('show');
    //     }
    //   }
    // }

    /**
     * Accordion
     */
    $('.panel-collapse').on('show.bs.collapse hide.bs.collapse', function (e) {
        var type = e.type,
            id = e.target.id,
            anker = $('.panel-heading a[href="#' + id + '"]');

        switch (type) {
            case 'hidden':
            case 'hide':
                $(anker.data('icon')).removeClass('in');
                break;
            case 'shown':
            case 'show':
                $(anker.data('icon')).addClass('in');
                break;
        }
    });
    /**
     * Open Dropdown on Hover
     * Handle Mobile Click
     */
    var _timer = null;
    $('#navbarResponsive .nav-item.dropdown').on('mouseenter mouseleave click', function (e) {
        var _self = $(this);
        // Handle Click
        if(e.type == 'click' && _timer) {
            e.preventDefault();
        }
        // Show Dropdown on hover
        if (e.type == 'mouseenter') {
            e.preventDefault();
            _timer = setTimeout(function(){
                _timer = null;
            }, 50);
            _self.addClass('open');
        }
        // Hide Dropdown on hover
        if (e.type == 'mouseleave') {
            e.preventDefault();
            _self.removeClass('open');
        }
    });

}(jQuery);
