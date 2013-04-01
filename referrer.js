/**
 * This script collects information on visitors, based
 * on their client session. It finds out which page they
 * were on when they go there, and by virtue of sending
 * that information to the logger, their IP. This is
 * information that you're sending already, anyway, but
 * I want you to know that this is what's going on.
 *
 * Which is why this script is not obfuscated. It simply
 * grabs your document.referrer value, which (unless Do
 * Not Track is enabled) will contain the location of
 * the page you were on before you clicked a link to this
 * page, and POSTs that to my logger. That POST operation
 * comes from your computer, so will have your IP as part
 * of the HTTP headers. And that's all I really care about,
 * because I want to know how many people visit this page,
 * and roughly where they're from (gasp! IPs can be turned
 * into rough geographical location O_O).
 *
 * If you want to know what logger.php looks like, hit up
 * github. It's in referrer/logger.php
 *
 */
(function referrer() {
  var url = "http://what.inthefuck.com/bezierinfo/logger.php";
  // yep, I own that domain.
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url + "?" + "referrer=" + encodeURIComponent(document.referrer), true);
  try { xhr.send(null); }
  catch(e) { /* you don't care about this error, and I can't see it, so why would we do anything with it? */ }
}());