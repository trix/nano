/*
  Nano Templates - https://github.com/trix/nano
                 - https://github.com/azettl/nano
*/

function nano(template, data, showUndefined) {
  "use strict";
  return template.replace(/\{([\w\.]*)\}/g, function (str, key) {
    var keys = key.split("."), v = data[keys.shift()];
    keys.forEach(function (e) { v = v[e]; });
    return (typeof v !== "undefined" && v !== null) ? v : (showUndefined ? str : "");
  });
}
