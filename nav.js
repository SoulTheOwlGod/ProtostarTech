// nav.js
const modalBg = document.getElementById('modalBg');
const navOrb = document.getElementById('navOrb');

function openModal() { modalBg.style.display = 'flex'; }
function closeModal() { modalBg.style.display = 'none'; }

modalBg.addEventListener('click', e => {
  if(e.target === modalBg) closeModal();
});
