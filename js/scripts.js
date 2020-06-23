$(document).ready(function(){
  $("#portfolio1").mouseover(function(){
    $("#work1").show();
    $("#img1").fadeTo(1, 0.15);
  }).mouseout(function(){
    $("#work1").hide();
    $("#img1").fadeTo(1, 1.0);
  });
});
$(document).ready(function(){
  $("#portfolio2").mouseover(function(){
    $("#work2").show();
    $("#img2").fadeTo(1, 0.15);
  }).mouseout(function(){
    $("#work2").hide();
    $("#img2").fadeTo(1, 1.0);
  });
});
$(document).ready(function(){
  $("#portfolio3").mouseover(function(){
    $("#work3").show();
    $("#img3").fadeTo(1, 0.15);
  }).mouseout(function(){
    $("#work3").hide();
    $("#img3").fadeTo(1, 1.0);
  });
});
$(document).ready(function(){
  $("#portfolio4").mouseover(function(){
    $("#work4").show();
    $("#img4").fadeTo(1, 0.15);
  }).mouseout(function(){
    $("#work4").hide();
    $("#img4").fadeTo(1, 1.0);
  });
});
$(document).ready(function(){
  $("#portfolio5").mouseover(function(){
    $("#work5").show();
    $("#img5").fadeTo(1, 0.15);
  }).mouseout(function(){
    $("#work5").hide();
    $("#img5").fadeTo(1, 1.0);
  });
});
$(document).ready(function(){
  $("#portfolio6").mouseover(function(){
    $("#work6").show();
    $("#img6").fadeTo(1, 0.15);
  }).mouseout(function(){
    $("#work6").hide();
    $("#img6").fadeTo(1, 1.0);
  });
});
$(document).ready(function(){
  $("#portfolio7").mouseover(function(){
    $("#work7").show();
    $("#img7").fadeTo(1, 0.15);
  }).mouseout(function(){
    $("#work7").hide();
    $("#img7").fadeTo(1, 1.0);
  });
});
$(document).ready(function(){
  $("#portfolio8").mouseover(function(){
    $("#work8").show();
    $("#img8").fadeTo(1, 0.15);
  }).mouseout(function(){
    $("#work8").hide();
    $("#img8").fadeTo(1, 1.0);
  });
});

$(document).ready(function(){
  $("#design-image").click(function(){
    $(this).hide();
    $("#design").show();
  });
      $("#design").click(function(){
      $(this).hide();
      $("#design-image").show();
    });
});
$(document).ready(function(){
  $("#development-image").click(function(){
    $(this).hide();
    $("#development").show();
  });
      $("#development").click(function(){
      $(this).hide();
      $("#development-image").show();
    });
});
$(document).ready(function(){
  $("#product-image").click(function(){
    $(this).hide();
    $("#product").show();
  });
      $("#product").click(function(){
      $(this).hide();
      $("#product-image").show();
    });
});
$(document).ready(function(){
  $("form#message-form").submit(function(event){
    var name = $("input#username").val();
    var email = $("input#usermail").val();
    var message = $("textarea#comment").val();
    if ($("input#username").val() && $("input#usermail").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
  });
});
