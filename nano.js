/*
  Nano Templates - https://github.com/trix/nano
                 - https://github.com/azettl/nano

  Used to replace text like {user.lastname} with data from an json
  object like {user: {lastname: "demo"}}.
*/

/*jslint
    browser, white
*/

/*
  Function nano

  @param string  t   the template string in which the replacement should happen.
  @param object  d   the json object.
  @param boolean u   whether strings which can not be replaced should be shown.

  @return string     the replaced template / string.
*/
function nano(t, d, u) {
  "use strict";
  return t.replace(/\{([\w\.\s\(\)]*)\}/g, function (s, k) {
    var p = k.split("."); var v = d[p.shift()];
    p.forEach(function (e) { v = (v) ? (e.match(/\(\)/) ? v[e.replace(/\(\)/, "")]() : v[e]) : null; });
    return (v && v !== null) ? v : (u ? s : "");
  });
}

/*
  Function nanoExternal

  @param string  t   the template url in which the replacement should happen.
  @param object  d   the json object.
  @param boolean u   whether strings which can not be replaced should be shown.
  @param boolean e   dom element, if a dom element is provided the replaced text
                     will be loaded in that instead of returned.

  @return string     the replaced template / string.
*/
function nanoExternal(t, d, u, e) {
  "use strict";
  var h = new XMLHttpRequest(); h.open("GET", t, e);
  if(e) { h.onreadystatechange = function() { e.innerHTML = nano(h.responseText, d, u); }; } h.send();
  return (h.status === 200) ? nano(h.responseText, d, u) : "Error: " + h.status;
}
