# DSR Dev · Apps

Public pages for DSR Dev's apps (privacy policies and more), published with GitHub Pages.

| App | Page | URL |
|---|---|---|
| DroidDeck | Privacy Policy | `https://<usuario>.github.io/apps/droid-deck/privacy/` |

Every page is bilingual (Spanish/English). It picks the language from the browser and can be
switched at the top; adding `#es` or `#en` to the URL forces one, which is useful for store listings.

## Structure

```
index.html                  Home page listing every app
assets/style.css            Shared styles (light and dark)
assets/lang.js              Shared language switcher
<app>/privacy/index.html    One folder per app; add terms/, support/… next to privacy/ as needed
```

## Adding an app

1. Copy `droid-deck/privacy/` to `<new-app>/privacy/` and rewrite both language sections.
2. Set the effective date in both sections.
3. Add a card for the app to the root `index.html`.

Keep a page's URL stable once it is linked from a store listing.
