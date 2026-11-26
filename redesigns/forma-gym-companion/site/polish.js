/* Forma polish layer.
   Loads after experience.js and catalogue.js, before boot.js, and overrides a few
   functions the same way experience.js overrides app.js. The original files are
   untouched. What it does:
   1. One navigation model with the same names everywhere: Today, Train, Food, Quests, More.
   2. A Today screen that leads with today's session.
   3. A copy pass on everything rendered: sentence case instead of ALL CAPS labels,
      no external-link arrows on in-app buttons, no trailing periods on headings.
   4. Set dots, Forma's signature: one dot per working set, wherever sets are listed. */

const ICONS = {
  today: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  train: '<path d="M14.4 14.4 9.6 9.6"/><path d="M18.66 21.51a2 2 0 1 1-2.83-2.83l-1.77 1.77a2 2 0 1 1-2.83-2.83l6.37-6.37a2 2 0 1 1 2.83 2.83l-1.77 1.77a2 2 0 1 1 2.83 2.83z"/><path d="m21.5 21.5-1.4-1.4"/><path d="M3.9 3.9 2.5 2.5"/><path d="M6.4 12.77a2 2 0 1 1-2.83-2.83l1.77-1.77a2 2 0 1 1-2.83-2.83l2.83-2.83a2 2 0 1 1 2.83 2.83l1.77-1.77a2 2 0 1 1 2.83 2.83z"/>',
  food: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  quests: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
  progress: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
  library: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  recipes: '<path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 21h10"/><path d="M19.5 12 22 6"/>',
  shop: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
  mascots: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/>',
  games: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/>',
  health: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  guide: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  profile: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  account: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  more: '<path d="M4 6h16M4 12h16M4 18h16"/>'
};
const icon = key => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${ICONS[key] || ''}</svg>`;

const NAV_PRIMARY = [['today', 'Today', 'today'], ['workout', 'Train', 'train'], ['nutrition', 'Food', 'food'], ['quests', 'Quests', 'quests']];
const NAV_MORE = [['progress', 'Progress', 'progress'], ['library', 'Exercises', 'library'], ['recipes', 'Recipes', 'recipes'], ['shop', 'Rewards shop', 'shop'], ['mascots', 'Mascots', 'mascots'], ['games', 'Arcade', 'games'], ['health', 'Health apps', 'health'], ['guide', 'How Forma works', 'guide'], ['profile', 'My plan', 'profile'], ['account', 'Account & sync', 'account']];
const PAGE_NAMES = Object.fromEntries([...NAV_PRIMARY, ...NAV_MORE, ['setup', 'Set up your plan']].map(([id, name]) => [id, name]));

function polishLink([id, name, ic]) {
  if (id === 'account') return `<button class="nav-account" onclick="showAccount()">${icon(ic)}<span>${name}</span></button>`;
  const on = view === id;
  return `<a href="#${id}" class="${on ? 'active' : ''}" ${on ? 'aria-current="page"' : ''}>${icon(ic)}<span>${name}</span></a>`;
}

function buildNavigation() {
  return `<div class="nav-group">${NAV_PRIMARY.map(polishLink).join('')}</div>` +
    `<div class="nav-group"><span class="nav-group-label">More</span>${NAV_MORE.map(polishLink).join('')}</div>`;
}

function renderAreaNavigation() {
  $('#areaNav').innerHTML = '';
  $('#bottomNav').innerHTML = NAV_PRIMARY.map(([id, name, ic]) =>
    `<a href="#${id}" class="${view === id ? 'active' : ''}" ${view === id ? 'aria-current="page"' : ''}>${icon(ic)}<span>${name}</span></a>`).join('') +
    `<button aria-label="Open all sections" onclick="toggleSidebar()">${icon('more')}<span>More</span></button>`;
}

/* Today: a grid. The session (with its 3D dumbbell) leads; mission, level and the week sit beside it. */
function setDots(n, label = true) {
  return `<span class="set-dots" ${label ? `aria-label="${n} working sets"` : 'aria-hidden="true"'}>${'<i></i>'.repeat(Math.max(0, n))}</span>`;
}

const VOLT_PALETTE = '{"bg":"#5b2ee0","surface":"#5b2ee0","ink":"#ffffff","accent":"#d4ff3a"}';
function object3D(spec, label, extra = '') {
  return `<div class="obj3d" data-product="assets/objects/product-render/specs/${spec}.json" data-product-place="card" data-product-color="volt" data-product-params='{"turn":1}' data-product-palette='${VOLT_PALETTE}' aria-label="${label}" role="img" ${extra}></div>`;
}

function sessionCard() {
  const p = selectedPlan(), rest = isRecoveryMission(), setupDone = !!state.onboarding?.complete;
  const sets = p.reduce((a, x) => a + x.sets, 0);
  const label = active ? 'In progress' : rest ? 'Rest day · next session' : 'Today’s session';
  const primary = active
    ? `<button class="btn" onclick="go('workout')">Resume workout</button>`
    : `<button class="btn ${rest || !setupDone ? 'secondary' : ''}" ${p.length ? '' : 'disabled'} onclick="startSession()">${rest ? 'Train anyway' : 'Start workout'}</button>`;
  const strip = p.map(x => {
    const e = exercises[x.key];
    return `<li><button class="ts-thumb" onclick="showExercise(${x.key})" aria-label="${esc(e.name)}, ${x.sets} × ${x.reps}"><img src="${e.images[0]}" alt="" loading="lazy"></button>${setDots(x.sets, false)}</li>`;
  }).join('');
  return `<section class="today-session" aria-labelledby="todaySessionTitle">
    <div class="ts-copy"><span class="ts-label">${label}</span><h2 id="todaySessionTitle">${esc(active ? active.type : sessionType())}</h2>
    <p class="ts-meta"><b>${p.length}</b> moves <b>${sets}</b> sets <b>${state.profile.duration}</b> min</p>${primary}</div>
    ${object3D('dumbbell', 'A volt-green dumbbell', 'id="todayDumbbell"')}
    ${p.length ? `<ol class="ts-strip">${strip}</ol>` : ''}
  </section>`;
}

function missionMini() {
  const box = document.createElement('div');
  box.innerHTML = dailyMissionCard();
  const title = box.querySelector('h2')?.textContent.trim().replace(/\.$/, '') || 'Today’s mission';
  const count = box.querySelector('.mission-ring span')?.textContent.trim() || '0/3';
  const [done, total] = count.split('/').map(Number);
  const next = [...box.querySelectorAll('.mission-step-list li')].find(li => !li.classList.contains('step-done'));
  const nextTitle = next?.querySelector('b')?.textContent.trim();
  const action = next?.querySelector('button')?.getAttribute('onclick') || "go('quests')";
  return `<section class="tile mission-mini"><div class="mm-ring" style="--done:${total ? done / total * 100 : 0}%"><span>${done}<small>/${total}</small></span></div>
    <div class="mm-copy"><span class="tile-label">Mission</span><h3>${title}</h3>${nextTitle ? `<button class="text-button" onclick="${action.replace(/"/g, '&quot;')}">Next: ${nextTitle}</button>` : '<span class="tile-label">Complete</span>'}</div></section>`;
}

function levelTile() {
  const g = gameStats();
  return `<button class="tile level-tile" onclick="go('mascots')">${mascotPortrait(currentMascot(), 'tiny')}
    <span class="lt-copy"><span class="tile-label">Level ${g.level}</span><span class="lt-xp"><b>${g.into}</b> / 200 XP</span><span class="xp-track"><i style="width:${g.into / 2}%"></i></span></span></button>`;
}

function weekTiles() {
  const week = state.sessions.filter(s => s.date >= weekStart()).length;
  const meals = (state.foods[today()] || []).length;
  const quests = dailyQuests().filter(q => q.claimed).length;
  const tile = (n, of, label, route) => `<button class="tile stat-tile" onclick="go('${route}')"><b>${n}${of ? `<small>/${of}</small>` : ''}</b><span>${label}</span></button>`;
  return `<div class="stat-row">${tile(week, state.profile.days, 'Sessions this week', 'progress')}${tile(meals, 0, 'Meals logged today', 'nutrition')}${tile(quests, 3, 'Quests collected', 'quests')}</div>`;
}

function dashboard() {
  const setupDone = !!state.onboarding?.complete;
  const date = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
  const head = `<div class="today-head"><h1>${date}</h1></div>`;
  const setup = setupDone ? '' : `<section class="start-banner"><div><h2>Let’s make your first plan</h2><div class="start-actions"><button class="btn" onclick="openSetupFlow()">Personalize my plan</button><button class="text-button" onclick="state.introSeen=true;state.onboarding={...state.onboarding,complete:true,dismissed:true};state.profile.equipment=[...basicEquipment];save();render()">Use the basic plan</button></div></div></section>`;
  const tour = setupDone && !state.introSeen ? `<div class="tour-line"><button class="text-button" onclick="showAppTour()">Take the 1-minute tour</button><button class="text-button quiet" onclick="state.introSeen=true;save();render()">Dismiss</button></div>` : '';
  const meal = `<button class="tile meal-tile" onclick="showMealPicker()">${icon('food')}<span><span class="tile-label">Next meal</span><b>Let Forma pick</b></span></button>`;
  return head + setup + tour + `<div class="today-grid"><div class="tg-main">${sessionCard()}${weekTiles()}</div><div class="tg-side">${missionMini()}${levelTile()}${meal}</div></div>`;
}

/* Quests: the reward gets a 3D trophy */
function questsHero() {
  const g = gameStats();
  return `<section class="quests-hero"><div class="qh-copy"><span class="ts-label">Level ${g.level}</span><h2>${200 - g.into} XP to level ${g.level + 1}</h2>
    <span class="xp-track"><i style="width:${g.into / 2}%"></i></span><p class="ts-meta"><b>◈ ${coinBalance()}</b> coins to spend</p></div>${object3D('trophy', 'A volt-green trophy')}</section>`;
}

/* Copy pass. Runs after every render and on anything added later (dialogs, toasts). */
const ACRONYMS = /\b(xp|acsm|cdc|usda|bmr|tdee|rpe|rir|pr|ai|uk|us|id|kg|kcal)\b/g;
const DECOR = /^[⚙✦♧]\s*/;

function sentenceCase(text) {
  const lower = text.toLowerCase().replace(ACRONYMS, m => m.toUpperCase());
  return lower.replace(/(^\s*|[.?!]\s+)(\p{L})/gu, (m, sp, ch) => sp + ch.toUpperCase());
}

function isShouting(text) {
  const t = text.trim();
  if (t.length < 4 || t !== t.toUpperCase()) return false;
  const letters = t.replace(/\b(XP|ACSM|CDC|USDA|BMR|TDEE|RPE|RIR|PR|AI|UK|US|ID|KG|KCAL)\b/g, '').replace(/[^A-Z]/g, '');
  return letters.length >= 3;
}

function polishText(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const edits = [];
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const parent = node.parentElement;
    if (!parent || parent.closest('script,style,svg,input,textarea,[data-keep-case]')) continue;
    let t = node.nodeValue, next = t;
    if (isShouting(next)) next = sentenceCase(next);
    if (next.includes('↗')) {
      const link = parent.closest('a');
      const external = link && (/^https?:/.test(link.getAttribute('href') || '') || link.target === '_blank');
      if (!external) next = next.replace(/\s*↗/g, '');
    }
    if (parent.closest('button') && DECOR.test(next)) next = next.replace(DECOR, '');
    if (next !== t) edits.push([node, next]);
  }
  edits.forEach(([node, value]) => { node.nodeValue = value; });
  root.querySelectorAll('h1,h2,h3').forEach(h => {
    const text = h.textContent.trim();
    if (/^[^.?!]+\.$/.test(text)) {
      const last = [...h.childNodes].reverse().find(n => n.nodeType === 3 && n.nodeValue.trim());
      if (last) last.nodeValue = last.nodeValue.replace(/\.(\s*)$/, '$1');
    }
  });
  root.querySelectorAll('.clean-workout-plan .row small:not([data-dots])').forEach(small => {
    const m = small.textContent.match(/^(\d+)\s*×/);
    small.dataset.dots = '1';
    if (m) small.insertAdjacentHTML('beforeend', setDots(+m[1]));
  });
}

function polishChrome() {
  const crumb = $('#breadcrumb');
  if (crumb) crumb.textContent = PAGE_NAMES[view] || 'Forma';
  const title = document.querySelector('#app .topline h1');
  if (title && view !== 'today' && PAGE_NAMES[view]) title.textContent = PAGE_NAMES[view];
  document.title = `${PAGE_NAMES[view] || 'Today'} · Forma`;
}

const originalRender = render;
render = function () {
  originalRender();
  polishChrome();
  if (view === 'quests' && !document.querySelector('.quests-hero')) document.querySelector('#app .topline')?.insertAdjacentHTML('afterend', questsHero());
  polishText(document.body);
  window.formaMount3D?.();
};

let polishQueued = false;
new MutationObserver(() => {
  if (polishQueued) return;
  polishQueued = true;
  requestAnimationFrame(() => { polishQueued = false; polishText(document.body); });
}).observe(document.documentElement, { childList: true, subtree: true });
