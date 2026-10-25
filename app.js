/* ========================================================
   THE DAILY PLAN — SCRIPT (app.js)
   Anonymous, Privacy-First Personal Operating System
   ======================================================== */

// --- Complete 7-Day Timetable Data (Anonymized for Public Hosting) ---
const scheduleData = {
  sunday: {
    title: "Sunday",
    focus: "People and preparation",
    subtitle: "Daily routine with 11:00 PM bedtime and 5:30 AM wake. Outdoor morning walk, food prep, family connection & weekly planning.",
    workHours: "~0.5 Hours (Emergency triage only)",
    blocks: [
      { start: "05:30", end: "05:45", title: "Wake water and Fajr", category: "faith", priority: "protected", desc: "Wake 5:30 AM. Drink ~250 ml water, use bathroom, wudu, pray Fajr before sunrise. Check local prayer schedule. Phone limited strictly to alarm and prayer.", meta: ["250 ml water", "Wudu", "Local Fajr"] },
      { start: "05:45", end: "05:55", title: "Quran and a quiet start", category: "faith", priority: "protected", desc: "10 minutes for Quran recitation, the meaning of a few verses, and dua. Note one thing you are grateful for. Strictly NO social feeds.", meta: ["Quran", "Gratitude note", "No feeds"] },
      { start: "05:55", end: "06:00", title: "Prepare to move", category: "health", priority: "movable", desc: "Drink ~150 ml water. Put on shoes. Apply sunscreen if going outside in daylight.", meta: ["150 ml water", "Shoes ready"] },
      { start: "06:00", end: "06:35", title: "Comfortable outdoor walk", category: "health", priority: "movable", desc: "Walk 15–20 minutes (build gradually toward 25–30 min as base grows). Safe familiar route, comfortable talking pace, supportive shoes. 3–5 min gentle mobility afterward.", meta: ["15-20m walk (build to 30m)", "Talking pace", "Mobility 5m"] },
      { start: "06:35", end: "07:00", title: "Shower skin and scalp", category: "care", priority: "protected", desc: "Shower after movement; rinse sweat. Gentle face cleanser, light moisturizer, broad-spectrum SPF 50 sunscreen (~2 finger lengths). Drink 250 ml water. Dry scalp 100%.", meta: ["Cleanser", "Moisturizer", "SPF 50", "250 ml water"] },
      { start: "07:00", end: "07:05", title: "Morning hair treatment (if confirmed)", category: "care", priority: "protected", desc: "Prescribed hair treatment on dry scalp in target areas. Wash hands immediately. NO dermaroller, NO homemade rosemary water.", meta: ["Prescribed treatment", "Dry scalp only", "No dermaroller"] },
      { start: "07:05", end: "07:35", title: "Breakfast with family", category: "food", priority: "protected", desc: "Two small dosas, 2 eggs, sambar, and 1 small fruit. Sit with family rather than eating at desk. Aim for 25–30 g protein.", meta: ["2 dosas + sambar", "2 eggs", "Fruit", "25-30g protein", "Family table"] },
      { start: "07:35", end: "08:00", title: "Natural hair styling & buffer", category: "care", priority: "movable", desc: "Once scalp treatment is dry, walnut-sized flexible-hold mousse on barely damp lengths (avoid scalp). Wide-tooth comb once, air dry untouched, scrunch crunch.", meta: ["Flexible mousse", "Air dry", "No hot heat"] },
      { start: "08:00", end: "08:30", title: "Essential startup triage only", category: "startup", priority: "movable", desc: "Read ONLY agreed emergency channel, confirm if anything needs urgent action, follow up on 1 genuine revenue-critical decision if necessary. If quiet, close work. Sunday is NOT a hidden full workday.", meta: ["Emergency channel only", "No hidden work", "Close work"] },
      { start: "08:30", end: "09:00", title: "Week setup & breakfast cleanup", category: "people", priority: "movable", desc: "Help at home, refill water bottle, check today's prayer and German timing. Spend AT MOST 10 minutes arranging Monday's first work task. Drink 250 ml water.", meta: ["Help at home", "10m Monday prep", "250 ml water"] },
      { start: "09:00", end: "11:00", title: "Family, friends and free time", category: "people", priority: "protected", desc: "Visit or call friends, walk with someone, spend unhurried time with family, or relax. Plans should let you return for prayer, lunch, and German.", meta: ["Family connection", "Friends / Call", "Relaxed presence"] },
      { start: "11:00", end: "12:00", title: "Food preparation & home help", category: "food", priority: "protected", desc: "Help prepare protein options, wash vegetables, arrange fruit, and make Monday's breakfast easier. Drink 200 ml water. No complicated expensive meal-prep needed.", meta: ["Prep protein/veg", "Prep Mon breakfast", "200 ml water"] },
      { start: "12:10", end: "12:35", title: "Reserve: Dhuhr prayer", category: "faith", priority: "protected", desc: "Pause before local Dhuhr, perform wudu, pray after it begins. Work messages wait.", meta: ["Dhuhr prayer", "Wudu"] },
      { start: "12:35", end: "13:15", title: "Lunch family & connection", category: "food", priority: "protected", desc: "150 g cooked rice, 120 g cooked fish or chicken, vegetables, curd. Prepare extra protein portion for Monday if practical. Partner / personal check-in note after lunch. Gentle 5–10m walk.", meta: ["150g rice", "120g protein", "Curd", "Prep Mon portion", "Personal check-in"] },
      { start: "13:15", end: "14:30", title: "AI Engineering & cloud project (75 mins)", category: "career", priority: "movable", desc: "Build or improve 1 small portfolio demonstration in sandbox or local environment: 45 min implementing (AI API/agent/cloud code), 15 min testing, 15 min documenting architecture, permissions, and cost. Clean up resources.", meta: ["45m Build", "15m Test", "15m Architecture doc", "Sandbox cleanup"] },
      { start: "14:30", end: "15:15", title: "Weekly preparation & real buffer", category: "startup", priority: "movable", desc: "Spend AT MOST 20 minutes setting next week's 3 meaningful outcomes, checking family plans, and choosing 1 communication practice. Rest or optional 20–25m game. End screens before Asr prep.", meta: ["20m Set 3 outcomes", "Family calendar", "Optional 20m game"] },
      { start: "15:15", end: "15:50", title: "Reserve: Asr snack and water", category: "faith", priority: "protected", desc: "Pray Asr (Shafi). 250 ml water. Plain curd with fruit, or milk with 25g roasted chana (10–20g protein). Caffeine-free tea after 1:00 PM.", meta: ["Asr prayer", "Curd/fruit/chana", "No caffeine"] },
      { start: "15:50", end: "16:00", title: "Prepare German", category: "learning", priority: "protected", desc: "Open materials, check audio/mic, DND on, recall yesterday's words. Keep water nearby.", meta: ["Prep German", "DND on"] },
      { start: "16:00", end: "17:30", title: "German class (Protected daily)", category: "learning", priority: "protected", desc: "90 min class. Sunday emphasis: review and a short check of what you can say without notes. Speak aloud, note examples. Sip 250 ml water.", meta: ["Review & speaking", "Speak aloud", "Sip 250 ml"] },
      { start: "17:30", end: "17:50", title: "German recall & shutdown", category: "startup", priority: "protected", desc: "10 min word recall. 5 min note tomorrow's first step. Emergency channel check. DO NOT reopen routine work on this lighter day.", meta: ["Recall words", "NO reopening work"] },
      { start: "17:50", end: "17:55", title: "Evening hair treatment (if confirmed)", category: "care", priority: "protected", desc: "Treatment on dry scalp. Wash hands. Leaves >5h before pillow.", meta: ["Evening application", "Dry scalp"] },
      { start: "17:55", end: "18:00", title: "Free time & walk (Leisure window)", category: "people", priority: "skippable", desc: "5–10m light walk. ONE intentional 10-minute leisure browsing window allowed, then close it.", meta: ["Light walk", "10m Leisure"] },
      { start: "18:00", end: "18:30", title: "Reserve: Maghrib prayer", category: "faith", priority: "protected", desc: "Wudu and pray Maghrib at sunset.", meta: ["Maghrib"] },
      { start: "18:30", end: "19:05", title: "Dinner and family", category: "food", priority: "protected", desc: "2 medium chapatis or measured rice, palm-sized protein serving, vegetables. Keep meal regular rather than treating Sunday as a cheat day. 200 ml water. Unhurried conversation.", meta: ["Rice/Chapatis", "Protein", "No cheat binge", "Family time"] },
      { start: "19:05", end: "19:35", title: "Reserve: Isha prayer", category: "faith", priority: "protected", desc: "Pray Isha at congregation or home.", meta: ["Isha prayer"] },
      { start: "19:35", end: "19:45", title: "Personal buffer", category: "people", priority: "movable", desc: "Sit quietly or finish small task before personal call. Feeds closed.", meta: ["10m Buffer"] },
      { start: "19:45", end: "20:30", title: "Relaxed time with partner / personal connection", category: "people", priority: "protected", desc: "Dedicated unhurried call without multitasking. Affection, thoughts, and laughter. Respect sleep.", meta: ["Dedicated call", "Focused attention", "No multitasking"] },
      { start: "20:30", end: "22:15", title: "Personal time & evening buffer", category: "people", priority: "movable", desc: "Relax with family/partner. Finish screens by 10:15 PM.", meta: ["Screens off 22:15"] },
      { start: "22:15", end: "23:00", title: "Screens off, reading & wind down", category: "sleep", priority: "protected", desc: "Park phone outside room. Read Deep Work (15–20m), cleanse, moisturize, brush teeth, complete 2-min log, make dua. Lights out 11:00 PM.", meta: ["Deep Work", "Skincare", "Daily log", "Lights out 23:00"] },
      { start: "23:00", end: "05:30", title: "Sleep (6h 30m in bed)", category: "sleep", priority: "protected", desc: "Dark quiet room. Consistent wake anchor.", meta: ["Sleep 11 PM - 5:30 AM"] }
    ]
  },

  monday: {
    title: "Monday",
    focus: "Delivery and revenue",
    subtitle: "Daily routine with 11:00 PM bedtime and 5:30 AM wake. Home strength session 1, startup deep work & direct sales.",
    workHours: "~5.5 Business Hours",
    blocks: [
      { start: "05:30", end: "05:45", title: "Wake water and Fajr", category: "faith", priority: "protected", desc: "Wake at 5:30 AM. Drink ~250 ml water, use bathroom, wudu, pray Fajr before sunrise. Phone limited strictly to alarm and prayer.", meta: ["250 ml water", "Wudu", "Local Fajr"] },
      { start: "05:45", end: "05:55", title: "Quran and a quiet start", category: "faith", priority: "protected", desc: "10 min Quran recitation, meaning, dua. Note one thing you are grateful for. Strictly NO social feeds.", meta: ["Quran", "Gratitude", "No feeds"] },
      { start: "05:55", end: "06:00", title: "Prepare to move", category: "health", priority: "movable", desc: "Drink ~150 ml water. Shoes on. Apply sunscreen if outdoor daylight.", meta: ["150 ml water", "Shoes ready"] },
      { start: "06:00", end: "06:30", title: "Home strength and a short walk", category: "health", priority: "movable", desc: "Warm up 5 min. 2 sets: chair squats 8–12; wall or counter push-ups 6–10; glute bridges 10–15; bird-dogs 6 each side; prone W raises 8–12; plank 15–25s. Rest 60–90s. Finish with 5–10m easy walk and calf/hip stretches.", meta: ["Warmup 5m", "Squats 8-12", "Counter Push-ups 6-10", "Glute Bridges 10-15", "Bird-dogs 6/s", "Prone W 8-12", "Plank 15-25s", "Stretches"] },
      { start: "06:35", end: "07:00", title: "Shower skin and scalp (Wash Day 1)", category: "care", priority: "protected", desc: "Gentle shampoo (wash day 1 of 2-3x weekly). Conditioner on lengths. Drink 250 ml water. Gentle cleanser, light moisturizer, SPF 50 sunscreen. Dry scalp 100%.", meta: ["Wash day", "Cleanser", "Moisturizer", "SPF 50 (2 fingers)", "250 ml water"] },
      { start: "07:00", end: "07:05", title: "Morning hair treatment (if confirmed)", category: "care", priority: "protected", desc: "Prescribed treatment on dry scalp. Wash hands. NO dermaroller, NO rosemary water.", meta: ["Prescribed treatment", "Dry scalp only", "No dermaroller"] },
      { start: "07:05", end: "07:35", title: "Breakfast with family", category: "food", priority: "protected", desc: "40 g oats in 200 ml milk, 2 whole eggs, 1 small fruit. Tea (count milk/sugar). Real meal away from computer. 25–30 g protein.", meta: ["40g oats + 200ml milk", "2 eggs", "Fruit", "25-30g protein", "Family table"] },
      { start: "07:35", end: "08:00", title: "Natural hair styling and buffer", category: "care", priority: "movable", desc: "Walnut-sized flexible-hold mousse on barely damp lengths (avoid scalp). Wide-tooth comb once, air dry untouched, scrunch crunch.", meta: ["Flexible mousse", "Air dry", "No hot heat"] },
      { start: "08:00", end: "09:30", title: "Startup deep work (Block 1)", category: "startup", priority: "movable", desc: "State deliverable and done condition. Highest-value client delivery or product outcome. Phone away, tabs closed. AI waiting list ready.", meta: ["1 Deliverable defined", "Done condition", "Phone away"] },
      { start: "09:30", end: "09:45", title: "Water movement and eyes", category: "health", priority: "protected", desc: "Drink 250 ml, stand/walk 3–5 min, look away from screen (20-20-20 rule). No social feeds.", meta: ["250 ml water", "Walk 3-5m", "Eye rest"] },
      { start: "09:45", end: "11:15", title: "Startup second focused block", category: "startup", priority: "movable", desc: "Continue deliverable. Test code, check assumptions. End with visible result or precise blocker.", meta: ["Test output", "Verify assumptions", "Visible outcome"] },
      { start: "11:15", end: "12:10", title: "Sales team communication & admin", category: "startup", priority: "movable", desc: "30m qualified leads / discovery invitations / proposals. 15m team blockers. 10m ops/invoices. 200 ml water.", meta: ["Sales 30m", "Blockers 15m", "Ops 10m"] },
      { start: "12:10", end: "12:35", title: "Reserve: Dhuhr prayer", category: "faith", priority: "protected", desc: "Wudu, pray Dhuhr. Work messages wait.", meta: ["Dhuhr", "Wudu"] },
      { start: "12:35", end: "13:15", title: "Lunch family & connection", category: "food", priority: "protected", desc: "150 g cooked rice, 120 g cooked chicken, 2 vegetable portions, 100 g plain curd. Measure curry oil. Partner check-in voice note after lunch. 5–10m walk.", meta: ["150g rice", "120g chicken", "Curd", "Personal note", "5-10m walk"] },
      { start: "13:15", end: "14:00", title: "Targeted job search (AI & Full-Stack)", category: "career", priority: "movable", desc: "Compare two suitable roles. Apply to 1 strong match with tailored evidence; send 1 thoughtful recruiter/referral message. Log outcome.", meta: ["1 Quality application", "1 Recruiter message", "Log in tracker"] },
      { start: "14:00", end: "15:15", title: "Client delivery and meeting window", category: "startup", priority: "movable", desc: "Up to 45m on 1 client meeting or delivery task. 15m decisions/ownership; 15m buffer or walk. Reapply sunscreen if going outside.", meta: ["45m Meeting", "15m Decisions", "15m Buffer"] },
      { start: "15:15", end: "15:50", title: "Reserve: Asr snack and water", category: "faith", priority: "protected", desc: "Pray Asr (Shafi). 250 ml water. Plain curd with fruit, or milk with 25g roasted chana (10–20g protein). Caffeine-free tea after 1:00 PM.", meta: ["Asr prayer", "Curd/fruit/chana", "No caffeine"] },
      { start: "15:50", end: "16:00", title: "Prepare German class", category: "learning", priority: "protected", desc: "Open materials, check audio/mic, DND on, recall yesterday's words.", meta: ["Prep German", "DND on"] },
      { start: "16:00", end: "17:30", title: "German class (Protected daily)", category: "learning", priority: "protected", desc: "90 min class. Monday emphasis: vocabulary and basic sentence formation. Speak aloud, note examples. Sip 250 ml water.", meta: ["Vocab & sentences", "Speak aloud", "Sip 250 ml"] },
      { start: "17:30", end: "17:50", title: "German recall & daily shutdown", category: "startup", priority: "protected", desc: "Recall 5–10 words, speak 3 sentences for 10 min. 5 min note tomorrow's first step. Emergency channel check. CLOSE WORK.", meta: ["Recall words", "Shutdown work", "Tomorrow step 1"] },
      { start: "17:50", end: "17:55", title: "Evening hair treatment (if confirmed)", category: "care", priority: "protected", desc: "Treatment on dry scalp. Wash hands. Leaves >5h before pillow.", meta: ["Evening application", "Dry scalp"] },
      { start: "17:55", end: "18:00", title: "Free time & walk (Leisure window)", category: "people", priority: "skippable", desc: "5–10m light walk. ONE intentional 10-minute leisure browsing window allowed, then close it.", meta: ["Light walk", "10m Leisure"] },
      { start: "18:00", end: "18:30", title: "Reserve: Maghrib prayer", category: "faith", priority: "protected", desc: "Wudu and pray Maghrib at sunset.", meta: ["Maghrib"] },
      { start: "18:30", end: "19:05", title: "Dinner and family", category: "food", priority: "protected", desc: "2 medium chapatis, 120 g cooked fish and vegetables. 200 ml water. Family conversation, help clear table.", meta: ["2 chapatis", "120g fish", "Veg", "Family time"] },
      { start: "19:05", end: "19:35", title: "Reserve: Isha prayer", category: "faith", priority: "protected", desc: "Pray Isha at congregation or home.", meta: ["Isha prayer"] },
      { start: "19:35", end: "19:45", title: "Personal buffer", category: "people", priority: "movable", desc: "Sit quietly or finish small task before personal call. Feeds closed.", meta: ["10m Buffer"] },
      { start: "19:45", end: "20:30", title: "Relaxed time with partner / personal connection", category: "people", priority: "protected", desc: "Dedicated unhurried call without multitasking. Affection, thoughts, and laughter.", meta: ["Dedicated call", "Focused attention"] },
      { start: "20:30", end: "22:15", title: "Personal time & buffer", category: "people", priority: "movable", desc: "Family time, quiet recreation. Screens off by 10:15 PM.", meta: ["Screens off 22:15"] },
      { start: "22:15", end: "23:00", title: "Screens off, reading & wind down", category: "sleep", priority: "protected", desc: "Read Deep Work (15–20m), cleanse, moisturize, brush teeth, daily log, dua, lights out 11:00 PM.", meta: ["Deep Work", "Skincare", "Daily log", "Lights out 23:00"] },
      { start: "23:00", end: "05:30", title: "Sleep (6h 30m in bed)", category: "sleep", priority: "protected", desc: "Dark quiet room. Consistent wake anchor.", meta: ["Sleep 11 PM - 5:30 AM"] }
    ]
  },

  tuesday: {
    title: "Tuesday",
    focus: "Sales and cloud foundations",
    subtitle: "Daily routine with 11:00 PM bedtime and 5:30 AM wake. Walking & mobility, cloud theory recall & sales discovery.",
    workHours: "~5.5 Business Hours",
    blocks: [
      { start: "05:30", end: "05:45", title: "Wake water and Fajr", category: "faith", priority: "protected", desc: "Wake 5:30 AM. 250 ml water, wudu, pray Fajr before sunrise.", meta: ["250 ml water", "Fajr"] },
      { start: "05:45", end: "05:55", title: "Quran and quiet start", category: "faith", priority: "protected", desc: "10 min Quran recitation and meaning. Dua. Gratitude note. No social feeds.", meta: ["Quran", "Gratitude"] },
      { start: "05:55", end: "06:00", title: "Prepare to move", category: "health", priority: "movable", desc: "150 ml water. Sunscreen if daylight. Shoes on.", meta: ["150 ml water", "Shoes"] },
      { start: "06:00", end: "06:30", title: "Walking and mobility", category: "health", priority: "movable", desc: "10–15 min comfortable walking pace; build toward 20–25 min. Add 5 min ankle movements, hip mobility, shoulder circles.", meta: ["10-15m walk", "Ankle & hip mobility"] },
      { start: "06:35", end: "07:00", title: "Shower skin and scalp", category: "care", priority: "protected", desc: "Rinse sweat. Shampoo only if needed. Gentle cleanser, moisturizer, SPF 50 sunscreen. Dry scalp 100%.", meta: ["Cleanser", "Moisturizer", "SPF 50", "250 ml water"] },
      { start: "07:00", end: "07:05", title: "Morning hair treatment (if confirmed)", category: "care", priority: "protected", desc: "Treatment on dry scalp. Wash hands. No dermaroller, no rosemary water.", meta: ["Treatment", "Dry scalp"] },
      { start: "07:05", end: "07:35", title: "Breakfast with family", category: "food", priority: "protected", desc: "Two small dosas, 2 eggs, sambar; add curd if needed for protein. Modest oil on dosa. 25–30 g protein.", meta: ["2 dosas + sambar", "2 eggs", "Curd", "25-30g protein"] },
      { start: "07:35", end: "08:00", title: "Natural hair styling & buffer", category: "care", priority: "movable", desc: "Mousse on damp lengths, wide-tooth comb once. Air dry untouched. Buffer time.", meta: ["Mousse", "Air dry"] },
      { start: "08:00", end: "09:30", title: "Startup deep work (Block 1)", category: "startup", priority: "movable", desc: "Best qualified lead proposal or revenue-critical client outcome. Phone away, tabs closed, AI waiting list ready.", meta: ["Revenue deliverable", "Phone away"] },
      { start: "09:30", end: "09:45", title: "Water movement and eyes", category: "health", priority: "protected", desc: "Drink 250 ml, 3–5m walk, eye rest. No feeds.", meta: ["250 ml water", "Walk"] },
      { start: "09:45", end: "11:15", title: "Startup second focused block", category: "startup", priority: "movable", desc: "Continue deliverable. Test code, check assumptions. End with tangible result.", meta: ["Deep work", "Test output"] },
      { start: "11:15", end: "12:10", title: "Sales team communication & admin", category: "startup", priority: "movable", desc: "30m qualified leads / discovery invitations / proposals. 15m team blockers. 10m invoices.", meta: ["Sales 30m", "Team 15m", "Ops 10m"] },
      { start: "12:10", end: "12:35", title: "Reserve: Dhuhr prayer", category: "faith", priority: "protected", desc: "Wudu, pray Dhuhr. Work messages wait.", meta: ["Dhuhr", "Wudu"] },
      { start: "12:35", end: "13:15", title: "Lunch family & connection", category: "food", priority: "protected", desc: "150 g cooked rice, 120–150 g cooked fish, vegetables, plain curd. Partner check-in voice note after lunch. 5–10m walk.", meta: ["150g rice", "120-150g fish", "Curd", "Personal note"] },
      { start: "13:15", end: "14:00", title: "Cloud theory and memory recall", category: "learning", priority: "movable", desc: "Cloud architecture foundations: 25 min learning current module, 10 min writing 5 points from memory, 10 min explaining 1 service aloud. Start with regions, AZs, shared responsibility.", meta: ["25m Learn", "10m Memory recall", "10m Verbal explanation"] },
      { start: "14:00", end: "15:15", title: "Sales discovery & business planning", category: "startup", priority: "movable", desc: "Qualified discovery call, proposal review, or clear business decision. Prepare 3 questions first; write next action and owner after. Keep 15m buffer.", meta: ["Discovery call", "3 Questions prep", "Owner assigned"] },
      { start: "15:15", end: "15:50", title: "Reserve: Asr snack and water", category: "faith", priority: "protected", desc: "Pray Asr (Shafi). 250 ml water. Plain curd + fruit, or milk + chana (10–20g protein). Caffeine-free tea after 1:00 PM.", meta: ["Asr prayer", "Curd/fruit/chana", "No caffeine"] },
      { start: "15:50", end: "16:00", title: "Prepare German", category: "learning", priority: "protected", desc: "Open materials, check audio, DND on, recall yesterday's words.", meta: ["Prep German", "DND on"] },
      { start: "16:00", end: "17:30", title: "German class (Protected daily)", category: "learning", priority: "protected", desc: "90 min class. Tuesday emphasis: listening and pronunciation. Speak aloud, note examples. Sip 250 ml water.", meta: ["Listening & pronunciation", "Speak aloud"] },
      { start: "17:30", end: "17:50", title: "German recall & daily shutdown", category: "startup", priority: "protected", desc: "Recall 5–10 words, speak 3 sentences. 5 min note tomorrow's first step. Close work.", meta: ["Recall words", "Shutdown work"] },
      { start: "17:50", end: "17:55", title: "Evening hair treatment (if confirmed)", category: "care", priority: "protected", desc: "Treatment on dry scalp. Wash hands.", meta: ["Treatment", "Dry scalp"] },
      { start: "17:55", end: "18:00", title: "Free time & walk (Leisure window)", category: "people", priority: "skippable", desc: "5–10 min light walk. 10-minute leisure browsing window allowed.", meta: ["Light walk", "10m Leisure"] },
      { start: "18:00", end: "18:30", title: "Reserve: Maghrib prayer", category: "faith", priority: "protected", desc: "Wudu and pray Maghrib at sunset.", meta: ["Maghrib"] },
      { start: "18:30", end: "19:05", title: "Dinner and family", category: "food", priority: "protected", desc: "2 medium chapatis, 120 g cooked chicken, vegetables. 200 ml water. Unhurried family conversation, help clear table.", meta: ["2 chapatis", "120g chicken", "Veg", "Family time"] },
      { start: "19:05", end: "19:35", title: "Reserve: Isha prayer", category: "faith", priority: "protected", desc: "Pray Isha at congregation or home.", meta: ["Isha prayer"] },
      { start: "19:35", end: "19:55", title: "Intentional self training", category: "learning", priority: "movable", desc: "Preselected 10–15 min video on clear client communication. Write 3 useful notes, rehearse 1 behavior, close YouTube. No browsing suggested videos.", meta: ["10-15m Video", "3 Notes", "Rehearse behavior"] },
      { start: "19:55", end: "20:30", title: "Relaxed time with partner / personal connection", category: "people", priority: "protected", desc: "Dedicated conversation without multitasking. Space for thoughts and laughter.", meta: ["Dedicated call", "Focused attention"] },
      { start: "20:30", end: "22:15", title: "Personal time & buffer", category: "people", priority: "movable", desc: "Family time, quiet recreation. Screens off by 10:15 PM.", meta: ["Recreation", "Screens off 22:15"] },
      { start: "22:15", end: "23:00", title: "Screens off, reading & wind down", category: "sleep", priority: "protected", desc: "Read Deep Work (15–20m), cleanse, moisturize, brush teeth, daily log, dua, lights out 11:00 PM.", meta: ["Deep Work", "Skincare", "Daily log", "Lights out 23:00"] },
      { start: "23:00", end: "05:30", title: "Sleep (6h 30m in bed)", category: "sleep", priority: "protected", desc: "Dark quiet room. Consistent wake anchor.", meta: ["Sleep 11 PM - 5:30 AM"] }
    ]
  },

  wednesday: {
    title: "Wednesday",
    focus: "Delivery and interview readiness",
    subtitle: "Daily routine with 11:00 PM bedtime and 5:30 AM wake. Home strength session 2, coding practice & portfolio proof.",
    workHours: "~4.25 Business Hours",
    blocks: [
      { start: "05:30", end: "05:45", title: "Wake water and Fajr", category: "faith", priority: "protected", desc: "Wake 5:30 AM. 250 ml water, wudu, pray Fajr before sunrise.", meta: ["250 ml water", "Fajr"] },
      { start: "05:45", end: "05:55", title: "Quran and quiet start", category: "faith", priority: "protected", desc: "10 min Quran recitation, meaning, dua, gratitude note. No social feeds.", meta: ["Quran", "Gratitude"] },
      { start: "05:55", end: "06:00", title: "Prepare to move", category: "health", priority: "movable", desc: "150 ml water. Shoes on. Sunscreen if outside daylight.", meta: ["150 ml water", "Shoes"] },
      { start: "06:00", end: "06:30", title: "Home strength and posture", category: "health", priority: "movable", desc: "Warm up 5 min. 2 sets: supported split squats 6–8 each side; wall or counter push-ups 6–10; unloaded hip hinges 10–12; dead-bugs 6 each side; prone W raises 8–12; side plank from knees 10–20s each side. Rest 60–90s.", meta: ["Warmup 5m", "Split Squats 6-8/s", "Push-ups 6-10", "Hip Hinges 10-12", "Dead-bugs 6/s", "Prone W 8-12", "Side Plank 10-20s"] },
      { start: "06:35", end: "07:00", title: "Shower skin and scalp", category: "care", priority: "protected", desc: "Rinse sweat. Gentle face cleanser, moisturizer, SPF 50 sunscreen. 250 ml water. Dry scalp 100%.", meta: ["Cleanser", "Moisturizer", "SPF 50", "250 ml water"] },
      { start: "07:00", end: "07:05", title: "Morning hair treatment (if confirmed)", category: "care", priority: "protected", desc: "Treatment on dry scalp. Wash hands. No dermaroller, no rosemary water.", meta: ["Treatment", "Dry scalp"] },
      { start: "07:05", end: "07:35", title: "Breakfast with family", category: "food", priority: "protected", desc: "40 g oats, 200 ml milk, 2 eggs, 1 small fruit. Cook eggs while oats simmer. Away from PC. 25–30 g protein.", meta: ["40g oats + 200ml milk", "2 eggs", "Fruit", "25-30g protein"] },
      { start: "07:35", end: "08:00", title: "Natural hair styling & buffer", category: "care", priority: "movable", desc: "Mousse on damp lengths, wide-tooth comb once. Air dry untouched. Buffer time.", meta: ["Mousse", "Air dry"] },
      { start: "08:00", end: "09:30", title: "Startup deep work (Block 1)", category: "startup", priority: "movable", desc: "State deliverable and done condition. Highest-value client delivery or product outcome. Phone away.", meta: ["Deep work", "Done condition"] },
      { start: "09:30", end: "09:45", title: "Water movement and eyes", category: "health", priority: "protected", desc: "Drink 250 ml, 3–5m walk, eye rest. No feeds.", meta: ["250 ml water", "Walk"] },
      { start: "09:45", end: "11:15", title: "Startup second focused block", category: "startup", priority: "movable", desc: "Continue deliverable. Test code, check assumptions, log completed progress.", meta: ["Focused block", "Test code"] },
      { start: "11:15", end: "12:10", title: "Sales team communication & admin", category: "startup", priority: "movable", desc: "30m sales follow-ups, 15m team blockers/ownership, 10m ops/invoicing.", meta: ["Sales 30m", "Blockers 15m"] },
      { start: "12:10", end: "12:35", title: "Reserve: Dhuhr prayer", category: "faith", priority: "protected", desc: "Wudu, pray Dhuhr. Work messages wait.", meta: ["Dhuhr", "Wudu"] },
      { start: "12:35", end: "13:15", title: "Lunch family & connection", category: "food", priority: "protected", desc: "150 g cooked rice, 120 g cooked chicken or fish, vegetables, 100 g plain curd. Partner check-in note. 5–10m walk.", meta: ["150g rice", "120g protein", "Curd", "Personal note"] },
      { start: "13:15", end: "14:00", title: "Interview practice (AI & Technical)", category: "career", priority: "movable", desc: "Practise 1 technical coding problem for 20 minutes, then explain solution aloud for 5 minutes. Use last 20 minutes to answer a behavioral question with a specific project example or review recent rejection patterns.", meta: ["20m Tech problem", "5m Verbal explanation", "20m Behavioral"] },
      { start: "14:00", end: "15:15", title: "Portfolio and interview evidence", category: "career", priority: "movable", desc: "Improve 1 project case study (AI or full-stack web project). Explain what you built, what changed, how you verified it; never invent metrics. Final 15m for walk/buffer.", meta: ["Case study", "Verification proof", "No false metrics", "15m walk"] },
      { start: "15:15", end: "15:50", title: "Reserve: Asr snack and water", category: "faith", priority: "protected", desc: "Pray Asr (Shafi). 250 ml water. Curd + fruit or milk + chana (10–20g protein). Caffeine-free tea.", meta: ["Asr", "Snack", "No caffeine"] },
      { start: "15:50", end: "16:00", title: "Prepare German", category: "learning", priority: "protected", desc: "Open materials, check audio, DND on, recall yesterday's words.", meta: ["Prep German", "DND"] },
      { start: "16:00", end: "17:30", title: "German class (Protected daily)", category: "learning", priority: "protected", desc: "90 min class. Wednesday emphasis: grammar and building your own sentences. Speak aloud. Sip 250 ml water.", meta: ["Grammar & sentences", "Speak aloud"] },
      { start: "17:30", end: "17:50", title: "German recall & daily shutdown", category: "startup", priority: "protected", desc: "10m word/sentence recall. 5m plan tomorrow's step 1. Emergency channel check. Close work.", meta: ["Recall 10m", "Shutdown work"] },
      { start: "17:50", end: "17:55", title: "Evening hair treatment (if confirmed)", category: "care", priority: "protected", desc: "Treatment on dry scalp. Wash hands.", meta: ["Treatment", "Dry scalp"] },
      { start: "17:55", end: "18:00", title: "Free time & walk (Leisure window)", category: "people", priority: "skippable", desc: "5–10m light walk. 10m leisure window allowed.", meta: ["Light walk", "10m Leisure"] },
      { start: "18:00", end: "18:30", title: "Reserve: Maghrib prayer", category: "faith", priority: "protected", desc: "Wudu and pray Maghrib at sunset.", meta: ["Maghrib"] },
      { start: "18:30", end: "19:05", title: "Dinner and family", category: "food", priority: "protected", desc: "2 medium chapatis (or measured rice), 120 g cooked fish or chicken, vegetables. 200 ml water. Family conversation, help clear up.", meta: ["2 chapatis", "120g protein", "Family time"] },
      { start: "19:05", end: "19:35", title: "Reserve: Isha prayer", category: "faith", priority: "protected", desc: "Pray Isha at congregation or home.", meta: ["Isha prayer"] },
      { start: "19:35", end: "19:45", title: "Personal buffer", category: "people", priority: "movable", desc: "Sit quietly or finish small task before personal call. Feeds closed.", meta: ["10m Buffer"] },
      { start: "19:45", end: "20:30", title: "Relaxed time with partner / personal connection", category: "people", priority: "protected", desc: "Dedicated unhurried call without multitasking. Thoughts and laughter.", meta: ["Dedicated call", "No screens"] },
      { start: "20:30", end: "22:15", title: "Personal time & buffer", category: "people", priority: "movable", desc: "Family time, quiet recreation. Screens off by 10:15 PM.", meta: ["Screens off 22:15"] },
      { start: "22:15", end: "23:00", title: "Screens off, reading & wind down", category: "sleep", priority: "protected", desc: "Read Deep Work (15–20m), cleanse, moisturize, brush teeth, daily log, dua, lights out 11:00 PM.", meta: ["Deep Work", "Skincare", "Daily log", "Lights out 23:00"] },
      { start: "23:00", end: "05:30", title: "Sleep (6h 30m in bed)", category: "sleep", priority: "protected", desc: "Dark quiet room. Consistent wake anchor.", meta: ["Sleep 11 PM - 5:30 AM"] }
    ]
  },

  thursday: {
    title: "Thursday",
    focus: "Delivery and technical practice",
    subtitle: "Daily routine with 11:00 PM bedtime and 5:30 AM wake. Hands-on cloud sandbox lab, puttu breakfast & wash day.",
    workHours: "~5.5 Business Hours",
    blocks: [
      { start: "05:30", end: "05:45", title: "Wake water and Fajr", category: "faith", priority: "protected", desc: "Wake 5:30 AM. 250 ml water, wudu, pray Fajr before sunrise.", meta: ["250 ml water", "Fajr"] },
      { start: "05:45", end: "05:55", title: "Quran and quiet start", category: "faith", priority: "protected", desc: "10 min Quran recitation, meaning, dua, gratitude. No social feeds.", meta: ["Quran", "Gratitude"] },
      { start: "05:55", end: "06:00", title: "Prepare to move", category: "health", priority: "movable", desc: "150 ml water. Shoes on. Sunscreen if daylight.", meta: ["150 ml water", "Shoes"] },
      { start: "06:00", end: "06:30", title: "Walking and mobility", category: "health", priority: "movable", desc: "10–15 min comfortable walking pace; build toward 20–25 min. Add 5 min ankle mobility, hip mobility, shoulder circles.", meta: ["10-15m walk", "Mobility 5m"] },
      { start: "06:35", end: "07:00", title: "Shower skin and scalp (Wash Day 2)", category: "care", priority: "protected", desc: "Gentle shampoo (day 2 of weekly wash). Conditioner on lengths. Cleanser, moisturizer, SPF 50 sunscreen. Dry scalp 100%.", meta: ["Wash day", "Conditioner", "Cleanser + SPF 50", "250 ml water"] },
      { start: "07:00", end: "07:05", title: "Morning hair treatment (if confirmed)", category: "care", priority: "protected", desc: "Treatment on dry scalp. Wash hands. No dermaroller, no rosemary water.", meta: ["Treatment", "Dry scalp"] },
      { start: "07:05", end: "07:35", title: "Breakfast with family", category: "food", priority: "protected", desc: "Small measured portion of puttu, modest portion of kadala curry, and 2 eggs. Real meal away from computer. 25–30 g protein.", meta: ["Small puttu", "Modest kadala curry", "2 eggs", "25-30g protein"] },
      { start: "07:35", end: "08:00", title: "Natural hair styling & buffer", category: "care", priority: "movable", desc: "Mousse on damp lengths, wide-tooth comb once. Air dry untouched. Buffer time.", meta: ["Mousse", "Air dry"] },
      { start: "08:00", end: "09:30", title: "Startup deep work (Block 1)", category: "startup", priority: "movable", desc: "State deliverable and done condition. Highest-value client delivery or product outcome. Phone away.", meta: ["Deep work", "Done condition"] },
      { start: "09:30", end: "09:45", title: "Water movement and eyes", category: "health", priority: "protected", desc: "Drink 250 ml, 3–5m walk, eye rest. No feeds.", meta: ["250 ml water", "Walk"] },
      { start: "09:45", end: "11:15", title: "Startup second focused block", category: "startup", priority: "movable", desc: "Continue deliverable. Test AI output, check assumptions, write down what is complete.", meta: ["Focused block", "Test code"] },
      { start: "11:15", end: "12:10", title: "Sales team communication & admin", category: "startup", priority: "movable", desc: "30m qualified leads / discovery invitations / proposals. 15m team blockers. 10m invoicing/ops.", meta: ["Sales 30m", "Team 15m"] },
      { start: "12:10", end: "12:35", title: "Reserve: Dhuhr prayer", category: "faith", priority: "protected", desc: "Wudu, pray Dhuhr. Work messages wait.", meta: ["Dhuhr", "Wudu"] },
      { start: "12:35", end: "13:15", title: "Lunch family & connection", category: "food", priority: "protected", desc: "150 g cooked rice, 120 g cooked fish (grilled or curry over deep-fried), vegetables, plain curd. Partner check-in note. 5–10m walk.", meta: ["150g rice", "120g fish", "Curd", "Personal note"] },
      { start: "13:15", end: "14:00", title: "Cloud hands-on practice (Sandbox lab)", category: "learning", priority: "movable", desc: "Cloud sandbox lab: 5 min state goal, 30 min completing exercise (IAM, S3, or EC2), 10 min documenting what you did and cleaning up resources.", meta: ["Sandbox Lab", "5m Goal", "30m Lab", "10m Doc & Cleanup"] },
      { start: "14:00", end: "15:15", title: "Client delivery and meeting window", category: "startup", priority: "movable", desc: "Up to 45m on 1 client meeting or focused delivery task. 15m record decisions & owners; 15m buffer or walk. Reapply sunscreen if going outside.", meta: ["45m Meeting", "15m Decisions", "15m Buffer"] },
      { start: "15:15", end: "15:50", title: "Reserve: Asr snack and water", category: "faith", priority: "protected", desc: "Pray Asr (Shafi). 250 ml water. Curd + fruit or milk + chana (10–20g protein). Caffeine-free tea.", meta: ["Asr", "Snack", "No caffeine"] },
      { start: "15:50", end: "16:00", title: "Prepare German", category: "learning", priority: "protected", desc: "Open materials, check audio, DND on, recall yesterday's words.", meta: ["Prep German", "DND"] },
      { start: "16:00", end: "17:30", title: "German class (Protected daily)", category: "learning", priority: "protected", desc: "90 min class. Thursday emphasis: speaking and question practice. Speak aloud, note examples. Sip 250 ml water.", meta: ["Speaking & questions", "Speak aloud"] },
      { start: "17:30", end: "17:50", title: "German recall & daily shutdown", category: "startup", priority: "protected", desc: "10m word/sentence recall. 5m plan tomorrow's step 1. Emergency channel check. Close work.", meta: ["Recall words", "Shutdown work"] },
      { start: "17:50", end: "17:55", title: "Evening hair treatment (if confirmed)", category: "care", priority: "protected", desc: "Treatment on dry scalp. Wash hands.", meta: ["Treatment", "Dry scalp"] },
      { start: "17:55", end: "18:00", title: "Free time & walk (Leisure window)", category: "people", priority: "skippable", desc: "5–10m light walk. 10m leisure window allowed.", meta: ["Light walk", "10m Leisure"] },
      { start: "18:00", end: "18:30", title: "Reserve: Maghrib prayer", category: "faith", priority: "protected", desc: "Wudu and pray Maghrib at sunset.", meta: ["Maghrib"] },
      { start: "18:30", end: "19:05", title: "Dinner and family", category: "food", priority: "protected", desc: "2 medium chapatis with 120 g cooked chicken and vegetables; finish eating before night routine. 200 ml water. Family conversation, help clear table.", meta: ["2 chapatis", "120g chicken", "Veg", "Family time"] },
      { start: "19:05", end: "19:35", title: "Reserve: Isha prayer", category: "faith", priority: "protected", desc: "Pray Isha at congregation or home.", meta: ["Isha prayer"] },
      { start: "19:35", end: "19:55", title: "Intentional self training", category: "learning", priority: "movable", desc: "Preselected 10–15 min video on sales discovery and negotiation. Write 3 useful notes, rehearse 1 behavior, close YouTube. No browsing suggested videos.", meta: ["10-15m Video", "Sales discovery notes", "Rehearse behavior"] },
      { start: "19:55", end: "20:30", title: "Relaxed time with partner / personal connection", category: "people", priority: "protected", desc: "Dedicated unhurried call without multitasking. Thoughts and laughter.", meta: ["Dedicated call", "Focused attention"] },
      { start: "20:30", end: "22:15", title: "Personal time & buffer", category: "people", priority: "movable", desc: "Family time, quiet recreation. Screens off by 10:15 PM.", meta: ["Screens off 22:15"] },
      { start: "22:15", end: "23:00", title: "Screens off, reading & wind down", category: "sleep", priority: "protected", desc: "Read Deep Work (15–20m), cleanse, moisturize, brush teeth, daily log, dua, lights out 11:00 PM.", meta: ["Deep Work", "Skincare", "Daily log", "Lights out 23:00"] },
      { start: "23:00", end: "05:30", title: "Sleep (6h 30m in bed)", category: "sleep", priority: "protected", desc: "Dark quiet room. Consistent wake anchor.", meta: ["Sleep 11 PM - 5:30 AM"] }
    ]
  },

  friday: {
    title: "Friday",
    focus: "Jumuah and recovery",
    subtitle: "Daily routine with 11:00 PM bedtime and 5:30 AM wake. Lighter business load, Jumuah prayer & Friday 40-minute review.",
    workHours: "~1.5 Business Hours",
    blocks: [
      { start: "05:30", end: "05:45", title: "Wake water and Fajr", category: "faith", priority: "protected", desc: "Wake 5:30 AM. 250 ml water, wudu, pray Fajr before sunrise.", meta: ["250 ml water", "Fajr"] },
      { start: "05:45", end: "05:55", title: "Quran and quiet start", category: "faith", priority: "protected", desc: "10 min Quran recitation (Surah Al-Kahf / verses), meaning, dua, gratitude note. No social feeds.", meta: ["Quran", "Gratitude"] },
      { start: "05:55", end: "06:00", title: "Prepare to move", category: "health", priority: "movable", desc: "150 ml water. Shoes on. Sunscreen if daylight.", meta: ["150 ml water", "Shoes"] },
      { start: "06:00", end: "06:20", title: "Easy movement (Recovery day)", category: "health", priority: "movable", desc: "Walk gently for 10–15 min and do 5 min of comfortable mobility. Keep effort easy. NO hard strength workout today.", meta: ["10-15m easy walk", "5m mobility", "No hard workouts"] },
      { start: "06:35", end: "07:00", title: "Shower skin and scalp", category: "care", priority: "protected", desc: "Shower after movement; rinse sweat. Face cleanser, moisturizer, SPF 50 sunscreen. 250 ml water. Dry scalp 100%.", meta: ["Cleanser", "Moisturizer", "SPF 50", "250 ml water"] },
      { start: "07:00", end: "07:05", title: "Morning hair treatment (if confirmed)", category: "care", priority: "protected", desc: "Treatment on dry scalp. Wash hands. No dermaroller, no rosemary water.", meta: ["Treatment", "Dry scalp"] },
      { start: "07:05", end: "07:35", title: "Breakfast with family", category: "food", priority: "protected", desc: "Two small idlis, sambar, 2 eggs, and plain curd if needed. Enjoy tea with breakfast keeping sugar measured. 25–30 g protein.", meta: ["2 idlis + sambar", "2 eggs", "Curd", "25-30g protein"] },
      { start: "07:35", end: "08:00", title: "Natural hair styling & buffer", category: "care", priority: "movable", desc: "Mousse on damp lengths, wide-tooth comb once. Air dry untouched. Buffer time.", meta: ["Mousse", "Air dry"] },
      { start: "08:00", end: "09:00", title: "One essential startup block", category: "startup", priority: "movable", desc: "If needed, complete ONE delivery fix or revenue-critical decision. Stop after agreed outcome; DO NOT open a second large project.", meta: ["1 Essential fix only", "No 2nd project", "Stop after result"] },
      { start: "09:00", end: "09:30", title: "Sales & essential messages", category: "startup", priority: "movable", desc: "Follow up with 1 qualified prospect or pending client decision, inform team of your mosque and recovery availability, clear only essential messages.", meta: ["1 Prospect follow-up", "Team availability", "Clear essentials"] },
      { start: "09:30", end: "11:00", title: "Unhurried family & personal time", category: "people", priority: "protected", desc: "Sit with family, help at home, rest outside. ONE intentional 10-minute leisure window allowed after conversation. Keep morning calm.", meta: ["Family time", "Help at home", "10m Leisure", "Calm morning"] },
      { start: "11:00", end: "11:45", title: "Prepare for Jumuah", category: "faith", priority: "protected", desc: "Friday religious preparation and grooming (ghusl, clean clothes, perfume). Check mosque's khutbah and congregation time. 200 ml water. Small fruit or curd if hungry.", meta: ["Friday prep & grooming", "Clean clothes", "Pre-mosque snack"] },
      { start: "11:45", end: "13:15", title: "Jumuah prayer and travel (Protected)", category: "faith", priority: "protected", desc: "Leave early enough for nearby mosque's real khutbah and congregation. Attend Jumuah with attention; allow return journey. Mosque timing takes precedence.", meta: ["Jumuah Khutbah", "Congregation", "Travel time"] },
      { start: "13:15", end: "14:00", title: "Lunch family & connection", category: "food", priority: "protected", desc: "Relaxed family meal after mosque: measured rice, palm-sized chicken or fish serving, vegetables, curd. NO fasting to compensate for a larger meal. Partner note.", meta: ["Measured rice", "Fish/Chicken", "Curd", "No fasting compensation", "Partner note"] },
      { start: "14:00", end: "14:40", title: "Friday weekly review (40 minutes)", category: "startup", priority: "protected", desc: "System audit: (1) 10m health/weight average/migraines/walking, (2) 10m business/sales/applications/AI & cloud proof, (3) 10m faith/family presence/partner experience/mood, (4) 10m pick 1-2 practical system adjustments. Finish review; leave rest of day lighter.", meta: ["10m Body & health", "10m Work & AI", "10m Faith & connection", "10m 1-2 Adjustments"] },
      { start: "14:40", end: "15:15", title: "Rest or relaxed recreation", category: "people", priority: "skippable", desc: "Rest, call with friends, easy game for up to 30 minutes, or time with family. End by 3:15 for Asr. Recreation is allowed even when business work is unfinished.", meta: ["Rest / Friends / Game (30m)", "End by 15:15"] },
      { start: "15:15", end: "15:50", title: "Reserve: Asr snack and water", category: "faith", priority: "protected", desc: "Pray Asr (Shafi). 250 ml water. Curd + fruit or milk + chana (10–20g protein). Caffeine-free tea.", meta: ["Asr", "Snack", "No caffeine"] },
      { start: "15:50", end: "16:00", title: "Prepare German", category: "learning", priority: "protected", desc: "Open materials, check audio, DND on, recall yesterday's words.", meta: ["Prep German", "DND"] },
      { start: "16:00", end: "17:30", title: "German class (Protected daily)", category: "learning", priority: "protected", desc: "90 min class. Friday emphasis: reading and correcting the week's errors. Speak aloud, note examples. Sip 250 ml water.", meta: ["Reading & error review", "Speak aloud"] },
      { start: "17:30", end: "17:50", title: "German recall & shutdown", category: "startup", priority: "protected", desc: "10m word recall. 5m note tomorrow's step 1. Emergency channel check. DO NOT reopen routine work on this lighter day.", meta: ["Recall 10m", "NO reopening work"] },
      { start: "17:50", end: "17:55", title: "Evening hair treatment (if confirmed)", category: "care", priority: "protected", desc: "Treatment on dry scalp. Wash hands.", meta: ["Treatment", "Dry scalp"] },
      { start: "17:55", end: "18:00", title: "Free time & walk (Leisure window)", category: "people", priority: "skippable", desc: "5–10m light walk. 10m leisure window allowed.", meta: ["Light walk", "10m Leisure"] },
      { start: "18:00", end: "18:30", title: "Reserve: Maghrib prayer", category: "faith", priority: "protected", desc: "Wudu and pray Maghrib at sunset.", meta: ["Maghrib"] },
      { start: "18:30", end: "19:05", title: "Dinner and family", category: "food", priority: "protected", desc: "Normal family meal: measured rice or 2 chapatis, protein serving, vegetables. Avoid turning evening into grazing. 200 ml water. Unhurried conversation.", meta: ["Rice/Chapatis", "Protein", "No grazing", "Family time"] },
      { start: "19:05", end: "19:35", title: "Reserve: Isha prayer", category: "faith", priority: "protected", desc: "Pray Isha at congregation or home.", meta: ["Isha prayer"] },
      { start: "19:35", end: "19:55", title: "Intentional self training", category: "learning", priority: "movable", desc: "Preselected 10–15 min video on emotional intelligence and thoughtful behavior. Write 3 useful notes, rehearse 1 behavior, close YouTube.", meta: ["10-15m Video", "Emotional intelligence", "Rehearse behavior"] },
      { start: "19:55", end: "20:30", title: "Relaxed time with partner / personal connection", category: "people", priority: "protected", desc: "Dedicated unhurried call without multitasking. Thoughts, worries, and laughter.", meta: ["Dedicated call", "Focused attention"] },
      { start: "20:30", end: "22:15", title: "Personal time & buffer", category: "people", priority: "movable", desc: "Family time, quiet recreation. Screens off by 10:15 PM.", meta: ["Screens off 22:15"] },
      { start: "22:15", end: "23:00", title: "Screens off, reading & wind down", category: "sleep", priority: "protected", desc: "Read Deep Work (15–20m), cleanse, moisturize, brush teeth, daily log, dua, lights out 11:00 PM.", meta: ["Deep Work", "Skincare", "Daily log", "Lights out 23:00"] },
      { start: "23:00", end: "05:30", title: "Sleep (6h 30m in bed)", category: "sleep", priority: "protected", desc: "Dark quiet room. Consistent wake anchor.", meta: ["Sleep 11 PM - 5:30 AM"] }
    ]
  },

  saturday: {
    title: "Saturday",
    focus: "Light delivery and practical learning",
    subtitle: "Daily routine with 11:00 PM bedtime and 5:30 AM wake. Home strength session 3, practical cloud lab & gaming window.",
    workHours: "~3.0 Business Hours",
    blocks: [
      { start: "05:30", end: "05:45", title: "Wake water and Fajr", category: "faith", priority: "protected", desc: "Wake 5:30 AM. 250 ml water, wudu, pray Fajr before sunrise.", meta: ["250 ml water", "Fajr"] },
      { start: "05:45", end: "05:55", title: "Quran and quiet start", category: "faith", priority: "protected", desc: "10 min Quran recitation, meaning, dua, gratitude note. No social feeds.", meta: ["Quran", "Gratitude"] },
      { start: "05:55", end: "06:00", title: "Prepare to move", category: "health", priority: "movable", desc: "150 ml water. Shoes on. Sunscreen if daylight.", meta: ["150 ml water", "Shoes"] },
      { start: "06:00", end: "06:30", title: "Home strength and a short walk", category: "health", priority: "movable", desc: "Warm up 5 min. 2 sets: chair squats 8–12; wall or counter push-ups 6–10; glute bridges 10–15; bird-dogs 6 each side; prone W raises 8–12; plank 15–25s. Rest 60–90s. 5–10 min easy walk and calf/hip stretches.", meta: ["Warmup 5m", "Squats 8-12", "Push-ups 6-10", "Bridges 10-15", "Bird-dogs 6/s", "Prone W", "Plank 15-25s", "Stretches"] },
      { start: "06:35", end: "07:00", title: "Shower skin and scalp (Wash Day 3)", category: "care", priority: "protected", desc: "Gentle shampoo (day 3 of weekly wash). Conditioner on lengths. Cleanser, moisturizer, SPF 50 sunscreen. Dry scalp 100%.", meta: ["Wash day", "Conditioner", "Cleanser + SPF 50", "250 ml water"] },
      { start: "07:00", end: "07:05", title: "Morning hair treatment (if confirmed)", category: "care", priority: "protected", desc: "Treatment on dry scalp. Wash hands. No dermaroller, no rosemary water.", meta: ["Treatment", "Dry scalp"] },
      { start: "07:05", end: "07:35", title: "Breakfast with family", category: "food", priority: "protected", desc: "40 g oats cooked with 200 ml milk, 2 eggs, 1 small fruit. Drink water before leaving for weekend plans. 25–30 g protein.", meta: ["40g oats + 200ml milk", "2 eggs", "Fruit", "25-30g protein"] },
      { start: "07:35", end: "08:00", title: "Natural hair styling & buffer", category: "care", priority: "movable", desc: "Mousse on damp lengths, wide-tooth comb once. Air dry untouched. Buffer time.", meta: ["Mousse", "Air dry"] },
      { start: "08:00", end: "09:30", title: "Startup focused delivery", category: "startup", priority: "movable", desc: "Complete 1 clear client or product deliverable. Phone away, block social media, test AI work rather than scrolling. Shorter business load so afternoon stays yours.", meta: ["1 Clear deliverable", "Test output", "Shorter load"] },
      { start: "09:30", end: "09:45", title: "Water and movement", category: "health", priority: "protected", desc: "Drink 250 ml, walk 3–5m. Rest eyes. Keep free of feed browsing.", meta: ["250 ml water", "Walk"] },
      { start: "09:45", end: "10:45", title: "Startup delivery and review", category: "startup", priority: "movable", desc: "Finish testing, document handover, or unblock teammate. Avoid starting work requiring whole afternoon. Write clear stopping point so next workday starts easily.", meta: ["Finish testing", "Clear stopping point"] },
      { start: "10:45", end: "11:15", title: "Sales and business messages", category: "startup", priority: "movable", desc: "Follow up with 1 qualified lead and confirm next client step. Share only essential decisions. Leave no vague requests that trigger evening messages.", meta: ["1 Lead follow-up", "No evening triggers"] },
      { start: "11:15", end: "12:00", title: "Targeted career work / Gulf readiness", category: "career", priority: "movable", desc: "Find 1 realistic role and compare requirements with resume. (Every 2 weeks: use this block for Gulf readiness: target city, shortlist companies, living costs, passport/degree documents). Log outcome and close job sites.", meta: ["1 Application / Gulf Prep", "Role matching", "Close job sites"] },
      { start: "12:10", end: "12:35", title: "Reserve: Dhuhr prayer", category: "faith", priority: "protected", desc: "Wudu, pray Dhuhr. Work messages wait.", meta: ["Dhuhr", "Wudu"] },
      { start: "12:35", end: "13:15", title: "Lunch family & connection", category: "food", priority: "protected", desc: "2 medium chapatis or 150 g cooked rice, 120 g cooked chicken or fish, vegetables, curd. Pick ONE main starch serving. Partner check-in note. 5–10m walk.", meta: ["Rice or chapatis", "120g protein", "Curd", "Personal note"] },
      { start: "13:15", end: "14:15", title: "Practical cloud build & lab (60 mins)", category: "learning", priority: "movable", desc: "Cloud sandbox lab or local project: 10 min review theory, 40 min building and testing, 10 min writing short README and checking cleanup. Goal: 1 working concept, not badges. Use sandbox.", meta: ["10m Theory", "40m Build & test", "10m README & cleanup", "Sandbox"] },
      { start: "14:15", end: "15:15", title: "Gaming or other free time", category: "people", priority: "skippable", desc: "45 to 60 minute game is fine, or choose walk, show, or time with friends. Set an end alarm before opening game; choose a mode you can leave. Avoid starting a competitive round near stop time. NO hidden catch-up work.", meta: ["Gaming (alarm set)", "Recreation", "No catch-up work"] },
      { start: "15:15", end: "15:50", title: "Reserve: Asr snack and water", category: "faith", priority: "protected", desc: "Pray Asr (Shafi). 250 ml water. Curd + fruit or milk + chana (10–20g protein). Caffeine-free tea.", meta: ["Asr", "Snack", "No caffeine"] },
      { start: "15:50", end: "16:00", title: "Prepare German", category: "learning", priority: "protected", desc: "Open materials, check audio, DND on, recall yesterday's words.", meta: ["Prep German", "DND"] },
      { start: "16:00", end: "17:30", title: "German class (Protected daily)", category: "learning", priority: "protected", desc: "90 min class. Saturday emphasis: conversation and applying vocabulary. Speak aloud, note examples. Sip 250 ml water.", meta: ["Conversation & vocab", "Speak aloud"] },
      { start: "17:30", end: "17:50", title: "German recall & shutdown", category: "startup", priority: "protected", desc: "10m word/sentence recall. 5m note Monday's first step. Emergency channel check. Close work.", meta: ["Recall words", "Shutdown work"] },
      { start: "17:50", end: "17:55", title: "Evening hair treatment (if confirmed)", category: "care", priority: "protected", desc: "Treatment on dry scalp. Wash hands.", meta: ["Treatment", "Dry scalp"] },
      { start: "17:55", end: "18:00", title: "Free time & walk (Leisure window)", category: "people", priority: "skippable", desc: "5–10m light walk. 10m leisure window allowed.", meta: ["Light walk", "10m Leisure"] },
      { start: "18:00", end: "18:30", title: "Reserve: Maghrib prayer", category: "faith", priority: "protected", desc: "Wudu and pray Maghrib at sunset.", meta: ["Maghrib"] },
      { start: "18:30", end: "19:05", title: "Dinner (Family or planned outside meal)", category: "food", priority: "protected", desc: "Family meal or 1 planned outside meal: choose clear protein source, sensible rice or bread portion, and vegetables where available. Drink 200 ml water. Stay with family for unhurried conversation.", meta: ["Planned meal", "Clear protein", "Sensible starch", "Family time"] },
      { start: "19:05", end: "19:35", title: "Reserve: Isha prayer", category: "faith", priority: "protected", desc: "Pray Isha at congregation or home.", meta: ["Isha prayer"] },
      { start: "19:35", end: "19:45", title: "Personal buffer", category: "people", priority: "movable", desc: "Sit quietly or finish small task. Feeds closed.", meta: ["10m Buffer"] },
      { start: "19:45", end: "20:30", title: "Relaxed time with partner / personal connection", category: "people", priority: "protected", desc: "Dedicated unhurried call without multitasking. Thoughts, worries, and laughter.", meta: ["Dedicated call", "Focused attention"] },
      { start: "20:30", end: "22:15", title: "Personal time & buffer", category: "people", priority: "movable", desc: "Family time, quiet recreation. Screens off by 10:15 PM even on weekends.", meta: ["Screens off 22:15"] },
      { start: "22:15", end: "23:00", title: "Screens off, reading & wind down", category: "sleep", priority: "protected", desc: "Read Deep Work (15–20m), cleanse, moisturize, brush teeth, daily log, dua, lights out 11:00 PM.", meta: ["Deep Work", "Skincare", "Daily log", "Lights out 23:00"] },
      { start: "23:00", end: "05:30", title: "Sleep (6h 30m in bed)", category: "sleep", priority: "protected", desc: "Dark quiet room. Consistent wake anchor.", meta: ["Sleep 11 PM - 5:30 AM"] }
    ]
  }
};

