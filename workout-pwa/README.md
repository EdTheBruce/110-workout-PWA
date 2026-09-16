# 1-10 Method & Everyday Mobility PWA

A mobile-first Progressive Web App built around Kace Hollingsworth's **The 1-10 Method** and **Everyday Mobility** routines.

## Features
1. **Automated 8-Pattern Rolling Queue:**
   - Always shows your current step (1 through 8).
   - Pauses on rest days without penalty or missed days.
   - Automatically pairs each workout with its matched mobility routine (*Full-Body* or *Lower-Body*).
2. **Instant "Last Time You Did This" Lookup:**
   - Automatically pulls what you did the last time you trained this exact movement (reps/min, minutes, variation level, and notes).
3. **Frictionless 5-Second Logging:**
   - Touch-friendly stepper buttons for Reps (1–10) and Minutes (10–60).
   - One tap on **"Log Workout & Advance Step"** records the session and queues the next pattern.
4. **Built-in EMOM Timer with Audio:**
   - High-contrast countdown circle.
   - Audio countdown beeps at :57, :58, :59, and double high beep at :00 of each minute (synthesized using Web Audio API—no audio files needed).
   - Screen wake lock so your phone display doesn't sleep mid-EMOM.
5. **Full Mobility Guide:**
   - Interactive breakdown of all 18 full-body movements and 14 lower-body movements from *Everyday Mobility*, plus the 8-movement quick warm-up.
6. **Workout History & CSV Export:**
   - Visual timeline of past sessions, total volume stats, and a 1-tap **Export CSV** button.
7. **100% Offline Capability:**
   - Progressive Web App with Service Worker and local browser storage.

---

## How to Test Locally on Your Mac
Open Terminal in this directory (`/Users/ethancoker/.gemini/users/user2/workout-pwa`) and start a quick local server:
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

---

## How to Install on Your iPhone (Add to Home Screen)

To get the full native-app feel on your iPhone:
1. **Deploy to a free static host:**
   - **GitHub Pages:** Create a repository with these files and enable GitHub Pages in Settings.
   - **Vercel / Cloudflare Pages / Netlify:** Drag and drop this `workout-pwa` folder onto [vercel.com](https://vercel.com) or [pages.cloudflare.com](https://pages.cloudflare.com).
2. **Open the HTTPS link in Safari on your iPhone.**
3. **Tap the Share button** (the box with an upward arrow at the bottom of Safari).
4. **Scroll down and tap "Add to Home Screen".**
5. Tap **Add**.

Now you have an icon on your phone's home screen that opens directly to today's workout in full screen with zero loading delay and offline capability!
