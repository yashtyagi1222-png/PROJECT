'use strict';

// ===== DATA =====
const shows = [
  { id:1, title:"Stranger Things", year:2023, rating:"TV-14", match:98, seasons:"4 Seasons", genres:["Sci-Fi","Horror","Drama"], desc:"When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.", cast:"Millie Bobby Brown, Finn Wolfhard, Winona Ryder", mood:"Dark, Thrilling, Nostalgic", img:"https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&q=70", hero:"https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1920&q=80", trailer:"https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1&mute=1", progress: 65 },
  { id:2, title:"Wednesday", year:2022, rating:"TV-14", match:95, seasons:"1 Season", genres:["Horror","Comedy","Mystery"], desc:"Wednesday Addams attends Nevermore Academy, a school for supernatural creatures, and tries to master her psychic powers while solving a mystery.", cast:"Jenna Ortega, Gwendoline Christie, Christina Ricci", mood:"Quirky, Mysterious, Dark", img:"https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&q=70", hero:"https://images.unsplash.com/photo-1509281373149-e957c6296406?w=1920&q=80", trailer:"https://www.youtube.com/embed/Di310WS8zLk?autoplay=1&mute=1", progress: 30 },
  { id:3, title:"The Crown", year:2023, rating:"TV-MA", match:91, seasons:"6 Seasons", genres:["Drama","History","Biography"], desc:"This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.", cast:"Imelda Staunton, Jonathan Pryce, Elizabeth Debicki", mood:"Regal, Dramatic, Intimate", img:"https://images.unsplash.com/photo-1550684376-efbea98f8a47?w=400&q=70", hero:"https://images.unsplash.com/photo-1550684376-efbea98f8a47?w=1920&q=80", trailer:"https://www.youtube.com/embed/JWtnJjn6ng0?autoplay=1&mute=1", progress: 82 },
  { id:4, title:"Money Heist", year:2021, rating:"TV-MA", match:97, seasons:"5 Seasons", genres:["Crime","Thriller","Drama"], desc:"A criminal mastermind who goes by 'The Professor' recruits eight thieves with a specific set of skills to carry off an elaborate heist.", cast:"Álvaro Morte, Itziar Ituño, Pedro Alonso", mood:"Tense, Clever, Passionate", img:"https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&q=70", hero:"https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=1920&q=80", trailer:"https://www.youtube.com/embed/PrIV3gU_UZg?autoplay=1&mute=1", progress: 55 },
  { id:5, title:"Ozark", year:2022, rating:"TV-MA", match:93, seasons:"4 Seasons", genres:["Crime","Drama","Thriller"], desc:"A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money for a Mexican drug cartel to appease them.", cast:"Jason Bateman, Laura Linney, Sofia Hublitz", mood:"Tense, Brooding, Suspenseful", img:"https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400&q=70", hero:"https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1920&q=80", trailer:"https://www.youtube.com/embed/5oODjOjwNMU?autoplay=1&mute=1" },
  { id:6, title:"The Witcher", year:2023, rating:"TV-MA", match:88, seasons:"3 Seasons", genres:["Fantasy","Action","Adventure"], desc:"Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.", cast:"Henry Cavill, Anya Chalotra, Freya Allan", mood:"Epic, Dark, Adventurous", img:"https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&q=70", hero:"https://images.unsplash.com/photo-1563207153-f403bf289096?w=1920&q=80", trailer:"https://www.youtube.com/embed/ndl7APaNhvk?autoplay=1&mute=1" },
  { id:7, title:"Emily in Paris", year:2023, rating:"TV-MA", match:84, seasons:"3 Seasons", genres:["Comedy","Romance","Drama"], desc:"Emily, an ambitious 20-something American, lands her dream job in Paris when her company acquires a French marketing firm.", cast:"Lily Collins, Philippine Leroy-Beaulieu, Ashley Park", mood:"Breezy, Romantic, Fun", img:"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=70", hero:"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=80", trailer:"" },
  { id:8, title:"Squid Game", year:2021, rating:"TV-MA", match:99, seasons:"2 Seasons", genres:["Thriller","Drama","Action"], desc:"Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.", cast:"Lee Jung-jae, Park Hae-soo, Wi Ha-jun", mood:"Shocking, Tense, Addictive", img:"https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=400&q=70", hero:"https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=1920&q=80", trailer:"https://www.youtube.com/embed/oqxAJKy0ii4?autoplay=1&mute=1" },
  { id:9, title:"Bridgerton", year:2023, rating:"TV-MA", match:86, seasons:"3 Seasons", genres:["Romance","Drama","History"], desc:"Set in a competitive Regency era, the tight-knit Bridgerton family looks to find love for its eight children, as a mysterious socialite pens scandalous gossip.", cast:"Phoebe Dynevor, Regé-Jean Page, Nicola Coughlan", mood:"Romantic, Lavish, Scandalous", img:"https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&q=70", hero:"https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1920&q=80", trailer:"" },
  { id:10, title:"Dark", year:2020, rating:"TV-MA", match:96, seasons:"3 Seasons", genres:["Sci-Fi","Mystery","Thriller"], desc:"A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.", cast:"Louis Hofmann, Oliver Masucci, Karoline Eichhorn", mood:"Mind-Bending, Atmospheric, Haunting", img:"https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=400&q=70", hero:"https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1920&q=80", trailer:"https://www.youtube.com/embed/rrwycJ08PSA?autoplay=1&mute=1" },
  { id:11, title:"Narcos", year:2017, rating:"TV-MA", match:94, seasons:"3 Seasons", genres:["Crime","Biography","Drama"], desc:"The story of Colombian cocaine drug lord Pablo Escobar, as well as the DEA agents and government officials who try to capture him.", cast:"Wagner Moura, Boyd Holbrook, Pedro Pascal", mood:"Raw, Gritty, Compelling", img:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=70", hero:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80", trailer:"" },
  { id:12, title:"You", year:2023, rating:"TV-MA", match:89, seasons:"4 Seasons", genres:["Thriller","Drama","Crime"], desc:"A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he becomes fixated on.", cast:"Penn Badgley, Victoria Pedretti, Elizabeth Lail", mood:"Creepy, Addictive, Psychological", img:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=70", hero:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&q=80", trailer:"" },
];

