if (typeof jQuery === "undefined") { throw new Error("Event requires jQuery") }

+function ($) {

    $('#next-event-list table tr th, .bet-header').click(function() {
        var $this = $(this);
        var $glyph = $(this).find('span.glyphicon').first();
        $glyph.toggleClass('glyphicon-chevron-down');
        $glyph.toggleClass('glyphicon-chevron-right');
        if ($this.hasClass("bet-header")) {
            var $body = $this.next();
        } else {
            var $body = $this.parents('table').find('tbody').first();
        }
        $body.toggle()
        return false;
    });

    $('.toggle').click(function() {
        var $this = $(this);
        var toggleClass = $this.data('toggle');
        $(document).find('.'+toggleClass).toggle();
        $('.wrapper').trigger('resize');
    });

    $('.onclicklink').click(function(event) {
        event.preventDefault();
        if ($(this).has('data-url')) {
            location.href = $(this).data('url');
        }
    });

    $('.confirm-dialog').click(function(event){
        event.preventDefault();

        var $this = $(this);
        bootbox.confirm($this.data('label'), function(result) {
            if (result) {
                $this.parents('#'+$this.data('target')).submit();
            }
        });
    });

    $(document).on('click', '.bootbox', function(){
        var classname = event.target.className;

        if(classname && !$('.' + classname).parents('.modal-dialog').length)
            bootbox.hideAll();
    });

    $('.nav-pills a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });
}(jQuery);