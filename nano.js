/* Nano Templates - https://github.com/trix/nano */

function nano(template, data, showUndefined) {
  return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
    var keys = key.split("."), v = data[keys.shift()];
    return (typeof v !== "undefined" && v !== null) ? v : (showUndefined ? k : "");
  });
}
