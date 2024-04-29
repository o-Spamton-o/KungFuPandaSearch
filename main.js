// KF Panda Search

let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
let charImgEl = document.getElementById("char-img");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let name = document.getElementById("char-in").value;
  if (name === "Po") {
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
    charImgEl.src = "img/po.png";
  } else if (name === "Tigress" || name === "Master Tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was hardcore!";
    charImgEl.src = "img/tigress.png";
  } else if (name === "Mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear the Bug!";
    charImgEl.src = "img/mantis.png";
  } else if (name === "Monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "We should hang out!";
    charImgEl.src = "img/monkey.png";
  } else if (name === "Viper") {
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "I don't need to bite to fight!";
    charImgEl.src = "img/viper.png";
  } else if (name === "Crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "Wings of Justice!";
    charImgEl.src = "img/crane.png";
  } else if (name === "Boss Wolf") {
    charNameEl.innerHTML = "Boss Wolf";
    charQuoteEl.innerHTML =
      "I'll tell you what's gonna be yours: my fist in your plush, cuddly, super-soft face!";
    charImgEl.src = "img/boss-wolf.png";
  } else if (name === "Oogway") {
    charNameEl.innerHTML = "Oogway";
    charQuoteEl.innerHTML =
      "Who knows the ways of the universe? Accident? Or destiny? That is the secret.";
    charImgEl.src = "img/oogway.png";
  } else if (name === "Fenghuang") {
    charNameEl.innerHTML = "Fenghuang";
    charQuoteEl.innerHTML =
      "This isn't over, Po. One day I'll return, and when I do, I-- Hey! I'm still talking here!";
    charImgEl.src = "img/crane.png";
  } else if (name === "Gahri") {
    charNameEl.innerHTML = "Gahri";
    charQuoteEl.innerHTML = "He is pretty awesome.";
    charImgEl.src = "img/crane.png";
  } else if (name === "Great Master Viper") {
    charNameEl.innerHTML = "Great Master Viper";
    charQuoteEl.innerHTML =
      "Finally, a little warrior to carry on my legacy...";
    charImgEl.src = "img/crane.png";
  } else if (name === "Ju-Long") {
    charNameEl.innerHTML = "Ju-Long";
    charQuoteEl.innerHTML = "A wise man once said 'Aahh! Rats!'";
    charImgEl.src = "img/crane.png";
  } else if (name === "Li") {
    charNameEl.innerHTML = "Li";
    charQuoteEl.innerHTML =
      "It is with sadness that I announce the village has ran out of scallions.";
    charImgEl.src = "img/crane.png";
  } else if (name === "Lidong") {
    charNameEl.innerHTML = "Lidong";
    charQuoteEl.innerHTML = "No one gets bigger than Lidong.";
    charImgEl.src = "img/crane.png";
  } else if (name === "Mei Mei") {
    charNameEl.innerHTML = "Mei Mei";
    charQuoteEl.innerHTML = "Get ready to dance... with danger!";
    charImgEl.src = "img/crane.png";
  } else if (name === "Mr. Ping") {
    charNameEl.innerHTML = "Mr. Ping";
    charQuoteEl.innerHTML =
      "To make something special, you just have to believe it's special.";
    charImgEl.src = "img/mr-ping.png";
  } else if (name === "Scorpion") {
    charNameEl.innerHTML = "Scorpion";
    charQuoteEl.innerHTML =
      "Ooh. He's only been dead for a few minutes! He shouldn't stink already.";
    charImgEl.src = "img/crane.png";
  } else if (name === "Shen") {
    charNameEl.innerHTML = "Shen";
    charQuoteEl.innerHTML =
      "Look at him! A lifetime to plot his revenge and he comes to me on his knees!";
    charImgEl.src = "img/shen.png";
  } else if (name === "Shifu") {
    charNameEl.innerHTML = "Shifu";
    charQuoteEl.innerHTML = "If you are truly at peace, you can do anything.";
    charImgEl.src = "img/shifu.png";
  } else if (name === "Song") {
    charNameEl.innerHTML = "Song";
    charQuoteEl.innerHTML = "I will always treasure it.";
    charImgEl.src = "img/crane.png";
  } else if (name === "Soothsayer") {
    charNameEl.innerHTML = "Soothsayer";
    charQuoteEl.innerHTML = "I see... I see... I see pain.";
    charImgEl.src = "img/soothsayer.png";
  } else if (name === "Tai Lung") {
    charNameEl.innerHTML = "Tai Lung";
    charQuoteEl.innerHTML =
      "So that is his name: Po... Finally, a worthy opponent! Our battle will be legendary!";
    charImgEl.src = "img/tai-lung.png";
  } else if (name === "The Chameleon") {
    charNameEl.innerHTML = "The Chameleon";
    charQuoteEl.innerHTML =
      "I too came from humble beginnings and dreamed of becoming something more. I wanted respect and power. I wanted to be a master of kung fu.";
    charImgEl.src = "img/crane.png";
  } else if (name === "Croc") {
    charNameEl.innerHTML = "Croc";
    charQuoteEl.innerHTML = "The only hero in this town is a dead one!";
    charImgEl.src = "img/croc.png";
  } else if (name === "Kai") {
    charNameEl.innerHTML = "Kai";
    charQuoteEl.innerHTML = "Kai had RETURNED!";
    charImgEl.src = "img/kai.png";
  } else if (name === "Storming Ox") {
    charNameEl.innerHTML = "Storming Ox";
    charQuoteEl.innerHTML = "Then the weapon would kill... everyone!";
    charImgEl.src = "img/storming-ox.png";
  } else {
    charNameEl.innerHTML = "?????";
    charQuoteEl.innerHTML = "---------";
    charImgEl.src = "img/question-mark.png";
  }
}

document.getElementById("theme-btn").addEventListener("click", themeChange);

function themeChange() {
  var body = document.getElementById("body");
  var html = document.getElementById("html");
  var theme = document.getElementById("theme-in").value;
  if (theme === "Black" || theme === "Dark") {
    body.style.backgroundColor =
      "rgba(" + 0 + "," + 0 + "," + 0 + "," + 0.7 + ")";
    body.style.color = "white";
    charNameEl.style.color = "white";
    charQuoteEl.style.color = "white";
  } else if (theme === "White" || theme === "Light") {
    body.style.backgroundColor =
      "rgba(" + 255 + "," + 255 + "," + 255 + "," + 0.7 + ")";
    body.style.color = "black";
  } else if (theme === "Random") {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var r2 = Math.floor(Math.random() * 256 - 1);
    var g2 = Math.floor(Math.random() * 256 - 1);
    var b2 = Math.floor(Math.random() * 256 - 1);
    body.style.backgroundColor =
      "rgba(" + r + "," + g + "," + b + "," + 0.7 + ")";
    html.style.color = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
    charNameEl.style.color = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
    charQuoteEl.style.color = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
  }
}
