
$(document).on('click', '#togglePassword', function() {

  $(this).toggleClass("bi bi-eye");

  var input = $("#password");
  input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});
