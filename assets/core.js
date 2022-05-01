/**
 * Provides basic, site-wide utility functions.
 *
 * @author Matt Acosta
 */

jQuery191(function() {
  Core.initialize();
});

var Core = {
  browser: '',
  
  host: '',
  
  initialize: function() {
    Core.host = location.protocol + '//' + (location.host || location.hostname);
  },
  
  /**
   * Formats a string that utilizes composite formatting to include zero-based
   * indexed placeholders (format items). Each format item is replaced with the
   * string representation of the corresponding argument in the parameter list.
   */
  format: function(str) {
    var length = arguments.length;
    for (var i = 1; i < length; i++) {
      str = str.replace('{' + (i - 1) + '}', arguments[i]);
    }
    return str;
  },
  
  /**
   * Similar to Core.format(), except able to replace multiple occurances of the
   * same placeholder. Uses regular expressions, only use if necessary.
   */
  formatAll: function(str) {
    var length = arguments.length;
    for (var i = 1; i < length; i++) {
      str = str.replace(new RegExp('\\{' + (i - 1) + '\\}', 'g'), arguments[i]);
    }
    return str;
  },
  
  /**
   * Determines the client's browser.
   *
   * Supported browsers include:
   * - chrome: Google Chrome
   * - ff: Mozilla Firefox
   * - ie: Internet Explorer 9 or later
   * - ie6/ie7/ie8: Internet Explorer 6, 7, and 8 respectively.
   * - opera: Opera
   * - safari: Safari
   *
   * @returns {string} A supported browser identifier or 'unknown' if the
   *   browser cannot be determined.
   */
  getBrowser: function() {
    if (Core.browser !== '') {
      return Core.browser;
    }
    
    if (!jQuery191.support.hrefNormalized && !jQuery191.support.tbody && !jQuery191.support.style && !jQuery191.support.opacity) {
      if ((typeof document.body.style.maxHeight != 'undefined') || (window.XMLHttpRequest)) {
        Core.browser = 'ie7';
      }
      else {
        Core.browser = 'ie6';
      }
    }
    else if (jQuery191.support.hrefNormalized && jQuery191.support.tbody && !jQuery191.support.style && !jQuery191.support.opacity) {
      Core.browser = 'ie8';
    }
    else {
      var userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.indexOf('msie') != -1) {
        Core.browser = 'ie';
      }
      else if (userAgent.indexOf('firefox') != -1) {
        Core.browser = 'ff';
      }
      else if (userAgent.indexOf('chrome') != -1) {
        Core.browser = 'chrome';
      }
      else if (userAgent.indexOf('safari') != -1) {
        Core.browser = 'safari';
      }
      else if (userAgent.indexOf('opera') != -1) {
        Core.browser = 'opera';
      }
      else {
        Core.browser = 'unknown';
      }
    }

    return Core.browser;
  },
  
  /**
   * Returns the URL fragment, without the leading '#' character.
   */
  getHash: function() {
    var hash = window.location.hash || '';
    return hash.substr(1, hash.length);
  },
  
  /**
   * Returns true if the client browser is Internet Explorer.
   *
   * @param {number=} version
   *   (optional) A particular version of IE. Only returns true for IE 6, 7 and 8.
   */
  isIE: function(version) {
    var browser = Core.getBrowser();
    
    if (version) {
      return (('ie' + version) == browser);
    }
    
    return ('ie6' == browser || 'ie7' == browser || 'ie8' == browser || 'ie' == browser);
  },
  
  /**
   * Removes whitespace (or any specified characters) from the end of a string.
   *
   * @param {string} str
   *   The string to trim.
   * @param {string} charlist
   *   If not provided, this function simply removes whitespace, including the
   *   Unicode character 'NO-BREAK SPACE' (U+00A0).
   */
  trimRight: function(str, charlist) {
    charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');
    
    return (str + '').replace(new RegExp('[' + charlist + ']+$', 'g') , '');
  }
};

var Hash = {
  /**
   * Hash conversion base.
   *
   * This can be randomized to be unfriendly for users. :P
   */
  base64: '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/',
  /**
   * Delimiter used when hashing multiple data sets.
   */
  delimiter: '!',
  /**
   * Used to denote an empty data set.
   */
  empty: '.',
  
  /**
   * Decodes a hash string back into individual values.
   *
   * @param {string} data
   *   The hash string to decode.
   *
   * @returns {Array} A list of decoded hash characters.
   */
  decode: function(data) {
    var array = [];
    var base = Hash.base64;
    
    for (var i = 0; i < data.length; i++) {
      var value = data.charAt(i);
      value = (value == Hash.empty) ? null : base.indexOf(value);
      
      array.push(value);
    }
    
    return array;
  },
  
  /**
   * Encodes a list of values into a hash string.
   *
   * @param {Array} data
   *   An array of values to encode.
   * @param {boolean=} useEmpty
   *   (optional) If true, invalid values are returned as the Hash.empty
   *   character instead of being skipped. Defaults to false.
   *
   * @returns {string} An encoded hash string.
   */
  encode: function(data, useEmpty) {
    var hash = '';
    var base = Hash.base64;
    
    for (var i = 0; i < data.length; i++) {
      if (data[i] !== null && data[i] >= 0 && data[i] < base.length) {
        hash += base.charAt(data[i]);
      }
      else if (useEmpty) {
        hash += Hash.empty;
      }
    }
    
    return Core.trimRight(hash, Hash.empty);
  },
  
  /**
   * Encodes a list of data arrays into a single hash separated by the
   * Hash.delimiter character.
   *
   * @param {Array} data
   *   An list of data arrays to encode.
   *
   * @returns {string} An encoded hash string.
   */
  encodeAll: function(data) {
    var hashes = [];
    
    for (var i = 0; i < data.length; i++) {
      hashes.push(Hash.encode(data[i]));
    }
    
    return Core.trimRight(hashes.join(Hash.delimiter), Hash.delimiter);
  }
};

