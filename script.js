/* =============================================
   NOIZZY — script.js  (Upgraded Full Version)
   ============================================= */

'use strict';

/* ══════════════════════════════════════════════
   DATA: SONGS  (real thumbnails + working audio)
   ══════════════════════════════════════════════ */
const SONGS = [

  /* ══ HINDI — Arijit Singh ══ */
  {
    id: 1,
    name: "Tum Hi Ho",
    artist: "Arijit Singh",
    category: "hindi",
    image: "https://i.scdn.co/image/ab67616d0000b2733be2eacadb3442ff6417c9d7",
    //audio: "/Users/mishti/Downloads/Tum Hi Ho - Djjohal.fm.mp3",
    
  },
  {
    id: 2,
    name: "Channa Mereya",
    artist: "Arijit Singh",
    category: "hindi",
    image: "https://c.saavncdn.com/103/Channa-Mereya-From-Ae-Dil-Hai-Mushkil-Hindi-2016-500x500.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 3,
    name: "Kesariya",
    artist: "Arijit Singh",
    category: "hindi",
    image: "https://i.pinimg.com/736x/f6/7f/d3/f67fd38b97f1f7fefc47a4e10bbfb46c.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    id: 4,
    name: "Ik Vaari Aa",
    artist: "Arijit Singh",
    category: "hindi",
    image: "https://i1.sndcdn.com/artworks-000222824094-vb9n41-t500x500.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },

  /* ══ HINDI — Anuv Jain ══ */
  {
    id: 5,
    name: "Baarishein",
    artist: "Anuv Jain",
    category: "hindi",
    image: "https://i.pinimg.com/736x/5f/21/a3/5f21a3da043eab09b08dde47a0bcc807.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  },
  {
    id: 6,
    name: "Mishri",
    artist: "Anuv Jain",
    category: "hindi",
    image: "https://c.saavncdn.com/945/Mishri-Hindi-2023-20230919173001-500x500.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  },
  {
    id: 7,
    name: "Gul",
    artist: "Anuv Jain",
    category: "hindi",
    image: "https://c.saavncdn.com/266/Gul-Hindi-2021-20210706151615-500x500.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
  },
  {
    id: 8,
    name: "Jo Tum Mere Ho",
    artist: "Anuv Jain",
    category: "hindi",
    image: "https://c.saavncdn.com/401/Jo-Tum-Mere-Ho-Hindi-2024-20240731053953-500x500.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
  },

  /* ══ ENGLISH — Taylor Swift ══ */
  {
    id: 9,
    name: "Shake It Off",
    artist: "Taylor Swift",
    category: "english",
    image: "https://i.pinimg.com/564x/ef/60/f0/ef60f01baa446bc57d292b28fc57f50f.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
  },
  {
    id: 10,
    name: "Blank Space",
    artist: "Taylor Swift",
    category: "english",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7c/Taylor_Swift_-_Blank_Space_%28Official_Single_Cover%29.png",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
  },
  {
    id: 11,
    name: "Anti-Hero",
    artist: "Taylor Swift",
    category: "english",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Taylor_Swift_-_Anti-Hero.png",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
  },
  {
    id: 12,
    name: "Love Story",
    artist: "Taylor Swift",
    category: "english",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Taylor_Swift_-_Love_Story.png/250px-Taylor_Swift_-_Love_Story.png",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
  },

  /* ══ PUNJABI — AP Dhillon ══ */
  {
    id: 13,
    name: "With You",
    artist: "AP Dhillon",
    category: "punjabi",
    image: "https://i.ytimg.com/vi/mZQH8CPQ-wo/maxresdefault.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
  },
  {
    id: 14,
    name: "Excuses",
    artist: "AP Dhillon",
    category: "punjabi",
    image: "https://c.saavncdn.com/890/Excuses-English-2021-20210930112054-500x500.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3"
  },
  {
    id: 15,
    name: "Brown Munde",
    artist: "AP Dhillon",
    category: "punjabi",
    image: "https://i.ytimg.com/vi/dpERuTFk8fw/maxresdefault.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3"
  },
  {
    id: 16,
    name: "Dil Nu",
    artist: "AP Dhillon",
    category: "punjabi",
    image: "https://c.saavncdn.com/300/Dil-Nu-Lofi-Punjabi-2022-20221108011931-500x500.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3"
  },

  /* ══ PUNJABI — Diljit Dosanjh ══ */
  {
    id: 17,
    name: "Lover",
    artist: "Diljit Dosanjh",
    category: "punjabi",
    image: "https://i.scdn.co/image/ab67616d0000b273fb47bdcc34dd45740c7816d7",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: 18,
    name: "Ikk Kudi",
    artist: "Diljit Dosanjh",
    category: "punjabi",
    image: "https://c.saavncdn.com/777/Ik-Kudi-Hindi-2023-20230718011832-500x500.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 19,
    name: "Do You Know",
    artist: "Diljit Dosanjh",
    category: "punjabi",
    image: "https://c.saavncdn.com/810/Do-You-Know-Punjabi-2016-20240808172432-500x500.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },

  /* ══ PUNJABI — Karan Aujla ══ */
  {
    id: 20,
    name: "Softly",
    artist: "Karan Aujla",
    category: "punjabi",
    image: "https://c.saavncdn.com/549/Softly-Slowed-Reverb-Punjabi-2023-20231027213519-500x500.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    id: 21,
    name: "Tauba Tauba",
    artist: "Karan Aujla",
    category: "punjabi",
    image: "https://c.saavncdn.com/500/Tauba-Tauba-Remix-Hindi-2024-20241010094005-500x500.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  },
  {
    id: 22,
    name: "YKWIM",
    artist: "Karan Aujla",
    category: "punjabi",
    image: "https://i.scdn.co/image/ab67616d0000b2739885ac12014e6ba429d2ad69",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  },
  {
    id: 23,
    name: "Winning Speech",
    artist: "Karan Aujla",
    category: "punjabi",
    image: "https://i.scdn.co/image/ab67616d0000b2738d23f6fbacb44af144e34715",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
  },

  /* ══ HARYANVI — Dhanda Nyoliwala ══ */
  {
    id: 24,
    name: "Russian Bandana",
    artist: "Dhanda Nyoliwala",
    category: "haryanvi",
    image: "https://c.saavncdn.com/414/Russian-Bandana-Lo-Fi-Hindi-2024-20241016121647-500x500.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
  },
  {
    id: 25,
    name: "Mia Cara",
    artist: "Dhanda Nyoliwala",
    category: "haryanvi",
    image: "https://c.saavncdn.com/843/Mia-Cara-Hindi-2024-20240626053306-500x500.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
  },
  {
    id: 26,
    name: "Not Guilty",
    artist: "Dhanda Nyoliwala",
    category: "haryanvi",
    image: "https://i.ytimg.com/vi/E7ergOnpO1Q/maxresdefault.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
  },

  /* ══ HARYANVI — Mitta Ror ══ */
  {
    id: 27,
    name: "Winter Meeting",
    artist: "Mitta Ror",
    category: "haryanvi",
    image: "https://c.saavncdn.com/880/Winter-Meeting-Hindi-2025-20251225150355-500x500.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
  },
  {
    id: 28,
    name: "Sheesha",
    artist: "Mitta Ror",
    category: "haryanvi",
    image: "https://c.saavncdn.com/034/Sheesha-Hindi-2024-20240913171750-500x500.jpg",
    //audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
  },
];

/* ══════════════════════════════════════════════
   DATA: ARTISTS  (real Wikipedia / press images)
   ══════════════════════════════════════════════ */
const ARTISTS = [
  {
    id: "arijit",
    name: "Arijit Singh",
    genre: "Bollywood · Hindi",
    image: "https://i.scdn.co/image/ab6761610000e5eb5ba2d75eb08a2d672f9b69b7"
  },
  {
    id: "apdhillon",
    name: "AP Dhillon",
    genre: "Punjabi · Pop",
    image: "https://pearlentertainment.in/wp-content/uploads/classified-listing/2024/09/AP.Dhillon1.jpg"
  },
  {
    id: "diljit",
    name: "Diljit Dosanjh",
    genre: "Punjabi · Bollywood",
    image: "https://img.indiaforums.com/person/480x360/1/2900-diljit-dosanjh.webp"
  },
  {
    id: "karanaujla",
    name: "Karan Aujla",
    genre: "Punjabi · Hip-Hop",
    image: "https://yt3.googleusercontent.com/Da4zbrS4XLxzb3xVNT14aKr22aBg1blJCuCBppbYglO_uDmElYopgoDk7XV6UWNxthI96XOYrw=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    id: "taylorswift",
    name: "Taylor Swift",
    genre: "Pop · Country",
    image: "https://imageio.forbes.com/specials-images/imageserve/646e6affb9a2a85595a62c39/0x0.jpg?format=jpg&crop=1573,1574,x239,y256,safe&height=416&width=416&fit=bounds"
  },
  {
    id: "anuvjain",
    name: "Anuv Jain",
    genre: "Hindi · Indie",
    image: "https://imageio.forbes.com/specials-images/imageserve/681261b75fd3fe8b5ebbc7ef/0x0.jpg?format=jpg&crop=1229,1229,x146,y144,safe&height=416&width=416&fit=bounds"
  },
  {
    id: "dhanda",
    name: "Dhanda Nyoliwala",
    genre: "Haryanvi · Folk",
    image: "https://yt3.googleusercontent.com/W8VHZ7ECusfUstiaqh4l87Ul59UChBSRMpLAXsDN-dKmLMbY7EEpUKqF-WZ8zitU8toi_uldkA=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    id: "mittaror",
    name: "Mitta Ror",
    genre: "Haryanvi · Pop",
    image: "https://cdn-images.dzcdn.net/images/artist/f5a5dc0ae09c908d4991c2e3f40f8f90/1900x1900-000000-81-0-0.jpg"
  },
];

/* Artist name → artist id */
const ARTIST_ID_MAP = {
  "Arijit Singh":     "arijit",
  "AP Dhillon":       "apdhillon",
  "Diljit Dosanjh":   "diljit",
  "Karan Aujla":      "karanaujla",
  "Taylor Swift":     "taylorswift",
  "Anuv Jain":        "anuvjain",
  "Dhanda Nyoliwala": "dhanda",
  "Mitta Ror":        "mittaror",
};

/* ══════════════════════════════════════════════
   DATA: PLAYLISTS  (built-in + user-created)
   ══════════════════════════════════════════════ */
const BUILT_IN_PLAYLISTS = [
  {
    id: "tophits", name: "Top Hits", icon: "🔥",
    bg: "linear-gradient(135deg,#ff416c,#ff4b2b)",
    songIds: [1, 8, 12, 19, 5, 14, 23, 3],
    builtIn: true
  },
  {
    id: "party", name: "Party Mode", icon: "🎉",
    bg: "linear-gradient(135deg,#7c3aff,#ff3a8c)",
    songIds: [8, 14, 19, 20, 23, 16, 13, 21],
    builtIn: true
  },
  {
    id: "sad", name: "Sad Vibes", icon: "💙",
    bg: "linear-gradient(135deg,#2c3e50,#3498db)",
    songIds: [2, 5, 6, 9, 11, 4, 10, 7],
    builtIn: true
  },
  {
    id: "chill", name: "Chill Zone", icon: "🌙",
    bg: "linear-gradient(135deg,#0f2027,#00f5d4)",
    songIds: [6, 7, 9, 5, 4, 11, 3, 2],
    builtIn: true
  },
];

/* Load user playlists from localStorage */
function loadUserPlaylists() {
  try { return JSON.parse(localStorage.getItem('noizzy-playlists') || '[]'); }
  catch { return []; }
}
function saveUserPlaylists(arr) {
  localStorage.setItem('noizzy-playlists', JSON.stringify(arr));
}
function getAllPlaylists() {
  return [...BUILT_IN_PLAYLISTS, ...loadUserPlaylists()];
}

/* ══════════════════════════════════════════════
   AUTH STATE
   ══════════════════════════════════════════════ */
let currentUser = null;
try {
  const saved = localStorage.getItem('noizzy-user');
  if (saved) currentUser = JSON.parse(saved);
} catch {} 

/* ══════════════════════════════════════════════
   PLAYER STATE
   ══════════════════════════════════════════════ */
let currentSongIdx = -1;
let isPlaying      = false;
let isShuffle      = false;
let isRepeat       = false;
let currentQueue   = [...SONGS];
let isDragging     = false;
let addToPlSongId  = null;

/* ══════════════════════════════════════════════
   DOM REFERENCES
   ══════════════════════════════════════════════ */
const audio         = document.getElementById('audioEl');
const playIcon      = document.getElementById('playIcon');
const playerSong    = document.getElementById('playerSong');
const playerArtist  = document.getElementById('playerArtist');
const playerImg     = document.getElementById('playerImg');
const progressFill  = document.getElementById('progressFill');
const progressThumb = document.getElementById('progressThumb');
const progressBar   = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl    = document.getElementById('duration');
const volumeSlider  = document.getElementById('volumeSlider');
const volPercent    = document.getElementById('volPercent');
const volIcon       = document.getElementById('volIcon');
const searchInput   = document.getElementById('searchInput');
const loader        = document.getElementById('loader');
const heroVinyl     = document.getElementById('heroVinyl');

/* ══════════════════════════════════════════════
   LOADER
   ══════════════════════════════════════════════ */
window.addEventListener('load', () => {
  setTimeout(() => loader.classList.add('hidden'), 1600);
});

/* ══════════════════════════════════════════════
   THEME TOGGLE
   ══════════════════════════════════════════════ */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon  = theme === 'dark' ? 'fa-moon' : 'fa-sun';
  const label = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
  document.getElementById('themeIcon').className       = `fa-solid ${icon}`;
  document.getElementById('themeIconMobile').className = `fa-solid ${icon}`;
  document.getElementById('themeLabel').textContent    = label;
  localStorage.setItem('noizzy-theme', theme);
}
document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});
document.getElementById('themeToggleMobile').addEventListener('click', () => {
  applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});
applyTheme(localStorage.getItem('noizzy-theme') || 'dark');

/* ══════════════════════════════════════════════
   NAVIGATION
   ══════════════════════════════════════════════ */
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const sec = document.getElementById(id);
  if (sec) { sec.classList.add('active'); sec.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  const link = document.querySelector(`.nav-link[data-section="${id}"]`);
  if (link) link.classList.add('active');
}
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showSection(link.dataset.section);
    closeSidebar();
  });
});
function scrollToSection(id) { showSection(id); }

