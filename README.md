# Asif Security Console

Interactive terminal-style cybersecurity portfolio for Asif Nawaz Minhas.

## Live site

https://about.asifnawazminhas.com

## v1.8 research + comms update

This release expands the cyber-console portfolio with public research and communication modules:

- left-side interactive portfolio dashboard
- improved terminal responses: commands now print a concise summary and open the matching left-side panel
- right-side informational ASIF-SHELL
- premium cyber HUD navigation
- responsive overview hero
- four polished Core Practice Area cards
- experience, skills, certifications, education, projects and contact panels
- public milestone / recent-activity panel
- quote updated to “Security improves through testing, learning, and sharing.”
- employer-neutral current role
- local informational terminal with command history and Tab completion
- no file uploads
- no backend
- no system command execution

## Terminal commands

```text
help
about
experience
skills
certs
academic
projects
contact
links
whoami
clear
```

## Public links

- Main site: https://www.asifnawazminhas.com
- Security Notes: https://notes.asifnawazminhas.com
- Security Studio: https://studio.asifnawazminhas.com
- GitHub: https://github.com/asifnawazminhas
- LinkedIn: https://www.linkedin.com/in/asifminhasnl/

## Personal photo

The release intentionally ships with an `AM` monogram rather than inventing a photograph.

To use your own photo later, add your image under `assets/` and replace the `.portrait-placeholder`
content in `index.html` with an `<img>` element.

## GitHub Pages

The repository includes:

```text
.github/workflows/deploy.yml
CNAME
```

Use:

**Settings -> Pages -> Source -> GitHub Actions**

The custom domain is:

```text
about.asifnawazminhas.com
```

## License

MIT License.


### v1.8 additions

- dedicated Vulnerability Research tab
- 68 total CVEs / published vulnerability records represented as:
  - 65 Wordfence discoveries
  - CVE-2024-34955
  - CVE-2024-34954
  - CVE-2025-54384
- direct links to Wordfence, GitHub CVE records and CKAN advisory
- redesigned COMMS / Public Channels area
- GitHub, LinkedIn, Security Notes, Security Studio, Main Site and Research Profile nodes
- no email address or non-functional contact form
- `research`, `cve`, `cves`, and `disclosure` terminal commands / aliases
- image placeholder retained for a later portrait update
