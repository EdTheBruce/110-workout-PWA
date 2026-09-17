// 1-10 Method & Everyday Mobility PWA

const PATTERNS = [
  {
    id: 'horizontal_push',
    name: 'Horizontal Push',
    category: 'PUSH',
    primary: 'Push-Up',
    desc: 'Pressing in front of the body, core stability & shoulder control.',
    mobilityId: 'full',
    mobilityName: 'Full-Body Mobility Routine (~14 min)',
    variations: [
      'Level 1: Modified Push-Up (Knees or Hands Elevated)',
      'Level 2: Standard Floor Push-Up',
      'Level 3: Dumbbell Chest Press / Weighted Push-Up'
    ]
  },
  {
    id: 'vertical_pull',
    name: 'Vertical Pull',
    category: 'PULL',
    primary: 'Pull-Up',
    desc: 'Pulling downward/upward, upper back, lats & shoulder stability.',
    mobilityId: 'full',
    mobilityName: 'Full-Body Mobility Routine (~14 min)',
    variations: [
      'Level 1: Feet-Assisted Pull-Up',
      'Level 2: Resistance Band Assisted Pull-Up',
      'Level 3: Full Bodyweight / Weighted Pull-Up'
    ]
  },
  {
    id: 'squat',
    name: 'Squat',
    category: 'LEGS',
    primary: 'Bodyweight Squat',
    desc: 'Knee-dominant lower body mechanics, quad & hip development.',
    mobilityId: 'lower',
    mobilityName: 'Lower-Body Mobility Routine (~20 min)',
    variations: [
      'Level 1: Box / Chair Assisted Squat',
      'Level 2: Full Deep Bodyweight Squat',
      'Level 3: Weighted Goblet Squat / Barbell Squat'
    ]
  },
  {
    id: 'vertical_push',
    name: 'Vertical Push',
    category: 'PUSH',
    primary: 'Dips',
    desc: 'Upright pressing strength and shoulder stability through full ROM.',
    mobilityId: 'full',
    mobilityName: 'Full-Body Mobility Routine (~14 min)',
    variations: [
      'Level 1: Modified Bench / Chair Dip',
      'Level 2: Resistance Band Assisted Dip',
      'Level 3: Parallel Bar Dip / Weighted Dip'
    ]
  },
  {
    id: 'horizontal_pull',
    name: 'Horizontal Pull',
    category: 'PULL',
    primary: 'Australian / Ring Row',
    desc: 'Upper back posture, rhomboids, rear delts, and biceps.',
    mobilityId: 'full',
    mobilityName: 'Full-Body Mobility Routine (~14 min)',
    variations: [
      'Level 1: High Incline Ring Row / Table Row',
      'Level 2: Horizontal Australian Row / Ring Row',
      'Level 3: Dumbbell / Barbell Bent-Over Row'
    ]
  },
  {
    id: 'hinge',
    name: 'Hinge',
    category: 'LEGS',
    primary: 'Romanian Deadlift (RDL)',
    desc: 'Posterior chain strength through the hips, glutes, and hamstrings.',
    mobilityId: 'lower',
    mobilityName: 'Lower-Body Mobility Routine (~20 min)',
    variations: [
      'Level 1: Floor Glute Bridge / Single-Leg Bridge',
      'Level 2: Bodyweight Hip Hinge / Light Romanian Deadlift',
      'Level 3: Weighted Romanian Deadlift (DB / Kettlebell / Barbell)'
    ]
  },
  {
    id: 'overhead_push',
    name: 'Overhead Push',
    category: 'PUSH',
    primary: 'Pike Push-Up',
    desc: 'Safely generating force overhead; strong and resilient shoulders.',
    mobilityId: 'full',
    mobilityName: 'Full-Body Mobility Routine (~14 min)',
    variations: [
      'Level 1: Band-Assisted or Hands-Elevated Pike Push-Up',
      'Level 2: Standard Floor Pike Push-Up',
      'Level 3: Dumbbell / Barbell Overhead Press'
    ]
  },
  {
    id: 'lunge',
    name: 'Lunge',
    category: 'LEGS',
    primary: 'Split Squat / Step-Through Lunge',
    desc: 'Single-leg strength, balance, coordination & correcting imbalances.',
    mobilityId: 'lower',
    mobilityName: 'Lower-Body Mobility Routine (~20 min)',
    variations: [
      'Level 1: Supported Split Squat (Hand on wall/chair)',
      'Level 2: Step-Through Lunge / Bulgarian Split Squat',
      'Level 3: Weighted Split Squat / Walking Lunge'
    ]
  }
];

