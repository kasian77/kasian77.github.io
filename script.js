$(function() {
    const phrases = [
      "Наш менеджер перезвонит Вам в ближайшее время!",
      "Уточнить детали можно по телефону 0661898123",
      "Оставайтесь на связи!",
      "С Вами очень приятно общаться!"
    ];
    const hello = "Привет, я бот Паша!";
    const goodbye = "До свидания!";

    $("#answer").append("<div class='answ'>" + hello + "</div>");

    $("#chatbot").click(function() {
      $(this).toggleClass("show");
    });
    $("#ok").click(function() {
      let q = $("#question").val();
     
      if (q != "") {
        let showQ = $("<div></div>")
          .text(q)
          .css({
            background: "#fff",
            padding: "10px",
            "border-radius": "10px"
          });
        $("#answer").append(showQ);

        let gbl = "До свидания".toLowerCase();
        let ql = q.toLowerCase();
        let bye = "Пока".toLowerCase();
        let regbye = /^пока(?!\s)/;
        if (ql.search(gbl) != -1 || regbye.test(ql)) {
          $("#answer").append("<div class='answ'>" + goodbye + "</div>");
        } else {
          var random = Math.floor(Math.random() * phrases.length);
          console.log(phrases[random]);
          let answer = phrases[random];
          $("#answer").append("<div class='answ'>" + answer + "</div>");
        }
        $("#question").val("");
      }

      var chatbot = document.getElementById("chatbot");
      $("#chatbot").scrollTop(chatbot.scrollHeight - chatbot.clientHeight);

      return false;
    });
    $("#question").click(function() {
      return false;
    });
    $("#answer").click(function() {
      return false;
    });

    $("#question").keypress("keyup", function(event) {
      console.log(event.keyCode);
      if (
        event.keyCode == 13 ||
        event.which == 13 ||
        event.key === "Enter"
      ) {
        console.log(event.keyCode);
        $("#ok").click(); 
        return false; 
      }
    });
  });




  $(document).ready(function() {
    var link = $('.burger-link');
    var link_active = $('.burger-link_active');
    var navigation = $('.mobile-nav');
    var nav_active = $('.nav_active');
    link.click(function(){
    link.toggleClass('burger-link_active');
    navigation.toggleClass('nav_active');
});
link_active.click(function(){
navigation.removeClass('nav_active');
});
});