/* Mobile sidebar */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('navOverlay').classList.add('show');
});
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('navOverlay').classList.remove('show');
}

/* ══════════════════════════════════════════════
   AUTH LOGIC
   ══════════════════════════════════════════════ */
function openAuth() { document.getElementById('authOverlay').classList.add('show'); }
function closeAuth() { document.getElementById('authOverlay').classList.remove('show'); }
document.getElementById('authClose').addEventListener('click', closeAuth);
document.getElementById('authOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('authOverlay')) closeAuth();
});

function switchAuthTab(tab) {
  document.getElementById('loginTab').classList.toggle('active', tab === 'login');
  document.getElementById('signupTab').classList.toggle('active', tab === 'signup');
  document.getElementById('loginForm').classList.toggle('hidden', tab !== 'login');
  document.getElementById('signupForm').classList.toggle('hidden', tab !== 'signup');
  document.getElementById('authToast').textContent = '';
  document.getElementById('authToast').className = 'auth-toast';
}

function showAuthToast(msg, type = 'success') {
  const el = document.getElementById('authToast');
  el.textContent = msg;
  el.className = `auth-toast ${type}`;
  el.style.padding = '10px';
  el.style.height = 'auto';
}

function togglePw(id, btn) {
  const input = document.getElementById(id);
  const isText = input.type === 'text';
  input.type = isText ? 'password' : 'text';
  btn.querySelector('i').className = isText ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash';
}