const MOBILITY_DATA = {
  full: {
    title: 'Full-Body Mobility Routine (~14 min)',
    subtitle: 'From Everyday Mobility (Pages 4–8). 3–10 reps per movement.',
    moves: [
      { num: 1, name: 'Neck Circles', reps: '3 each direction', cue: 'Slow and controlled through comfortable range.' },
      { num: 2, name: 'Neck Flexion & Extension', reps: '3 reps', cue: 'Chin to chest, then look upward gently.' },
      { num: 3, name: 'Shoulder Circles', reps: '3 forward + 3 backward', cue: 'Elbows straight, back neutral without arching.' },
      { num: 4, name: 'Elbow Circles', reps: '3 each direction', cue: 'Touchdown position, rotate through internal & external circles.' },
      { num: 5, name: 'Wrist Circles', reps: '3 each direction', cue: 'Slow rotations in both directions.' },
      { num: 6, name: 'Wrist Flexion, Extension & Side-to-Side', reps: '3-5 each', cue: 'Fingers extended, moving through full comfortable range.' },
      { num: 7, name: 'Straight-Arm Shoulder Circles', reps: '3 each dir / arm', cue: 'Arm straight overhead and behind. Keep torso square.' },
      { num: 8, name: 'Hip Circles', reps: '3 each direction', cue: 'Feet wider than shoulders, tall chest, smooth circles.' },
      { num: 9, name: 'Knee Drive + Leg Extension + Ankle Circles', reps: '3 reps each side', cue: 'Drive knee, extend leg, point toe and circle ankle.' },
      { num: 10, name: 'Arm Circles + Forward Fold', reps: '3 reps', cue: 'Extend arms behind, circle, fold forward with flat back.' },
      { num: 11, name: 'Inchworm → Push-Up Position → Down Dog', reps: '3 reps', cue: 'Walk hands out to push-up, press into downward dog, walk back.' },
      { num: 12, name: 'Wrist Torque + Palm Lifts', reps: '5-8 reps', cue: 'Fingers spread, rotate elbow pits forward, gently lift palms.' },
      { num: 13, name: 'Wrist External Rotation', reps: '5 reps', cue: 'Rotate hands outward on floor, arms straight, gentle tension.' },
      { num: 14, name: 'Wrist Internal Rotation Hold', reps: '3-10 sec / side', cue: 'Rotate hands inward, hold comfortably while breathing.' },
      { num: 15, name: 'Loaded Wrist Extension / Palm Lifts', reps: '3-5 reps', cue: 'Palms facing up, light weight shift, press through knuckles.' },
      { num: 16, name: 'Reverse Plank', reps: '3 reps', cue: 'Hands behind, press through feet and lift hips, chest tall.' },
      { num: 17, name: 'Deep Squat', reps: '3 reps (or 30s hold)', cue: 'Sink into deepest comfortable squat, chair assist if needed.' },
      { num: 18, name: 'Deep Squat Side-to-Side + Ankle Rocks', reps: '5-10 rocks', cue: 'Shift weight side-to-side in bottom of squat, rock ankles.' }
    ]
  },
  lower: {
    title: 'Lower-Body Mobility Routine (~20 min)',
    subtitle: 'From Everyday Mobility (Pages 9–13). Hips, hamstrings & ankles.',
    moves: [
      { num: 1, name: 'Hip Circles (Warm-Up)', reps: '5 each direction', cue: 'Wide stance, chest tall, explore full circle.' },
      { num: 2, name: 'Deep Squats (Warm-Up)', reps: '5 reps', cue: 'Sink low, move gently at the bottom.' },
      { num: 3, name: 'Forward Folds (Warm-Up)', reps: '5 reps', cue: 'Slight knee bend, long neutral back, focus on hamstrings.' },
      { num: 4, name: 'Downward Dog Calf Runs', reps: '20 total reps', cue: 'Alternate pressing heels to floor from downward dog.' },
      { num: 5, name: 'Seated Hip Internal Rotations', reps: '10 total reps', cue: 'Sit tall with knees bent, rotate one knee toward floor.' },
      { num: 6, name: 'Hip Internal Rotation + Twist & Fold', reps: '10 total reps', cue: 'Rotate knee to floor, turn torso toward lead knee and fold.' },
      { num: 7, name: 'Deep Squat Hip Rotations', reps: '10 reps', cue: 'From deep squat, bring one knee toward opposite foot.' },
      { num: 8, name: 'Runner’s Stretch', reps: '10 total reps', cue: 'From push-up position, bring foot outside same-side hand.' },
      { num: 9, name: 'Runner’s Lunge + Hamstring Stretch', reps: '5 reps / side', cue: 'Back knee down, shift hips back to straighten front leg.' },
      { num: 10, name: 'Butterfly Stretch (Static)', reps: '30 seconds', cue: 'Soles together, tall chest, knees sink toward floor.' },
      { num: 11, name: 'Frog Stretch (Static)', reps: '30 seconds', cue: 'Knees wide, feet turned out, hips sink back gently.' },
      { num: 12, name: 'Single-Leg Forward Fold', reps: '30 seconds / side', cue: 'One leg extended, chest toward thigh with long spine.' },
      { num: 13, name: 'Seated Straddle Forward Fold', reps: '30 seconds', cue: 'Comfortable straddle, reach forward with flat back.' },
      { num: 14, name: 'Figure-Four Glute Stretch', reps: '30 seconds / side', cue: 'Cross ankle over opposite knee on back, pull to chest.' }
    ]
  },
  warmup: {
    title: 'Quick Warm-Up / Rest Day Routine',
    subtitle: 'From The 1-10 Method (Page 22). 8 quick movements.',
    moves: [
      { num: 1, name: 'Neck Circles', reps: '3-5 each way', cue: 'Slow and controlled through comfortable range.' },
      { num: 2, name: 'Straight Arm Circles Forward & Reverse', reps: '5 each way', cue: 'Full shoulder rotation, keeping spine neutral.' },
      { num: 3, name: 'Twist & Reach', reps: '10 reps', cue: 'Gentle torso rotation with reaching arms.' },
      { num: 4, name: 'Hip Circles', reps: '5 each direction', cue: 'Explore comfortable hip range.' },
      { num: 5, name: 'Straddle Reach & Fold', reps: '5 reps', cue: 'Reach side-to-side and fold with neutral spine.' },
      { num: 6, name: 'Inchworm → Updog / Down Dog', reps: '3 reps', cue: 'Walk out, gentle chest press, push hips to ceiling.' },
      { num: 7, name: 'Deep Squat Hold', reps: '30-60 seconds', cue: 'Relax into bottom of squat, breathing deeply.' },
      { num: 8, name: 'Wrist Prep', reps: '1 minute', cue: 'Circles, flexion/extension, and gentle palm lifts.' }
    ]
  }
};

