const REGEXP = {};
REGEXP.NAME = '[A-Za-z$_][A-Za-z0-9$_.]*';
REGEXP.METHOD = `(${REGEXP.NAME})\\((.*)\\)`;
REGEXP.PART = `${REGEXP.NAME}(?:\\(.*\\))?`;
REGEXP.PARANTHESIS = '(?:^| )\\(([^)]+)\\)';
REGEXP.THREE_ARG = '^.+\\?.+:.+$';
REGEXP.ACCESSOR = `(${REGEXP.PART})\\.(${REGEXP.PART})`;
REGEXP.STRING = '(["\\\'])([^"]*)\\1';
REGEXP.FLOAT = '[0-9]+\\.[0-9]+';
REGEXP.INTEGER = '[0-9]+';
REGEXP.BOOLEAN = 'true|false';
REGEXP.GLOBAL_PROPERTIES = 'undefined|null|NaN|Infinity';

const ALLOWED_GLOBAL_OBJECTS = [
  'String', 'Number', 'Array', 'Object', 'Date', 'Math',
  'location', 'navigator'
];

/**
 * Get regexp string for 1 argument operator
 * @param {String} op Operator
 */
function get1ArgOpRegex(op) {
  return `^(${op})(.+)$`;
}

/**
 * Get regexp string for 2 argument operator
 * @param {String} op Operator
 */
function get2ArgOpRegex(op) {
  return `^(.+)(${op})(.+)$`;
}

module.exports = {
  REGEXP,
  ALLOWED_GLOBAL_OBJECTS,
  get1ArgOpRegex,
  get2ArgOpRegex
};
