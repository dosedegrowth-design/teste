// ============================================================
// Bradesco Prime Clone — interações
// ============================================================

// ------- Carrossel hero (4 slides) -------
const slides = document.querySelectorAll('.hero__slide');
const dots = document.querySelectorAll('.hero__dots button');
let current = 0;
let autoTimer;

function go(i) {
  i = (i + slides.length) % slides.length;
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  slides[i].classList.add('active');
  dots[i].classList.add('active');
  current = i;
}
function startAuto() { stopAuto(); autoTimer = setInterval(() => go(current + 1), 6000); }
function stopAuto() { if (autoTimer) clearInterval(autoTimer); }

dots.forEach((d, i) => d.addEventListener('click', () => { go(i); startAuto(); }));

const hero = document.querySelector('.hero');
if (hero) {
  hero.addEventListener('mouseenter', stopAuto);
  hero.addEventListener('mouseleave', startAuto);
}
startAuto();

// ------- Dropdowns do nav superior (Outros Perfis / Empresa) -------
document.querySelectorAll('.nav-group').forEach(group => {
  const link = group.querySelector('.nav-group__link');
  if (!link) return;
  link.addEventListener('click', (e) => {
    e.stopPropagation();
    // fecha outros dropdowns
    document.querySelectorAll('.nav-group.open').forEach(g => {
      if (g !== group) g.classList.remove('open');
    });
    group.classList.toggle('open');
  });
});

// Fecha dropdowns ao clicar fora
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-group')) {
    document.querySelectorAll('.nav-group.open').forEach(g => g.classList.remove('open'));
  }
  if (!e.target.closest('.side-menu__li')) {
    document.querySelectorAll('.side-menu__li.open').forEach(l => l.classList.remove('open'));
  }
});

// ------- Submenus do menu lateral (click) -------
document.querySelectorAll('.side-menu__li').forEach(li => {
  const btn = li.querySelector('.side-menu__item');
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelectorAll('.side-menu__li.open').forEach(l => {
      if (l !== li) l.classList.remove('open');
    });
    li.classList.toggle('open');
  });

  // hover também abre (UX do oficial)
  li.addEventListener('mouseenter', () => {
    document.querySelectorAll('.side-menu__li.open').forEach(l => l.classList.remove('open'));
    li.classList.add('open');
  });
  li.addEventListener('mouseleave', () => li.classList.remove('open'));
});

// ------- Busca overlay -------
const btnBusca = document.getElementById('btnBusca');
const btnCloseBusca = document.getElementById('btnCloseBusca');
const searchOverlay = document.getElementById('searchOverlay');

if (btnBusca && searchOverlay) {
  btnBusca.addEventListener('click', () => {
    searchOverlay.classList.add('open');
    searchOverlay.setAttribute('aria-hidden', 'false');
    const inp = searchOverlay.querySelector('input');
    if (inp) setTimeout(() => inp.focus(), 100);
  });
}
if (btnCloseBusca && searchOverlay) {
  btnCloseBusca.addEventListener('click', () => {
    searchOverlay.classList.remove('open');
    searchOverlay.setAttribute('aria-hidden', 'true');
  });
}
// Esc fecha busca
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('open')) {
    searchOverlay.classList.remove('open');
  }
});

// ------- Accordion footer -------
document.querySelectorAll('.footer__title').forEach(btn => {
  btn.addEventListener('click', () => {
    const col = btn.closest('.footer__col');
    col.classList.toggle('footer__col--open');
  });
});

// ------- Scroll: main-header ganha fundo branco + esconde barra "Prime" ao rolar -------
const mainHeader = document.querySelector('.main-header');
const segmentBar = document.getElementById('mobileSegmentBar');
function handleScroll() {
  const scrolled = window.scrollY > 40;
  if (mainHeader) mainHeader.classList.toggle('scrolled', scrolled);
  if (segmentBar) segmentBar.classList.toggle('hidden', scrolled);
}
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

// ------- Mobile hamburger toggle -------
const btnMobile = document.getElementById('btnMobileMenu');
const mobileDrawer = document.getElementById('mobileDrawer');
const btnCloseMobile = document.getElementById('btnCloseMobile');
function openMobileDrawer() {
  mobileDrawer?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileDrawer() {
  mobileDrawer?.classList.remove('open');
  document.body.style.overflow = '';
}
btnMobile?.addEventListener('click', openMobileDrawer);
btnCloseMobile?.addEventListener('click', closeMobileDrawer);

// ------- Mobile Prime drawer (perfis) -------
const btnOpenPrime = document.getElementById('btnOpenPrime');
const primeDrawer = document.getElementById('primeDrawer');
const btnClosePrime = document.getElementById('btnClosePrime');
btnOpenPrime?.addEventListener('click', () => {
  primeDrawer?.classList.add('open');
  document.body.style.overflow = 'hidden';
});
btnClosePrime?.addEventListener('click', () => {
  primeDrawer?.classList.remove('open');
  document.body.style.overflow = '';
});
