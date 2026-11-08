# Kubernetes on Incus — a crash course

Static site, no build step. Open `index.html` locally or serve the repo root on GitHub Pages
(Settings → Pages → deploy from branch, `/ (root)`). All links are relative, so a project sub-path works.

## Adding a lesson (patch workflow)
1. Create `lessons/NNNN-slug.html` (copy an existing lesson; it links `../assets/style.css`).
2. Append one line to `assets/lessons.js`.
3. `git format-patch -1` to produce the patch; apply with `git am 000*.patch`.

Components: `assets/style.css` (look), `assets/course.js` (lesson list, pager, `.quiz`, `.check`).
