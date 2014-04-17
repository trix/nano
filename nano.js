/* Nano Templates (Tomasz Mazur, Jacek Becela) */

function nano(template, data) {
    return template.replace(/\{([^\}]*)\}/g, function(str, key) {
    var keys = key.split('.'),
        val = data,
        k;

    while((key = keys.shift())) {
        key = key.split('[');
        val = val[key.shift()];
        while((k = key.shift())) {
            val = val[k.slice(0, -1)];
        }
    }

    return ("undefined" !== typeof val && val !== null) ? val : "";
});
}
