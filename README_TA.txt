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


v24 PRODUCTIVITY-FIRST STANDALONE PWA
- Updated PWA manifest for standalone portrait app display and student/productivity categorization.
- Updated service worker cache to v24 with network-first navigation and offline cached fallback; old app cache versions are retired.
- Added Today's Focus frog task (optional) and Exam / Off-week mode. These are stored separately under a1000PwaProductivity_v24.
- Added full Local Storage JSON export and merge-style restore with confirmation. Existing app save keys are retained; import replaces matching keys only after user confirmation.
- Added PWA installation and offline readiness controls in Settings.
- No account, cloud sync, push server, or automatic device-health tracking is included. User data stays in this browser unless the user exports it.


v25 PRODUCTIVITY CENTER UPDATE
- Added a mobile-first Student Command Center at the top of Productivity Center.
- Added task capture with category, priority, estimated duration and optional due date.
- Added task completion, deletion, filters, open-task count, today's completions, weekly completions and estimated open workload.
- Added a realistic three-priority planner that respects the user's available focused minutes and keeps a 20% buffer.
- New task data is stored separately under a1000ProductivityCenter_v25. Existing game and Life OS storage keys are not renamed or cleared.
- Service worker cache updated to v25 for the new release.
- Task data is local to this browser/device. Export a backup before changing devices.


v26 ADVANCED HABIT TRACKER
- Added a separate advanced habit tracker with custom habits, cue, minimum version, category, difficulty and selectable weekly schedule.
- Added daily completion and minimum-version check-ins, scheduled-day streaks, pause/resume, notes, and a 28-day consistency heatmap.
- Added a 7-day self-reported consistency insight. Missed days do not erase prior history or existing game rewards.
- New habit data is isolated under a1000AdvancedHabits_v26. Existing game, Productivity Center, Life OS and legacy habit storage keys are preserved.
- Service worker cache updated to v26. Offline availability requires opening the app once online after deployment.


v27 MY LIFE OS 2.0
- Added six-dimension life balance check-ins (Physical, Intellectual, Career, Financial, Social, Purpose).
- Added manual personal finance ledger for income, expenses and savings deposits; no bank connection.
- Added personal life milestone timeline.
- Added monthly direction and boundary planner.
- Added weekly life review with energy, drains, learning and one next step.
- New data is isolated under a1000LifeOS_v27. Existing legacy Life OS, game, Productivity Center and Advanced Habit Tracker keys are preserved.
- Service worker cache updated to v27. Open once online after deployment for offline caching.


v28 CAMPUS ARCADE 2.0
- Rebuilt the Campus Arcade as five playable mini-experiences: Brain Arena, Circuit Lab, Campus Life Simulator, Word Builder and Project Builder.
- Local personal arcade points, completed sessions, correct-answer count, best game scores, badges and recent activity.
- Short self-paced rounds; no countdown pressure, gambling, loot boxes, energy gates, or real-life productivity penalties.
- New arcade progress uses a1000CampusArcade_v28. Existing game/story/progress and My Life OS data keys are untouched.
- Service worker cache updated to a-college-1000-days-v28. Open once online after deployment for offline caching.


v29 12-WEEK CAMPAIGN UPGRADE
- Expanded the existing 12-Week Campaign without replacing its original campaign data.
- Added campaign baseline, measurable target, available weekly hours and personal reason.
- Added a three-phase 12-week roadmap: Foundation (1-4), Build (5-8), Prove (9-12).
- Added a weekly Big 3 action planner, priority and completion evidence; limits new weekly actions to three.
- Added weekly reflection: wins, blockers, next adjustment and confidence.
- Added campaign health snapshot and completed-action evidence log.
- New fields are nested in the existing V16 campaign object; existing goal, outcome, start date and actions remain intact.
- Service worker cache updated to a-college-1000-days-v29. Open once online after deployment for offline caching.


v30 FRESH START EDITION
- One-time first-open reset clears only known A COLLEGE OF 1000 DAYS app progress keys (game, story, old Life OS, campaign, habits, productivity, arcade, PWA check-in data).
- Fresh start marker a1000FreshStart_v30_completed prevents clearing again on later visits/refreshes.
- New main game state initializes from today with Day 1, Level 1, zero XP/coins, empty habits/choices/story progress.
- Day 1 story rewritten: Ash enters the college gate, finds the EIE block, attends the first class, meets the gang, shares lunch, and makes a plan to meet again.
- Preserves the 12 major story arcs and adds arc-aware daily episode generation through Day 1000 beyond the 365 authored day cards. Generated continuation is not 1,000 individually hand-written episodes.
- Service worker cache updated to a-college-1000-days-v30. Open once online after deployment for offline caching.
- Fresh reset is intentionally irreversible for local app saves unless a user has an exported backup. It does not clear unrelated browser data or ChatGPT Memory.
