function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;

   let time = hh + ":" + mm + " " + session;

  document.getElementById("clock").innerText = time;
  let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();
var quote = document.getElementById('quotes');

var senQuotes = [
    "\"And as Always, Have Yourself a Damn Good One\" - Daniel Desmond \"Etika\" Amofah", "\"Let The Voice of Love Take You Higher\" - Karen Aoki & Daisuke Hasegawa", "\"Let The Voice of Love Give You The Answer\" - Karen Aoki & Daisuke Hasegawa", "\"Courage is taking fear, and making it your own!\" - \"Baron\" William Anthonio Zeppeli", "\"Same things make us laugh, make us cry. - Melvin \"Big Smoke\" Harriss", "\"We Know About Your VPNs and Proxy Servers.\" - Daniel Soderholm"
]

onload = function () {
    var senQuote = senQuotes[Math.floor(Math.random() * senQuotes.length)];
    quote.innerHTML = senQuote;
}
