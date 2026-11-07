// Menu mobilne
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}));

// Zakładki cennika
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.price-list').forEach(l => l.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Formularz rezerwacji
const form = document.getElementById('booking');
const msg = form.querySelector('.form-msg');
form.date.min = new Date().toISOString().split('T')[0];

form.addEventListener('submit', e => {
  e.preventDefault();
  let ok = true;
  form.querySelectorAll('[required]').forEach(f => {
    const bad = !f.value.trim() || (f.name === 'phone' && f.value.replace(/\D/g, '').length < 9);
    f.classList.toggle('invalid', bad);
    if (bad) ok = false;
  });
  msg.className = 'form-msg';
  if (!ok) {
    msg.textContent = 'Uzupełnij zaznaczone pola. Numer telefonu powinien mieć co najmniej 9 cyfr.';
    msg.classList.add('err');
    return;
  }
  // Tu podłącz wysyłkę (np. Formspree, EmailJS lub własny backend):
  // fetch('https://formspree.io/f/TWOJ_ID', { method:'POST', body:new FormData(form) })
  msg.textContent = 'Dziękujemy! Zgłoszenie wysłane – oddzwonimy, aby potwierdzić termin.';
  msg.classList.add('ok');
  form.reset();
});

// Rok w stopce
document.getElementById('year').textContent = new Date().getFullYear();
