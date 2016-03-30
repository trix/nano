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
  return t.replace(/\{([\w\.]*)\}/g, function (s, k) {
    var p = k.split("."), v = d[p.shift()];
    p.forEach(function (e) { v = v[e]; });
    return (typeof v !== "undefined" && v !== null) ? v : (u ? s : "");
  });
}
