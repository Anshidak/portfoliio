const buttons = document.querySelectorAll('.nav button');
const cards = document.querySelectorAll('.card');

function showCard(id) {
  cards.forEach(card => card.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  buttons.forEach(btn => btn.classList.remove('active'));
  const activeButton = [...buttons].find(btn => btn.textContent.toLowerCase() === id);
  if (activeButton) activeButton.classList.add('active');

  document.getElementById(id).scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', () => {
  showCard('about');
  typingEffect(["IT Specialist", "System Admin", "Web Developer", "Support Engineer"]);
});

// Typing effect
function typingEffect(words) {
  const el = document.getElementById("typed-text");
  let wordIndex = 0;
  let letterIndex = 0;
  let currentWord = '';
  let typing = true;

  function type() {
    if (typing) {
      currentWord = words[wordIndex].substring(0, letterIndex + 1);
      letterIndex++;
      el.textContent = currentWord;

      if (letterIndex === words[wordIndex].length) {
        typing = false;
        setTimeout(type, 1000);
      } else {
        setTimeout(type, 100);
      }
    } else {
      currentWord = words[wordIndex].substring(0, letterIndex - 1);
      letterIndex--;
      el.textContent = currentWord;

      if (letterIndex === 0) {
        typing = true;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 300);
      } else {
        setTimeout(type, 50);
      }
    }
  }
  type();
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle('light-mode');
}