// INITIAL STARTER HISTORY
const DEFAULT_HISTORY = [
  {
    id: 'seed-1',
    date: '2026-09-12',
    stepIndex: 0,
    patternId: 'horizontal_push',
    patternName: 'Horizontal Push',
    exercise: 'Push-Up',
    variation: 'Level 2: Standard Floor Push-Up',
    reps: 5,
    duration: 10,
    totalReps: 50,
    mobilityDone: true,
    notes: 'Felt clean and strong. Reps felt sustainable.'
  },
  {
    id: 'seed-2',
    date: '2026-09-13',
    stepIndex: 1,
    patternId: 'vertical_pull',
    patternName: 'Vertical Pull',
    exercise: 'Pull-Up',
    variation: 'Level 2: Resistance Band Assisted Pull-Up',
    reps: 3,
    duration: 10,
    totalReps: 30,
    mobilityDone: true,
    notes: 'Good burn. Rested 40s per minute.'
  },
  {
    id: 'seed-3',
    date: '2026-09-14',
    stepIndex: 2,
    patternId: 'squat',
    patternName: 'Squat',
    exercise: 'Bodyweight Squat',
    variation: 'Level 2: Full Deep Bodyweight Squat',
    reps: 8,
    duration: 10,
    totalReps: 80,
    mobilityDone: true,
    notes: 'Knees and ankles felt great after mobility.'
  },
  {
    id: 'seed-4',
    date: '2026-09-15',
    stepIndex: 3,
    patternId: 'vertical_push',
    patternName: 'Vertical Push',
    exercise: 'Dips',
    variation: 'Level 1: Modified Bench / Chair Dip',
    reps: 5,
    duration: 10,
    totalReps: 50,
    mobilityDone: true,
    notes: 'Kept shoulders packed down and neutral.'
  }
];