var LocalStorage = {
  /**
   * There is a compatibility workaround for unsupported browsers here:
   * https://developer.mozilla.org/en-US/docs/Web/Guide/DOM/Storage
   */
  isSupported: (typeof window.localStorage === 'object'),
  
  /**
   * Removes all stored key/value pairs.
   */
  clear: function() {
    if (LocalStorage.isSupported) {
      localStorage.clear();
    }
  },
  
  /**
   * Gets the value associated with the given key.
   *
   * @param {string} key
   *   The storage key.
   *
   * @returns {string} The stored value.
   */
  get: function(key) {
    if (LocalStorage.isSupported && key) {
      return localStorage.getItem(key);
    }
    
    return null;
  },
  
  /**
   * Determines if the given key exists in storage.
   *
   * @param {string} key
   *   The storage key.
   *
   * @returns {boolean} If they key exists, returns true.
   */
  has: function(key) {
    return (LocalStorage.get(key) !== null);
  },
  
  /**
   * Stores a value in the specified key.
   *
   * @param {string} key
   *   The storage key.
   * @param {string} value
   *   The storage value.
   * 
   * @returns {boolean} If the value was successfully saved, returns true. If
   * the quota limit was exceeded, returns false. For example, when using iOS 5
   * or earlier in private browsing mode.
   */
  set: function(key, value) {
    var saved = false;
    
    if (LocalStorage.isSupported && key) {
      try {
        localStorage.setItem(key, value || {});
        saved = true;
      }
      catch(e) {
        // NOTE: Catching the exception would crash old browsers.
        if (e == QUOTA_EXCEEDED_ERR) {
          alert('Local storage quota exceeded.');
        }
      }
    }
    
    return saved;
  },
  
  /**
   * Removes the specified key/value pair from storage.
   *
   * @param {string} key
   *   The storage key.
   */
  remove: function(key) {
    if (LocalStorage.isSupported && key) {
      localStorage.removeItem(key);
    }
  }
};

var Telemetry = {
  /**
   * Tracks visitor behavior that is not related to a web page visit, such as
   * interaction with a Flash video movie control or any user event that does
   * not trigger a page request.
   *
   * @param {string} category
   *   The general event category.
   * @param {string} action
   *   The action for the event.
   * @param {string=} label
   *   (optional) A descriptor for the event.
   * @param {boolean=} noninteraction
   *   (optional) If true, this event will not be used in bounce rate
   *   calculations. Defaults to false.
   */
  trackEvent: function(category, action, label, noninteraction) {
    try {
      _gaq.push(['_trackEvent', category, action, label, undefined, noninteraction]);
    }
    catch(e) {
      // Do nothing.
    }
  }
};

/**
 * Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
(function() {
  var initializing = false;
  var fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
  
  // The base Class implementation (does nothing).
  window.Class = function() {};
  
  // Create a new Class that inherits from this class.
  Class.extend = function(properties) {
    var _super = this.prototype;
    
    // Instantiate a base class (but only create the instance, don't run the
    // init constructor).
    initializing = true;
    var prototype = new this();
    initializing = false;
    
    // Copy the properties over onto the new prototype.
    for (var name in properties) {
      // Check if we're overwriting an existing function.
      if (typeof properties[name] == 'function' && typeof _super[name] == 'function' && fnTest.test(properties[name])) {
        prototype[name] = (function(name, fn) {
          return function() {
            var temp = this._super;
            
            // Add a new ._super() method that is the same method but on the super-class.
            this._super = _super[name];
            
            // The method only need to be bound temporarily, so we remove it
            // when we're done executing.
            var ret = fn.apply(this, arguments);
            this._super = temp;
            
            return ret;
          };
        })(name, properties[name]);
      }
      else {
        prototype[name] = properties[name];
      }
    }
    
    // The dummy class constructor.
    function Class() {
      // All construction is actually done in the init method.
      if (!initializing && this.init) {
        this.init.apply(this, arguments);
      }
    }
    
    // Populate our constructed prototype object.
    Class.prototype = prototype;
    
    // Enforce the constructor to be what we expect.
    Class.constructor = Class;
    
    // And make this class extendable.
    Class.extend = this.callee || arguments.callee;
    
    return Class;
  };
})();
