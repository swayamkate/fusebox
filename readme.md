# TempBox (tempbox.site)

A modern, high-performance, and privacy-focused temporary email web application built with serverless architecture and hosted on Cloudflare Pages.

## Features

* **Instant Disposable Inboxes:** Generate secure, anonymous email addresses instantly with a single click.
* **Dual-API Provider Routing:** Intelligently fetches domains from multiple mail networks (`mail.tm` and `mail.gw`) to provide a wide variety of available domain extensions.
* **Live Email Polling:** Automatically checks for incoming emails every few seconds without requiring manual page refreshes.
* **Rich HTML & Text Viewer:** Safely preview full HTML or plain text emails inside an isolated viewer modal.
* **Modern UI/UX:** Clean, responsive SaaS-style interface designed with Plus Jakarta Sans and smooth smooth transitions.
* **Monetized Layout:** Pre-configured structural side ad slots ready for Google AdSense integration.

## Tech Stack

* **Frontend:** Vanilla JavaScript, HTML5, CSS3 (Custom design system with CSS variables).
* **Backend Proxy:** Cloudflare Pages Functions (`_worker.js`) to seamlessly proxy API requests and completely bypass CORS limitations.
* **Hosting:** Cloudflare Pages & GitHub.

## Project Structure

```text
├── index.html        # Main frontend interface and application logic
├── privacy.html      # Privacy Policy and Terms of Service legal pages
├── _worker.js        # Cloudflare Pages worker script for secure API routing
└── README.md         # Project documentation