function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pw    = document.getElementById('loginPassword').value;
  if (!email || !pw) { showAuthToast('Please fill in all fields.', 'error'); return; }
  // Simulate login: accept any valid email + pw length >= 4
  if (!email.includes('@')) { showAuthToast('Enter a valid email.', 'error'); return; }
  if (pw.length < 4) { showAuthToast('Password must be at least 4 characters.', 'error'); return; }
  const username = email.split('@')[0];
  currentUser = { username, email };
  localStorage.setItem('noizzy-user', JSON.stringify(currentUser));
  updateUserUI();
  showAuthToast(`Welcome back, ${username}! 🎵`, 'success');
  setTimeout(closeAuth, 1200);
}

function handleSignup() {
  const username = document.getElementById('signupUsername').value.trim();
  const email    = document.getElementById('signupEmail').value.trim();
  const pw       = document.getElementById('signupPassword').value;
  if (!username || !email || !pw) { showAuthToast('Please fill in all fields.', 'error'); return; }
  if (!email.includes('@')) { showAuthToast('Enter a valid email.', 'error'); return; }
  if (pw.length < 4) { showAuthToast('Password must be at least 4 characters.', 'error'); return; }
  currentUser = { username, email };
  localStorage.setItem('noizzy-user', JSON.stringify(currentUser));
  updateUserUI();
  showAuthToast(`Account created! Welcome, ${username}! 🎉`, 'success');
  setTimeout(closeAuth, 1200);
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('noizzy-user');
  updateUserUI();
}

