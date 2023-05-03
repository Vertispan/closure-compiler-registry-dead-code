var map = {};
function register(key, creator) {
    map[key] = creator;
}
function lookup(key) {
    return map[key]();
}

// Specify a default, and allow it to be overridden at build time
/** @define {string} */
const exampleDefault = goog.define('exampleDefault', 'python');
function lookupDefault() {
    return lookup(exampleDefault);
}
