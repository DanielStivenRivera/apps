// Shows the content for one language. Elements carry data-lang="es|en"; buttons carry
// data-set-lang. The initial language comes from the URL hash (#es / #en) or the browser.
(function () {
  function setLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.hidden = el.getAttribute('data-lang') !== lang;
    });
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-set-lang') === lang));
    });
  }
  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-set-lang');
      setLang(lang);
      history.replaceState(null, '', '#' + lang);
    });
  });
  var fromHash = location.hash.slice(1);
  var initial = fromHash === 'en' || fromHash === 'es'
    ? fromHash
    : ((navigator.language || 'es').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');
  setLang(initial);
})();
