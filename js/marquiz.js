(function (w, d, s, o) {
  var j = d.createElement(s);
  j.async = true;
  j.src = '//script.marquiz.ru/v2.js';

  j.onload = function () {
    if (document.readyState !== 'loading') Marquiz.init(o);else document.addEventListener("DOMContentLoaded", function () {
      Marquiz.init(o);
    });
  };

  d.head.insertBefore(j, d.head.firstElementChild);
})(window, document, 'script', {
  host: '//quiz.marquiz.ru',
  region: 'eu',
  id: '6119316bed2740003e64c9a4',
  autoOpen: false,
  autoOpenFreq: 'once',
  openOnExit: false,
  disableOnMobile: false
});