# Asif Security Console

Interactive terminal-style cybersecurity profile for Asif Nawaz Minhas.

## Live site

https://about.asifnawazminhas.com

## v1.1 highlights

- expanded public profile content based on the main About page
- Academic section
- deeper certification coverage
- broader responsible-disclosure recognition timeline
- 68 CVE metric
- improved terminal aliases (`link`, `cert`, etc.)
- terminal history with Up/Down arrows
- Tab autocomplete
- additional commands: `education`, `recognition`, `cves`, `recent`
- clickable terminal links
- responsive layout
- no backend or build step

## Terminal commands

```text
help
about
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

The terminal is informational only and does not execute operating-system commands.

## Related sites

- Main site: https://www.asifnawazminhas.com
- Security Notes: https://notes.asifnawazminhas.com
- Security Studio: https://studio.asifnawazminhas.com
- GitHub: https://github.com/asifnawazminhas

## GitHub Pages

The repository includes `.github/workflows/deploy.yml` for GitHub Pages.

1. Upload all repository files.
2. In **Settings -> Pages**, select **GitHub Actions**.
3. Commit to `main`.
4. Set the custom domain to `about.asifnawazminhas.com`.
5. In Cloudflare create `CNAME about -> asifnawazminhas.github.io`.
6. Use DNS-only until GitHub validates the domain and HTTPS is available.

## License

MIT License. See `LICENSE`.
