/*!-----------------------------------------------------------------
    Name: Youplay - Game Template based on Bootstrap
    Version: 3.3.2
    Author: nK
    Website: https://nkdev.info/
    Purchase: https://1.envato.market/youplayhtmlinfo
    Support: https://nk.ticksy.com/
    License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
    Copyright 2020.
-------------------------------------------------------------------*/
    /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/*------------------------------------------------------------------

  Theme Options

-------------------------------------------------------------------*/
var options = {
  // enable parallax
  parallax: true,
  // set small navbar on load
  navbarSmall: false,
  // enable fade effect between pages
  fadeBetweenPages: true,
  // twitter and instagram php paths
  php: {
    twitter: './php/twitter/tweet.php',
    instagram: './php/instagram/instagram.php'
  }
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _parts_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _parts_fadeBetweenPages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _parts_initAnchors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _parts_initFacebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _parts_initInstagram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _parts_initTwitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _parts_initNavbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _parts_initForms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var _parts_initSearch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _parts_initObjectFitImages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14);
/* harmony import */ var _parts_initFlickity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15);
/* harmony import */ var _parts_initOwlCarousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16);
/* harmony import */ var _parts_initMagnificPopup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17);
/* harmony import */ var _parts_initSliderRevolution__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18);
/* harmony import */ var _parts_initIsotope__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19);
/* harmony import */ var _parts_initHexagonRating__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20);
/* harmony import */ var _parts_initJarallax__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(21);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



















/*------------------------------------------------------------------

  Youplay Class

-------------------------------------------------------------------*/

var YOUPLAY =
/*#__PURE__*/
function () {
  function YOUPLAY(newOptions) {
    _classCallCheck(this, YOUPLAY);

    var self = this;
    self.options = newOptions;
  }

  _createClass(YOUPLAY, [{
    key: "init",
    value: function init(newOptions) {
      // prt:sc:dm
      var self = this; // init options

      self.options = _parts_utility__WEBPACK_IMPORTED_MODULE_1__["$"].extend({}, this.options, newOptions);

      function initPlugins() {
        // navbar set to small
        if (!self.options.navbarSmall) {
          self.options.navbarSmall = Object(_parts_utility__WEBPACK_IMPORTED_MODULE_1__["$"])('.navbar-youplay').hasClass('navbar-small');
        } // init tooltips and popovers


        Object(_parts_utility__WEBPACK_IMPORTED_MODULE_1__["$"])('[data-toggle="tooltip"]').tooltip({
          container: 'body'
        });
        Object(_parts_utility__WEBPACK_IMPORTED_MODULE_1__["$"])('[data-toggle="popover"]').popover(); // fade between pages

        self.fadeBetweenPages();
        self.initAnchors();
        self.initFacebook();
        self.initInstagram();
        self.initTwitter();
        self.initNavbar();
        self.initForms();
        self.initSearch(); // Plugins

        self.initObjectFitImages();
        self.initFlickity();
        self.initOwlCarousel();
        self.initMagnificPopup();
        self.initSliderRevolution();
        self.initIsotope();
        self.initHexagonRating(); // accordions

        Object(_parts_utility__WEBPACK_IMPORTED_MODULE_1__["$"])('.youplay-accordion, .panel-group').find('.collapse').on('shown.bs.collapse', function () {
          Object(_parts_utility__WEBPACK_IMPORTED_MODULE_1__["$"])(this).parent().find('.icon-plus').removeClass('icon-plus').addClass('icon-minus');
          self.refresh();
        }).on('hidden.bs.collapse', function () {
          Object(_parts_utility__WEBPACK_IMPORTED_MODULE_1__["$"])(this).parent().find('.icon-minus').removeClass('icon-minus').addClass('icon-plus');
          self.refresh();
        }); // jarallax init after all plugins

        self.initJarallax();
      }

      if (Object(_parts_utility__WEBPACK_IMPORTED_MODULE_1__["$"])('.page-preloader').length) {
        // after page load
        _parts_utility__WEBPACK_IMPORTED_MODULE_1__["$wnd"].on('load', function () {
          initPlugins(); // some timeout after plugins init

          setTimeout(function () {
            // hide preloader
            Object(_parts_utility__WEBPACK_IMPORTED_MODULE_1__["$"])('.page-preloader').fadeOut(function () {
              Object(_parts_utility__WEBPACK_IMPORTED_MODULE_1__["$"])(this).find('> *').remove();
            });
          }, 200);
        }) // fix safari back button
        // thanks http://stackoverflow.com/questions/8788802/prevent-safari-loading-from-cache-when-back-button-is-clicked
        .on('pageshow', function (e) {
          if (e.originalEvent.persisted) {
            Object(_parts_utility__WEBPACK_IMPORTED_MODULE_1__["$"])('.page-preloader').hide();
          }
        });
      } else {
        initPlugins();
        _parts_utility__WEBPACK_IMPORTED_MODULE_1__["$wnd"].on('load', function () {
          self.refresh();
        });
      }
    } // eslint-disable-next-line

  }, {
    key: "refresh",
    value: function refresh() {
      window.dispatchEvent(new Event('resize'));
    }
  }, {
    key: "fadeBetweenPages",
    value: function fadeBetweenPages() {
      return _parts_fadeBetweenPages__WEBPACK_IMPORTED_MODULE_2__["fadeBetweenPages"].call(this);
    }
  }, {
    key: "initAnchors",
    value: function initAnchors() {
      return _parts_initAnchors__WEBPACK_IMPORTED_MODULE_3__["initAnchors"].call(this);
    }
  }, {
    key: "initFacebook",
    value: function initFacebook() {
      return _parts_initFacebook__WEBPACK_IMPORTED_MODULE_4__["initFacebook"].call(this);
    }
  }, {
    key: "initInstagram",
    value: function initInstagram() {
      return _parts_initInstagram__WEBPACK_IMPORTED_MODULE_5__["initInstagram"].call(this);
    }
  }, {
    key: "initTwitter",
    value: function initTwitter() {
      return _parts_initTwitter__WEBPACK_IMPORTED_MODULE_6__["initTwitter"].call(this);
    }
  }, {
    key: "initNavbar",
    value: function initNavbar() {
      return _parts_initNavbar__WEBPACK_IMPORTED_MODULE_7__["initNavbar"].call(this);
    }
  }, {
    key: "initForms",
    value: function initForms() {
      return _parts_initForms__WEBPACK_IMPORTED_MODULE_8__["initForms"].call(this);
    }
  }, {
    key: "initSearch",
    value: function initSearch() {
      return _parts_initSearch__WEBPACK_IMPORTED_MODULE_9__["initSearch"].call(this);
    }
  }, {
    key: "initObjectFitImages",
    value: function initObjectFitImages() {
      return _parts_initObjectFitImages__WEBPACK_IMPORTED_MODULE_10__["initObjectFitImages"].call(this);
    }
  }, {
    key: "initFlickity",
    value: function initFlickity() {
      return _parts_initFlickity__WEBPACK_IMPORTED_MODULE_11__["initFlickity"].call(this);
    }
  }, {
    key: "initOwlCarousel",
    value: function initOwlCarousel() {
      return _parts_initOwlCarousel__WEBPACK_IMPORTED_MODULE_12__["initOwlCarousel"].call(this);
    }
  }, {
    key: "initMagnificPopup",
    value: function initMagnificPopup() {
      return _parts_initMagnificPopup__WEBPACK_IMPORTED_MODULE_13__["initMagnificPopup"].call(this);
    }
  }, {
    key: "initSliderRevolution",
    value: function initSliderRevolution() {
      return _parts_initSliderRevolution__WEBPACK_IMPORTED_MODULE_14__["initSliderRevolution"].call(this);
    }
  }, {
    key: "initIsotope",
    value: function initIsotope() {
      return _parts_initIsotope__WEBPACK_IMPORTED_MODULE_15__["initIsotope"].call(this);
    }
  }, {
    key: "initHexagonRating",
    value: function initHexagonRating() {
      return _parts_initHexagonRating__WEBPACK_IMPORTED_MODULE_16__["initHexagonRating"].call(this);
    }
  }, {
    key: "initJarallax",
    value: function initJarallax() {
      return _parts_initJarallax__WEBPACK_IMPORTED_MODULE_17__["initJarallax"].call(this);
    }
  }]);

  return YOUPLAY;
}();
/*------------------------------------------------------------------

  Init Youplay

-------------------------------------------------------------------*/