function updateUserUI() {
  const sidebarUser    = document.getElementById('sidebarUser');
  const sidebarLoginBtn = document.getElementById('sidebarLoginBtn');
  const sidebarUsername = document.getElementById('sidebarUsername');
  if (currentUser) {
    sidebarUser.style.display    = 'flex';
    sidebarLoginBtn.style.display = 'none';
    sidebarUsername.textContent  = currentUser.username;
  } else {
    sidebarUser.style.display    = 'none';
    sidebarLoginBtn.style.display = 'flex';
  }
}

/* ══════════════════════════════════════════════
   CREATE PLAYLIST
   ══════════════════════════════════════════════ */
function openCreatePlaylist() {
  document.getElementById('newPlaylistName').value = '';
  document.getElementById('newPlaylistEmoji').value = '🎵';
  document.querySelectorAll('.playlist-emoji-pick span').forEach(s => s.classList.remove('selected'));
  document.getElementById('createPlaylistOverlay').classList.add('show');
}
function closeCreatePlaylist() {
  document.getElementById('createPlaylistOverlay').classList.remove('show');
}
document.getElementById('createPlaylistOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('createPlaylistOverlay')) closeCreatePlaylist();
});

function selectEmoji(el) {
  document.querySelectorAll('.playlist-emoji-pick span').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('newPlaylistEmoji').value = el.textContent;
}

