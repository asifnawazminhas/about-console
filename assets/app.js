const tabs = document.querySelectorAll('.tab');
const views = document.querySelectorAll('.view');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    views.forEach(v => v.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.section)?.classList.add('active');
  });
});

const output = document.getElementById('terminalOutput');
const input = document.getElementById('terminalInput');
const form = document.getElementById('terminalForm');
const history = [];
let historyIndex = 0;

const commandNames = ['help','about','skills','certs','education','recognition','cves','projects','links','whoami','recent','clear'];

const commands = {
  help: () => `
<div class="term-block">
  <div class="term-success">Available commands</div>
  <div class="term-list">
    <div><b>about</b> <span class="term-dim">profile summary</span></div>
    <div><b>skills</b> <span class="term-dim">security focus areas</span></div>
    <div><b>certs</b> <span class="term-dim">certifications</span></div>
    <div><b>education</b> <span class="term-dim">academic background</span></div>
    <div><b>recognition</b> <span class="term-dim">responsible-disclosure highlights</span></div>
    <div><b>cves</b> <span class="term-dim">CVE count</span></div>
    <div><b>projects</b> <span class="term-dim">public projects</span></div>
    <div><b>links</b> <span class="term-dim">public links</span></div>
    <div><b>whoami</b> <span class="term-dim">identity</span></div>
    <div><b>recent</b> <span class="term-dim">recent public content</span></div>
    <div><b>clear</b> <span class="term-dim">clear terminal</span></div>
  </div>
</div>`,
  about: () => `<div class="term-block"><div class="term-success">Asif Nawaz Minhas</div><div>Penetration tester and security researcher from the Netherlands, focused on offensive security, red teaming, purple teaming and vulnerability research.</div></div>`,
  skills: () => `<div class="term-block"><div class="term-success">Focus areas</div><div>Web Security · Windows · Active Directory · Red Teaming · Purple Teaming · Security Research</div></div>`,
  certs: () => `<div class="term-block"><div class="term-success">Certifications</div><div>OSEP · OSCP · OSWP · OSWA · CRTO · CRTP · CISSP · CISM · ATT&CK Purple Teaming Methodology</div></div>`,
  education: () => `<div class="term-block"><div class="term-success">Academic background</div><div>Master's — Information Security, Royal Holloway, University of London</div><div>Bachelor's — Information Technology, Windesheim University of Applied Sciences</div></div>`,
  recognition: () => `<div class="term-block"><div class="term-success">Recognition highlights</div><div>NASA · United Nations · WHO · UNESCO · UNICEF · BASF · Schiphol · Wordfence · TU Delft · KNAW · VU Amsterdam · Utrecht University</div></div>`,
  cves: () => `<div class="term-block"><div class="term-success">68 CVEs reported</div><div>Vulnerability research contributing to security improvements in widely-used software.</div></div>`,
  projects: () => `<div class="term-block"><div class="term-success">Projects</div><div><a href="https://studio.asifnawazminhas.com" target="_blank" rel="noopener noreferrer">Security Studio</a> → interactive assessment workspace</div><div><a href="https://notes.asifnawazminhas.com" target="_blank" rel="noopener noreferrer">Security Notes</a> → technical knowledge base</div><div><a href="https://www.asifnawazminhas.com" target="_blank" rel="noopener noreferrer">Main site</a> → research and writing</div></div>`,
  links: () => `<div class="term-block"><div><a href="https://github.com/asifnawazminhas" target="_blank" rel="noopener noreferrer">GitHub</a></div><div><a href="https://www.linkedin.com/in/asifminhasnl/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div><div><a href="https://notes.asifnawazminhas.com" target="_blank" rel="noopener noreferrer">Security Notes</a></div><div><a href="https://studio.asifnawazminhas.com" target="_blank" rel="noopener noreferrer">Security Studio</a></div></div>`,
  whoami: () => `<div class="term-block"><span class="term-cmd">asif</span>@security-console <span class="term-success">authorised-user</span></div>`,
  recent: () => `<div class="term-block"><div class="term-success">Recent public content</div><div>CVE-2025-31161 — CrushFTP Authentication Bypass</div><div>CVE-2025-29927 — Next.js Middleware Authorization Bypass</div><div>OSWP review</div><div>OSEP review</div></div>`,
  clear: () => ''
};

const aliases = {
  cert:'certs', certificate:'certs', certifications:'certs',
  link:'links', project:'projects', edu:'education', academic:'education',
  achievement:'recognition', achievements:'recognition', hof:'recognition',
  cve:'cves', cves:'cves'
};

function normaliseCommand(raw) {
  const key = raw.trim().toLowerCase();
  return aliases[key] || key;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const raw = input.value.trim();
  if (!raw) return;
  history.push(raw); historyIndex = history.length;
  const key = normaliseCommand(raw);

  if (key === 'clear') {
    output.innerHTML = '';
  } else {
    output.insertAdjacentHTML('beforeend', `<div class="term-block"><span class="term-cmd">› ${escapeHtml(raw)}</span></div>`);
    const response = commands[key]
      ? commands[key]()
      : `<div class="term-block term-warning">Unknown command: ${escapeHtml(raw)}. Type "help".</div>`;
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
    const needle = input.value.trim().toLowerCase();
    const match = commandNames.find(name => name.startsWith(needle));
    if (match) input.value = match;
  }
});

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, ch => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  }[ch]));
}

document.getElementById('year').textContent = new Date().getFullYear();
