const thunderSound = new Audio("../assets/thunder.mp3");
const screamSound = new Audio("../assets/scream.mp3");

let kills = 0;

function thunderFlash(){
  const flash=document.querySelector(".lightning");
  if(!flash) return;

  flash.style.opacity="1";
  thunderSound.currentTime=0;
  thunderSound.volume=0.5;
  thunderSound.play().catch(()=>{});

  setTimeout(()=>flash.style.opacity="0",180);
}

setInterval(()=>thunderFlash(),Math.random()*5000+4000);

setInterval(()=>{
  if(Math.random()<0.18) showJumpscare();
},12000);

function showJumpscare(){
  const img=document.createElement("img");
  img.src="../assets/skull.png";
  img.style.position="fixed";
  img.style.inset="0";
  img.style.width="100%";
  img.style.height="100%";
  img.style.objectFit="contain";
  img.style.background="black";
  img.style.zIndex="9999";
  document.body.appendChild(img);

  screamSound.currentTime=0;
  screamSound.play().catch(()=>{});

  kills++;
  updateKills();

  setTimeout(()=>img.remove(),900);
}

function updateKills(){
  let counter=document.querySelector(".kill-counter");
  if(!counter){
    counter=document.createElement("div");
    counter.className="kill-counter";
    document.body.appendChild(counter);
  }
  counter.textContent="☠️ Dominations : "+kills;
}