function confirmCreatePlaylist() {
  const name  = document.getElementById('newPlaylistName').value.trim();
  const icon  = document.getElementById('newPlaylistEmoji').value || '🎵';
  if (!name) { alert('Please enter a playlist name.'); return; }
  const gradients = [
    'linear-gradient(135deg,#f093fb,#f5576c)',
    'linear-gradient(135deg,#4facfe,#00f2fe)',
    'linear-gradient(135deg,#43e97b,#38f9d7)',
    'linear-gradient(135deg,#fa709a,#fee140)',
    'linear-gradient(135deg,#a18cd1,#fbc2eb)',
    'linear-gradient(135deg,#ffecd2,#fcb69f)',
  ];
  const userPls = loadUserPlaylists();
  const newPl = {
    id:      'user_' + Date.now(),
    name,
    icon,
    bg:      gradients[Math.floor(Math.random() * gradients.length)],
    songIds: [],
    builtIn: false,
  };
  userPls.push(newPl);
  saveUserPlaylists(userPls);
  closeCreatePlaylist();
  renderPlaylists();
}

/* ══════════════════════════════════════════════
   ADD TO PLAYLIST
   ══════════════════════════════════════════════ */
function openAddToPlaylist() {
  const song = currentQueue[currentSongIdx];
  if (!song) return;
  addToPlSongId = song.id;
  document.getElementById('addToPlSongName').textContent = song.name;
  const list = document.getElementById('plSelectList');
  list.innerHTML = '';
  getAllPlaylists().forEach(pl => {
    const item = document.createElement('div');
    item.className = 'pl-list-item';
    const alreadyIn = pl.songIds.includes(song.id);
    item.innerHTML = `
      <span class="pl-icon">${pl.icon}</span>
      <span>${pl.name}</span>
      <span class="pl-count">${pl.songIds.length} songs</span>
      ${alreadyIn ? '<i class="fa-solid fa-check" style="color:var(--neon);margin-left:6px"></i>' : ''}
    `;
    if (!alreadyIn) {
      item.addEventListener('click', () => {
        addSongToPlaylist(pl.id, song.id);
        closeAddToPlaylist();
      });
    } else {
      item.style.opacity = '0.6';
    }
    list.appendChild(item);
  });
  document.getElementById('addToPlOverlay').classList.add('show');
}
function closeAddToPlaylist() {
  document.getElementById('addToPlOverlay').classList.remove('show');
}
document.getElementById('addToPlOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('addToPlOverlay')) closeAddToPlaylist();
});

function addSongToPlaylist(plId, songId) {
  // Check built-in first — we can't modify built-in, but we show user-created only
  const userPls = loadUserPlaylists();
  const pl = userPls.find(p => p.id === plId);
  if (pl) {
    if (!pl.songIds.includes(songId)) pl.songIds.push(songId);
    saveUserPlaylists(userPls);
    renderPlaylists();
  }
}

/* ══════════════════════════════════════════════
   RENDER: SONG CARD
   ══════════════════════════════════════════════ */