const movies = [
  { id:101, title:"Don't Look Up", year:2021, rating:"R", match:87, seasons:"Movie", genres:["Comedy","Drama","Sci-Fi"], desc:"Two low-level astronomers go on a media tour to warn mankind of a planet-killing comet heading for Earth.", cast:"Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep", mood:"Satirical, Urgent, Funny", img:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=70", hero:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920&q=80", trailer:"https://www.youtube.com/embed/RbIxYm3mKzI?autoplay=1&mute=1" },
  { id:102, title:"Extraction", year:2023, rating:"R", match:90, seasons:"Movie", genres:["Action","Thriller","Drama"], desc:"Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.", cast:"Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda", mood:"Gritty, Relentless, Spectacular", img:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=70", hero:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80", trailer:"" },
  { id:103, title:"The Irishman", year:2019, rating:"R", match:92, seasons:"Movie", genres:["Crime","Drama","Biography"], desc:"Hitman Frank Sheeran looks back at the secrets he kept as a loyal member of the Bufalino crime family.", cast:"Robert De Niro, Al Pacino, Joe Pesci", mood:"Epic, Reflective, Masterful", img:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=70", hero:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80", trailer:"" },
  { id:104, title:"Bird Box", year:2018, rating:"R", match:85, seasons:"Movie", genres:["Horror","Sci-Fi","Thriller"], desc:"When a mysterious force decimates the population, only one thing is certain: if you see it, you take your life.", cast:"Sandra Bullock, Trevante Rhodes, John Malkovich", mood:"Terrifying, Tense, Survival", img:"https://images.unsplash.com/photo-1617957689233-207e3cd3b9ca?w=400&q=70", hero:"https://images.unsplash.com/photo-1617957689233-207e3cd3b9ca?w=1920&q=80", trailer:"" },
  { id:105, title:"Munich: The Edge of War", year:2022, rating:"PG-13", match:82, seasons:"Movie", genres:["History","Drama","Thriller"], desc:"In 1938, a British diplomat and a German official race against time to avert another World War while uncovering a devastating secret.", cast:"Jeremy Irons, George MacKay, Jannis Niewöhner", mood:"Tense, Historical, Intelligent", img:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=70", hero:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&q=80", trailer:"" },
  { id:106, title:"The Gray Man", year:2022, rating:"PG-13", match:88, seasons:"Movie", genres:["Action","Thriller","Spy"], desc:"When a top CIA operative's identity is accidentally revealed, it quickly sets off a global manhunt to capture him by a former colleague.", cast:"Ryan Gosling, Chris Evans, Ana de Armas", mood:"Slick, Fast-Paced, Stylish", img:"https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&q=70", hero:"https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1920&q=80", trailer:"" },
  { id:107, title:"Roma", year:2018, rating:"R", match:95, seasons:"Movie", genres:["Drama","Family","Foreign"], desc:"A year in the life of a middle-class family's maid in early 1970s Mexico City.", cast:"Yalitza Aparicio, Marina de Tavira, Diego Cortina Autrey", mood:"Quiet, Profound, Beautiful", img:"https://images.unsplash.com/photo-1501446529957-6226b33e1152?w=400&q=70", hero:"https://images.unsplash.com/photo-1501446529957-6226b33e1152?w=1920&q=80", trailer:"" },
  { id:108, title:"Enola Holmes", year:2022, rating:"PG-13", match:83, seasons:"Movie", genres:["Mystery","Adventure","Comedy"], desc:"Enola Holmes, the sister of Sherlock, needs to find her missing mother while also investigating a conspiracy connected to a young lord.", cast:"Millie Bobby Brown, Henry Cavill, Sam Claflin", mood:"Witty, Fun, Empowering", img:"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&q=70", hero:"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&q=80", trailer:"" },
  { id:109, title:"All Quiet on the Western Front", year:2022, rating:"R", match:93, seasons:"Movie", genres:["War","Drama","History"], desc:"A young German soldier's harrowing experiences and distress on the western front during World War I.", cast:"Felix Kammerer, Albrecht Schuch, Aaron Hilmer", mood:"Devastating, Powerful, Important", img:"https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?w=400&q=70", hero:"https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?w=1920&q=80", trailer:"" },
  { id:110, title:"Knives Out", year:2019, rating:"PG-13", match:91, seasons:"Movie", genres:["Mystery","Comedy","Crime"], desc:"A detective investigates the death of a wealthy crime novelist at the gathering of his dysfunctional family.", cast:"Daniel Craig, Chris Evans, Ana de Armas", mood:"Witty, Clever, Entertaining", img:"https://images.unsplash.com/photo-1555615640-3c048c6de43b?w=400&q=70", hero:"https://images.unsplash.com/photo-1555615640-3c048c6de43b?w=1920&q=80", trailer:"" },
];

