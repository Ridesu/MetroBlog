function showeOut(id, hide) {
  var elemen = document.getElementById(id);
  
  if(hide) {
    elemen.classList.remove("form__containersl");
  }
  else {
    elemen.classList.add("form__containersl");
  }
}
function ale(arg) {
  
}
function sendMail() {
  var name = document.getElementById("name").value.toLowerCase();
  
  var email = document.getElementById("email").value;
  
  if(name.split(' ').join('') == "baka") {
    alert("Helloy ");
    let questions = confirm("馬鹿?");
    
    if (questions) {
      let pass = prompt("Введіть пароль", "").split(' ').join('').toLowerCase();
      
      if (pass != "3465783768726#$&++7$8+3)9?!!!zindex225and__bhop12parissixfive") {
        alert("Ти не 馬鹿, ти не можеш цього знати =)");
      }else {
        setTimeout("alert('Значить ти 馬鹿, окей, ти бажаєш знати що я хочу тобі сказати')", 5000);
        setTimeout("alert('...')",10000)
        setTimeout("alert('Неко тян топ')", 15000)
        setTimeout("аlert('І 02 тоже')", 20000);
        
      }
    }
    
  }
  else if (name.split(" ").join() == "#3460515415") {
    if (2 ==2){
      questions = confirm("02 топ тянка?");
      
      if (questions) {
        questions = confirm("139808?)");
        
        if (questions) {
          alert("Найс ти пройшов провірку");
          
          questions = prompt("Пароль?", "");
          
          if (questions != "6576478892789397776289378853846302648786884635--+") {
            alert("А все так класно починалося...")
          }
          else {
            alert("Helloy mrbeiser)")
          }
        }
        else {
          alert("Загугли а потім вертайся");
        }
      }
      else {
        alert("Пішов нахуй ти не правий");
      }
    }
  }
  else {
    
  }
}