// --- 8-Week Technical Curriculum (Cloud Foundations for AI & Web Systems) ---
const awsCurriculum = [
  { week: 1, title: "Cloud basics, regions, availability zones & shared responsibility", evidence: "One page explaining the architecture of a simple app and who secures what" },
  { week: 2, title: "IAM identity permissions and least privilege", evidence: "Sandbox permission exercise and a short explanation of access boundaries" },
  { week: 3, title: "S3 objects, permissions and storage concepts", evidence: "Storage lab with a README and clear public versus private access reasoning" },
  { week: 4, title: "Compute EC2 and basic networking", evidence: "Compute lab and a drawing showing app, network and access paths" },
  { week: 5, title: "Databases, managed services and backups", evidence: "Explain an RDS design and how it differs from object storage" },
  { week: 6, title: "Logs, monitoring, deployment and cost awareness", evidence: "Small deployment exercise with observable logs and cleanup notes" },
  { week: 7, title: "One small project using the services you understand", evidence: "Working example or sandbox demonstration with safe sample data" },
  { week: 8, title: "Review, troubleshooting, portfolio and application", evidence: "Publish a truthful case study and explain the tradeoffs in an interview" }
];

// --- Practical Food Items for Calculator ---
const foodItems = [
  { id: "rice", name: "Cooked Rice", portion: "150 g (1 level cup)", kcal: 200, protein: 4.0 },
  { id: "chapati", name: "Chapati (no oil)", portion: "1 medium (30g atta)", kcal: 105, protein: 3.0 },
  { id: "egg", name: "Whole Egg (Large)", portion: "1 large egg", kcal: 70, protein: 6.0 },
  { id: "chicken", name: "Cooked Skinless Chicken", portion: "100 g cooked", kcal: 185, protein: 28.0 },
  { id: "fish", name: "Cooked Fish (curry/grilled)", portion: "100 g edible", kcal: 160, protein: 22.0 },
  { id: "oats", name: "Rolled Oats (dry)", portion: "40 g dry", kcal: 150, protein: 5.0 },
  { id: "milk", name: "Toned Milk", portion: "200 ml", kcal: 110, protein: 6.5 },
  { id: "curd", name: "Plain Curd (ordinary)", portion: "200 g curd", kcal: 140, protein: 8.5 },
  { id: "kadala", name: "Cooked Dal or Lentil Curry", portion: "1/2 to 1 cup", kcal: 180, protein: 9.5 },
  { id: "chana", name: "Roasted Chana / Chickpeas", portion: "25 g snack", kcal: 95, protein: 5.0 },
  { id: "fruit", name: "Small Fruit (Apple/Banana)", portion: "1 serving", kcal: 80, protein: 1.0 },
  { id: "nuts", name: "Almonds / Peanuts", portion: "15 g (handful)", kcal: 90, protein: 3.5 },
  { id: "oil", name: "Cooking Oil / Ghee", portion: "1 tsp (5 ml)", kcal: 45, protein: 0.0 },
  { id: "sugar", name: "Tea / Coffee Sugar", portion: "1 tsp (4 g)", kcal: 16, protein: 0.0 }
];