const allContent = [...shows, ...movies];

// Row configurations
const rows = [
  { id: 'row-0', items: shows.slice(0, 8), type: 'continue' },
  { id: 'row-1', items: [...movies.slice(0,5), ...shows.slice(5,7), ...movies.slice(5)], type: 'normal' },
  { id: 'row-2', items: [...shows.slice(0,5), ...movies.slice(0,5)], type: 'top10' },
  { id: 'row-3', items: [...movies, ...shows.slice(0,5)], type: 'normal' },
  { id: 'row-4', items: [...shows.slice(4), ...movies.slice(4)], type: 'normal' },
  { id: 'row-5', items: [shows[0], shows[3], shows[7], movies[0], movies[5], shows[9], movies[2]], type: 'normal' },
];

const featuredShow = shows[0];

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Search toggle
const searchWrap   = document.getElementById('searchWrap');
const searchToggle = document.getElementById('searchToggle');
const searchInput  = document.getElementById('searchInput');
searchToggle.addEventListener('click', () => {
  searchWrap.classList.toggle('open');
  if (searchWrap.classList.contains('open')) searchInput.focus();
});
document.addEventListener('click', e => {
  if (!searchWrap.contains(e.target)) searchWrap.classList.remove('open');
});

// ===== LAZY IMAGE LOAD =====
function lazyLoad(img, src) {
  img.classList.add('img-placeholder');
  const tmp = new Image();
  tmp.onload = () => {
    img.src = src;
    img.classList.remove('img-placeholder');
  };
  tmp.onerror = () => img.classList.remove('img-placeholder');
  tmp.src = src;
}

// ===== BUILD CARDS =====
function buildCard(show, type, rank) {
  const card = document.createElement('div');
  card.className = 'card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `${show.title} – ${show.year}`);

  const progressBar = (type === 'continue' && show.progress)
    ? `<div class="card-progress"><div class="card-progress-fill" style="width:${show.progress}%"></div></div>` : '';

  const rankBadge = (type === 'top10' && rank != null)
    ? `<div class="card-rank">${rank}</div>` : '';

  card.innerHTML = `
    ${rankBadge}
    <img class="card-poster" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="${show.title}" loading="lazy"/>
    ${progressBar}
    <div class="card-hover">
      <div class="card-play-row">
        <button class="card-play-btn" aria-label="Play ${show.title}"><i class="fa fa-play"></i></button>
        <div class="card-actions">
          <button class="card-action-btn" aria-label="Add to list"><i class="fa fa-plus"></i></button>
          <button class="card-action-btn" aria-label="Like"><i class="fa fa-thumbs-up"></i></button>
          <button class="card-action-btn" aria-label="More info"><i class="fa fa-chevron-down"></i></button>
        </div>
      </div>
      <div class="card-title">${show.title}</div>
      <div class="card-meta">
        <span class="match">${show.match}% Match</span>
        <span class="maturity">${show.rating}</span>
        <span>${show.year}</span>
      </div>
      <div class="card-genres">${show.genres.map(g => `<span>${g}</span>`).join('')}</div>
    </div>
  `;

  lazyLoad(card.querySelector('.card-poster'), show.img);

  card.addEventListener('click', () => openModal(show));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(show); });

  return card;
}

