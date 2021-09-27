(function (d, s, u, e, p) {
  p = d.getElementsByTagName(s)[0], e = d.createElement(s), e.async = 1, e.src = u, p.parentNode.insertBefore(e, p);
})(document, 'script', 'https://script.ringostat.com/v4/7b/7b9f5126d1b3c9b09ba6f6334ffc8324b7efda79.js');

var pw = function () {
  if (typeof ringostatAnalytics === "undefined") {
    setTimeout(pw, 100);
  } else {
    ringostatAnalytics.sendHit('pageview');
  }
};

pw();