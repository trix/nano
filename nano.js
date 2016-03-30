/*
  Nano Templates - https://github.com/trix/nano
                 - https://github.com/azettl/nano
*/

function nano(template, data, showUndefined) {
  return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
    var keys = key.split("."), v = data[keys.shift()];
    for (var i = 0, l = keys.length; i < l; i++){ v = v[keys[i]]; k = str; }
    return (typeof v !== "undefined" && v !== null) ? v : (showUndefined ? k : "");
  });
}