// STATE
let currentStepIndex = 4; // Step 5 (Horizontal Pull) by default based on seed history
let currentReps = 5;
let currentDuration = 10;
let history = [];

// TIMER STATE
let timerInterval = null;
let timerRunning = false;
let timerTotalSeconds = 600;
let timerCurrentSecondInRound = 60;
let timerCurrentRound = 1;
let timerTotalRounds = 10;
let timerExerciseName = '';
let audioContext = null;
let wakeLock = null;

const hasDocument = typeof document !== 'undefined';
const hasStorage = (() => {
  try {
    return typeof localStorage !== 'undefined';
  } catch (e) {
    return false;
  }
})();

function getStoredValue(key) {
  try {
    return hasStorage ? localStorage.getItem(key) : null;
  } catch (e) {
    return null;
  }
}

function setStoredValue(key, value) {
  try {
    if (hasStorage) localStorage.setItem(key, value);
  } catch (e) {
    // Ignore storage failures in restricted or non-browser contexts.
  }
}

// INIT
if (hasDocument) {
  document.addEventListener('DOMContentLoaded', () => {
    loadState();
    updateHeaderDate();
    renderTodayView();
    renderMobility('full');
    renderHistoryView();
    renderLibraryView();
    registerServiceWorker();
  });
}

function loadState() {
  const savedIndex = getStoredValue('1_10_step_idx');
  if (savedIndex !== null) {
    const parsedIndex = parseInt(savedIndex, 10);
    if (Number.isFinite(parsedIndex)) {
      currentStepIndex = ((parsedIndex % 8) + 8) % 8;
    }
  }

  const savedHistory = getStoredValue('1_10_history');
  if (savedHistory) {
    try {
      history = JSON.parse(savedHistory);
    } catch (e) {
      history = [...DEFAULT_HISTORY].reverse();
    }
  } else {
    history = [...DEFAULT_HISTORY].reverse();
    saveHistory();
  }

  // Derive stepIndex if available from history
  if (history.length > 0 && savedIndex === null) {
    const lastEntry = history[0]; // newest is first
    currentStepIndex = (lastEntry.stepIndex + 1) % 8;
  }
}

function saveState() {
  setStoredValue('1_10_step_idx', String(currentStepIndex));
  saveHistory();
}

function saveHistory() {
  setStoredValue('1_10_history', JSON.stringify(history));
}

