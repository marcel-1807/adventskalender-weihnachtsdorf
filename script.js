const doorsEl = document.getElementById('doors');
const dialog = document.getElementById('surprise-dialog');
const preview = new URLSearchParams(location.search).has('preview');
const today = new Date();
const currentMonth = today.getMonth(); // 0 = Januar, 11 = Dezember
const currentDay = today.getDate();

function isUnlocked(day) {
  if (preview) return true; // Vorschau: alle Türchen testen mit ?preview=1
  return currentMonth === 11 && currentDay >= day;
}

for (let day = 1; day <= 24; day++) {
  const item = surprises[day - 1];
  const unlocked = isUnlocked(day);
  const button = document.createElement('button');
  button.className = 'door';
  button.type = 'button';
  button.disabled = !unlocked;
  button.setAttribute('aria-label', unlocked ? `Türchen ${day} öffnen` : `Türchen ${day}, noch verschlossen`);
  button.innerHTML = `<span class="symbol">${unlocked ? '✦' : '❄'}</span><span class="number">${String(day).padStart(2,'0')}</span><span class="label">${unlocked ? 'Öffnen' : 'Bald'}</span>`;
  if (unlocked) {
    button.addEventListener('click', () => {
      document.getElementById('modal-day').textContent = `Türchen ${day} · Dezember`;
      document.getElementById('modal-title').textContent = item.title;
      document.getElementById('modal-message').textContent = item.message;
      dialog.showModal();
    });
  }
  doorsEl.appendChild(button);
}

document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});

// Dezenter Schneefall im Hintergrund
const snow = document.getElementById('snow');
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  for (let i = 0; i < 45; i++) {
    const flake = document.createElement('span');
    flake.className = 'snowflake';
    flake.textContent = Math.random() > .5 ? '❄' : '•';
    flake.style.left = `${Math.random() * 100}vw`;
    flake.style.fontSize = `${6 + Math.random() * 12}px`;
    flake.style.animationDuration = `${8 + Math.random() * 15}s`;
    flake.style.animationDelay = `${-Math.random() * 20}s`;
    flake.style.setProperty('--drift', `${-50 + Math.random() * 100}px`);
    snow.appendChild(flake);
  }
}