let portionCounts = {};
foodItems.forEach(item => portionCounts[item.id] = 0);

let currentSelectedDay = "sunday";

// --- DOM Ready Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istNow = new Date(utc + (3600000 * 5.5));
  const todayName = daysOfWeek[istNow.getDay()];
  currentSelectedDay = todayName;

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = istNow.toLocaleDateString('en-GB', dateOptions);
  const dateEl = document.getElementById("currentDateDisplay");
  if (dateEl) dateEl.textContent = dateStr;

  initNavTabs();
  initSidebar(todayName);
  initDayTabs(todayName);
  renderTimeline(currentSelectedDay);
  renderAwsRoadmap();
  renderPortionCalculator();
  initDailyTracker();
  initGlobalSearch();
  startClockAndTimers();

  const dateInput = document.getElementById("trackDate");
  if (dateInput) {
    dateInput.value = istNow.toISOString().split("T")[0];
  }
});

// --- Navigation Tabs ---
function initNavTabs() {
  const navBtns = document.querySelectorAll(".editorial-nav .nav-btn");
  const panes = document.querySelectorAll(".tab-pane");

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      navBtns.forEach(b => b.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const target = document.getElementById(btn.dataset.tab);
      if (target) {
        target.classList.add("active");
        btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      // Sync active state in sidebar
      document.querySelectorAll(".sidebar-nav-item").forEach(item => {
        item.classList.toggle("active", item.dataset.tab === btn.dataset.tab);
      });
    });
  });

  const exportBtn = document.getElementById("exportFullPlanBtn");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const logs = localStorage.getItem("dailyplan_daily_logs") || "[]";
      const backupData = {
        exportedAt: new Date().toISOString(),
        system: "Personal Operating System",
        logs: JSON.parse(logs),
        portions: portionCounts
      };
      const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Daily_Plan_Backup_${new Date().toISOString().split("T")[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }
}

