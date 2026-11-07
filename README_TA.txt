A COLLEGE OF 1000 DAYS — v21

This update renames the ALMOST MONDAY project and adds the 1000-Day Growth Desk.

WHAT'S NEW
- New product name: A COLLEGE OF 1000 DAYS.
- Ash is the protagonist in the new product vision.
- Four 250-day season plan: Lab Mix-Up, Fest Committee, Hackathon Arc, Last Semester.
- Updated Project Abstract with the full 1000-day product vision, notebook mystery, daily loop, RPG attributes, relationships, real-life quests, guardrails, and privacy notes.
- Skill Tree: Embedded C, Sensors, PCB Basics, Python, Tamil Technical Writing. A user records evidence before unlocking each node.
- Project Tracker: project, next action, due date, completion.
- Career Tracker: one weekly career goal and action.
- Weekly Honest Report: self-reported habit check-ins, sleep average, project progress, and one next-step suggestion.
- PWA manifest and service-worker cache updated.

PRESERVED
- Existing game, authored episodes, habits, relationships, XP, coins, collectibles, productivity center, My Life OS, Pomodoro, character phone, campus events, arcade, habit lab, Mission Control, 12-week campaign, and knowledge vault.
- Existing localStorage keys and saved progress are not cleared or renamed. The new Growth Desk uses a separate key: aCollege1000Growth_v21.

IMPORTANT CONTENT STATUS
- The four 250-day seasons define the 1000-day journey. The current app retains its existing 365-day authored story foundation. Days 366–1000 are a planned content expansion; this ZIP does not falsely claim that 1000 individually authored episodes already exist.
- The notebook mystery is part of the new product narrative specification. Existing episodes have not all been rewritten into that mystery arc.
- Weekly report inputs and sleep values are user-entered; the app does not monitor phone use or sleep automatically.
- Growth Desk entries are stored locally on this device/browser. Cloud sync and automatic backup are not included.
- Notifications while the app is fully closed still require a configured push service/backend. GitHub Pages alone cannot provide reliable scheduled push delivery.

UPDATE ON ANDROID / GITHUB PAGES
1. Download and extract this ZIP on your phone.
2. Open your GitHub repository in Chrome.
3. Upload the extracted files into the repository root (not the ZIP itself), replacing files with the same names.
4. Commit the changes.
5. Reopen the live site and refresh. The service-worker cache version has been changed.

Do NOT clear Chrome site data or Local Storage. Existing progress is intended to remain. As a safety precaution, export/backup your current data if your app already provides that option before replacing files.


v23 CORRECTIONS
- Fixed day 366+ episode rendering with a safe 1,000-day fallback chapter generator.
- Standardized daily episode to 5 scenes, two choices, and a closing reflection question.
- Reworked scene navigation and choice saving for the new episode structure.
- Updated service worker cache to v23, added wallpaper to precache, and fixed offline fallback behavior for non-navigation assets.
- Existing localStorage save keys are retained.
