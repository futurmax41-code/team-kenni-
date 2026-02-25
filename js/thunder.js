function thunderFlash() {
    const flash = document.querySelector(".lightning");
    flash.style.opacity = "1";

    setTimeout(() => {
        flash.style.opacity = "0";
    }, 120);
}

// tonnerre aléatoire
setInterval(() => {
    thunderFlash();
}, Math.random() * 4000 + 3000);