// --- Off-Canvas Sections Sidebar Drawer ---
function initSidebar(todayName) {
  const sidebar = document.getElementById("sectionsSidebar");
  const backdrop = document.getElementById("sidebarBackdrop");
  const toggleBtn = document.getElementById("sidebarToggleBtn");
  const closeBtn = document.getElementById("sidebarCloseBtn");
  const floatingBtn = document.getElementById("floatingSidebarBtn");
  const jumpActiveBtn = document.getElementById("sidebarJumpActiveBtn");

  if (!sidebar || !backdrop) return;

  function openSidebar() {
    sidebar.classList.add("open");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (toggleBtn) toggleBtn.addEventListener("click", openSidebar);
  if (floatingBtn) floatingBtn.addEventListener("click", openSidebar);
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
  if (backdrop) backdrop.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar.classList.contains("open")) {
      closeSidebar();
    }
  });

  // Section item click in sidebar
  document.querySelectorAll(".sidebar-nav-item").forEach(item => {
    item.addEventListener("click", () => {
      const tabKey = item.dataset.tab;
      const targetNavBtn = document.querySelector(`.editorial-nav .nav-btn[data-tab="${tabKey}"]`);
      if (targetNavBtn) {
        targetNavBtn.click();
      }
      closeSidebar();
    });
  });

  // Quick Day selector in sidebar
  const sidebarDayPills = document.querySelectorAll(".sidebar-day-pill");
  sidebarDayPills.forEach(pill => {
    if (pill.dataset.day === currentSelectedDay) {
      pill.classList.add("active");
    }
    pill.addEventListener("click", () => {
      sidebarDayPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      
      const targetDayBtn = document.querySelector(`.day-tab-btn[data-day="${pill.dataset.day}"]`);
      if (targetDayBtn) {
        targetDayBtn.click();
      }
      // Ensure daily timetable tab is active
      const dailyNavBtn = document.querySelector(`.editorial-nav .nav-btn[data-tab="tab-daily"]`);
      if (dailyNavBtn && !dailyNavBtn.classList.contains("active")) {
        dailyNavBtn.click();
      }
      closeSidebar();
    });
  });

  if (jumpActiveBtn) {
    jumpActiveBtn.addEventListener("click", () => {
      closeSidebar();
      const jumpBtn = document.getElementById("jumpToCurrentBlockBtn");
      if (jumpBtn) jumpBtn.click();
    });
  }
}

