// Simple client-side i18n toggler for 6 languages
// Languages: en, ja, zh (Simplified), ko, fr, es
// - Persists selection in localStorage('lang')
// - Initial = stored lang or browser language match, else 'en'

(function(){
  const SUPPORTED = ['en','ja','zh','ko','fr','es'];
  const storageKey = 'lang';

  function detectBrowserLang(){
    const nav = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    for(const code of nav){
      const base = (code || '').toLowerCase().split('-')[0];
      if(SUPPORTED.includes(base)) return base;
      // map common Chinese codes to zh
      if(['zh','zh-cn','zh-sg','zh-hans'].includes(base)) return 'zh';
      if(base.startsWith('zh')) return 'zh';
      // map Korean
      if(base.startsWith('ko')) return 'ko';
      // map French
      if(base.startsWith('fr')) return 'fr';
      // map Spanish
      if(base.startsWith('es')) return 'es';
      // map Japanese
      if(base.startsWith('ja')) return 'ja';
      // English fallback
      if(base.startsWith('en')) return 'en';
    }
    return 'en';
  }

  function applyLang(lang){
    if(!SUPPORTED.includes(lang)) lang = 'en';
    document.documentElement.setAttribute('lang', lang);
    document.body && (document.body.dataset.lang = lang);
    // Update active state on switcher buttons
    document.querySelectorAll('.lang-switcher [data-lang]').forEach(btn => {
      if(btn.getAttribute('data-lang') === lang){
        btn.classList.add('active');
        btn.setAttribute('aria-pressed','true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed','false');
      }
    });
  }

  function setLang(lang){
    localStorage.setItem(storageKey, lang);
    applyLang(lang);
  }

  function init(){
    const saved = localStorage.getItem(storageKey);
    const lang = SUPPORTED.includes(saved) ? saved : detectBrowserLang();
    applyLang(lang);
    // Wire up switchers (support multiple on page just in case)
    document.querySelectorAll('.lang-switcher [data-lang]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const l = btn.getAttribute('data-lang');
        if(SUPPORTED.includes(l)) setLang(l);
      });
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