function updateHeaderDate() {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const dateStr = new Date().toLocaleDateString('en-US', options);
  document.getElementById('header-date').innerText = dateStr;
}

// TODAY'S VIEW RENDERING
function renderTodayView() {
  const pattern = PATTERNS[currentStepIndex];

  document.getElementById('hero-step-pill').innerText = `Step ${currentStepIndex + 1} of 8`;
  const catTag = document.getElementById('hero-category-tag');
  catTag.innerText = pattern.category;
  catTag.className = 'tag ' + (pattern.category === 'PUSH' ? 'tag-push' : (pattern.category === 'PULL' ? 'tag-pull' : 'tag-legs'));

  document.getElementById('hero-pattern-tag').innerText = pattern.name;
  document.getElementById('hero-exercise-name').innerText = pattern.primary;
  document.getElementById('hero-pattern-desc').innerText = pattern.desc;

  // Variations select
  const select = document.getElementById('variation-select');
  select.innerHTML = '';
  pattern.variations.forEach((v, idx) => {
    const opt = document.createElement('option');
    opt.value = v;
    opt.innerText = v;
    if (idx === 1) opt.selected = true; // Default to Level 2 (Primary)
    select.appendChild(opt);
  });

  // Matched mobility
  document.getElementById('hero-mobility-name').innerText = pattern.mobilityName;

  // Look up last performance
  renderLastTimePerformance(pattern);

  // Update Steppers
  updateStepperDisplay();
}

function renderLastTimePerformance(pattern) {
  const lastTimeBox = document.getElementById('last-time-box');
  const lastTimeStat = document.getElementById('last-time-stat');
  const lastTimeDetail = document.getElementById('last-time-detail');

  // Find most recent matching pattern in history
  const match = history.find(item => item.patternId === pattern.id || item.patternName === pattern.name);

  if (match) {
    const formattedDate = new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    lastTimeStat.innerText = `${match.reps} reps/min × ${match.duration} min (${match.totalReps} total reps)`;
    lastTimeDetail.innerText = `${match.variation} on ${formattedDate}${match.notes ? ` • "${match.notes}"` : ''}`;
    lastTimeBox.style.display = 'block';

    // Pre-seed steppers with what worked last time
    currentReps = match.reps;
    currentDuration = match.duration;
  } else {
    lastTimeStat.innerText = 'First session for this movement!';
    lastTimeDetail.innerText = 'Start with 3–5 reps/min for 10 minutes EMOM.';
    currentReps = 5;
    currentDuration = 10;
  }
}

// STEPPERS
function adjustReps(delta) {
  currentReps = Math.max(1, Math.min(10, currentReps + delta));
  updateStepperDisplay();
}

function adjustDuration(delta) {
  currentDuration = Math.max(10, Math.min(60, currentDuration + (delta * 5)));
  updateStepperDisplay();
}

function updateStepperDisplay() {
  document.getElementById('reps-val').innerText = currentReps;
  document.getElementById('duration-val').innerText = currentDuration;
  const total = currentReps * currentDuration;
  document.getElementById('total-volume-calc').innerText = `${total} Total Reps`;
}

function toggleMobilityDone() {
  const cb = document.getElementById('mobility-done-check');
  cb.checked = !cb.checked;
}

// WORKOUT LOGGING
function logWorkout() {
  const pattern = PATTERNS[currentStepIndex];
  const variation = document.getElementById('variation-select').value;
  const mobilityDone = document.getElementById('mobility-done-check').checked;
  const notes = document.getElementById('workout-notes').value.trim();
  const totalReps = currentReps * currentDuration;

  const entry = {
    id: 'log-' + Date.now(),
    date: new Date().toISOString().split('T')[0],
    stepIndex: currentStepIndex,
    patternId: pattern.id,
    patternName: pattern.name,
    exercise: pattern.primary,
    variation: variation,
    reps: currentReps,
    duration: currentDuration,
    totalReps: totalReps,
    mobilityDone: mobilityDone,
    notes: notes
  };

  history.unshift(entry); // Newest first

  // Advance step in rolling queue
  currentStepIndex = (currentStepIndex + 1) % 8;
  saveState();

  // Reset inputs & re-render
  document.getElementById('workout-notes').value = '';
  renderTodayView();
  renderHistoryView();

  // Gentle feedback
  alert(`Great job! Logged ${totalReps} total reps of ${pattern.primary}. Advanced to Step ${currentStepIndex + 1} for next session!`);
}