// --- Day Selector Tabs ---
function initDayTabs(todayName) {
  const dayBtns = document.querySelectorAll(".day-tab-btn");
  dayBtns.forEach(btn => {
    const isToday = btn.dataset.day === todayName;
    if (isToday) {
      btn.innerHTML = `${btn.textContent.trim().split(" ")[0]} <span class="today-marker">(Today)</span>`;
    }

    if (btn.dataset.day === currentSelectedDay) {
      btn.classList.add("active");
      setTimeout(() => {
        btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }, 200);
    } else {
      btn.classList.remove("active");
    }

    btn.addEventListener("click", () => {
      dayBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      currentSelectedDay = btn.dataset.day;
      renderTimeline(currentSelectedDay);
    });
  });

  const jumpBtn = document.getElementById("jumpToCurrentBlockBtn");
  if (jumpBtn) {
    jumpBtn.addEventListener("click", () => {
      const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istNow = new Date(utc + (3600000 * 5.5));
      const today = daysOfWeek[istNow.getDay()];

      if (currentSelectedDay !== today) {
        currentSelectedDay = today;
        document.querySelectorAll(".day-tab-btn").forEach(b => {
          b.classList.toggle("active", b.dataset.day === today);
        });
        renderTimeline(today);
      }

      setTimeout(() => {
        const activeRow = document.querySelector(".timeline-row.is-current");
        if (activeRow) {
          activeRow.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    });
  }

  const printBtn = document.getElementById("printDayBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }

  const resetBtn = document.getElementById("resetCheckboxesBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm(`Reset all completion checkmarks for ${currentSelectedDay.toUpperCase()}?`)) {
        const prefix = `dailyplan_check_${currentSelectedDay}_`;
        Object.keys(localStorage).forEach(key => {
          if (key.startsWith(prefix)) localStorage.removeItem(key);
        });
        renderTimeline(currentSelectedDay);
      }
    });
  }
}

// --- Render Timeline for Selected Day ---
function renderTimeline(dayKey) {
  const data = scheduleData[dayKey];
  if (!data) return;

  document.getElementById("dayTitleDisplay").textContent = data.title;
  document.getElementById("dayFocusDisplay").textContent = data.focus;
  document.getElementById("daySubtitleDisplay").textContent = data.subtitle;
  document.getElementById("dayWorkHoursVal").textContent = data.workHours;

  const container = document.getElementById("dailyTimeline");
  container.innerHTML = "";

  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istNow = new Date(utc + (3600000 * 5.5));
  const currentMins = istNow.getHours() * 60 + istNow.getMinutes();
  const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const isActualToday = daysOfWeek[istNow.getDay()] === dayKey;

  data.blocks.forEach((block, index) => {
    const [startH, startM] = block.start.split(":").map(Number);
    const [endH, endM] = block.end.split(":").map(Number);
    const startMins = startH * 60 + startM;
    let endMins = endH * 60 + endM;
    if (endMins < startMins) endMins += 24 * 60;

    let isCurrentBlock = false;
    if (isActualToday) {
      if (startMins <= endMins) {
        isCurrentBlock = currentMins >= startMins && currentMins < endMins;
      } else {
        isCurrentBlock = currentMins >= startMins || currentMins < (endH * 60 + endM);
      }
    }

    const row = document.createElement("div");
    row.className = `timeline-row ${isCurrentBlock ? "is-current" : ""}`;
    row.id = `block-${dayKey}-${index}`;

    const checkboxKey = `dailyplan_check_${dayKey}_${index}`;
    const isChecked = localStorage.getItem(checkboxKey) === "true";

    row.innerHTML = `
      <div class="time-box">
        <span class="time-span">${block.start} – ${block.end}</span>
        <span class="tag-badge ${block.priority === 'protected' ? 'protected' : ''}">${block.priority}</span>
        <span class="tag-badge">${block.category}</span>
      </div>
      <div class="content-box">
        <div class="content-top-line">
          <h3 class="block-title-text">${block.title}</h3>
          <input type="checkbox" class="task-cb" data-key="${checkboxKey}" ${isChecked ? "checked" : ""} title="Mark done">
        </div>
        <p class="block-paragraph">${block.desc}</p>
        <div class="chip-group">
          ${block.meta.map(m => `<span class="chip">${m}</span>`).join("")}
        </div>
      </div>
    `;

    container.appendChild(row);
  });

  container.querySelectorAll(".task-cb").forEach(cb => {
    cb.addEventListener("change", (e) => {
      localStorage.setItem(e.target.dataset.key, e.target.checked);
    });
  });
}

// --- Live Clock & Real-Time Active Task Ribbon ---
function startClockAndTimers() {
  function tick() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const ist = new Date(utc + (3600000 * 5.5));

    const h = String(ist.getHours()).padStart(2, "0");
    const m = String(ist.getMinutes()).padStart(2, "0");
    const s = String(ist.getSeconds()).padStart(2, "0");
    const clockEl = document.getElementById("liveClock");
    if (clockEl) clockEl.textContent = `${h}:${m}:${s} IST`;

    const currentMins = ist.getHours() * 60 + ist.getMinutes();
    const bedMins = 23 * 60;
    let diff = bedMins - currentMins;
    if (diff < 0) diff += 24 * 60;
    const hLeft = Math.floor(diff / 60);
    const mLeft = diff % 60;
    const bedEl = document.getElementById("bedtimeCountdown");
    if (bedEl) {
      if (hLeft === 0 && mLeft <= 45) {
        bedEl.textContent = `${mLeft}m to sleep! Wind down now`;
      } else {
        bedEl.textContent = `${hLeft}h ${mLeft}m remaining`;
      }
    }

    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const todayKey = daysOfWeek[ist.getDay()];
    const todayBlocks = scheduleData[todayKey].blocks;

    let activeBlock = null;
    let nextBlock = null;
    let minsUntilNext = 0;

    for (let i = 0; i < todayBlocks.length; i++) {
      const b = todayBlocks[i];
      const [sH, sM] = b.start.split(":").map(Number);
      const [eH, eM] = b.end.split(":").map(Number);
      const sTotal = sH * 60 + sM;
      let eTotal = eH * 60 + eM;
      if (eTotal < sTotal) eTotal += 24 * 60;

      if (currentMins >= sTotal && currentMins < eTotal) {
        activeBlock = b;
        nextBlock = todayBlocks[(i + 1) % todayBlocks.length];
        minsUntilNext = eTotal - currentMins;
        break;
      }
    }

    const titleEl = document.getElementById("activeTaskTitle");
    const timerEl = document.getElementById("activeTaskTimer");

    if (activeBlock) {
      if (titleEl) titleEl.textContent = `${activeBlock.title} (${activeBlock.start} – ${activeBlock.end})`;
      if (timerEl) timerEl.textContent = `[${minsUntilNext}m left → Next: ${nextBlock ? nextBlock.title : 'Night wind down'}]`;
    } else {
      if (titleEl) titleEl.textContent = "Night Wind Down & Sleep Anchor";
      if (timerEl) timerEl.textContent = "[Lights out 11:00 PM • Wake 5:30 AM]";
    }
  }

  tick();
  setInterval(tick, 1000);
}

