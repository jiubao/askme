$define('data', function() {




var urls = {
  // "googlematerialicons": "//google.github.io/material-design-icons/",
  // "googlematerialicons2": "https://design.google.com/icons/",
  "ligature": "http://alistapart.com/article/the-era-of-symbol-fonts",
  "fontclock": "http://timepiece.inostudio.de/",
  "fontforge": "http://fontforge.github.io/",
  "designwithfontforge": "http://designwithfontforge.com/en-US/index.html",
  "prismjs": "http://prismjs.com/",
  "highlightjs": "https://highlightjs.org/",
  "materializecss": "http://materializecss.com/",
  "aframe": "https://aframe.io/",
  "leftstick.jsquiz": "http://leftstick.github.io/quiz-legend/",
  "kangax.jsquiz": "http://perfectionkills.com/javascript-quiz/",
  "kangax.es6quiz": "http://perfectionkills.com/javascript-quiz-es6/",
  "markdown": "http://daringfireball.net/projects/markdown/",
  "markdownOnline": "http://daringfireball.net/projects/markdown/dingus/",
  "ci": "https://travis-ci.org/",
  "expressOverHttps": "http://blog.mgechev.com/2014/02/19/create-https-tls-ssl-application-with-express-nodejs/",
  "npmtaobao1": "http://riny.net/2014/cnpm/",
  "taobaonpm": "http://npm.taobao.org/"
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
    "flavoredMarkdown": "https://help.github.com/articles/github-flavored-markdown/",
    "forkRepo": "https://help.github.com/articles/fork-a-repo/"
  },
  "angular": {
    "gh": "https://github.com/angular/angular.js",
    "home": "https://angularjs.org/"
  }
};

var google = {
  "googlematerialicons": {
    "home": "https://design.google.com/icons/",
    "ghpage": "https://google.github.io/material-design-icons/"
  }
};

var mac = {
  "brew": "http://brew.sh/",
  "ohmz": "http://ohmyz.sh/",
  "iterm2": "https://www.iterm2.com/",
  "keyboard": "https://github.com/thefloweringash/iousbhiddriver-descriptor-override",
  "sublshortcut": "http://docs.sublimetext.info/en/latest/reference/keyboard_shortcuts_osx.html",
  "hosts": "http://www.inmotionhosting.com/support/website/how-to/how-to-edit-your-hosts-file-on-a-mac"
};

var mdn = {};

var stackoverflow = {};

var react = {
  "buildwithreact": "buildwithreact.com",
  "": "http://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#under-the-hood-autobinding-and-event-delegation"
}

var codes = {
  taobaonpm: "\
// temp use\n\
npm --registry https://registry.npm.taobao.org install express\n\
// permanent use\n\
npm config set registry https://registry.npm.taobao.org\n\
// loglevel\n\
npm config set loglevel=http\
"
};

var data = [
   { url: urls["ligature"], keys: "font, icon, ligature", name:"The Era of Symbol Fonts", desc: "Welcome to the third epoch in web performance optimization: symbol fonts. Everything from bullets and arrows to feed and social media icons can now be bundled into a single, tiny font file that can be cached and rendered at various sizes without needing multiple images or colors. This has the same caching and file size benefits as a CSS sprite, plus additional benefits we're only now realizing with high-resolution displays. Discover the advantages and explore the challenges you'll encounter when using a symbol font."
}, { url: urls["fontclock"], keys: "font, icon, ligature", name:"Timepiece Rounded", desc: "An Opentype Font displaying Time as an analogue Clock"
}, { url: urls["fontforge"], keys: "font, icon, ligature", name:"FontForge Open Source Font Editor", desc: "FontForge is free and open-source outline font editor."
}, { url: google.googlematerialicons.home, keys: "font, icon, ligature", name:"Material icons - Google Design", desc: "Material icons are beautifully crafted, delightful, and easy to use in your web, Android, and iOS projects."
}, { url: google.googlematerialicons.ghpage, keys: "font, icon, ligature", name:"Material icons guide - Google design", desc: "Material design system icons are simple, modern, friendly, and sometimes quirky. Each icon is created using our design guidelines to depict in simple and minimal forms the universal concepts used commonly throughout a UI. Ensuring readability and clarity at both large and small sizes, these icons have been optimized for beautiful display on all common platforms and display resolutions."
}, { url: urls["designwithfontforge"], keys: "font, icon, ligature", name:"Design With FontForge", desc: "A Book About How To Create New Typefaces Using FontForge"
}, { url: urls["prismjs"], keys: "highlight, syntax, code, pre, prism", name:"prism", desc: "Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind. It’s a spin-off from Dabblet and is tested there daily by thousands."
}, { url: urls["highlightjs"], keys: "highlight, syntax, code, pre", name:"highlight.js", desc: "Syntax highlighting for the Web"
}, { url: urls["materializecss"], keys: "font, icon, ligature", name:"Documentation - Materialize", desc: "Materialize is a modern responsive CSS framework based on Material Design by Google."
}, { url: urls["aframe"], keys: "vr, 3d, virtual, reality", name:"A-Frame Building Blocks for the VR Web", desc: "Use markup to create VR experiences that work across desktop, iPhones, and the Oculus Rift."
}, { url: urls["kangax.jsquiz"], keys: "quiz", name:"Javascript quiz - Perfection Kills", desc: "Javascript rants and findings, by kangax"
}, { url: urls["kangax.es6quiz"], keys: "quiz", name:"Javascript quiz. ES6 edition. - Perfection Kills", desc: "Javascript rants and findings, by kangax"
}, { url: github.tj.ejs, keys: "template", name:"EJS - Embedded JavaScript templates", desc: "Embedded JavaScript templates for node"
}, { url: github.gh.masterMarkdown, keys: "markdown, master, github", name:"Mastering Markdown - GitHub Guides", desc: "Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like # or *."
}, { url: github.gh.writingInGithub, keys: "markdown, write, writing, github", name:"Writing on GitHub", desc: "Issues, comments, and pull request descriptions are written using GitHub Flavored Markdown along with some additional features to make writing content on GitHub easy."
}, { url: github.gh.flavoredMarkdown, keys: "markdown, flavored, github", name:"GitHub Flavored Markdown", desc: "GitHub uses \"GitHub Flavored Markdown,\" or GFM, across the site--in issues, comments, and pull requests. It differs from standard Markdown (SM) in a few significant ways, and adds some additional functionality."
}, { url: github.gh.forkRepo, keys: "fork, github", name:"Fork A Repo", desc: "A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project."
}, { url: urls["markdown"], keys: "markdown", name:"Daring Fireball: Markdown", desc: "Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)."
}, { url: urls["markdownOnline"], keys: "markdown, online", name:"Daring Fireball: Markdown Web Dingus", desc: "Markdown online"
}, { url: urls["ci"], keys: "continuous, integration, ci", name:"Travis CI - Test and Deploy Your Code with Confidence", desc: "Easily sync your GitHub projects with Travis CI and you'll be testing your code in minutes!"
}, { url: github.angular["gh"], keys: "angular, mvvm, mvw, js, javascript", name:"AngularJS - GitHub", desc: "AngularJS lets you write client-side web applications as if you had a smarter browser. It lets you use good old HTML (or HAML, Jade and friends!) as your template language and lets you extend HTML’s syntax to express your application’s components clearly and succinctly. It automatically synchronizes data from your UI (view) with your JavaScript objects (model) through 2-way data binding. To help you structure your application better and make it easy to test, AngularJS teaches the browser how to do dependency injection and inversion of control."
}, { url: github.angular["home"], keys: "angular, mvvm, mvw, js, javascript", name:"AngularJS - Superheroic JavaScript MVW Framework", desc: "AngularJS is what HTML would have been, had it been designed for building web-apps. Declarative templates with data-binding, MVW, MVVM, MVC, dependency injection and great testability story all implemented with pure client-side JavaScript!"
}, { url: mac["brew"], keys: "mac, brew, install, start", name:"Homebrew - The missing package manager for OS X", desc: "The missing package manager for OS X"
}, { url: mac["ohmz"], keys: "mac, ohmz, console, terminal, start", name:"Oh My Zsh", desc: "Oh-My-Zsh is an open source, community-driven framework for managing your ZSH configuration. It comes bundled with a ton of helpful functions, helpers, plugins, themes, and a few things that make you shout... OH MY ZSH!"
}, { url: mac["iterm2"], keys: "mac, iterm, console, terminal, start", name:"iTerm2 - Mac OS Terminal Replacement", desc: "iTerm2 is a replacement for Terminal and the successor to iTerm. It works on Macs with OS 10.5 (Leopard) or newer. iTerm2 brings the terminal into the modern age with features you never knew you always wanted."
}, { url: mac["keyboard"], keys: "mac, keyboard, start", name:"IOUSBHIDDriverDescriptorOverride", desc: "This OS X kernel extension provides a method for overriding a HID descriptor and ignoring the descriptor provided by the device. This is useful when the HID descriptor returned by a HID device is invalid or incorrect."
}, { url: urls["expressOverHttps"], keys: "https, expess", name:"Express over HTTPS", desc: "Sometimes you want to test your application in environment closer to the real world. In such cases you might need to run it over TLS."
}, { url: mac["sublshortcut"], keys: "sublime, subl, shortcut, mac", name:"Sublime Keyboard Shortcuts - OSX", desc: "Sublime Keyboard Shortcuts for OSX"
}, { url: mac["hosts"], keys: "mac, hosts, start", name:"How to edit your hosts file on a mac", desc: "Like many Unix-based and Unix-like operating systems, it is possible to change the hosts file on your Mac to manually set a domain to a certain server."
}, { code: codes.taobaonpm, codeId: 'taobaonpm', keys: "npm, taobao, mirror, code", name:"淘宝 NPM 镜像"
}, { url: urls["npmtaobao1"], keys: "npm, taobao, mirror", name:"国内优秀npm镜像推荐及使用 - Bubblings Blog", desc: "npm全称Node Package Manager，是node.js的模块依赖管理工具。由于npm的源在国外，所以国内用户使用起来各种不方便。下面整理出了一部分国内优秀的npm镜像资源，国内用户可以选择使用。", code: ""
}, { url: urls["taobaonpm"], keys: "npm, taobao, mirror", name:"淘宝 NPM 镜像", desc: "这是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。"
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
