function(e) {
  e.preventDefault();
  if ($('#g-recaptcha-response').val().length == 0) return formError('Human verification is required!');
  //submit form
  $.ajax({
    type: "GET",
    url: '/cgi-bin/index_dl.cgi?op=pair',
    dataType: 'json',
    data: $(this).serialize(),
    success: function(data) {
      if (!data.status) return formError(data.response);
      formSuccess('<strong>Happy Streaming</strong> <p>IP Address <strong>' + data.response.ip + '</strong> has been authenticated for <strong>' + printSToDH(data.response.expire) + '</strong></p> ');
    },
    error: function(data) {
      formError('Something went wrong, Please try again later.');
    }
  });
}
