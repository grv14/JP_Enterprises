// ===== Auto Update Year in Footer =====
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer");
    const year = new Date().getFullYear();
    if (footer && !footer.innerHTML.includes(year)) {
        footer.innerHTML = footer.innerHTML.replace("2026", year);
    }
});

// ===== Smooth Scroll for Internal Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// ===== Floating WhatsApp Button =====
const whatsappBtn = document.createElement("a");
whatsappBtn.href = "https://wa.me/918287447370";
whatsappBtn.target = "_blank";
whatsappBtn.innerHTML = "💬";
whatsappBtn.style.position = "fixed";
whatsappBtn.style.bottom = "20px";
whatsappBtn.style.right = "20px";
whatsappBtn.style.background = "#25d366";
whatsappBtn.style.color = "#fff";
whatsappBtn.style.fontSize = "26px";
whatsappBtn.style.padding = "12px 15px";
whatsappBtn.style.borderRadius = "50%";
whatsappBtn.style.textDecoration = "none";
whatsappBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
whatsappBtn.style.zIndex = "9999";

document.body.appendChild(whatsappBtn);

// ===== Simple Click Log (Future Analytics Ready) =====
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("User clicked:", link.href);
    });
});

console.log("J.P Enterprises JS loaded successfully");