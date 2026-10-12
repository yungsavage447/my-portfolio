const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const button = contactForm.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = "Sending...";

    try {
        await emailjs.send(
            "service_63shcxh",
            "template_8wul9sr",
            {
                from_name: name,
                from_email: email,
                message: message
            },
            {
                publicKey: "9Ds5bkd3hgu3wRZc-"
            }
        );

        const successMessage = document.createElement("p");
        successMessage.textContent = "Message sent successfully!";
        successMessage.style.color = "#38bdf8";
        successMessage.style.textAlign = "center";
        successMessage.style.marginBottom = "20px";
        successMessage.style.fontWeight = "bold";

        contactForm.insertBefore(successMessage, contactForm.firstChild);
        contactForm.reset();

        setTimeout(function () {
            successMessage.remove();
        }, 4000);

    } catch (error) {
        console.error("Email sending failed:", error);
        alert("Sorry, your message could not be sent. Please try again.");
    } finally {
        button.disabled = false;
        button.textContent = "Send Message";
    }
});












                //   Typing. in Hero-Section



const typingText = document.getElementById("typing");
const words = ["Web Developer", "Frontend Developer", "Programmer"];
let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    typingText.textContent = currentWord.substring(0, letterIndex);

    if (!deleting) {
        letterIndex++;

        if (letterIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
    } else {
        letterIndex--;

        if (letterIndex < 0) {
            letterIndex = 0;
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();








                //    BACK TO TOP BUTTON

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});










// DARK AND LIGHT MODE
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙";
    } else {
        themeToggle.textContent = "☀️";
    }
});