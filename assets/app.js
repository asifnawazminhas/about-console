const tabs = [...document.querySelectorAll('.nav-btn')];
const views = [...document.querySelectorAll('.panel-view')];

function openSection(id) {
  tabs.forEach(btn => btn.classList.toggle('active', btn.dataset.section === id));
  views.forEach(view => view.classList.toggle('active', view.id === id));
}

tabs.forEach(btn => btn.addEventListener('click', () => openSection(btn.dataset.section)));

const output = document.getElementById('terminalOutput');
const input = document.getElementById('terminalInput');
const form = document.getElementById('terminalForm');
const history = [];
let historyIndex = 0;

const terminalCommands = {
  help: () => `
    <div class="term-block">
      <span class="cmd">Available commands</span>
      <div class="command-list">
        <span><b>about</b> — profile information</span>
        <span><b>experience</b> — open experience</span>
        <span><b>skills</b> — open skills</span>
        <span><b>certs</b> — open certifications</span>
        <span><b>academic</b> — open education</span>
        <span><b>projects</b> — open projects</span>
        <span><b>contact</b> — open contact</span>
        <span><b>links</b> — public links</span>
        <span><b>whoami</b> — identity</span>
        <span><b>clear</b> — clear terminal</span>
      </div>
    </div>`,
  about: () => `<div class="term-block"><span class="cmd">Asif Nawaz Minhas</span><div>Offensive Security Specialist · Red Teaming · Penetration Testing · Vulnerability Research</div><div>10+ years of hands-on offensive-security experience · 68 CVEs · 600+ responsible disclosures.</div></div>`,
  experience: () => { openSection('experience'); return `<div class="term-block"><span class="cmd">Experience panel opened.</span></div>`; },
  skills: () => { openSection('skills'); return `<div class="term-block"><span class="cmd">Skills panel opened.</span></div>`; },
  certs: () => { openSection('certifications'); return `<div class="term-block"><span class="cmd">Certifications panel opened.</span><div>OSEP · OSCP · OSWP · OSWA · CRTO · CRTP · CISSP · CISM · APTMC · CEH</div></div>`; },
  academic: () => { openSection('academic'); return `<div class="term-block"><span class="cmd">Academic panel opened.</span></div>`; },
  projects: () => { openSection('projects'); return `<div class="term-block"><span class="cmd">Projects panel opened.</span></div>`; },
  contact: () => { openSection('contact'); return `<div class="term-block"><span class="cmd">Contact panel opened.</span></div>`; },
  links: () => `<div class="term-block"><a href="https://github.com/asifnawazminhas" target="_blank" rel="noopener noreferrer">GitHub</a><br><a href="https://www.linkedin.com/in/asifminhasnl/" target="_blank" rel="noopener noreferrer">LinkedIn</a><br><a href="https://notes.asifnawazminhas.com" target="_blank" rel="noopener noreferrer">Security Notes</a><br><a href="https://studio.asifnawazminhas.com" target="_blank" rel="noopener noreferrer">Security Studio</a></div>`,
  whoami: () => `<div class="term-block"><span class="cmd">asif@console</span> authorised-user</div>`,
  clear: () => ''
};

const aliases = {
  certification:'certs', certifications:'certs', cert:'certs',
  education:'academic', edu:'academic', project:'projects', link:'links',
  exp:'experience', work:'experience'
};

function normalise(raw) {
  const key = raw.trim().toLowerCase();
  return aliases[key] || key;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const raw = input.value.trim();
  if (!raw) return;

  history.push(raw);
  historyIndex = history.length;
  const key = normalise(raw);

  if (key === 'clear') {
    output.innerHTML = '';
  } else {
    output.insertAdjacentHTML('beforeend', `<div class="term-block"><span class="cmd">asif@console:~$</span> ${escapeHtml(raw)}</div>`);
    const response = terminalCommands[key]
      ? terminalCommands[key]()
      : `<div class="term-block" style="color:var(--warning)">Unknown command: ${escapeHtml(raw)}. Type "help".</div>`;
    output.insertAdjacentHTML('beforeend', response);
  }

  input.value = '';
  output.scrollTop = output.scrollHeight;
});

input.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (historyIndex > 0) historyIndex--;
    input.value = history[historyIndex] || '';
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (historyIndex < history.length) historyIndex++;
    input.value = history[historyIndex] || '';
  }
  if (e.key === 'Tab') {
    e.preventDefault();
    const needle = normalise(input.value);
    const names = Object.keys(terminalCommands).filter(x => x !== 'clear');
    const match = names.find(name => name.startsWith(needle));
    if (match) input.value = match;
  }
});

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, ch => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  }[ch]));
}

document.getElementById('year').textContent = new Date().getFullYear();

function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent =
    now.toLocaleDateString('en-GB', { weekday:'short', day:'2-digit', month:'short', year:'numeric' }).toUpperCase()
    + '  ' +
    now.toLocaleTimeString('en-GB');
}
updateClock();
setInterval(updateClock, 1000);
