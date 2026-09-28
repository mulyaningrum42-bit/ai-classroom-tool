const toast = document.querySelector('#toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

document.querySelector('#start-session').addEventListener('click', () => {
  document.querySelector('#begin-session').focus();
  document.querySelector('.session-panel').scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.querySelector('#begin-session').addEventListener('click', () => {
  const topic = document.querySelector('#topic').value;
  showToast(`Session ready — scanning for a student to ask about ${topic}.`);
});

document.querySelector('#scan-button').addEventListener('click', () => {
  showToast('Camera access requested. Face scanning will start here.');
});

document.querySelector('#new-question').addEventListener('click', (event) => {
  const questions = [
    '“Why is it important for AI systems to be trained on diverse data?”',
    '“What is one way AI could help solve a problem in your community?”',
    '“How are neural networks inspired by the human brain?”'
  ];
  const heading = document.querySelector('.prompt-panel h2');
  const next = questions[(questions.indexOf(heading.textContent) + 1) % questions.length];
  heading.textContent = next;
  showToast('A fresh question has been generated.');
});

document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', (event) => {
  if (link.getAttribute('href') !== '#dashboard') {
    event.preventDefault();
    showToast(`${link.textContent.trim()} will be available in the next release.`);
  }
}));
