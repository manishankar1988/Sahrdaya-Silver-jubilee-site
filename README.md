# Sahrdaya Silver Jubilee — Website

The public website for the Silver Jubilee of **Sahrdaya College of Engineering &
Technology**, Kodakara — *September 2026 to August 2027*.

This is a **standalone, self-contained website**. It has no connection to the kiosk
application or the display app — nothing from those projects is used here, and nothing here
is needed by them. This repository can be published on its own.

---

## What's inside

| Path | Purpose |
| --- | --- |
| `index.html` | The main one-page site — hero, countdown, story, inauguration, programmes, the year ahead, flyers, contact |
| `flyers.html` | The full flyer / poster archive with a full-screen viewer |
| `assets/js/data.js` | **All site content lives here** — this is the only file most edits touch |
| `assets/css/styles.css` | The design system (colours, type, components, responsive rules) |
| `assets/js/main.js` | Behaviour — countdown, filters, scroll reveals, poster viewer |
| `assets/img/` | Logo and campus photography |
| `assets/flyers/` | Poster and flyer images |

No build step. No `npm install`. No framework. Plain HTML, CSS and JavaScript, so it will
still run untouched in five years.

---

## Running it locally

Double-click `index.html` — that is genuinely all it takes.

For a proper local server (recommended, and identical to how it behaves when hosted):

```bash
# Python 3
python -m http.server 5173

# or Node
npx serve .
```

Then open <http://localhost:5173>.

---

## Adding a flyer or poster

Two steps, about thirty seconds:

1. **Save the image** into `assets/flyers/` — JPG, PNG or WEBP. A portrait poster around
   1200 × 1800 px looks best. Keep the file under ~800 KB so the page stays fast.

2. **Add an entry** to the `flyers` list at the bottom of `assets/js/data.js`:

   ```js
   {
     src: "assets/flyers/tech-fest-2027.jpg",
     title: "Silver Spectrum TechFest 2027",
     date: "March 2027",
     tag: "Event",          // Announcement · Event · Poster — anything you like
     featured: false,       // true = also shown on the home page
   },
   ```

Save, refresh the browser, commit, push. The poster appears on `flyers.html` immediately,
and on the home page too if `featured: true`.

> Newest flyers go at the **top** of the list — the page renders them in the order written.
> If an image file is missing, the card shows a friendly placeholder naming the expected
> path instead of a broken image.

## Editing any other content

Everything else — the countdown date, contact details, programmes, timeline entries,
inauguration highlights, statistics — is in `assets/js/data.js` as well. Edit the text,
save, refresh. Nothing needs to be rebuilt or recompiled.

---

## Publishing

### GitHub Pages (free, recommended)

```bash
git init
git add .
git commit -m "Sahrdaya Silver Jubilee website"
git branch -M main
git remote add origin https://github.com/<your-account>/<repo>.git
git push -u origin main
```

Then in the repository: **Settings → Pages → Source → GitHub Actions**. The workflow in
`.github/workflows/deploy.yml` publishes the site on every push to `main`.

The site will be live at `https://<your-account>.github.io/<repo>/`.

### Anywhere else

Netlify, Vercel, cPanel, or the college's own server: upload the folder as-is. There is no
build command and no output directory — the repository root *is* the site.

---

## Design notes

The palette, typography and emblem are taken from the official Silver Jubilee poster —
deep navy, a jewelled violet-to-magenta gradient, and a brushed-silver highlight for the
"25". Type is Cormorant Garamond for display and Inter for everything else.

The site is responsive down to small phones, respects `prefers-reduced-motion`, is
keyboard-navigable throughout, and prints cleanly.

---

© Sahrdaya College of Engineering & Technology, Kodakara, Thrissur, Kerala.
