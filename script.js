// =============================
// BIRTHDAY MUSIC
// =============================

const birthdayMusic = document.getElementById("birthdayMusic");

birthdayMusic.volume = 0; // start silent

const pages=[...document.querySelectorAll(".page")];
function go(n){pages.forEach((p,i)=>p.classList.toggle("active",i===n)); if(n==4) startTyping();}
document.querySelectorAll(".next").forEach(b=>b.addEventListener("click",()=>{go(+b.dataset.next); if(+b.dataset.next===4) confetti(25)}));

for(let i=1;i<=4;i++){let b=document.createElement("div");b.className="balloon b"+i;document.getElementById("balloons").appendChild(b)}

const cake=document.querySelector(".cake");
document.getElementById("candlesBtn").onclick=()=>{
 document.querySelectorAll(".candle").forEach(c=>c.classList.add("off"));
 document.getElementById("candlesBtn").classList.add("hidden");
 document.getElementById("cutBtn").classList.remove("hidden");
 document.getElementById("cakeMessage").textContent="Wish made! ✨ Now cut the cake.";
 confetti(18);
};
document.getElementById("cutBtn").onclick=()=>{
 cake.classList.add("cut");document.getElementById("cutBtn").classList.add("hidden");
 document.getElementById("cakeMessage").textContent="Cake cut! 🎂 May every slice bring a little more happiness.";
 document.getElementById("afterCake").classList.remove("hidden");
};
document.getElementById("afterCake").onclick=()=>go(3);

const message=`You have a way of making ordinary moments feel a little brighter. Your smile, your kindness, your energy and the little things that make you uniquely you are worth celebrating. On this birthday, I hope you receive the same warmth and happiness that you bring into the lives around you. May your dreams grow bigger, your worries grow smaller, and your days be filled with memories you will always want to keep. Happy Birthday — stay wonderful, always. 💗`;
let typingStarted=false;
function startTyping(){
 if(typingStarted)return; typingStarted=true;
 const el=document.getElementById("typedMessage");let i=0;
 const timer=setInterval(()=>{el.textContent+=message[i++]||"";if(i>=message.length){clearInterval(timer);document.querySelector(".cursor").style.display="none"}},28);
}
document.getElementById("popBtn").onclick=()=>{
 confetti(130);document.getElementById("finalMessage").textContent="And the celebration continues… 🎉";
 document.getElementById("modal").classList.remove("hidden");
};
document.getElementById("closeModal").onclick=()=>document.getElementById("modal").classList.add("hidden");
function confetti(n){const chars=["✦","●","◆","♥","✧"];for(let i=0;i<n;i++){let p=document.createElement("span");p.className="confetti-piece";p.textContent=chars[Math.floor(Math.random()*chars.length)];p.style.left=Math.random()*100+"vw";p.style.fontSize=10+Math.random()*18+"px";p.style.animationDelay=Math.random()*1.1+"s";document.getElementById("confetti").appendChild(p);setTimeout(()=>p.remove(),4300)}}


/* =================================
   ENVELOPE OPENING
================================= */

const envelope =
  document.getElementById("envelope");

const openEnvelope =
  document.getElementById("openEnvelope");

const envelopeIntro =
  document.getElementById("envelopeIntro");


function openLetter(){
    if(envelope.classList.contains("open")) return;

    envelope.classList.add("open");
    envelopeIntro.classList.add("opening");

    // Start music quietly and fade it in
    birthdayMusic.volume = 0;

    birthdayMusic.play().then(() => {

        let volume = 0;

        const fadeIn = setInterval(() => {

            volume += 0.005;

            if(volume >= 0.25){
                volume = 0.25;
                birthdayMusic.volume = volume;
                clearInterval(fadeIn);
            }else{
                birthdayMusic.volume = volume;
            }

        }, 100);

    }).catch(error => {
        console.log("Music could not start:", error);
    });

    setTimeout(()=>{
        envelopeIntro.classList.add("hide");
    },1600);
}


/* Open using the button */

openEnvelope.addEventListener("click", (e) => {

  e.stopPropagation();

  openLetter();

});


/* Open by clicking the envelope itself */

envelope.addEventListener("click", openLetter);
/* =================================
   MAKE A WISH SCENE
================================= */

const wishBtn =
  document.getElementById("wishBtn");

const shootingStar =
  document.getElementById("shootingStar");

const wishComplete =
  document.getElementById("wishComplete");

const seeYourself =
  document.getElementById("seeYourself");

const moonZoom =
  document.getElementById("moonZoom");


/* Make a wish */

wishBtn.addEventListener("click", () => {

  /* Prevent clicking again */
  wishBtn.disabled = true;

  /* Hide button */
  wishBtn.style.opacity = "0";
  wishBtn.style.pointerEvents = "none";


  /* Shooting star */

  shootingStar.classList.remove("fall");

  /* Restart animation */
  void shootingStar.offsetWidth;

  shootingStar.classList.add("fall");


  /* Small sparkles */

  setTimeout(() => {

    confetti(18);

  }, 1300);


  /* Wish completed message */

  setTimeout(() => {

    wishComplete.classList.remove("hidden");

  }, 1900);


  /* Reveal next button */

  setTimeout(() => {

    seeYourself.classList.remove("hidden");

  }, 3000);

});


/* Click to see yourself */

seeYourself.addEventListener("click", () => {

  seeYourself.classList.add("hidden");

  const wishScene = document.querySelector(".wish-scene");
  const moon = document.querySelector(".moon");

  const sceneRect = wishScene.getBoundingClientRect();
  const moonRect = moon.getBoundingClientRect();

  const moonX =
    moonRect.left + moonRect.width / 2 - sceneRect.left;

  const moonY =
    moonRect.top + moonRect.height / 2 - sceneRect.top;

  wishScene.style.setProperty("--moon-x", moonX + "px");
  wishScene.style.setProperty("--moon-y", moonY + "px");

  wishScene.classList.add("zoom-to-moon");

  setTimeout(() => {

    go(4);

  }, 4200);

});
