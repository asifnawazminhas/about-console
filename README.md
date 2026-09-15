# Asif Security Console

A static, zero-build personal cybersecurity portfolio designed for GitHub Pages.

## Files

- `index.html`
- `assets/style.css`
- `assets/app.js`
- `assets/favicon.svg`
- `.github/workflows/deploy.yml`
- `CNAME`

## Custom domain

The project is configured for:

`about.asifnawazminhas.com`

If you want a different hostname, change the value in `CNAME` before deploying.

## GitHub Pages

1. Create a new GitHub repository, for example:
   `asifnawazminhas/about-console`
2. Upload all files from this ZIP to the repository root.
3. Open:
   **Settings -> Pages**
4. Under **Build and deployment**, choose:
   **Source: GitHub Actions**
5. Push/commit to `main`.
6. Wait for the **Deploy About Console to GitHub Pages** workflow to finish.
7. In **Settings -> Pages**, set the custom domain:
   `about.asifnawazminhas.com`
8. Enable **Enforce HTTPS** after DNS is valid.

## Cloudflare DNS

Create:

- Type: `CNAME`
- Name: `about`
- Target: `asifnawazminhas.github.io`
- Proxy status: DNS only initially

After GitHub Pages validates the domain and HTTPS works, you can decide whether to enable the Cloudflare proxy.

Do not point `about.asifnawazminhas.com` back to itself.

## Terminal

The terminal is informational only and supports:

- `help`
- `about`
- `skills`
- `certs`
- `projects`
- `links`
- `whoami`
- `clear`

It does not execute operating-system commands.

## Personalisation

Edit public profile text in `index.html`.

The monogram avatar intentionally avoids requiring a personal photograph. You can replace the avatar later with your own image if desired.
