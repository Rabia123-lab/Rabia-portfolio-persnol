 // Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Simple alert for CV button
document.querySelector('.hero button').addEventListener('click', function() {
    alert('CV download feature will be added soon!');
});

const textArray = ["Frontend Developer", "Web Designer", "AI Diploma Student"];
let index = 0;
let charIndex = 0;

function typeEffect() {
    const typingText = document.getElementById("typing-text");

    if (charIndex < textArray[index].length) {
        typingText.innerHTML += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    const typingText = document.getElementById("typing-text");

    if (charIndex > 0) {
        typingText.innerHTML = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeEffect, 300);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    typeEffect();
});