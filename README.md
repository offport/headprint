# 💡 HeadPrint

A single-page, static app for catching the ideas and thoughts that run through your
head, deciding what each one is worth in one quick pass, and acting on that:
**bank** the good ones, **park** the maybes, and **bin** the rest. Once a thought has
a home, your mind can stop carrying it.

No account, no sign-in, no server. The page is just HTML, CSS and JavaScript; every
idea you file is saved in your own browser. It installs as an app and works offline.

**Hosted at:** https://offport.github.io/headprint/

## 🗺️ The three places

- **🏦 Bank** — ideas worth keeping, filed under the part of life they serve:
  Mind, Soul and Body at the core, plus Financial and Career in the vault.
- **🅿️ Parking** — not sure yet? Park it. It waits without nagging, and you can pull
  it back into the loop whenever you want. No tag at all sends an idea here
  automatically.
- **🗑️ Trash** — ♻️ *Recyclable*: a negative thought you can rework into something
  useful and send back round. ✕ *Useless*: let it go for good.

Each idea keeps one record for life. Re-filing it appends to its history instead of
creating a duplicate, so the per-day stats never double-count.

## 🧠 Why this helps

HeadPrint borrows a few moves from **Cognitive Behavioral Therapy (CBT)**, one of the
most studied talk-therapy toolkits. It isn't therapy, but these small habits are the
everyday version of what CBT practises.

- ✍️ **Get it out of your head.** An unfinished thought keeps tugging for attention
  (the Zeigarnik effect). Writing it somewhere you trust to revisit lets your mind
  stop rehearsing it.
- 🏷️ **Name it to tame it.** Tagging a thought and filing it puts a step between you
  and it — what CBT calls *externalizing*: a thought becomes a thought, not a fact.
- ♻️ **Reframe instead of ruminate.** The Recyclable bin is a tiny *thought record*.
  Instead of looping on "I never finish anything," you catch it, weigh it and rework
  it into something fairer. CBT's aim isn't happy thoughts, it's accurate ones.
- 🅿️ **Park the maybes.** Deferring an undecided thought is *worry postponement*, a
  common CBT step that eases the pressure to decide right now.
- 🗑️ **Let the useless go.** Not every thought earns your time; binning one is a
  small, deliberate act of letting go.
- 🎯 **See where your head goes.** Sorting by life area shows where your attention
  actually lands, so you can spend it on purpose.

> 💙 This is a self-help tool, not a clinician. If your thoughts feel overwhelming or
> unsafe, please reach out to a mental-health professional or a local crisis line.

## 🔒 Your data & privacy

The page is **static — there is no backend and no account**, and the repository holds
no secrets of any kind.

- **📵 It stays on your device.** Every idea is saved only in this browser's
  `localStorage`. Nothing is uploaded, because there is nowhere to upload it to.
- **🧩 Encoded, not encrypted.** The saved blob is Base64-encoded so it isn't plain
  text at a glance, but that is obfuscation, not security — anyone who can use this
  browser profile can decode and read it. Treat it as private notes on your own
  device, not a locked vault. If you need real encryption, that is a future addition.
- **🌐 The page is public, your data isn't.** The code is served from a public web
  address (GitHub Pages), but it ships empty. What you type never leaves your browser,
  and nothing you enter is ever sent to GitHub or anyone else.
- **🧹 You're in control.** **Export backup** saves your ideas as a JSON file;
  **Import backup** restores them. **Clear all** erases everything, as does clearing
  your browser data. Your data lives per-browser, so use a backup to move it to
  another device or browser.

## 💾 Backup & restore

Your data lives only in this browser. Use the buttons under the idea list:

- **⤓ Export backup** downloads `headprint-backup-YYYY-MM-DD.json` — all your ideas as
  plain JSON.
- **⤒ Import backup** reads such a file back in (it replaces what's currently stored,
  after a confirm).

## 📲 Install & offline

HeadPrint is a Progressive Web App. On a phone, use the browser's **Add to Home
Screen**; on desktop Chrome/Edge, use the install icon in the address bar. A service
worker caches the app shell, so it opens and runs with no connection. Your data was
always local, so nothing about offline use changes where it lives.

## 🛠️ Running it

Open `index.html` directly, or serve the folder statically (a server is needed for the
service worker and install to work):

```bash
python -m http.server 8080
# then visit http://localhost:8080/
```

## ⚙️ Tech

A single `index.html` with no build step, no dependencies and no framework, plus a
`manifest.webmanifest`, a `sw.js` service worker and two PNG icons. State is kept in
`localStorage` as one Base64-encoded JSON blob. Fonts load from Google Fonts (cached
for offline after first load); nothing else is fetched at runtime. Deployed with
GitHub Pages from the `main` branch. To push a fresh app shell to returning visitors,
bump the `CACHE` version in `sw.js`.
