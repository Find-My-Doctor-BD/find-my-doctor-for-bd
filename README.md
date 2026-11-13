# Find My Doctor For BD — Cross-Platform App

বাংলাদেশের ডাক্তার অনুসন্ধান প্ল্যাটফর্ম — now available as an installable app for **Android, iOS, Web, and Windows**.

## Tech Stack

- React 19 + Vite 8 + TypeScript
- Tailwind CSS v4
- React Router (HashRouter for cross-platform routing)
- Lucide Icons
- PWA (installable on Android/iOS/Web/Windows)
- Electron (Windows desktop app + installer)
- Capacitor (native Android wrapper)

## Prerequisites

- Node.js 18+ and npm
- For Android builds: Android Studio + Android SDK
- For iOS builds: macOS + Xcode (not possible on Windows)
- For Windows desktop builds: already supported on Windows

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Web (PWA)

```bash
npm run build
npm run preview
```

The build produces a PWA in `dist/` with a service worker and manifest, installable on Android, iOS, Windows and any modern browser via "Add to Home Screen" / "Install app".

## Build for Windows (Electron)

Development (live reload):

```bash
npm run electron:dev
```

Production installer (.exe):

```bash
npm run electron:build
```

Output: `release/Find My Doctor For BD Setup 0.0.0.exe` (NSIS installer) and `release/win-unpacked/`.

Run the unpacked app without installing:

```bash
npm run electron:preview
```

## Build for Android (Capacitor)

Requires Android Studio + SDK.

```bash
npm run cap:android
```

This builds the web assets, syncs them into the Android project, and opens it in Android Studio. Then build the APK/AAB from Android Studio.

Or build from CLI (with SDK on PATH):

```bash
npm run cap:run:android
```

## Build for iOS (Capacitor)

Requires macOS + Xcode. On Windows, generate the iOS project on a Mac:

```bash
npm install @capacitor/ios
npx cap add ios
npm run build
npx cap sync ios
npx cap open ios
```

## Project Structure

```
├── src/                 # React app source
├── public/              # Static assets + PWA icons
├── electron/            # Electron main/preload (Windows)
├── android/             # Capacitor Android project
├── build/               # electron-builder icons
├── dist/                # Web/PWA build output
├── release/             # Windows installer output
├── capacitor.config.ts  # Capacitor config
└── vite.config.ts       # Vite + PWA config
```

## Notes

- Routing uses HashRouter so the same build works on `file://`, GitHub Pages subpaths, and Capacitor.
- Doctor data lives in `src/data/doctors.ts` (unverified seed data).
- This is an informational platform, not medical advice.
