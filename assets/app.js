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

const commands = {
  help: () => `
<div class="term-block">
  <div class="term-success">Available commands</div>
  <div>about&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;profile summary</div>
  <div>skills&nbsp;&nbsp;&nbsp;&nbsp;security focus areas</div>
  <div>certs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;certifications</div>
  <div>projects&nbsp;&nbsp;&nbsp;public projects</div>
  <div>links&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public links</div>
  <div>whoami&nbsp;&nbsp;&nbsp;&nbsp;identity</div>
  <div>clear&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clear terminal</div>
</div>`,
  about: () => `<div class="term-block"><div class="term-success">Asif Nawaz Minhas</div><div>Offensive security, penetration testing, purple teaming and vulnerability research.</div></div>`,
  skills: () => `<div class="term-block"><div class="term-success">Focus areas</div><div>Web security · Windows · Active Directory · Red Teaming · Purple Teaming · Security Research</div></div>`,
  certs: () => `<div class="term-block"><div class="term-success">Certifications</div><div>OSEP · OSCP · OSWP · CISSP · CISM · CRTO · CRTP · OSWA · CEH</div></div>`,
  projects: () => `<div class="term-block"><div class="term-success">Projects</div><div>Security Studio → studio.asifnawazminhas.com</div><div>Security Notes → notes.asifnawazminhas.com</div><div>Main site → www.asifnawazminhas.com</div></div>`,
  links: () => `<div class="term-block"><div>GitHub → github.com/asifnawazminhas</div><div>LinkedIn → linkedin.com/in/asifminhasnl</div><div>Notes → notes.asifnawazminhas.com</div><div>Studio → studio.asifnawazminhas.com</div></div>`,
  whoami: () => `<div class="term-block"><span class="term-cmd">asif</span>@security-console <span class="term-success">authorised-user</span></div>`,
  clear: () => ''
};

form.addEventListener('submit', e => {
  e.preventDefault();
  const raw = input.value.trim();
  if (!raw) return;
  const key = raw.toLowerCase();

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

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, ch => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  }[ch]));
}

document.getElementById('year').textContent = new Date().getFullYear();
