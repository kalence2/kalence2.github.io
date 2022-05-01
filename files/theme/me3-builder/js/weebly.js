/**
 * Initialization variables when hosted on Weebly.
 *
 * @author Matt Acosta
 */

/**
 * @namespace
 */
var Core = Core || {};

jQuery191(function($) {
  Core.mediaUrl = '/files/theme/me3-builder/';
});

/**
 * Provides compatibility functions for old browsers so that they do not crash
 * before an error message is displayed.
 */
(function () {
  // https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */) {
      "use strict";
      if (this == null) {
        throw new TypeError();
      }
      var t = Object(this);
      var len = t.length >>> 0;
      if (len === 0) {
        return -1;
      }
      var n = 0;
      if (arguments.length > 1) {
        n = Number(arguments[1]);
        if (n != n) {  // Shortcut for verifying if it's NaN.
          n = 0;
        }
        else if (n != 0 && n != Infinity && n != -Infinity) {
          n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
      }
      if (n >= len) {
        return -1;
      }
      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
      for (; k < len; k++) {
        if (k in t && t[k] === searchElement) {
          return k;
        }
      }
      return -1;
    }
  }
  
  // https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/isArray
  if (!Array.isArray) {
    Array.isArray = function(vArg) {
      return Object.prototype.toString.call(vArg) === '[object Array]';
    }
  }
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
  if (!Date.now) {
    Date.now = function() {
      return new Date().getTime();
    }
  }
})();