window.youplay = new YOUPLAY(_parts_options__WEBPACK_IMPORTED_MODULE_0__["options"]);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$wnd", function() { return $wnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$doc", function() { return $doc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/*------------------------------------------------------------------

  Utility

-------------------------------------------------------------------*/
var $ = jQuery;
var isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/g.test(navigator.userAgent || navigator.vendor || window.opera);
var $wnd = $(window);
var $doc = $(document);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeBetweenPages", function() { return fadeBetweenPages; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Fade Between Pages
  note: use .no-fade classname for links, that not need to fade

-------------------------------------------------------------------*/

function fadeBetweenPages() {
  var _this = this; // prevent fade between pages if there is no preloader


  if (!_this.options.fadeBetweenPages || !Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.page-preloader').length) {
    return;
  }

  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', 'a:not(.no-fade):not([target="_blank"]):not(.btn):not(.button):not([href*="#"]):not([href^="mailto"]):not([href^="javascript:"]):not(.search-toggle)', function (e) {
    // default prevented
    if (e.isDefaultPrevented()) {
      return;
    } // prevent for gallery


    if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parents('.gallery-popup:eq(0)').length) {
      return;
    } // stop if empty attribute


    if (!Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('href')) {
      return;
    }

    var href = this.href;

    if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).hasClass('dropdown-toggle')) {
      if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).next('.dropdown-menu').css('visibility') === 'hidden' || Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().hasClass('open')) {
        return;
      }
    }

    if (href) {
      e.preventDefault();
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.page-preloader').fadeIn(400, function () {
        window.location.href = href;
      });
    }
  });
}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAnchors", function() { return initAnchors; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Anchors

-------------------------------------------------------------------*/

