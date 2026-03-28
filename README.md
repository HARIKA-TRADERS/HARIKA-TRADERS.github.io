# Harika Traders Website

This is a free static business website for **Harika Traders**, designed for GitHub Pages hosting.

## Files

- `index.html` - main website page
- `styles.css` - full responsive styling
- `script.js` - WhatsApp enquiry form behavior
- `assets/` - product artwork
- `.nojekyll` - keeps GitHub Pages simple for static hosting

## Run locally

Open `index.html` in a browser.

## Free hosting with GitHub Pages

1. Create a GitHub repository, for example `harika-traders`.
2. Upload all files from this folder to that repository.
3. Push the repository to GitHub.
4. In GitHub, open `Settings` -> `Pages`.
5. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
6. Save the settings.
7. GitHub will publish the site at a free address like:
   - `https://your-github-username.github.io/harika-traders/`

## Custom domain

GitHub Pages hosting is free, but the **custom domain itself is usually paid** unless you already own one.

Suggested domains:

- `harikatraders.in`
- `harikacement.in`
- `harikatraderskatpadi.in`

After buying a domain:

1. Add your domain in `GitHub -> Settings -> Pages -> Custom domain`.
2. Create a file named `CNAME` in the repo root with your domain, for example:

```txt
www.harikatraders.in
```

3. In your domain provider DNS settings:
   - Add a `CNAME` record for `www` pointing to `your-github-username.github.io`
   - If using the root domain, add GitHub Pages `A` records:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
4. Enable HTTPS in GitHub Pages once DNS is active.

## Contact details used in the site

- Business name: Harika Traders
- Phone: 9842941800
- City: Katpadi

## Notes

- The enquiry form opens WhatsApp with a ready-made message, so you do not need paid hosting or backend services.
- Prices shown are sample starting prices and can be edited any time in `index.html`.
