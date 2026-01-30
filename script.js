function openLog(){
    const log=document.getElementById("logModal");
    if(log.style.display="none"){
          log.style.display="Flex";
    } else {
        log.style.display="none";
    }  
}

function closeLog(){
    document.getElementById("logModal").style.display="none"
}
function openHome(){
    window.location.href="home.html";
}

function openProfile(){
    const profile=document.getElementById("proModal");
    if(profile.style.display="none"){
          profile.style.display="Flex";
    } else {
        profile.style.display="none";
    }  
}
function closePro(){
    document.getElementById("proModal").style.display="none";
}
function openAlert() {
    const modal = document.getElementById("alertModal");

    // Show after 100ms
    setTimeout(() => {
        modal.style.display = "flex";
    }, 100);

    // Hide after 3 seconds
    setTimeout(() => {
        modal.style.display = "none";
    }, 1100); // 100ms + 3000ms
}

function openCate(){
    window.location.href="category.html";
}
function changeColor(clickedBtn) {
    // Reset all buttons
    const buttons = document.querySelectorAll('.size-btn');
    buttons.forEach(btn => {
        btn.style.backgroundColor = "";
        btn.style.color = "";
    });

    // Change clicked button color
    clickedBtn.style.backgroundColor = "lightpink";
    clickedBtn.style.color = "white";
}
function openModern(){
    window.location.href="modern.html";
}

function openMen(){
    window.location.href="modernmen.html";
}
function openWomen(){
    window.location.href="modernwomen.html";
}
function openKid(){
    window.location.href="modernkid.html";
}
function openCart() {
    window.location.href = "cart.html";
}

// Run on every page load
window.addEventListener("DOMContentLoaded", () => {
    const cart = document.querySelector(".cart");

    // Check if current page is cart.html
    if (window.location.pathname.includes("cart.html")) {
        cart.classList.add("active");
    } else {
        cart.classList.remove("active");
    }
});

function openTradition(){
    window.location.href="tradition.html";
}
function openMen1(){
    window.location.href="traditionmen.html";
}
function openWomen1(){
    window.location.href="traditionwomen.html";
}
function openKid1(){
    window.location.href="traditionkid.html";
}
function openCasual(){
    window.location.href="casual.html";
}
function openMen2(){
    window.location.href="casualmen.html";
}
function openWomen2(){
    window.location.href="casualwomen.html";
}
function openKid2(){
    window.location.href="casualkid.html";
}
function openFormal(){
    window.location.href="formal.html";
 }
 function openMen3(){
    window.location.href="formalmen.html";
}
function openWomen3(){
    window.location.href="formalwomen.html";
}
function openKid3(){
    window.location.href="formalkid.html";
}
function openWhish(icon) {
    // Mark wishlist as active
    localStorage.setItem("wishlistActive", "true");

    // Redirect
    window.location.href = "whishlist.html";
}

window.onload = function () {
    const heart = document.getElementById("heartLike");

    // If clicked on this page, make solid
    if (localStorage.getItem("wishlistActive") === "true") {
        heart.classList.remove("fa-regular");
        heart.classList.add("fa-solid", "heart-active");

        // Clear the flag so next page starts regular
        localStorage.removeItem("wishlistActive");
    }
};
function openCheck(){
    window.location.href="checkout.html";
}
function changeText() {
    const el = document.querySelector(".toggle");

    if (el.innerText === "Apply") {
        el.innerText = "Applied";
        el.style.backgroundColor = "green";
        el.style.color = "white";
    } else {
        el.innerText = "Apply";
        el.style.backgroundColor = "";
        el.style.color = "";
    }
}
function openPay(){
    window.location.href="payment.html";
}

function openClear() {
    document.getElementById("p-name").value = "";
    document.getElementById("p-number").value = "";
    document.getElementById("p-date").value = "";
    document.getElementById("p-cv").value = "";
}
function openSuccess(){
    window.location.href="success.html";
}
function openTrack(){
    window.location.href="track.html";
}
function openContact(){
    window.location.href="contact.html";
}