function initAnchors() {
  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.navbar a:not(.search-toggle), a.btn', function (e) {
    var isHash = this.hash;
    var isURIsame = this.baseURI === window.location.href;

    if (isHash && isHash !== '#' && isHash !== '#!' && isURIsame) {
      var $hashBlock = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(isHash);
      var hash = isHash.replace(/^#/, '');

      if ($hashBlock.length) {
        // add hash to address bar
        $hashBlock.attr('id', '');
        document.location.hash = hash;
        $hashBlock.attr('id', hash); // scroll to block

        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('html, body').stop().animate({
          scrollTop: $hashBlock.offset().top - 80
        }, 700);
        e.preventDefault();
      }
    }
  });
}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initFacebook", function() { return initFacebook; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Facebook

-------------------------------------------------------------------*/

function initFacebook() {
  if (!Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.fb-page').length) {
    return;
  }

  var self = this;
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('body').append('<div id="fb-root"></div>');

  (function (d, s, id) {
    if (window.location.protocol === 'file:') {
      return;
    }

    var fjs = d.getElementsByTagName(s)[0];

    if (d.getElementById(id)) {
      return;
    }

    var js = d.createElement(s);
    js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk'); // resize on facebook widget loaded


  window.fbAsyncInit = function () {
    window.FB.Event.subscribe('xfbml.render', function () {
      self.refresh();
    });
  };
}



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initInstagram", function() { return initInstagram; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Instagram

-------------------------------------------------------------------*/

function initInstagram() {
  var self = this;
  var $instagram = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.youplay-instagram');

  if (!$instagram.length || !self.options.php.instagram) {
    return;
  }
  /**
   * Templating a instagram item using '{{ }}' braces
   * @param  {Object} data Instagram item details are passed
   * @return {String} Templated string
   */


  var templating = function templating(data, temp) {
    var tempVariables = ['link', 'image', 'caption'];

    for (var i = 0, len = tempVariables.length; i < len; i++) {
      temp = temp.replace(new RegExp("{{".concat(tempVariables[i], "}}"), 'gi'), data[tempVariables[i]]);
    }

    return temp;
  };

  $instagram.each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var instagramOptions = {
      userID: $this.attr('data-instagram-user-id') || null,
      count: $this.attr('data-instagram-count') || 6,
      template: $this.attr('data-instagram-template') || ['<div class="col-xs-4">', '    <a href="{{link}}" target="_blank">', '        <img src="{{image}}" alt="{{caption}}" class="kh-img-stretch">', '    </a>', '</div>'].join(' '),
      loadingText: 'Loading...',
      failText: 'Failed to load data',
      apiPath: self.options.php.instagram
    }; // stop if running in file protocol

    if (window.location.protocol === 'file:') {
      $this.html("<div class=\"col-xs-12\">".concat(instagramOptions.failText, "</div>")); // eslint-disable-next-line

      console.error('You should run you website on webserver with PHP to get working Twitter');
      return;
    }

    if (!instagramOptions.userID) {
      $this.html("<div class=\"col-xs-12\">".concat(instagramOptions.failText, "</div>")); // eslint-disable-next-line

      console.error('If you want to fetch instagram images, you must define the user ID. How to get it see here - http://jelled.com/instagram/lookup-user-id');
      return;
    }

    $this.html("<div class=\"col-xs-12\">".concat(instagramOptions.loadingText, "</div>")); // Fetch instagram images

    _utility__WEBPACK_IMPORTED_MODULE_0__["$"].getJSON(instagramOptions.apiPath, {
      userID: instagramOptions.userID,
      count: instagramOptions.count
    }, function (response) {
      $this.html('');

      for (var i = 0; i < instagramOptions.count; i++) {
        var instaItem = false;

        if (response[i]) {
          instaItem = response[i];
        } else if (response.statuses && response.statuses[i]) {
          instaItem = response.statuses[i];
        } else {
          break;
        }

        var tempData = {
          link: instaItem.link,
          image: instaItem.images.thumbnail.url,
          caption: instaItem.caption
        };
        $this.append(templating(tempData, instagramOptions.template));
      } // resize window


      self.refresh();
    }).fail(function (a) {
      $this.html("<div class=\"col-xs-12\">".concat(instagramOptions.failText, "</div>")); // eslint-disable-next-line

      console.error(a.responseText);
    });
  });
}



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTwitter", function() { return initTwitter; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Twitter
  https://github.com/sonnyt/Tweetie

-------------------------------------------------------------------*/

