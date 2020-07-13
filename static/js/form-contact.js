// JavaScript contact form Document
$(document).ready(function() {
  $("form#infosent").submit(function() {
    $("form#infosent .inputError").removeClass("inputError");
    $("form#infosent .error").remove();
    var isEn = $(this).hasClass("en-form");
    var requiredError = "必填",
        emailError = "无效邮箱",
        successfully = "您的信息已经提交，我们会尽快与您联系！";
    if (isEn) {
      requiredError = "Required"
      emailError = "Invalid email"
      successfully = "Your information has been submitted. We will contact you as soon as we can."
    }

    var hasError = false;
    $(".requiredField").each(function() {
      if (jQuery.trim($(this).val()) == "") {
        var labelText = $(this).prev("label").text();
        $(this).parent().append('<span class="error">' + requiredError +"</span>");
        $(this).parent().addClass("inputError");
        hasError = true;
      } else if ($(this).hasClass("email")) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test(jQuery.trim($(this).val()))) {
          var labelText = $(this).prev("label").text();
          $(this).parent().append('<span class="error">' + emailError +"</span>");
          $(this).addClass("inputError");
          hasError = true;
        }
      }
    });
    if (!hasError) {
      $("form#infosent input.submit").fadeOut("normal", function() {
        $(this).parent().append("");
      });
      // $("#loader").show();
      $.ajax({
        url: "https://console.chinaopen.ai/api/feedback",
        type: "POST",
        data: JSON.stringify($(this).serializeFormJSON()),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        cache: false,
        processData: false,
        success: function(data) {
          $('#infosent')[0].reset();
          $("#submit-form").before('<div class="success">'+ successfully +'</div>');
          // $("#loader").hide();
        }
      });
      return false;
    }
    return false
  });
});
