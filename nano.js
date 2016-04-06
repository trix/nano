/*
  Nano Templates - https://github.com/trix/nano
                 - https://github.com/azettl/nano

  Used to replace text like {user.lastname} with data from an json
  object like {user: {lastname: 'demo'}}.

  @param string  t   the template / string in which the replacement should happen.
  @param object  d   the json object.
  @param boolean u   whether strings which can't be replaced should be shown.

  @return string     the replaced template / string.
*/
function nano(t, d, u) {
  "use strict";
  return t.replace(/\{([\w\.\s\(\)]*)\}/g, function (s, k) {
    var p = k.split("."), v = d[p.shift()];
    p.forEach(function (e) { v = (typeof v !== "undefined") ? (e.match(/\(\)/) ? v[e.replace(/\(\)/, '')]() : v[e]) : undefined; });
    return (typeof v !== "undefined" && v !== null) ? v : (u ? s : "");
  });
}

function nanoExternal(t, d, u) {
  h = new XMLHttpRequest(); h.open('GET', t, false); h.send(null);
  return (h.status === 200) ? nano(h.responseText, d, u) : 'Error: ' + h.status;
}
