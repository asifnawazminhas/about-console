# Asif Security Console

Interactive terminal-style cybersecurity portfolio for Asif Nawaz Minhas.

## Live site

https://about.asifnawazminhas.com

## v1.4 highlights

- Employer-specific current-role details removed from the public console; LinkedIn remains the source for current employment history
- Full career history and concurrent security/research roles
- Dedicated Skills / Capability Matrix tab
- Expanded certifications with granted status
- Improved Overview with:
  - Initializing Decrypt Sequence
  - Current Operations
  - security highlights
- Terminal commands for current role, career, skills, certifications and experience
- Arrow-key history and Tab autocomplete
- Static, local-only informational terminal
- No backend
- No uploads
- No command execution

## Main terminal commands

```text
help
about
current
career
experience
skills
certs
education
recognition
cves
projects
links
whoami
recent
clear
```

## Related sites

- Main site: https://www.asifnawazminhas.com
- Security Notes: https://notes.asifnawazminhas.com
- Security Studio: https://studio.asifnawazminhas.com
- GitHub: https://github.com/asifnawazminhas
- LinkedIn: https://www.linkedin.com/in/asifminhasnl/

## GitHub Pages

This repository includes `.github/workflows/deploy.yml`.

Use:

**Settings -> Pages -> Source -> GitHub Actions**

The included `CNAME` is configured for:

`about.asifnawazminhas.com`

## License

MIT License.

### v1.3 privacy and design changes

- Removed current employer naming from the public About Console
- Removed the Current Research card
- Removed terminal aliases exposing the current employer/current role
- Career overview remains high-level while LinkedIn carries detailed employment history
- Upgraded typography to Manrope + IBM Plex Mono with system fallbacks
- Refined spacing, surfaces, card depth, hover states and terminal styling
- Improved visual hierarchy and responsive polish

### v1.4 typography and density changes

- Restored the current role in employer-neutral form
- Current employer remains intentionally omitted
- Reintroduced the `current` terminal command without employer naming
- Reduced Overview copy substantially
- Replaced long Current Operations list with four compact operation cards
- Switched the primary UI typeface to Space Grotesk
- Kept IBM Plex Mono for terminal and technical labels
- Increased whitespace, card padding and line-height
- Simplified Security Highlights
- Improved visual hierarchy and readability