// ===== BUILD ROWS =====
rows.forEach(row => {
  const container = document.getElementById(row.id);
  if (!container) return;

  const section = container.closest('.row-section');

  row.items.forEach((item, i) => {
    const card = buildCard(item, row.type, row.type === 'top10' ? i + 1 : null);
    container.appendChild(card);
  });

  // Arrow scroll
  const wrap = container.closest('.slider-wrap');
  const leftArrow  = wrap.querySelector('.arrow-left');
  const rightArrow = wrap.querySelector('.arrow-right');
  const cardWidth  = 200 + 6;

  leftArrow.addEventListener('click', () => {
    container.scrollBy({ left: -cardWidth * 3, behavior: 'smooth' });
  });
  rightArrow.addEventListener('click', () => {
    container.scrollBy({ left: cardWidth * 3, behavior: 'smooth' });
  });
});

// ===== MODAL =====
const overlay   = document.getElementById('modalOverlay');
const modalEl   = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalIframe = document.getElementById('modalIframe');
const modalPoster = document.getElementById('modalPoster');

function openModal(show) {
  document.getElementById('modalTitle').textContent = show.title;

  document.getElementById('modalMeta').innerHTML = `
    <span class="match">${show.match}% Match</span>
    <span class="year">${show.year}</span>
    <span class="rating">${show.rating}</span>
    <span class="seasons">${show.seasons}</span>
  `;

  document.getElementById('modalDesc').textContent = show.desc;
  document.getElementById('modalCast').innerHTML = `<span>Cast:</span> ${show.cast}`;
  document.getElementById('modalGenres').innerHTML = `<span>Genres:</span> ${show.genres.join(', ')}`;
  document.getElementById('modalMood').innerHTML = `<span>This show is:</span> ${show.mood}`;

  // Trailer or poster fallback
  if (show.trailer) {
    modalIframe.src = show.trailer;
    modalIframe.style.display = 'block';
    modalPoster.style.display = 'none';
  } else {
    modalIframe.src = '';
    modalIframe.style.display = 'none';
    modalPoster.style.display = 'block';
    modalPoster.style.backgroundImage = `url('${show.hero || show.img}')`;
  }

  // More Like This
  const moreGrid = document.getElementById('modalMore');
  moreGrid.innerHTML = '';
  const similar = allContent.filter(s => s.id !== show.id && s.genres.some(g => show.genres.includes(g))).slice(0, 6);
  similar.forEach(s => {
    const mc = document.createElement('div');
    mc.className = 'more-card';
    mc.innerHTML = `
      <img src="${s.img}" alt="${s.title}" loading="lazy"/>
      <div class="more-card-info">
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
      </div>
    `;
    mc.addEventListener('click', () => openModal(s));
    moreGrid.appendChild(mc);
  });

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  overlay.classList.remove('open');
  modalIframe.src = '';
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== HERO ROTATION =====
let heroIndex = 0;
const heroItems = shows.slice(0, 5);
const heroBg = document.getElementById('heroBg');
const heroTitle = document.querySelector('.hero-title');
const heroDesc  = document.querySelector('.hero-desc');
const heroMeta  = document.querySelector('.hero-meta');

function rotateHero() {
  heroIndex = (heroIndex + 1) % heroItems.length;
  const s = heroItems[heroIndex];
  heroBg.style.opacity = 0;
  heroBg.style.transition = 'opacity 0.8s ease';

  setTimeout(() => {
    heroBg.src = s.hero || s.img;
    heroBg.onload = () => { heroBg.style.opacity = 1; };
    heroTitle.textContent = s.title;
    heroDesc.textContent  = s.desc;

    // Update hero buttons data
    document.querySelector('.btn-play').onclick = () => openModal(s);
    document.querySelector('.btn-info').onclick = () => openModal(s);
  }, 400);
}

setInterval(rotateHero, 8000);

// ===== INTERSECTION OBSERVER (lazy rows) =====
const rowSections = document.querySelectorAll('.row-section');
const rowObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'none';
      rowObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

rowSections.forEach(s => {
  s.style.opacity = 0;
  s.style.transform = 'translateY(20px)';
  s.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  rowObserver.observe(s);
});
