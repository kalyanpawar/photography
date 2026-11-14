# Photography Portfolio Website

A simple, free, static portfolio site with a photo slider, filterable gallery,
client reviews, contact details and social links. No build tools needed.

## Project structure

```
photo-site/
├── index.html    The page design (no need to edit)
├── data.js       All text, photos, reviews, contact and social links
├── README.md     This file
├── .nojekyll     Tells GitHub Pages to serve files as they are
└── images/       Put all photos here
    ├── hero1.jpg - hero3.jpg     Big slider photos at the top
    └── photo1.jpg - photo9.jpg   Portfolio photos
```

## Photo sizes

| Where            | Size                                   | Notes                                  |
|------------------|----------------------------------------|----------------------------------------|
| Hero slider      | 1920 x 1080 px (landscape)             | Cropped to fill the screen; keep the subject near the centre |
| Portfolio        | Longest side 1600 px, any shape        | Portrait, landscape and square all work |

- Format: JPG, quality 75-85%
- File size: 300-500 KB each (hero up to about 600 KB)
- Do not upload camera originals; resize first (squoosh.app or XnConvert are free)

## Changing content

Everything is edited in `data.js`:

1. **Replace a photo:** save the new photo in `images/` with the same file name.
2. **Add a photo:** upload it to `images/`, then add a line in `photos`:
   `{ src: "images/bride-01.jpg", cat: "Wedding", alt: "Bride at sunset" },`
3. **Categories:** the `cat` value must match a name in `categories`.
4. **Reviews, contact details, social links:** edit the matching sections.
5. Keep the commas and quotation marks exactly as in the examples.

## Publishing on GitHub Pages (free)

1. Create a free account at github.com and a new **public** repository (for example `photography`).
2. Click **Add file > Upload files** and drag in everything inside the `photo-site` folder
   (`index.html` must be at the top level of the repository). Commit the changes.
3. Go to **Settings > Pages**. Under **Branch** choose `main` and `/ (root)`, then **Save**.
4. After a minute or two the site is live at `https://USERNAME.github.io/REPOSITORY/`.

To update the site later, upload the changed files the same way. The site refreshes in about a minute.

## Optional

- **Custom domain:** buy one (about 800 rupees a year) and add it under Settings > Pages > Custom domain.
- **Contact form:** GitHub Pages cannot send emails by itself. The site uses email, phone and WhatsApp links. For a form, Formspree has a free plan.

## Local preview

Open `index.html` in a browser. No server needed.