function createSongCard(song, idx, queue) {
  const card = document.createElement('div');
  card.className = 'song-card';
  card.dataset.id = song.id;
  const isCur = currentSongIdx !== -1 && currentQueue[currentSongIdx]?.id === song.id;
  if (isCur) card.classList.add('playing');
  card.innerHTML = `
    <div class="song-img-wrap">
      <img src="${song.image}" alt="${song.name}" loading="lazy"
        onerror="this.src='https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'"/>
      <div class="song-play-overlay">
        <div class="song-play-btn">
          <i class="fa-solid ${(isCur && isPlaying) ? 'fa-pause' : 'fa-play'}"></i>
        </div>
      </div>
      <span class="song-cat-badge">${song.category}</span>
    </div>
    <div class="song-info">
      <span class="song-name">${song.name}</span>
      <span class="song-artist">${song.artist}</span>
      <div class="song-playing-indicator">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  // Toggle play/pause if same song, else play new
  card.addEventListener('click', () => {
    const isCurrent = currentQueue[currentSongIdx]?.id === song.id;
    if (isCurrent) {
      if (isPlaying) {
        audio.pause(); isPlaying = false;
        heroVinyl.classList.remove('spinning');
      } else {
        audio.play(); isPlaying = true;
        heroVinyl.classList.add('spinning');
      }
      updatePlayUI();
      updateAllCards();
    } else {
      currentQueue = queue;
      playSong(idx);
    }
  });
  return card;
}

function renderSongs(container, songs) {
  container.innerHTML = '';
  if (!songs.length) {
    container.innerHTML = '<p style="color:var(--text2);padding:20px 0">No songs found.</p>';
    return;
  }
  songs.forEach((song, i) => container.appendChild(createSongCard(song, i, songs)));
}

/* ══════════════════════════════════════════════
   RENDER: FEATURED (home)
   ══════════════════════════════════════════════ */
function renderFeatured() {
  const featured = SONGS.filter((_, i) => [0, 7, 11, 18, 4, 9, 15, 22].includes(i));
  renderSongs(document.getElementById('featuredGrid'), featured);
}

/* ══════════════════════════════════════════════
   SONGS SECTION
   ══════════════════════════════════════════════ */
let activeFilter = 'all';

function renderSongsSection(filter = 'all') {
  activeFilter = filter;
  const filtered = filter === 'all' ? SONGS : SONGS.filter(s => s.category === filter);
  renderSongs(document.getElementById('songsGrid'), filtered);
  document.querySelectorAll('#filterTabs .tab').forEach(t => {
    t.classList.toggle('active', t.dataset.filter === filter);
  });
}
document.querySelectorAll('#filterTabs .tab').forEach(tab => {
  tab.addEventListener('click', () => renderSongsSection(tab.dataset.filter));
});
function filterByCategory(cat) {
  showSection('songs');
  renderSongsSection(cat);
}

/* ══════════════════════════════════════════════
   ARTISTS SECTION
   ══════════════════════════════════════════════ */
function renderArtists() {
  const grid = document.getElementById('artistsGrid');
  grid.innerHTML = '';
  ARTISTS.forEach(artist => {
    const card = document.createElement('div');
    card.className = 'artist-card';
    card.innerHTML = `
      <div class="artist-img-wrap">
        <img src="${artist.image}" alt="${artist.name}" loading="lazy"
          onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(artist.name)}&size=400&background=7c3aff&color=fff&bold=true&font-size=0.4'"/>
      </div>
      <span class="artist-name">${artist.name}</span>
      <span class="artist-genre">${artist.genre}</span>
    `;
    card.addEventListener('click', () => showArtistSongs(artist));
    grid.appendChild(card);
  });
}

function showArtistSongs(artist) {
  document.getElementById('artistsGrid').classList.add('hidden');
  document.getElementById('artistSongsView').classList.remove('hidden');
  document.getElementById('backFromArtist').classList.remove('hidden');
  document.getElementById('artistSongsTitle').textContent = `🎤 ${artist.name}`;
  const artistSongs = SONGS.filter(s => ARTIST_ID_MAP[s.artist] === artist.id);
  renderSongs(document.getElementById('artistSongsGrid'), artistSongs);
}
function showAllArtists() {
  document.getElementById('artistsGrid').classList.remove('hidden');
  document.getElementById('artistSongsView').classList.add('hidden');
  document.getElementById('backFromArtist').classList.add('hidden');
}

/* ══════════════════════════════════════════════
   PLAYLISTS SECTION
   ══════════════════════════════════════════════ */
function renderPlaylists() {
  const grid = document.getElementById('playlistsGrid');
  grid.innerHTML = '';
  const allPl = getAllPlaylists();
  allPl.forEach(pl => {
    const count = pl.songIds.length;
    const card  = document.createElement('div');
    card.className = 'playlist-card';
    card.innerHTML = `
      <div class="playlist-card-bg" style="background:${pl.bg}"></div>
      <div class="playlist-card-info">
        <div class="playlist-card-icon">${pl.icon}</div>
        <div class="playlist-card-name">${pl.name}</div>
        <div class="playlist-card-count">${count} song${count !== 1 ? 's' : ''}${!pl.builtIn ? ' · My Playlist' : ''}</div>
      </div>
      ${!pl.builtIn ? `<button class="pl-delete-btn" data-id="${pl.id}" title="Delete playlist">
        <i class="fa-solid fa-trash"></i></button>` : ''}
    `;
    card.querySelector('.playlist-card-bg, .playlist-card-info')?.addEventListener('click', () => showPlaylistSongs(pl));
    card.addEventListener('click', e => {
      if (!e.target.closest('.pl-delete-btn')) showPlaylistSongs(pl);
    });
    const deleteBtn = card.querySelector('.pl-delete-btn');
    if (deleteBtn) {
      deleteBtn.addEventListener('click', e => {
        e.stopPropagation();
        deleteUserPlaylist(pl.id);
      });
    }
    grid.appendChild(card);
  });
}

function deleteUserPlaylist(plId) {
  let userPls = loadUserPlaylists();
  userPls = userPls.filter(p => p.id !== plId);
  saveUserPlaylists(userPls);
  renderPlaylists();
}

function showPlaylistSongs(pl) {
  document.getElementById('playlistsGrid').classList.add('hidden');
  document.getElementById('playlistSongsView').classList.remove('hidden');
  document.getElementById('backFromPlaylist').classList.remove('hidden');
  document.getElementById('playlistSongsTitle').textContent = `${pl.icon} ${pl.name}`;
  const plSongs = pl.songIds.map(id => SONGS.find(s => s.id === id)).filter(Boolean);
  renderSongs(document.getElementById('playlistSongsGrid'), plSongs);
}
function showAllPlaylists() {
  document.getElementById('playlistsGrid').classList.remove('hidden');
  document.getElementById('playlistSongsView').classList.add('hidden');
  document.getElementById('backFromPlaylist').classList.add('hidden');
}

/* ══════════════════════════════════════════════
   SEARCH
   ══════════════════════════════════════════════ */
searchInput.addEventListener('input', () => {
  const q              = searchInput.value.trim().toLowerCase();
  const resultsSection = document.getElementById('searchResults');
  const resultGrid     = document.getElementById('searchResultsGrid');

  if (!q) {
    resultsSection.classList.add('hidden');
    document.querySelectorAll('.section:not(#searchResults)').forEach(s => {
      if (s.dataset.wasActive) { s.classList.add('active'); delete s.dataset.wasActive; }
    });
    return;
  }
  document.querySelectorAll('.section.active').forEach(s => {
    if (s.id !== 'searchResults') { s.classList.remove('active'); s.dataset.wasActive = true; }
  });
  resultsSection.classList.remove('hidden');
  resultsSection.classList.add('active');
  const results = SONGS.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.artist.toLowerCase().includes(q) ||
    s.category.toLowerCase().includes(q)
  );
  renderSongs(resultGrid, results);
});
document.getElementById('clearSearch').addEventListener('click', () => {
  searchInput.value = '';
  searchInput.dispatchEvent(new Event('input'));
});

/* ══════════════════════════════════════════════
   MUSIC PLAYER
   ══════════════════════════════════════════════ */
function playSong(idx) {
  currentSongIdx = idx;
  const song = currentQueue[idx];
  if (!song) return;

  /* ── Show song info & cover IMMEDIATELY before audio loads ── */
  updatePlayerInfo(song);
  updateAllCards();

  audio.src    = song.audio;
  audio.volume = volumeSlider.value / 100;
  audio.load();
  audio.play().then(() => {
    isPlaying = true;
    updatePlayUI();
    updateAllCards();
    heroVinyl.classList.add('spinning');
  }).catch(err => {
    console.warn('Playback error:', err);
    isPlaying = false;
    updatePlayUI();
    updateAllCards();
  });
}

function updatePlayerInfo(song) {
  playerSong.textContent   = song.name;
  playerArtist.textContent = song.artist;
  playerImg.src            = song.image;
  playerImg.onerror        = () => playerImg.src = 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop';
}
function updatePlayUI() {
  playIcon.className = isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
  playerImg.classList.toggle('is-playing', isPlaying);
}
function updateAllCards() {
  document.querySelectorAll('.song-card').forEach(card => {
    const id    = parseInt(card.dataset.id);
    const isCur = currentQueue[currentSongIdx]?.id === id;
    card.classList.toggle('playing', isCur);
    card.classList.toggle('is-playing', isCur && isPlaying);
    const icon = card.querySelector('.song-play-btn i');
    if (icon) icon.className = (isCur && isPlaying) ? 'fa-solid fa-pause' : 'fa-solid fa-play';
  });
}

/* Play / Pause */
document.getElementById('playBtn').addEventListener('click', () => {
  if (currentSongIdx === -1) { playSong(0); return; }
  if (isPlaying) { audio.pause(); isPlaying = false; heroVinyl.classList.remove('spinning'); }
  else           { audio.play();  isPlaying = true;  heroVinyl.classList.add('spinning'); }
  updatePlayUI();
  updateAllCards();
});

/* Next */
document.getElementById('nextBtn').addEventListener('click', nextSong);
function nextSong() {
  if (!currentQueue.length) return;
  let idx;
  if (isShuffle) idx = Math.floor(Math.random() * currentQueue.length);
  else           idx = (currentSongIdx + 1) % currentQueue.length;
  playSong(idx);
}

/* Prev */
document.getElementById('prevBtn').addEventListener('click', prevSong);
function prevSong() {
  if (!currentQueue.length) return;
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  const idx = (currentSongIdx - 1 + currentQueue.length) % currentQueue.length;
  playSong(idx);
}

/* Shuffle */
document.getElementById('shuffleBtn').addEventListener('click', () => {
  isShuffle = !isShuffle;
  document.getElementById('shuffleBtn').classList.toggle('active', isShuffle);
});

/* Repeat */
document.getElementById('repeatBtn').addEventListener('click', () => {
  isRepeat = !isRepeat;
  document.getElementById('repeatBtn').classList.toggle('active', isRepeat);
});

/* Audio events */
audio.addEventListener('ended', () => {
  if (isRepeat) { audio.currentTime = 0; audio.play(); }
  else nextSong();
});
audio.addEventListener('timeupdate', () => {
  if (isDragging) return;
  const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  progressFill.style.width = pct + '%';
  progressThumb.style.left = pct + '%';
  currentTimeEl.textContent = formatTime(audio.currentTime);
});
audio.addEventListener('loadedmetadata', () => {
  durationEl.textContent = formatTime(audio.duration);
});

/* Progress bar */
progressBar.addEventListener('mousedown', e => { isDragging = true; seekTo(e); });
progressBar.addEventListener('mousemove', e => { if (isDragging) seekTo(e); });
window.addEventListener('mouseup', () => { isDragging = false; });
progressBar.addEventListener('touchstart', e => { isDragging = true; seekTo(e.touches[0]); }, { passive: true });
progressBar.addEventListener('touchmove', e => { if (isDragging) seekTo(e.touches[0]); }, { passive: true });
window.addEventListener('touchend', () => { isDragging = false; });

function seekTo(e) {
  const rect = progressBar.getBoundingClientRect();
  const pct  = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
  audio.currentTime = pct * audio.duration;
  progressFill.style.width = (pct * 100) + '%';
  progressThumb.style.left = (pct * 100) + '%';
}

/* Volume */
volumeSlider.addEventListener('input', () => {
  const v = volumeSlider.value;
  audio.volume = v / 100;
  volPercent.textContent = v + '%';
  if (v == 0)      volIcon.className = 'fa-solid fa-volume-xmark';
  else if (v < 50) volIcon.className = 'fa-solid fa-volume-low';
  else             volIcon.className = 'fa-solid fa-volume-high';
});
volIcon.addEventListener('click', () => {
  if (audio.volume > 0) {
    volIcon._prev = volumeSlider.value;
    volumeSlider.value = 0; audio.volume = 0;
    volPercent.textContent = '0%';
    volIcon.className = 'fa-solid fa-volume-xmark';
  } else {
    volumeSlider.value = volIcon._prev || 80;
    audio.volume = volumeSlider.value / 100;
    volPercent.textContent = volumeSlider.value + '%';
    volIcon.className = 'fa-solid fa-volume-high';
  }
});

/* Keyboard shortcuts */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  if (e.code === 'Space')      { e.preventDefault(); document.getElementById('playBtn').click(); }
  if (e.code === 'ArrowRight') nextSong();
  if (e.code === 'ArrowLeft')  prevSong();
});

/* Playlist delete button style (inline) */
const plDeleteStyle = document.createElement('style');
plDeleteStyle.textContent = `
  .playlist-card { position: relative; }
  .pl-delete-btn {
    position: absolute; top: 12px; right: 12px; z-index: 2;
    width: 32px; height: 32px; border-radius: 50%;
    background: rgba(255,58,140,0.85); color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.8rem; opacity: 0; transition: opacity 0.2s;
  }
  .playlist-card:hover .pl-delete-btn { opacity: 1; }
`;
document.head.appendChild(plDeleteStyle);

/* ══════════════════════════════════════════════
   UTILS
   ══════════════════════════════════════════════ */
function formatTime(sec) {
  if (isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

/* ══════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════ */
function init() {
  renderFeatured();
  renderSongsSection('all');
  renderArtists();
  renderPlaylists();
  updateUserUI();
}

init();