function initTwitter() {
  var $twtFeeds = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.youplay-twitter');
  var self = this;

  if (!$twtFeeds.length || !self.options.php.twitter) {
    return;
  }
  /**
   * Templating a tweet using '{{ }}' braces
   * @param  {Object} data Tweet details are passed
   * @return {String}      Templated string
   */


  var templating = function templating(data, temp) {
    var tempVariables = ['date', 'tweet', 'avatar', 'url', 'retweeted', 'screen_name', 'user_name'];

    for (var i = 0, len = tempVariables.length; i < len; i++) {
      temp = temp.replace(new RegExp("{{".concat(tempVariables[i], "}}"), 'gi'), data[tempVariables[i]]);
    }

    return temp;
  };

  $twtFeeds.each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var twitterOptions = {
      username: $this.attr('data-twitter-user-name') || null,
      list: null,
      hashtag: $this.attr('data-twitter-hashtag') || null,
      count: $this.attr('data-twitter-count') || 2,
      hideReplies: $this.attr('data-twitter-hide-replies') === 'true',
      template: $this.attr('data-twitter-template') || ['<div>', '    <div class="youplay-twitter-icon"><i class="fab fa-twitter"></i></div>', '    <div class="youplay-twitter-date date">', '        <span>{{date}}</span>', '    </div>', '    <div class="youplay-twitter-text">', '       {{tweet}}', '    </div>', '</div>'].join(' '),
      loadingText: 'Loading...',
      failText: 'Failed to load data',
      apiPath: self.options.php.twitter
    }; // stop if running in file protocol

    if (window.location.protocol === 'file:') {
      $this.html(twitterOptions.failText); // eslint-disable-next-line

      console.error('You should run you website on webserver with PHP to get working Twitter');
      return;
    }

    if (twitterOptions.list && !twitterOptions.username) {
      $this.html(twitterOptions.failText); // eslint-disable-next-line

      console.error('If you want to fetch tweets from a list, you must define the username of the list owner.');
      return;
    } // Set loading


    $this.html("<span>".concat(twitterOptions.loadingText, "</span>")); // Fetch tweets

    _utility__WEBPACK_IMPORTED_MODULE_0__["$"].getJSON(twitterOptions.apiPath, {
      username: twitterOptions.username,
      list: twitterOptions.list,
      hashtag: twitterOptions.hashtag,
      count: twitterOptions.count,
      exclude_replies: twitterOptions.hideReplies
    }, function (twt) {
      $this.html('');

      for (var i = 0; i < twitterOptions.count; i++) {
        var tweet = false;

        if (twt[i]) {
          tweet = twt[i];
        } else if (twt.statuses && twt.statuses[i]) {
          tweet = twt.statuses[i];
        } else {
          break;
        }

        var tempData = {
          user_name: tweet.user.name,
          date: tweet.date_formatted,
          tweet: tweet.text_entitled,
          avatar: "<img src=\"".concat(tweet.user.profile_image_url, "\" />"),
          url: "https://twitter.com/".concat(tweet.user.screen_name, "/status/").concat(tweet.id_str),
          retweeted: tweet.retweeted,
          screen_name: "@".concat(tweet.user.screen_name)
        };
        $this.append(templating(tempData, twitterOptions.template));
      } // resize window


      self.refresh();
    }).fail(function (a) {
      $this.html(twitterOptions.failText); // eslint-disable-next-line

      console.error(a.responseText);
    });
  });
}



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNavbar", function() { return initNavbar; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Navbar

-------------------------------------------------------------------*/

function initNavbar() {
  var self = this;
  self.navbarSmall = false;
  self.navbarMaxTop = 100; // navbar size

  self.navbarSize = function (curTop) {
    if (curTop > self.navbarMaxTop && !self.navbarSmall) {
      self.navbarSmall = true;
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.navbar-youplay').addClass('navbar-small');
    }

    if (curTop <= self.navbarMaxTop && self.navbarSmall) {
      self.navbarSmall = false;
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.navbar-youplay').removeClass('navbar-small');
    }
  }; // navbar collapse


  self.navbarCollapse = function () {
    _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.navbar-youplay [data-toggle=off-canvas]', function () {
      var $toggleTarget = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.navbar-youplay').find(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-target'));
      var collapsed = $toggleTarget.hasClass('collapse');
      $toggleTarget["".concat(collapsed ? 'remove' : 'add', "Class")]('collapse');
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.navbar-youplay')["".concat(collapsed ? 'add' : 'remove', "Class")]('youplay-navbar-collapsed');
    });
    var resizeTimeout;
    _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('resize', function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.navbar-youplay').addClass('no-transition');
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.navbar-youplay').removeClass('no-transition');
      }, 50);
    }); // close navbar if clicked on content

    _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.youplay-navbar-collapsed ~ .content-wrap', function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.navbar-youplay').find('[data-toggle=off-canvas]').click();
    }); // prevent follow link when there is dropdown

    if (!self.options.fadeBetweenPages || !Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.page-preloader').length) {
      _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.navbar-youplay .dropdown-toggle', function () {
        if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).next('.dropdown-menu').css('visibility') === 'visible' && !Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().hasClass('open')) {
          window.location.href = this.href;
        }
      });
    }
  }; // navbar submenu fix


  self.navbarSubmenuFix = function () {
    var $navbar = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.navbar-youplay'); // don't close submenu if click on child submenu toggle

    $navbar.on('click', '.dropdown-menu .dropdown-toggle', function (e) {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent('.dropdown').toggleClass('open');
      e.preventDefault();
      e.stopPropagation();
    }); // don't close submenu with form if one of the inputs focused

    $navbar.on('focus', 'input, textarea, button', function () {
      if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).closest('.dropdown-menu').is(':visible')) {
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parents('.dropdown').addClass('open');
      }
    });
  }; // navbar collapse


  self.navbarCollapse(); // navbar set to small

  if (!self.options.navbarSmall) {
    _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('scroll', function () {
      self.navbarSize(_utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].scrollTop());
    });
    self.navbarSize(_utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].scrollTop());
  } // navbar submenu fix
  // don't close submenu if click on child submenu toggle


  self.navbarSubmenuFix();
}



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initForms", function() { return initForms; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Forms

