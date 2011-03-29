$(document).ready(function(){
  $('.edit').live('click', function(){
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
    $('.editable').each(
      function(){
        $(this).html($(this).find('input, textarea').val());
      }
    );
  });
});
