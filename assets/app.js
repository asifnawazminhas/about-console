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
        <span><b>research</b> — vulnerability research</span>
        <span><b>recognition</b> — disclosure achievements</span>
        <span><b>openbug</b> — OpenBugBounty statistics</span>
        <span><b>projects</b> — open projects</span>
        <span><b>contact</b> — open contact</span>
        <span><b>links</b> — public links</span>
        <span><b>whoami</b> — identity</span>
        <span><b>clear</b> — clear terminal</span>
      </div>
    </div>`,
  about: () => `<div class="term-block"><span class="cmd">Asif Nawaz Minhas</span><div>Offensive Security Specialist · Red Teaming · Penetration Testing · Vulnerability Research</div><div>10+ years of hands-on offensive-security experience · 68 CVEs · 600+ responsible disclosures.</div></div>`,
  experience: () => {
    openSection('experience');
    return `<div class="term-block">
      <span class="cmd">EXPERIENCE</span>
      <div>10+ years across penetration testing, red teaming, enterprise security and vulnerability research.</div>
      <div>Current focus: offensive security assessments, adversary simulation, technical reporting and remediation validation.</div>
      <div style="color:var(--accent)">→ Experience panel opened on the left.</div>
    </div>`;
  },
  skills: () => {
    openSection('skills');
    return `<div class="term-block">
      <span class="cmd">CAPABILITY MATRIX</span>
      <div>Application Security · Windows & Active Directory · Red Teaming · Vulnerability Research · Tooling · Reporting</div>
      <div style="color:var(--accent)">→ Skills panel opened on the left.</div>
    </div>`;
  },
  certs: () => {
    openSection('certifications');
    return `<div class="term-block">
      <span class="cmd">CERTIFICATIONS</span>
      <div>OSEP · OSCP · OSWP · OSWA · CRTO · CISSP · CISM · APTMC</div>
      <div style="color:var(--accent)">→ Certifications panel opened on the left.</div>
    </div>`;
  },
  academic: () => {
    openSection('academic');
    return `<div class="term-block">
      <span class="cmd">ACADEMIC BACKGROUND</span>
      <div>Master's in Information Security · Royal Holloway, University of London</div>
      <div>Bachelor's in Information Technology · Windesheim University of Applied Sciences</div>
      <div style="color:var(--accent)">→ Academic panel opened on the left.</div>
    </div>`;
  },
  research: () => {
    openSection('research');
    return `<div class="term-block">
      <span class="cmd">VULNERABILITY RESEARCH</span>
      <div>68 CVEs / published vulnerability records.</div>
      <div>65 Wordfence discoveries + 3 additional published CVEs / advisories.</div>
      <div>CVE-2024-34955 · CVE-2024-34954 · CVE-2025-54384</div>
      <div style="color:var(--accent)">→ Research panel opened on the left.</div>
    </div>`;
  },
  recognition: () => {
    openSection('recognition');
    return `<div class="term-block">
      <span class="cmd">DISCLOSURE RECOGNITION</span>
      <div>26 public acknowledgements across 2023 — 2026.</div>
      <div>OpenBugBounty: 603 reports · 151 patched vulnerabilities · active since 07.09.2023.</div>
      <div>NASA · United Nations · WHO · UNESCO · UNICEF · BASF · Schiphol · TU Delft · KNAW · VU · UU · and others.</div>
      <div style="color:var(--accent)">→ Recognition panel opened on the left.</div>
    </div>`;
  },
  openbug: () => {
    openSection('recognition');
    return `<div class="term-block">
      <span class="cmd">OPENBUGBOUNTY PROFILE</span>
      <div>603 total reports · 151 patched vulnerabilities.</div>
      <div>Active since 07.09.2023.</div>
      <div>Profile: https://www.openbugbounty.org/researchers/ethicaldudeNL/</div>
      <div style="color:var(--accent)">→ Recognition panel opened on the left.</div>
    </div>`;
  },
  projects: () => {
    openSection('projects');
    return `<div class="term-block">
      <span class="cmd">PROJECTS</span>
      <div>Security Studio · Security Notes · Main cybersecurity site</div>
      <div style="color:var(--accent)">→ Projects panel opened on the left.</div>
    </div>`;
  },
  contact: () => {
    openSection('contact');
    return `<div class="term-block">
      <span class="cmd">PUBLIC CHANNELS</span>
      <div>GitHub · LinkedIn · Security Notes · Security Studio · Main Site · OpenBugBounty · Research Profile</div>
      <div>No email or contact form is exposed on this console.</div>
      <div style="color:var(--accent)">→ Contact panel opened on the left.</div>
    </div>`;
  },
  links: () => `<div class="term-block"><a href="https://github.com/asifnawazminhas" target="_blank" rel="noopener noreferrer">GitHub</a><br><a href="https://www.linkedin.com/in/asifminhasnl/" target="_blank" rel="noopener noreferrer">LinkedIn</a><br><a href="https://notes.asifnawazminhas.com" target="_blank" rel="noopener noreferrer">Security Notes</a><br><a href="https://studio.asifnawazminhas.com" target="_blank" rel="noopener noreferrer">Security Studio</a></div>`,
  whoami: () => `<div class="term-block"><span class="cmd">asif@console</span> authorised-user</div>`,
  clear: () => ''
};

const aliases = {
  certification:'certs', certifications:'certs', cert:'certs',
  education:'academic', edu:'academic', project:'projects', link:'links',
  exp:'experience', work:'experience', cve:'research', cves:'research', disclosure:'research', achievements:'recognition', achievement:'recognition', halloffame:'recognition'
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
