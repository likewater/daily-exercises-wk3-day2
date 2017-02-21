$(document).ready(function(){
  $("form#transportation_survey").submit(function(){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();

    event.preventDefault();
  }); // closes form.submit
}); //closes doc.ready
