/* ─── Theme: dark / light toggle ─────────────────────── */
const THEME_KEY = 'blenz-theme';
const themeToggles = document.querySelectorAll('[data-theme-toggle]');

function getActiveTheme() {
  return document.documentElement.getAttribute('data-theme') || 'dark';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem(THEME_KEY, theme); } catch {}
  updateThemeToggleUi(theme);
}

function updateThemeToggleUi(theme) {
  const isLight = theme === 'light';
  themeToggles.forEach(btn => {
    btn.setAttribute('aria-pressed', String(isLight));
    btn.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    const icon = btn.querySelector('[data-theme-icon]');
    const label = btn.querySelector('[data-theme-label]');
    if (icon) icon.textContent = isLight ? '☀' : '☾';
    if (label) label.textContent = isLight ? 'Light' : 'Dark';
  });
}

if (themeToggles.length) {
  updateThemeToggleUi(getActiveTheme());
  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      applyTheme(getActiveTheme() === 'light' ? 'dark' : 'light');
    });
  });
}

/* ─── Nav: scroll state ─────────────────────────────── */
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ─── Nav: mobile toggle ─────────────────────────────── */
const navToggle = document.getElementById('nav-toggle');
const navMobile = document.getElementById('nav-mobile');

navToggle?.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
});

navMobile?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle?.classList.remove('open');
  });
});

/* ─── Nav: dropdown — hover (desktop) + click (mobile) ── */
document.querySelectorAll('.has-dropdown').forEach(item => {
  let closeTimer = null;

  const openDropdown = () => {
    clearTimeout(closeTimer);
    /* Close any other open dropdowns first */
    document.querySelectorAll('.has-dropdown.open').forEach(d => {
      if (d !== item) d.classList.remove('open');
    });
    item.classList.add('open');
  };

  const closeDropdown = (delay = 200) => {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => item.classList.remove('open'), delay);
  };

  /* Desktop: hover with delay so mouse can travel to dropdown */
  item.addEventListener('mouseenter', openDropdown);
  item.addEventListener('mouseleave', () => closeDropdown(200));

  /* Mobile / keyboard: click toggles */
  item.querySelector('.nav-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    item.classList.contains('open') ? closeDropdown(0) : openDropdown();
  });
});

/* Close on outside click */
document.addEventListener('click', (e) => {
  if (!e.target.closest('.has-dropdown')) {
    document.querySelectorAll('.has-dropdown.open').forEach(d => d.classList.remove('open'));
  }
});

/* ─── Scroll animations ──────────────────────────────── */
const animatables = document.querySelectorAll('[data-animate]');
if (animatables.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
  animatables.forEach(el => observer.observe(el));
}

/* ─── Process tabs (logistics page) ─────────────────── */
document.querySelectorAll('.ptab')?.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    document.querySelectorAll('.process-steps').forEach(s => {
      s.classList.toggle('hidden', s.id !== `tab-${target}`);
    });
  });
});

/* ─── Service toggle in contact form ─────────────────── */
const svcBtns = document.querySelectorAll('.svc-btn');
const svcInput = document.getElementById('fservice');

svcBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    svcBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (svcInput) svcInput.value = btn.dataset.val;
  });
});

/* ─── CTA deep-links pre-select service ─────────────── */
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    const val = link.dataset.service;
    const mapped = val.startsWith('oscar') ? 'oscar' : val === 'logistics' ? 'logistics' : val;
    svcBtns.forEach(b => b.classList.toggle('active', b.dataset.val === mapped));
    if (svcInput) svcInput.value = mapped;
  });
});

/* ─── Form submission (Web3Forms) ────────────────────── */
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');

(function setRedirectUrl() {
  const redirectInput = document.getElementById('form-redirect');
  if (redirectInput) {
    const base = window.location.origin + window.location.pathname;
    redirectInput.value = base + (base.includes('?') ? '&' : '?') + 'contact_sent=1';
  }
})();

if (typeof URLSearchParams !== 'undefined' && window.location.search) {
  const params = new URLSearchParams(window.location.search);
  if (params.get('contact_sent') === '1' && successMsg) {
    successMsg.classList.remove('hidden');
    history.replaceState(null, '', window.location.origin + window.location.pathname);
  }
}

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = form.querySelector('.btn-submit');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
      body: new URLSearchParams(new FormData(form)).toString(),
    });

    let data;
    try {
      data = await res.json();
    } catch {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      form.submit();
      return;
    }

    if (data.success) {
      submitBtn.textContent = 'Message Sent ✓';
      successMsg?.classList.remove('hidden');
      form.reset();
      svcBtns.forEach((b, i) => b.classList.toggle('active', i === 0));
      if (svcInput) svcInput.value = svcBtns[0]?.dataset.val || 'oscar';
    } else {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      form.submit();
    }
  } catch {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    form.submit();
  }
});

/* ─── Smooth anchor scroll (accounts for fixed nav) ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = (nav?.offsetHeight || 64) + 16;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

/* ─── Cross-page anchor links (e.g. index.html#contact) */
/* Handles cases where page already loaded and hash is present */
if (window.location.hash) {
  setTimeout(() => {
    const el = document.querySelector(window.location.hash);
    if (el) {
      const offset = (nav?.offsetHeight || 64) + 16;
      window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
    }
  }, 200);
}
