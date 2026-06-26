# Mayur Lakhade — Portfolio

A fast, single-page, fully responsive developer portfolio. **Everything is driven by one file: `data.js`.**

## 📁 Files
```
portfolio/
├── index.html   ← page structure (rarely touch)
├── styles.css   ← all the styling / theme colors
├── script.js    ← renders the page from data.js (rarely touch)
├── data.js      ← 👉 EDIT THIS to change any content
└── assets/
    ├── profile.jpg               ← your photo (replace the file, keep the name)
    └── Mayur_Lakhade_Resume.pdf  ← your resume (replace the file, keep the name)
```

## ✏️ How to update anything
Open **`data.js`** and edit the text. Save, refresh the browser. That's it.
- **Photo:** drop a new image into `assets/` named `profile.jpg` (or change the `photo:` path in data.js).
- **Resume:** replace `assets/Mayur_Lakhade_Resume.pdf` (or change the `resume:` path). The Download button auto-uses it.
- **Add a project / skill / job:** copy an existing block in the matching array in `data.js` and edit it.
- **Theme colors:** change the variables at the top of `styles.css` (`--accent`, `--teal`, etc.).

## ▶️ Run locally
Just open `index.html` in a browser — or for clean local serving:
```bash
cd portfolio
python3 -m http.server 5500
# then visit http://localhost:5500
```

## 🚀 Deploy (free)
- **GitHub Pages:** push this folder to a repo → Settings → Pages → deploy from branch.
- **Netlify / Vercel:** drag-and-drop the `portfolio` folder, or connect the repo. No build step needed.