// --- Render Technical Curriculum Table ---
function renderAwsRoadmap() {
  const tbody = document.getElementById("awsRoadmapTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  awsCurriculum.forEach(item => {
    const key = `dailyplan_tech_w${item.week}`;
    const isDone = localStorage.getItem(key) === "true";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>Week ${item.week}</strong></td>
      <td><strong>${item.title}</strong></td>
      <td>${item.evidence}</td>
      <td>
        <label style="display:flex; align-items:center; gap:6px; cursor:pointer;">
          <input type="checkbox" class="task-cb tech-cb" data-key="${key}" ${isDone ? "checked" : ""}>
          <span style="font-size:0.75rem; font-weight:700;">${isDone ? 'DONE' : 'PENDING'}</span>
        </label>
      </td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll(".tech-cb").forEach(cb => {
    cb.addEventListener("change", (e) => {
      localStorage.setItem(e.target.dataset.key, e.target.checked);
      renderAwsRoadmap();
    });
  });
}

// --- Portion Calculator ---
function renderPortionCalculator() {
  const container = document.getElementById("portionCalcItems");
  if (!container) return;
  container.innerHTML = "";

  foodItems.forEach(item => {
    const count = portionCounts[item.id] || 0;
    const card = document.createElement("div");
    card.className = "calc-row-item";
    card.innerHTML = `
      <div>
        <div class="calc-item-name">${item.name}</div>
        <div class="calc-item-meta">${item.portion} • ${item.kcal} kcal | ${item.protein}g P</div>
      </div>
      <div class="calc-controls">
        <button class="calc-btn minus" data-id="${item.id}">−</button>
        <span class="calc-qty-num" id="qty-${item.id}">${count}</span>
        <button class="calc-btn plus" data-id="${item.id}">+</button>
      </div>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll(".plus").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      portionCounts[id] = (portionCounts[id] || 0) + 1;
      document.getElementById(`qty-${id}`).textContent = portionCounts[id];
      updatePortionTotals();
    });
  });

  container.querySelectorAll(".minus").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      if (portionCounts[id] > 0) {
        portionCounts[id]--;
        document.getElementById(`qty-${id}`).textContent = portionCounts[id];
        updatePortionTotals();
      }
    });
  });

  const resetBtn = document.getElementById("resetCalcBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      Object.keys(portionCounts).forEach(k => portionCounts[k] = 0);
      foodItems.forEach(item => {
        const el = document.getElementById(`qty-${item.id}`);
        if (el) el.textContent = 0;
      });
      updatePortionTotals();
    });
  }

  const sampleBtn = document.getElementById("loadSampleDayBtn");
  if (sampleBtn) {
    sampleBtn.addEventListener("click", () => {
      portionCounts = {
        rice: 1, chapati: 2, egg: 2, chicken: 1, fish: 1,
        oats: 1, milk: 2, curd: 1, kadala: 1, chana: 1,
        fruit: 2, nuts: 0, oil: 2, sugar: 1
      };
      foodItems.forEach(item => {
        const el = document.getElementById(`qty-${item.id}`);
        if (el) el.textContent = portionCounts[item.id] || 0;
      });
      updatePortionTotals();
    });
  }

  updatePortionTotals();
}

function updatePortionTotals() {
  let totalKcal = 0;
  let totalProtein = 0;

  foodItems.forEach(item => {
    const qty = portionCounts[item.id] || 0;
    totalKcal += qty * item.kcal;
    totalProtein += qty * item.protein;
  });

  const kcalEl = document.getElementById("calcTotalCalories");
  const proEl = document.getElementById("calcTotalProtein");

  if (kcalEl) kcalEl.textContent = `${Math.round(totalKcal)} kcal`;
  if (proEl) proEl.textContent = `${Math.round(totalProtein * 10) / 10} g`;
}

// --- Daily Tracker & Report Generator ---
function initDailyTracker() {
  const form = document.getElementById("dailyTrackerForm");
  const clearBtn = document.getElementById("clearTrackerFormBtn");
  const copyBtn = document.getElementById("copyDailyReportBtn");
  const statusEl = document.getElementById("saveStatusIndicator");

  renderTrackerHistory();

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const logEntry = {
        date: document.getElementById("trackDate").value,
        sleep: document.getElementById("trackSleepBed").value,
        energy: document.getElementById("trackSleepEnergy").value,
        faith: document.getElementById("trackFaith").value,
        nutrition: document.getElementById("trackNutrition").value,
        movement: document.getElementById("trackMovement").value,
        work: document.getElementById("trackWork").value,
        learning: document.getElementById("trackLearning").value,
        personal: document.getElementById("trackPersonal").value,
        care: document.getElementById("trackCare").value,
        oneLine: document.getElementById("trackOneLine").value,
        timestamp: new Date().toISOString()
      };

      const existingLogs = JSON.parse(localStorage.getItem("dailyplan_daily_logs") || "[]");
      const idx = existingLogs.findIndex(l => l.date === logEntry.date);
      if (idx >= 0) {
        existingLogs[idx] = logEntry;
      } else {
        existingLogs.unshift(logEntry);
      }

      localStorage.setItem("dailyplan_daily_logs", JSON.stringify(existingLogs));
      renderTrackerHistory();

      if (statusEl) {
        statusEl.textContent = "✓ Log saved!";
        setTimeout(() => { statusEl.textContent = ""; }, 3000);
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      form.reset();
      document.getElementById("trackDate").value = new Date().toISOString().split("T")[0];
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const date = document.getElementById("trackDate").value || new Date().toISOString().split("T")[0];
      const sleep = document.getElementById("trackSleepBed").value || "23:00–05:30 (6.5h in bed)";
      const energy = document.getElementById("trackSleepEnergy").value || "4";
      const faith = document.getElementById("trackFaith").value || "5 prayers noted; Quran recited";
      const food = document.getElementById("trackNutrition").value || "~1,800 kcal, ~120g protein, 2.5L water";
      const movement = document.getElementById("trackMovement").value || "Steps & scheduled movement done";
      const work = document.getElementById("trackWork").value || "Deep work blocks completed, shutdown 17:40";
      const learning = document.getElementById("trackLearning").value || "German 90m + 10m recall done; AI / cloud study practiced";
      const personal = document.getElementById("trackPersonal").value || "Family meals & personal evening call";
      const care = document.getElementById("trackCare").value || "AM/PM skincare, hair treatment, feeds <15m";
      const oneLine = document.getElementById("trackOneLine").value || "Finished work deliberately. Consistent sleep.";

      const reportText = `DAILY OPERATIONAL COCKPIT | ACCOUNTABILITY REPORT
Date: ${date}
--------------------------------------------------
• Sleep: ${sleep} | Alertness: ${energy}/5
• Faith: ${faith}
• Food & Water: ${food}
• Movement: ${movement}
• Startup Work: ${work}
• Learning (AI/German): ${learning}
• Personal Life: ${personal}
• Care & Boundaries: ${care}
• One-Line Diagnostic: ${oneLine}
--------------------------------------------------
"Never miss twice. A difficult day is contained by the next normal meal, prayer and sleep window."`;

      navigator.clipboard.writeText(reportText).then(() => {
        const orig = copyBtn.textContent;
        copyBtn.textContent = "✓ Report Copied to Clipboard!";
        setTimeout(() => { copyBtn.textContent = orig; }, 2500);
      }).catch(() => {
        alert("Report ready:\n\n" + reportText);
      });
    });
  }
}

function renderTrackerHistory() {
  const historyList = document.getElementById("historyList");
  if (!historyList) return;

  const logs = JSON.parse(localStorage.getItem("dailyplan_daily_logs") || "[]");
  if (logs.length === 0) {
    historyList.innerHTML = `<p class="text-muted">No logs recorded yet. Submit the form above to start your daily log.</p>`;
    return;
  }

  historyList.innerHTML = logs.slice(0, 5).map(l => `
    <div class="record-line">
      <strong>${l.date}</strong> — Energy: ${l.energy}/5 • Sleep: ${l.sleep || "N/A"} • Faith: ${l.faith || "Done"} • Work: ${l.work || "Done"}<br>
      <span style="color:var(--ink-muted); font-style:italic;">"${l.oneLine || "No blocker noted."}"</span>
    </div>
  `).join("");
}

// --- Universal Instant Plan Search Engine ---
function initGlobalSearch() {
  const input = document.getElementById("globalSearchInput");
  const overlay = document.getElementById("searchResultsOverlay");
  const list = document.getElementById("searchResultsList");
  const count = document.getElementById("searchResultsCount");
  const closeBtn = document.getElementById("closeSearchResults");

  if (!input || !overlay) return;

  const searchIndex = [];

  Object.keys(scheduleData).forEach(dayKey => {
    const day = scheduleData[dayKey];
    day.blocks.forEach((b, idx) => {
      searchIndex.push({
        title: `${day.title}: ${b.title} (${b.start}–${b.end})`,
        category: `Timetable • ${day.title}`,
        text: `${b.title} ${b.desc} ${b.meta.join(" ")}`,
        targetTab: "tab-daily",
        action: () => {
          currentSelectedDay = dayKey;
          document.querySelectorAll(".day-tab-btn").forEach(p => p.classList.toggle("active", p.dataset.day === dayKey));
          renderTimeline(dayKey);
          setTimeout(() => {
            const el = document.getElementById(`block-${dayKey}-${idx}`);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 150);
        }
      });
    });
  });

  searchIndex.push({
    title: "AI Engineering & Systems Architecture",
    category: "Career & AI",
    text: "AI engineer LLMs prompt engineering agentic workflows RAG pipelines full stack startup products",
    targetTab: "tab-career"
  });
  searchIndex.push({
    title: "8-Week Cloud Foundations Curriculum",
    category: "Career & AI",
    text: "AWS Educate free sandbox labs Cloud Practitioner Essentials regions IAM S3 EC2 RDS databases CloudWatch monitoring",
    targetTab: "tab-career"
  });
  searchIndex.push({
    title: "Targeted Job Search Protocol",
    category: "Career & AI",
    text: "4-6 applications weekly 2-3 recruiter messages frontend full stack AI interview practice portfolio proof follow up 7-10 days",
    targetTab: "tab-career"
  });
  searchIndex.push({
    title: "German Class & Gulf Relocation",
    category: "Career & AI",
    text: "German class 4:00 to 5:30 PM daily 10 min recall Gulf readiness Saturday block every 2 weeks degree attestation living costs",
    targetTab: "tab-career"
  });
  searchIndex.push({
    title: "1,800 kcal Target & Macros",
    category: "Nutrition",
    text: "1800 kcal calorie target 120g protein 55g fat 205g carbohydrate fiber 25-35g weight loss BMI",
    targetTab: "tab-nutrition"
  });
  searchIndex.push({
    title: "Portions & Practical Servings",
    category: "Nutrition",
    text: "cooked rice 150g chapati eggs chicken 100g fish 100g oats 40g milk 200ml curd dal kadala curry cooking oil 1 tsp 45 kcal sugar 16 kcal",
    targetTab: "tab-nutrition"
  });
  searchIndex.push({
    title: "Hair Treatment Safety & Strict Boundaries",
    category: "Skincare & Hair",
    text: "minoxidil 5 percent 1 ml twice daily dry scalp 4 hours before washing 2 to 4 hours dry before pillow stop for palpitations dizziness chest pain swelling",
    targetTab: "tab-care"
  });
  searchIndex.push({
    title: "NO Dermaroller & NO Rosemary Water",
    category: "Skincare & Hair",
    text: "do not use dermaroller microneedling FDA warning infection scarring no homemade rosemary water not 5 percent minoxidil",
    targetTab: "tab-care"
  });
  searchIndex.push({
    title: "Skincare Essentials (3 Products Only)",
    category: "Skincare & Hair",
    text: "gentle cleanser lightweight moisturizer broad-spectrum SPF 50 sunscreen two finger lengths face ears neck exposed scalp",
    targetTab: "tab-care"
  });
  searchIndex.push({
    title: "Migraine Management & Caffeine Cutoff",
    category: "Health & Care",
    text: "occasional migraine consistent sleep meals caffeine cutoff 1:00 PM screen breaks 20-20-20 headache diary dark room",
    targetTab: "tab-care"
  });
  searchIndex.push({
    title: "Startup 26-Hour Weekly Business Budget",
    category: "Startup Work",
    text: "startup 3 staff members CEO sales dev strategy delivery admin marketing 26 hours deep work 2.5 hours 3 weekly outcomes",
    targetTab: "tab-zypher"
  });
  searchIndex.push({
    title: "AI Waiting Protocol (No Context Loss)",
    category: "Startup Work",
    text: "AI waiting list review requirements inspect code write next prompt no social feeds no context loss deliberate switch",
    targetTab: "tab-zypher"
  });

  input.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) {
      overlay.style.display = "none";
      return;
    }

    const matches = searchIndex.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.text.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );

    count.textContent = `${matches.length} result${matches.length === 1 ? "" : "s"} found for "${q}"`;
    list.innerHTML = "";

    if (matches.length === 0) {
      list.innerHTML = `<p class="text-muted p-16">No sections found matching "${q}". Try searching for "minoxidil", "oats", "AI", "Fajr", "squats", or "deep work".</p>`;
    } else {
      matches.slice(0, 8).forEach(m => {
        const item = document.createElement("div");
        item.className = "search-result-item";
        item.innerHTML = `
          <div class="result-location">${m.category}</div>
          <div class="result-title">${m.title}</div>
          <div class="result-snippet">${m.text.slice(0, 140)}...</div>
        `;
        item.addEventListener("click", () => {
          overlay.style.display = "none";
          input.value = "";

          const tabBtn = document.querySelector(`.nav-btn[data-tab="${m.targetTab}"]`);
          if (tabBtn) tabBtn.click();
          if (m.action) m.action();
        });
        list.appendChild(item);
      });
    }

    overlay.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
  });
}