function skipToRestDay() {
  const confirmRest = confirm('Take a rest day today? The 8-step rolling queue will pause right here and be ready when you return.');
  if (confirmRest) {
    alert('Rest day acknowledged. Consistency beats perfection!');
  }
}

// TIMER SETUP
function startTimerForToday() {
  timerTotalRounds = currentDuration;
  timerTotalSeconds = currentDuration * 60;
  timerCurrentRound = 1;
  timerCurrentSecondInRound = 60;

  updateTimerWorkoutDetails();
  document.getElementById('timer-round-badge').innerText = `Minute 1 of ${timerTotalRounds}`;

  switchTab('tab-timer');
  resetTimerUI();
}

function toggleTimer() {
  if (timerRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

async function startTimer() {
  if (timerInterval) return;

  initAudio();
  timerRunning = true;
  document.getElementById('timer-start-btn').innerText = 'Pause';
  document.getElementById('timer-start-btn').className = 'timer-btn pause';

  // Request Wake Lock if supported
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
    }
  } catch (err) {}

  if (!timerRunning || timerInterval) return;
  timerInterval = setInterval(timerTick, 1000);
}

function pauseTimer() {
  timerRunning = false;
  clearInterval(timerInterval);
  timerInterval = null;
  document.getElementById('timer-start-btn').innerText = 'Resume';
  document.getElementById('timer-start-btn').className = 'timer-btn start';

  if (wakeLock !== null) {
    wakeLock.release().then(() => { wakeLock = null; });
  }
}

function resetTimer() {
  pauseTimer();
  updateTimerWorkoutDetails();
  timerTotalSeconds = currentDuration * 60;
  timerCurrentRound = 1;
  timerCurrentSecondInRound = 60;
  resetTimerUI();
  document.getElementById('timer-start-btn').innerText = 'Start EMOM';
}

function resetTimerUI() {
  document.getElementById('timer-seconds').innerText = '60';
  document.getElementById('timer-round-badge').innerText = `Minute 1 of ${timerTotalRounds}`;
  updateTotalRemainDisplay();
  setProgress(1);
}

function updateTimerWorkoutDetails() {
  const pattern = PATTERNS[currentStepIndex];
  timerExerciseName = pattern.primary;
  document.getElementById('timer-exercise-name').innerText = pattern.primary;
  document.getElementById('timer-reps-target').innerText = `${currentReps} reps at top of every minute`;
}

function timerTick() {
  timerTotalSeconds--;
  timerCurrentSecondInRound--;

  if (timerCurrentSecondInRound < 0) {
    timerCurrentRound++;
    if (timerCurrentRound > timerTotalRounds) {
      finishTimer();
      return;
    }
    timerCurrentSecondInRound = 59;
  }

  // Beep triggers
  const audioEnabled = document.getElementById('timer-audio-check').checked;
  if (audioEnabled) {
    if (timerCurrentSecondInRound === 3 || timerCurrentSecondInRound === 2 || timerCurrentSecondInRound === 1) {
      playBeep(440, 0.15); // short low beep
    } else if (timerCurrentSecondInRound === 0) {
      playBeep(880, 0.35); // high beep at top of minute
    }
  }

  // Update UI
  document.getElementById('timer-seconds').innerText = timerCurrentSecondInRound;
  document.getElementById('timer-round-badge').innerText = `Minute ${timerCurrentRound} of ${timerTotalRounds}`;
  updateTotalRemainDisplay();
  setProgress(timerCurrentSecondInRound / 60);
}

