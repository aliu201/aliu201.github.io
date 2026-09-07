# Allison (Yerin) Shin — Portfolio

A static personal portfolio site. Plain HTML, CSS and one small JavaScript file —
no build step, no dependencies. Open `index.html` in a browser and it works.

## Pages

| File | What's on it |
|---|---|
| `index.html` | Home — about, section index, recent work, contact |
| `computer-science.html` | Olympiads, science fair, hackathon, SNU AI internship |
| `art.html` | BIKAF awards, exhibitions, National Art Honor Society |
| `writing.html` | Research paper, NYT Tiny Memoir, National History Day, essays |
| `service.html` | ESG Challenge, Kenya Connect, UNHCR, Kiwoom Center |

## Folders

```
assets/css/style.css   All styling. Colours and spacing live in :root at the top.
assets/js/main.js      Scroll reveal, image lightbox, current-page nav marker.
assets/img/            Photos and certificates, sorted by section.
Photos/                Original full-resolution images (not used by the site).
personal_color/        Class exercise — standalone page.
spotify_design/        Class exercise — standalone page.
__legacy__/            The older version of the site, kept for reference.
```

## Design

Each section is keyed to a real watercolour pigment and its colour-index code:

| Section | Pigment | Code | Hex |
|---|---|---|---|
| Computer science | Cerulean blue | PB 35 | `#2a6ea6` |
| Art | Quinacridone rose | PV 19 | `#b8446e` |
| Research & writing | Dioxazine violet | PV 23 | `#64509e` |
| Service | Sap green | PG 8 | `#47804f` |

The paper texture is drawn in `body::before`. The soft bloom behind each heading
comes from the SVG turbulence filter (`<filter id="bleed">`) at the top of every page.

Fonts (Google Fonts): **Bricolage Grotesque** for headings, **Newsreader** for body
text, **IBM Plex Mono** for dates and labels.

## Editing

- **Colours / spacing** — the `:root` block at the top of `assets/css/style.css`.
- **New award or entry** — copy an existing `<li class="entry">` block on a section
  page and change the date, organisation, heading and notes. Keep entries newest first.
- **New image** — drop it in the matching `assets/img/` folder, then add a
  `<button class="plate">` with an `<img>` inside. Always write a real `alt` —
  the lightbox uses it as the caption.
- **Photo placement** — one or two photos go beside the text
  (`entry__body--side` + `plates--side`); three or more go below it (plain
  `entry__body` + `plates`). Under 760px wide, everything stacks automatically.
- **External link** — `<a class="ext" href="…" target="_blank" rel="noopener">`.
  It picks up the section's pigment colour on its own.

## Running it locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Publishing (GitHub Pages)

1. Name the repository `<username>.github.io`.
2. Push this folder to the `main` branch.
3. Settings → Pages → Source: **Deploy from a branch**, `main`, folder `/ (root)`.
4. The site goes live at `https://<username>.github.io`.
