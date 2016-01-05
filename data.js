$define('data', function() {




var urls = {
  // "googlematerialicons": "//google.github.io/material-design-icons/",
  // "googlematerialicons2": "https://design.google.com/icons/",
  "ligature": "//alistapart.com/article/the-era-of-symbol-fonts",
  "fontclock": "//timepiece.inostudio.de/",
  "fontforge": "//fontforge.github.io/",
  "designwithfontforge": "//designwithfontforge.com/en-US/index.html",
  "prismjs": "//prismjs.com/",
  "highlightjs": "//highlightjs.org/",
  "materializecss": "//materializecss.com/",
  "aframe": "//aframe.io/",
  "leftstick.jsquiz": "http://leftstick.github.io/quiz-legend/",
  "kangax.jsquiz": "http://perfectionkills.com/javascript-quiz/",
  "kangax.es6quiz": "http://perfectionkills.com/javascript-quiz-es6/",
  "markdown": "http://daringfireball.net/projects/markdown/",
  "markdownOnline": "http://daringfireball.net/projects/markdown/dingus/",

}

var github = {
  "leftstick": {
    "home": "",
    "page": ""
  },
  "tj": {
    "ejs": "https://github.com/tj/ejs"
  },
  "gh": {
    "masterMarkdown": "https://guides.github.com/features/mastering-markdown/",
    "writingInGithub": "https://help.github.com/articles/writing-on-github/",
    "flavoredMarkdown": "https://help.github.com/articles/github-flavored-markdown/"
  }
};

var google = {
  "googlematerialicons": {
    "home": "https://design.google.com/icons/",
    "ghpage": "https://google.github.io/material-design-icons/"
  }
};

var mdn = {};

var stackoverflow = {};

var react = {
  "buildwithreact": "buildwithreact.com",
  "": "http://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#under-the-hood-autobinding-and-event-delegation"
}

var data = [
   { url: urls["ligature"], keys: "font, icon, ligature", name:"a", desc: "a"
}, { url: urls["fontclock"], keys: "font, icon, ligature", desc: "b", name:"a"
}, { url: urls["fontforge"], keys: "font, icon, ligature", desc: "c", name:"a"
}, { url: google.googlematerialicons.home, keys: "font, icon, ligature", desc: "c", name:"a"
}, { url: google.googlematerialicons.ghpage, keys: "font, icon, ligature", desc: "c", name:"a"
}, { url: urls["designwithfontforge"], keys: "font, icon, ligature", desc: "d", name:"a"
}, { url: urls["prismjs"], keys: "highlight, syntax, code, pre", desc: "e", name:"a"
}, { url: urls["highlightjs"], keys: "highlight, syntax, code, pre", desc: "f", name:"a"
}, { url: urls["materializecss"], keys: "font, icon, ligature", desc: "g", name:"a"
}, { url: urls["aframe"], keys: "vr, 3d", desc: "g", name:"a"
}, { url: urls["kangax.jsquiz"], keys: "quiz", desc: "g", name:"a"
}, { url: urls["kangax.es6quiz"], keys: "quiz", desc: "g", name:"a"
}, { url: github.tj.ejs, keys: "template", desc: "g", name:"a"
}, { url: github.gh.masterMarkdown, keys: "markdown master github", desc: "g", name:"a"
}, { url: github.gh.writingInGithub, keys: "markdown write writing github", desc: "g", name:"a"
}, { url: github.gh.flavoredMarkdown, keys: "markdown flavored github", desc: "g", name:"a"
}, { url: urls["markdown"], keys: "markdown", desc: "g", name:"a"
}, { url: urls["markdownOnline"], keys: "markdown online", desc: "g", name:"a"
}];


  
  return data;
});

// var source = [{
//   name: "fontforge",
//   keys: "icon font, font, icon, ligature",
//   desc: "ligature",
//   urls: [urls.ligature, urls.googlematerialicons, urls.fontclock, urls.fontforge, urls.materializecss]
// }, {
//   name: "highlight",
//   keys: "highlight, syntax, code, pre",
//   desc: "hightlight code",
//   urls: [urls.prismjs, urls.highlightjs]
// }, {
//   name: "jstemplate",
//   keys: "template",
//   desc: "js template",
//   urls: [urls.ejs]
// }, {
//   name: "aframe",
//   keys: "vr, 3d",
//   desc: "mozilla open source vr framework for web dev",
//   urls: [urls.aframe]
// }, {
//   name: "jsquiz",
//   keys: "quiz, js",
//   desc: "",
//   urls: [urls["kangax.jsquiz"], urls["kangax.es6quiz"], urls["leftstick.jsquiz"]]
// }];