function updateTotalRemainDisplay() {
  const m = Math.floor(timerTotalSeconds / 60);
  const s = timerTotalSeconds % 60;
  document.getElementById('timer-total-remain').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
}

function setProgress(fraction) {
  const circle = document.getElementById('timer-progress');
  const circumference = 653.45;
  const offset = circumference * (1 - fraction);
  circle.style.strokeDashoffset = offset;
}

function finishTimer() {
  pauseTimer();
  playBeep(880, 0.6);
  setTimeout(() => playBeep(1174, 0.8), 300);

  alert(`Workout Complete! You finished ${timerTotalRounds} minutes EMOM of ${timerExerciseName || PATTERNS[currentStepIndex].primary}. Ready to log!`);
  switchTab('tab-today');
}

// WEB AUDIO SYNTHESIS
function initAudio() {
  if (!audioContext) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioContext = new AudioContext();
  }
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }
}

function playBeep(freq, duration) {
  if (!audioContext) return;
  try {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioContext.currentTime);
    gain.gain.setValueAtTime(0.3, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start();
    osc.stop(audioContext.currentTime + duration);
  } catch (e) {}
}

function toggleAudio() {
  initAudio();
}

// MOBILITY RENDERING
function renderMobility(key) {
  const routine = MOBILITY_DATA[key];
  if (!routine) return;

  document.getElementById('mob-tab-full').className = 'tag ' + (key === 'full' ? 'tag-push' : '');
  document.getElementById('mob-tab-lower').className = 'tag ' + (key === 'lower' ? 'tag-legs' : '');
  document.getElementById('mob-tab-warmup').className = 'tag ' + (key === 'warmup' ? 'tag-pull' : '');

  document.getElementById('mobility-routine-title').innerText = routine.title;
  document.getElementById('mobility-routine-subtitle').innerText = routine.subtitle;

  const container = document.getElementById('mobility-list-container');
  container.innerHTML = '';

  routine.moves.forEach(m => {
    const item = document.createElement('div');
    item.className = 'mobility-item';
    const num = document.createElement('div');
    num.className = 'mob-num';
    num.textContent = `${m.num}.`;

    const details = document.createElement('div');
    details.className = 'mob-details';

    const name = document.createElement('div');
    name.className = 'mob-name';
    name.textContent = m.name;

    const reps = document.createElement('div');
    reps.className = 'mob-reps';
    reps.textContent = m.reps;

    const cue = document.createElement('div');
    cue.className = 'mob-cue';
    cue.textContent = m.cue;

    details.append(name, reps, cue);
    item.append(num, details);
    container.appendChild(item);
  });
}

// HISTORY RENDERING
function renderHistoryView() {
  document.getElementById('total-workouts-count').innerText = history.length;
  const totalReps = history.reduce((sum, h) => sum + (h.totalReps || 0), 0);
  document.getElementById('total-reps-count').innerText = totalReps;
  document.getElementById('current-step-badge').innerText = `Step ${currentStepIndex + 1}`;

  const list = document.getElementById('history-list');
  list.innerHTML = '';

  if (history.length === 0) {
    list.innerHTML = '<div style="text-align:center; color: var(--text-muted); padding: 20px;">No workouts logged yet.</div>';
    return;
  }

  history.forEach(item => {
    const el = document.createElement('div');
    el.className = 'history-item';
    const dateFormatted = new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const header = document.createElement('div');
    header.className = 'history-header';

    const exercise = document.createElement('span');
    exercise.className = 'history-exercise';
    exercise.textContent = item.exercise;

    const date = document.createElement('span');
    date.className = 'history-date';
    date.textContent = dateFormatted;

    header.append(exercise, date);

    const stats = document.createElement('div');
    stats.className = 'history-stats';

    const reps = document.createElement('span');
    reps.textContent = `${item.reps} reps/min`;

    const duration = document.createElement('span');
    duration.textContent = `${item.duration} mins`;

    const total = document.createElement('span');
    total.className = 'history-stat-highlight';
    total.textContent = `${item.totalReps} total reps`;

    stats.append(reps, duration, total);

    if (item.mobilityDone) {
      const mobility = document.createElement('span');
      mobility.style.color = 'var(--blue)';
      mobility.textContent = '✓ Mobility';
      stats.appendChild(mobility);
    }

    const variation = document.createElement('div');
    variation.style.fontSize = '12px';
    variation.style.color = 'var(--text-secondary)';
    variation.style.marginTop = '4px';
    variation.textContent = item.variation || '';

    el.append(header, stats, variation);

    if (item.notes) {
      const notes = document.createElement('div');
      notes.className = 'history-notes';
      notes.textContent = `"${item.notes}"`;
      el.appendChild(notes);
    }

    list.appendChild(el);
  });
}