-------------------------------------------------------------------*/

function initForms() {
  var self = this; // inputs set active

  self.inputsActive = function (item, active) {
    // activate input
    if (active) {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(item).parent().addClass('input-filled'); // deactivate input
    } else {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(item).parent().removeClass('input-filled');
    }
  }; // active inputs


  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('focus', 'input, textarea', function () {
    self.inputsActive(this, true);
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('blur', 'input, textarea', function () {
    self.inputsActive(this);
  }); // autofocus inputs

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('input, textarea').filter('[autofocus]:eq(0)').focus(); // ajax form submit

  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('submit', '.youplay-form-ajax', function (e) {
    e.preventDefault();
    var $form = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var $button = $form.find('[type="submit"]'); // if disabled button - stop this action

    if ($button.is('.disabled') || $button.is('[disabled]')) {
      return;
    } // post request


    _utility__WEBPACK_IMPORTED_MODULE_0__["$"].post(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('action'), Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).serialize(), function (data) {
      var response = JSON.parse(data);
      window.swal({
        type: 'success',
        title: 'Success!',
        text: response && response.response ? response.response : data,
        showConfirmButton: true,
        confirmButtonClass: 'btn-default'
      });
      $form[0].reset();
    }).fail(function (data) {
      window.swal({
        type: 'error',
        title: 'Error!',
        text: data.responseText,
        showConfirmButton: true,
        confirmButtonClass: 'btn-default'
      });
    });
  });
}



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSearch", function() { return initSearch; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Search

-------------------------------------------------------------------*/

function initSearch() {
  var self = this; // toggle search block

  self.searchToggle = function (type) {
    var $searchBlock = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.search-block');
    var opened = $searchBlock.hasClass('active'); // no open when opened and no close when closed

    if (type === 'close' && !opened || type === 'open' && opened) {
      return;
    } // hide


    if (opened) {
      $searchBlock.removeClass('active'); // show
    } else {
      $searchBlock.addClass('active');
      setTimeout(function () {
        $searchBlock.find('input').focus();
      }, 120);
    }
  }; // toggle search block


  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.search-toggle', function (e) {
    e.preventDefault();
    e.stopPropagation();
    self.searchToggle();
  }); // close search on ESC press

  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('keyup', function (e) {
    if (e.keyCode === 27) {
      self.searchToggle('close');
    }
  });
}



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initObjectFitImages", function() { return initObjectFitImages; });
/*------------------------------------------------------------------

  Object Fit Images

-------------------------------------------------------------------*/
function initObjectFitImages() {
  if (typeof objectFitImages !== 'undefined') {
    objectFitImages();
  }
}



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initFlickity", function() { return initFlickity; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Flickity

-------------------------------------------------------------------*/

