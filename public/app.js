$(document).ready(function(){
    var createUploaders = function (){
    $('.image div').each(function(){
      var uploader = new qq.FileUploader({
        element: this,
        action: 'do-nothing.htm',
        debug: true
      });
    });
  };

  $('.edit').live('click', function(){
    createUploaders();
    $(this).removeClass('edit').addClass('view');
    $('.editable').each(
      function(){
        $('body').addClass('editBG');
        var val = $(this).html();
        if ( $(this).hasClass('long') ){
          $(this).html('<textarea>'+val+'</textarea>');
        } else {
          $(this).html('<input type="text" value="'+val+'"/>');
        };
      }
    );
  });

  $('.view').live('click', function(){
    $('body').removeClass('editBG');
    $(this).removeClass('view').addClass('edit');
    $('.image .uploader').html('');
    $('.editable').each(
      function(){
        $(this).html($(this).find('input, textarea').val());
      }
    );
  });
});