function exportHistoryCSV() {
  if (history.length === 0) {
    alert('No workout history to export.');
    return;
  }

  let csv = 'Date,Step,Movement Pattern,Exercise,Variation,RepsPerMin,DurationMin,TotalReps,MobilityCompleted,Notes\n';
  history.forEach(h => {
    const cleanPatternName = (h.patternName || '').replace(/"/g, '""');
    const cleanExercise = (h.exercise || '').replace(/"/g, '""');
    const cleanVariation = (h.variation || '').replace(/"/g, '""');
    const cleanNotes = (h.notes || '').replace(/"/g, '""');
    csv += `"${h.date}","${((h.stepIndex || 0) + 1)}","${cleanPatternName}","${cleanExercise}","${cleanVariation}",${h.reps},${h.duration},${h.totalReps},"${h.mobilityDone ? 'Yes' : 'No'}","${cleanNotes}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `1-10-method-workout-history-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    a.remove();
    URL.revokeObjectURL(url);
  }, 0);
}

// LIBRARY RENDERING
function renderLibraryView() {
  const container = document.getElementById('library-matrix-container');
  container.innerHTML = '';

  PATTERNS.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'history-item';
    card.style.marginBottom = '10px';
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = '4px';

    const title = document.createElement('strong');
    title.style.color = '#fff';
    title.style.fontSize = '14px';
    title.textContent = `Step ${idx + 1}: ${p.primary}`;

    const category = document.createElement('span');
    category.className = `tag ${p.category === 'PUSH' ? 'tag-push' : (p.category === 'PULL' ? 'tag-pull' : 'tag-legs')}`;
    category.textContent = p.category;

    header.append(title, category);

    const description = document.createElement('div');
    description.style.fontSize = '12px';
    description.style.color = 'var(--text-secondary)';
    description.style.marginBottom = '6px';
    description.textContent = `${p.name} • ${p.desc}`;

    const variations = document.createElement('div');
    variations.style.fontSize = '11px';
    variations.style.color = 'var(--text-muted)';
    variations.style.lineHeight = '1.4';

    p.variations.forEach(v => {
      const line = document.createElement('div');
      line.textContent = `• ${v}`;
      variations.appendChild(line);
    });

    card.append(header, description, variations);
    container.appendChild(card);
  });
}

// TABS
function switchTab(tabId) {
  document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('nav .nav-item').forEach(el => el.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');

  const navButtons = document.querySelectorAll('nav .nav-item');
  if (tabId === 'tab-today') navButtons[0].classList.add('active');
  if (tabId === 'tab-timer') navButtons[1].classList.add('active');
  if (tabId === 'tab-mobility') navButtons[2].classList.add('active');
  if (tabId === 'tab-history') navButtons[3].classList.add('active');
  if (tabId === 'tab-library') navButtons[4].classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// SERVICE WORKER
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('1-10 Method PWA Service Worker Registered'))
      .catch(err => console.log('SW registration error:', err));
  }
}