function initFlickity() {
  if (typeof window.Flickity === 'undefined') {
    return;
  }
  /*
   * Hack to add imagesLoaded event
   * https://github.com/metafizzy/flickity/issues/328
   */


  Flickity.prototype.imagesLoaded = function () {
    if (!this.options.imagesLoaded) {
      return;
    }

    var _this = this;

    var timeout = false;
    imagesLoaded(this.slider).on('progress', function (instance, image) {
      var cell = _this.getParentCell(image.img);

      _this.cellSizeChange(cell && cell.element);

      if (!_this.options.freeScroll) {
        _this.positionSliderAtSelected();
      }

      clearTimeout(timeout);
      timeout = setTimeout(function () {
        _this.dispatchEvent('imagesLoadedTimeout', null, [image.img, cell.element]);
      }, 100);
    });
  }; // prevent click event fire when drag carousel


  function noClickEventOnDrag($carousel) {
    $carousel.on('dragStart.flickity', function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).find('.flickity-viewport').addClass('is-dragging');
    });
    $carousel.on('dragEnd.flickity', function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).find('.flickity-viewport').removeClass('is-dragging');
    });
  }

  var id = 0;
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.youplay-carousel').each(function () {
    // wrap all childs
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).children().wrap('<div>');
    var className = "youplay-carousel-".concat(id++);
    var autoplay = parseInt(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-autoplay'), 10) || false;
    var dots = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-dots') === 'true' || false;
    var arrows = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-arrows') !== 'false' || false;
    var loop = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-loop') !== 'false';
    var stagePadding = parseFloat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-stage-padding') || 70);
    var itemPadding = parseFloat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-item-padding') || 0);
    var styles = '';

    if (itemPadding) {
      styles += ".".concat(className, " .flickity-slider > * { padding: 0 ").concat(itemPadding, "px; }");
    }

    if (stagePadding) {
      styles += ".".concat(className, " .flickity-slider { margin-left: ").concat(stagePadding, "px; }"); // Size 4

      styles += ".".concat(className, ".flickity-enabled .flickity-slider > * { width: calc(25% - ").concat(stagePadding * 2 / 4, "px); }");
      styles += '@media (min-width: 767px) and (max-width: 991px) {';
      styles += ".".concat(className, ".flickity-enabled .flickity-slider > * { width: calc(33.3334% - ").concat(stagePadding * 2 / 3, "px); }");
      styles += '}';
      styles += '@media (max-width: 767px) {';
      styles += ".".concat(className, ".flickity-enabled .flickity-slider > * { width: calc(50% - ").concat(stagePadding * 2 / 2, "px); }");
      styles += '}';
      styles += '@media (max-width: 532px) {';
      styles += ".".concat(className, ".flickity-enabled .flickity-slider > * { width: calc(100% - ").concat(stagePadding * 2, "px); }");
      styles += '}'; // Size 1

      styles += ".".concat(className, ".flickity-enabled.youplay-carousel-size-1 .flickity-slider > * { width: calc(100% - ").concat(stagePadding * 2, "px); }"); // Size 2

      styles += ".".concat(className, ".flickity-enabled.youplay-carousel-size-2 .flickity-slider > * { width: calc(50% - ").concat(stagePadding * 2 / 2, "px); }");
      styles += '@media (max-width: 767px) {';
      styles += ".".concat(className, ".flickity-enabled.youplay-carousel-size-2 .flickity-slider > * { width: calc(100% - ").concat(stagePadding * 2, "px); }");
      styles += '}'; // Size 3

      styles += ".".concat(className, ".flickity-enabled.youplay-carousel-size-3 .flickity-slider > * { width: calc(33.3334% - ").concat(stagePadding * 2 / 3, "px); }");
      styles += '@media (min-width: 767px) and (max-width: 991px) {';
      styles += ".".concat(className, ".flickity-enabled.youplay-carousel-size-3 .flickity-slider > * { width: calc(50% - ").concat(stagePadding * 2 / 2, "px); }");
      styles += '}';
      styles += '@media (max-width: 767px) {';
      styles += ".".concat(className, ".flickity-enabled.youplay-carousel-size-3 .flickity-slider > * { width: calc(100% - ").concat(stagePadding * 2, "px); }");
      styles += '}'; // Size 5

      styles += ".".concat(className, ".flickity-enabled.youplay-carousel-size-5 .flickity-slider > * { width: calc(20% - ").concat(stagePadding * 2 / 5, "px); }");
      styles += '@media (min-width: 767px) and (max-width: 991px) {';
      styles += ".".concat(className, ".flickity-enabled.youplay-carousel-size-5 .flickity-slider > * { width: calc(25% - ").concat(stagePadding * 2 / 4, "px); }");
      styles += '}';
      styles += '@media (max-width: 767px) {';
      styles += ".".concat(className, ".flickity-enabled.youplay-carousel-size-5 .flickity-slider > * { width: calc(33.3334% - ").concat(stagePadding * 2 / 3, "px); }");
      styles += '}';
      styles += '@media (max-width: 532px) {';
      styles += ".".concat(className, ".flickity-enabled.youplay-carousel-size-5 .flickity-slider > * { width: calc(50% - ").concat(stagePadding * 2 / 2, "px); }");
      styles += '}'; // Size 6

      styles += ".".concat(className, ".flickity-enabled.youplay-carousel-size-6 .flickity-slider > * { width: calc(16.666% - ").concat(stagePadding * 2 / 6, "px); }");
      styles += '@media (min-width: 767px) and (max-width: 991px) {';
      styles += ".".concat(className, ".flickity-enabled.youplay-carousel-size-6 .flickity-slider > * { width: calc(20% - ").concat(stagePadding * 2 / 5, "px); }");
      styles += '}';
      styles += '@media (max-width: 767px) {';
      styles += ".".concat(className, ".flickity-enabled.youplay-carousel-size-6 .flickity-slider > * { width: calc(25% - ").concat(stagePadding * 2 / 4, "px); }");
      styles += '}';
      styles += '@media (max-width: 532px) {';
      styles += ".".concat(className, ".flickity-enabled.youplay-carousel-size-6 .flickity-slider > * { width: calc(33.3334% - ").concat(stagePadding * 2 / 3, "px); }");
      styles += '}';
    }

    if (styles) {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])("<style>".concat(styles, "</style>")).appendTo('head');
    }

    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).addClass(className).flickity({
      cellAlign: 'left',
      wrapAround: loop,
      contain: true,
      prevNextButtons: arrows,
      pageDots: dots,
      autoPlay: autoplay,
      pauseAutoPlayOnHover: true,
      selectedAttraction: 0.1,
      friction: 0.6,
      imagesLoaded: true
    });
    noClickEventOnDrag(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
  }); // social horizontal navigation

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.youplay-user-navigation > ul, .youplay-user-navigation > div > ul').each(function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).flickity({
      cellAlign: 'left',
      wrapAround: false,
      contain: true,
      prevNextButtons: false,
      pageDots: false,
      selectedAttraction: 0.1,
      friction: 0.6,
      freeScroll: true
    });
    noClickEventOnDrag(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
  });
}



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initOwlCarousel", function() { return initOwlCarousel; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Owl Carousel
  DEPRECATED: used only for users who is not added Flickity

-------------------------------------------------------------------*/

function initOwlCarousel() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.owlCarousel === 'undefined') {
    return;
  }

  var id = 0;
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.owl-carousel').each(function () {
    var className = "youplay-carousel-".concat(id++);
    var autoplay = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-autoplay');
    var loop = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-loop') !== 'false';
    var stagePadding = parseFloat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-stage-padding') || 0);
    var itemPadding = parseFloat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-item-padding') || 0);
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).owlCarousel({
      loop: loop,
      stagePadding: stagePadding,
      dots: true,
      autoplay: !!autoplay,
      autoplayTimeout: autoplay,
      autoplaySpeed: 600,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 3
        },
        500: {
          items: 4
        },
        992: {
          items: 5
        },
        1200: {
          items: 6
        }
      }
    }).addClass(className);

    if (itemPadding) {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])("<style>.".concat(className, " .owl-item { padding-left: ").concat(itemPadding, "px; padding-right: ").concat(itemPadding, "px; }</style>")).appendTo('head');
    }
  }); // use Flickity instead

  if (typeof window.Flickity === 'undefined') {
    return;
  }

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.youplay-carousel').each(function () {
    var className = "youplay-carousel-".concat(id++);
    var autoplay = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-autoplay');
    var loop = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-loop') !== 'false';
    var stagePadding = parseFloat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-stage-padding') || 70);
    var itemPadding = parseFloat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-item-padding') || 0);
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).addClass('owl-carousel').owlCarousel({
      loop: loop,
      stagePadding: stagePadding,
      nav: true,
      dots: false,
      autoplay: !!autoplay,
      autoplayTimeout: autoplay,
      autoplaySpeed: 600,
      autoplayHoverPause: true,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        500: {
          items: 2
        },
        992: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    }).addClass(className);

    if (itemPadding) {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])("<style>.".concat(className, " .owl-item { padding-left: ").concat(itemPadding, "px; padding-right: ").concat(itemPadding, "px; }</style>")).appendTo('head');
    }
  });
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.youplay-slider').each(function () {
    var className = "youplay-carousel-".concat(id++);
    var autoplay = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-autoplay');
    var loop = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-loop') !== 'false';
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).addClass('owl-carousel').owlCarousel({
      loop: loop,
      nav: false,
      autoplay: !!autoplay,
      autoplayTimeout: autoplay,
      autoplaySpeed: 600,
      autoplayHoverPause: true,
      items: 1
    }).addClass(className);
  });
}



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMagnificPopup", function() { return initMagnificPopup; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Magnific Popup

-------------------------------------------------------------------*/

function initMagnificPopup() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.magnificPopup === 'undefined') {
    return;
  }

  var mpOptions = {
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: false,
    mainClass: 'mfp-no-margins mfp-img-mobile mfp-with-fade',
    tLoading: '<div class="preloader"></div>',
    removalDelay: 300,
    image: {
      verticalFit: true,
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  }; // image popup

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.image-popup').magnificPopup(_utility__WEBPACK_IMPORTED_MODULE_0__["$"].extend({
    type: 'image'
  }, mpOptions)); // video popup

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.video-popup').magnificPopup(_utility__WEBPACK_IMPORTED_MODULE_0__["$"].extend({
    type: 'iframe'
  }, mpOptions)); // gallery popup

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.gallery-popup').each(function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).magnificPopup(_utility__WEBPACK_IMPORTED_MODULE_0__["$"].extend({
      delegate: '.owl-item:not(.cloned) a, .flickity-slider > div a',
      type: 'image',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image

      },
      callbacks: {
        elementParse: function elementParse(item) {
          // Function will fire for each target element
          // "item.el" is a target DOM element (if present)
          // "item.src" is a source that you may modify
          var video = /youtube.com|youtu.be|vimeo.com/g.test(item.src);

          if (video) {
            item.type = 'iframe';
          } else {
            item.type = 'image';
          }
        }
      }
    }, mpOptions));
  });
}



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSliderRevolution", function() { return initSliderRevolution; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Slider Revolution

-------------------------------------------------------------------*/

function initSliderRevolution() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.revolution === 'undefined') {
    return;
  }

  var _this = this;

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.rs-youplay').each(function () {
    var item = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this); // options

    var rsOptions = {
      dottedOverlay: 'none',
      navigationType: 'bullet',
      navigationArrows: 'solo',
      navigationStyle: 'preview4',
      spinner: 'spinner4',
      sliderType: 'standard',
      sliderLayout: item.hasClass('rs-fullscreen') ? 'fullscreen' : 'auto',
      delay: 9000,
      navigation: {
        keyboardNavigation: 'off',
        keyboard_direction: 'horizontal',
        mouseScrollNavigation: 'off',
        mouseScrollReverse: 'default',
        onHoverStop: 'off',
        touch: {
          touchenabled: 'on',
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: 'horizontal',
          drag_block_vertical: false
        },
        arrows: {
          enable: true,
          style: 'hermes',
          tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>'
        },
        bullets: {
          enable: true,
          style: 'hebe',
          tmp: '<span class="tp-bullet-image"></span>',
          hide_onmobile: true,
          hide_under: 600,
          hide_onleave: true,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          direction: 'horizontal',
          h_align: 'center',
          v_align: 'bottom',
          h_offset: 0,
          v_offset: 30,
          space: 5
        }
      },
      viewPort: {
        enable: true,
        outof: 'pause',
        visible_area: '80%',
        presize: false
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [600, 600, 500, 400],
      lazyType: 'smart',
      parallax: {
        type: 'mouse',
        origo: 'slidercenter',
        speed: 2000,
        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55]
      },
      shadow: 0,
      stopLoop: 'off',
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: 'off',
      autoHeight: 'off',
      hideThumbsOnMobile: 'off',
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: 'off',
        nextSlideOnWindowFocus: 'off',
        disableFocusListener: false
      }
    }; // init

    var slider = item.find('.tp-banner, .rev_slider').show().revolution(rsOptions);
    slider.on('revolution.slide.onloaded', function () {
      _this.refresh();
    });
  });
}



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initIsotope", function() { return initIsotope; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Isotope

-------------------------------------------------------------------*/

function initIsotope() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.isotope === 'undefined') {
    return;
  }

  var self = this;
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.isotope').each(function () {
    var curIsotopeOptions = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).find('.isotope-options'); // init items

    var $grid = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).find('.isotope-list').isotope({
      itemSelector: '.item'
    }); // refresh for parallax images and isotope images position

    if ($grid.imagesLoaded) {
      $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
      });
    }

    $grid.on('arrangeComplete', function () {
      self.refresh();
    }); // click on filter button

    curIsotopeOptions.on('click', '> :not(.active)', function (e) {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).addClass('active').siblings().removeClass('active');
      var curFilter = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-filter');
      e.preventDefault();
      $grid.isotope({
        filter: function filter() {
          if (curFilter === 'all') {
            return true;
          }

          var itemFilters = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-filters');

          if (itemFilters) {
            itemFilters = itemFilters.split(','); // eslint-disable-next-line

            for (var k in itemFilters) {
              if (itemFilters[k].replace(/\s/g, '') === curFilter) {
                return true;
              }
            }
          }

          return false;
        }
      });
    });
  });
}



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initHexagonRating", function() { return initHexagonRating; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Hexagon Rating

-------------------------------------------------------------------*/

function initHexagonRating() {
  if (_utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.hexagonProgress === 'undefined') {
    return;
  }

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.youplay-hexagon-rating:not(.youplay-hexagon-rating-ready)').each(function () {
    var max = parseFloat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-max')) || 10;
    var cur = parseFloat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).text()) || 0;
    var size = parseFloat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-size')) || 120;
    var backColor = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-back-color') || 'rgba(255,255,255,0.1)';
    var frontColor = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-front-color') || '#fff';
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).css({
      width: size,
      height: size
    }).hexagonProgress({
      value: cur / max,
      size: size,
      animation: false,
      // 60deg + fix (strange error in hexagon plugin)
      startAngle: (60 + 0.00000001) * Math.PI / 180,
      lineWidth: 2,
      clip: true,
      lineBackFill: {
        color: backColor
      },
      lineFrontFill: {
        color: frontColor
      }
    });
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).addClass('youplay-hexagon-rating-ready');
  });
}



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initJarallax", function() { return initJarallax; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Jarallax

-------------------------------------------------------------------*/

function initJarallax() {
  if (!this.options.parallax || _utility__WEBPACK_IMPORTED_MODULE_0__["isMobile"]) {
    return;
  } // in older versions used skrollr for parallax


  if (typeof window.skrollr !== 'undefined' && typeof this.skrollr === 'undefined') {
    this.skrollr = window.skrollr.init({
      smoothScrolling: false,
      forceHeight: false
    });
  } // in newest versions used Jarallax plugin


  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.jarallax === 'undefined') {
    return;
  } // banners


  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.youplay-banner-parallax .image').each(function () {
    var speed = parseFloat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-speed'));
    var $banner = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).closest('.youplay-banner-parallax');
    var $info = $banner.children('.info');
    var isTopBanner = $banner.hasClass('banner-top');
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).jarallax({
      automaticResize: true,
      speed: Number.isNaN(speed) ? 0.4 : speed,
      onScroll: function onScroll(calc) {
        if (!isTopBanner) {
          return;
        }

        var pos = calc.beforeTop !== 0 ? -1 : 1;
        var scrollInfo = pos * Math.min(150, 150 * (1 - calc.visiblePercent));
        $info.css({
          opacity: calc.visiblePercent < 0 ? 1 : calc.visiblePercent,
          transform: "translate3d(0, ".concat(scrollInfo, "px, 0)")
        });
      }
    });
  }); // footer parallax

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.youplay-footer-parallax').each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var $img = $this.children('.image');
    var $wrapper = $this.children('.wrapper');
    var $social = $this.find('.social > .container');
    var opts = {
      automaticResize: true,
      onScroll: function onScroll(calc) {
        var scroll = Math.max(-50, -50 * (1 - calc.visiblePercent));
        $wrapper.css({
          transform: "translate3d(0, ".concat(scroll.toFixed(1), "%, 0)")
        });
        $social.css({
          transform: 'translate3d(0, 0, 0)',
          opacity: calc.visiblePercent < 0 ? 1 : calc.visiblePercent
        });
      }
    };

    if (!$img.length) {
      opts.type = 'custom';
      opts.imgSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      opts.imgWidth = 1;
      opts.imgHeight = 1;
      $this.jarallax(opts);
    } else {
      $img.jarallax(opts);
    }
  });
}



/***/ })
/******/ ]);