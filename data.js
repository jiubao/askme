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
  "taobaonpm": "http://npm.taobao.org/",
  "codyhouse": "https://codyhouse.co/",
  "diplove": "http://dpi.lv/"
}

var github = {
  "leftstick": {
    "home": "",
    "page": "",
    "generator": "http://leftstick.github.io/generator-fundamentals"
  },
  "tj": {
    "ejs": "https://github.com/tj/ejs",
    "co": "https://github.com/tj/co"
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
  },
  "thunks": "https://github.com/thunks/thunks"
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

var mdn = {
  "destructure": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
};

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

var onlineCoding = {
  plunker: "http://plnkr.co/",
  jsfiddle: "https://jsfiddle.net/",
  es6fiddle: "http://www.es6fiddle.net/"
};

var ecmascript = {
  "es6.pdf": "http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf",
  "es6.html": "http://www.ecma-international.org/ecma-262/6.0/index.html",
  "ExploringES6": "http://exploringjs.com/es6/",
  es6info1: "https://medium.com/sons-of-javascript/javascript-an-introduction-to-es6-1819d0d89a0f#.509aqua3p",
  "2ality": "http://www.2ality.com/",
  "speakingjs": "http://speakingjs.com/es5/index.html",
  "es6modules": "http://www.2ality.com/2014/09/es6-modules-final.html",
  "6tech2015": "http://www.2ality.com/2016/01/web-technologies-2015.html"
};

var reactiveProgramming = {
  "rp": "https://gist.github.com/staltz/868e7e9bc2a7b8c1f754",
  "rerxjs": "https://github.com/Reactive-Extensions/RxJS",
  "rxjs": "https://github.com/ReactiveX/RxJS"
};

var functionalProgramming = {
  "scareFP": "https://www.smashingmagazine.com/2014/07/dont-be-scared-of-functional-programming/",
  "fpBasics": "https://pragprog.com/magazines/2013-01/functional-programming-basics"
};

var d3 = {
  "D3Tutorials": "http://alignedleft.com/tutorials/d3",
  "D3Tutorials.cn": "http://pkuwwt.gitcafe.io/d3-tutorial-cn/about.html"
};

var ng2 = {
  ng2io: "https://angular.io",
  ve: "http://blog.thoughtram.io/angular/2015/06/29/shadow-dom-strategies-in-angular2.html",
  styleng2: "http://blog.thoughtram.io/angular/2015/06/25/styling-angular-2-components.html",
  sd: "http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/",
  ad: "http://blog.thoughtram.io/angular/2015/05/03/the-difference-between-annotations-and-decorators.html",
  jsdecorator: "https://github.com/wycats/javascript-decorators",
  di: "http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html"
}

var data = [
   { url: urls["ligature"], keys: "font, icon, ligature", name:"The Era of Symbol Fonts", desc: "Welcome to the third epoch in web performance optimization: symbol fonts. Everything from bullets and arrows to feed and social media icons can now be bundled into a single, tiny font file that can be cached and rendered at various sizes without needing multiple images or colors. This has the same caching and file size benefits as a CSS sprite, plus additional benefits we're only now realizing with high-resolution displays. Discover the advantages and explore the challenges you'll encounter when using a symbol font."
}, { url: ng2["ng2io"], keys: "angular2, ng2, home", name:"Angular2 - One framework. Mobile and desktop.", desc: "In Angular you display data by defining components. Data in your component classes is automatically available to display in your templates or control how they render as in the example below."
}, { url: ng2["ve"], keys: "angular2, ng2, shadow, dom", name:"View Encapsulation in Angular 2", desc: "Angular2 shadow dom strategy."
}, { url: ng2["styleng2"], keys: "angular2, ng2, style", name:"Styling Angular 2 components", desc: "Until now, we mostly talked about how to create simple components in Angular 2, like a zippy or a tabs component, and we also covered some isolated parts of the framework like the new dependency injection. In this article we are going to discuss another essential part when it comes to building components: Styling."
}, { url: ng2["sd"], keys: "angular2, ng2, Shadow, Dom", name:"Shadow DOM 101", desc: "With Shadow DOM, elements can get a new kind of node associated with them. This new kind of node is called a shadow root. An element that has a shadow root associated with it is called a shadow host. The content of a shadow host isn’t rendered; the content of the shadow root is rendered instead."
}, { url: ng2["ad"], keys: "angular2, ng2, annotations, decorators", name:"The difference between Annotations and Decorators", desc: "Last year, the Angular team announced it’s ECMAScript language extension AtScript, which adds types and annotations to the language in order to enable better tooling, debugging and overall development experience. Half a year later at ng-conf, the team announced that AtScript becomes TypeScript, which supports annotations and another feature called “decorators”."
}, { url: ng2["jsdecorator"], keys: "angular2, ng2, javascript, decorators", name:"javascript-decorators", desc: "Decorators make it possible to annotate and modify classes and properties at design time. While ES5 object literals support arbitrary expressions in the value position, ES6 classes only support literal functions as values. Decorators restore the ability to run code at design time, while maintaining a declarative syntax."
}, { url: ng2["di"], keys: "angular2, ng2, di, dependency, injection", name:"Dependency Injection in Angular 2", desc: "Dependency injection has always been one of Angular’s biggest features and selling points. It allows us to inject dependencies in different components across our applications, without needing to know, how those dependencies are created, or what dependencies they need themselves. However, it turns out that the current dependency injection system in Angular 1 has some problems that need to be solved in Angular 2, in order to build the next generation framework. In this article, we’re going to explore the new dependency injection system for future generations."
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
}, { url: urls["codyhouse"], keys: "html, css, js", name:"CodyHouse - Free HTML, CSS, JS nuggets", desc: "A free library of HTML/CSS/Javascript resources to boost your web projects and learn new tricks."
}, { url: reactiveProgramming.rp, keys: "reactive, programing, rp, frp, rx", name:"The introduction to Reactive Programming you've been missing", desc: "The introduction to Reactive Programming you've been missing"
}, { url: reactiveProgramming.rerxjs, keys: "reactive, programing, rp, frp, rx", name:"Reactive-Extensions/RxJS: The Reactive Extensions for JavaScript", desc: "RxJS - The Reactive Extensions for JavaScript"
}, { url: reactiveProgramming.rxjs, keys: "reactive, programing, rp, frp, rx", name:"ReactiveX/RxJS", desc: "Reactive Extensions Library for JavaScript. This is a rewrite of Reactive-Extensions/RxJS and is intended to supersede it once this is ready. This rewrite is meant to have better performance, better modularity, better debuggable call stacks, while staying mostly backwards compatible, with some breaking changes that reduce the API surface."
}, { url: onlineCoding.jsfiddle, keys: "coding, code, online, fiddle, javascript, editor, html, css", name:"Create a new fiddle - JSFiddle", desc: "Test your JavaScript, CSS, HTML or CoffeeScript online with JSFiddle code editor."
}, { url: onlineCoding.es6fiddle, keys: "es6, coding, code, online, fiddle, javascript, editor, html, css", name:"ES6 Fiddle", desc: "ES6 Examples"
}, { url: onlineCoding.plunker, keys: "plunker, coding, code, online, fiddle, javascript, editor, html, css", name:"Plunker - Helping developers make the web", desc: "Plunker is an online community for creating, collaborating on and sharing your web development ideas."
}, { url: ecmascript.es6info1, keys: "coding, javascript, es6, start, 5min", name:"JavaScript — Just another introduction to ES6", desc: "In this post I am going to introduce you to some of these features used in ES6 Fiddle. I recommend you to play with them and get a feeling of what’s to come."
}, { url: mdn.destructure, keys: "es6, destructure", name:"Destructuring assignment", desc: "The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and object literals."
}, { url: github.leftstick.generator, keys: "es6, generator, leftstick", name:"generator slides", desc: "In computer science, a generator is a special routine that can be used to control the iteration behaviour of a loop. In fact, all generators are iterators."
}, { url: github.tj.co, keys: "es6, generator, co, tj, promise, callback, hell, thunk", name:"co", desc: "Generator based control flow goodness for nodejs and the browser, using promises, letting you write non-blocking code in a nice-ish way."
}, { url: github.thunks, keys: "thunk", name:"thunk, asynchronous", desc: "thunk is a function that encapsulates synchronous or asynchronous code inside."
}, { url: ecmascript["es6.pdf"], keys: "es6, spec, pdf, js", name:"Standard ECMA-262 6th Edition / June 2015", desc: "This Ecma Standard defines the ECMAScript 2015 Language. It is the sixth edition of the ECMAScript Language Specification. Since publication of the first edition in 1997, ECMAScript has grown to be one of the world’s most widely used general purpose programming languages. It is best known as the language embedded in web browsers but has also been widely adopted for server and embedded applications. The sixth edition is the most extensive update to ECMAScript since the publication of the first edition in 1997."
}, { url: ecmascript["es6.html"], keys: "es6, spec, html, js", name:"Standard ECMA-262 6th Edition / June 2015", desc: "This Ecma Standard defines the ECMAScript 2015 Language. It is the sixth edition of the ECMAScript Language Specification. Since publication of the first edition in 1997, ECMAScript has grown to be one of the world’s most widely used general purpose programming languages. It is best known as the language embedded in web browsers but has also been widely adopted for server and embedded applications. The sixth edition is the most extensive update to ECMAScript since the publication of the first edition in 1997."
}, { url: ecmascript["ExploringES6"], keys: "es6, tutorial, material, book, js", name:"Exploring ES6", desc: "This book is about ECMAScript 6 (whose official name is ECMAScript 2015), a new version of JavaScript."
}, { url: ecmascript["2ality"], keys: "es6, tutorial, material, book, js", name:"2ality - JavaScript and more", desc: "2ality is a blog about JavaScript, web development and mobile computing (but other topics are covered, too, occasionally). This blog was started in March 2005."
}, { url: ecmascript["speakingjs"], keys: "es5, book, js", name:"Speaking JavaScript", desc: "This book has been written for programmers, by a programmer. So, in order to understand it, you should already know object-oriented programming, for example, via a mainstream programming language such as Java, PHP, C++, Python, Ruby, Objective-C, C#, or Perl."
}, { url: ecmascript["6tech2015"], keys: "web, six, 6, technology, 2015, electron, rollup, react, native, vs, code", name:"Looking back on 2015: six exciting web technologies", desc: "In 2015, there was an amazing amount of innovation related to the web platform. The following sections describe six technologies that I find exciting: Electron, React Native, Progressive web apps, Visual studio code, Rollup, Web Assembly."
}, { url: ecmascript["es6modules"], keys: "es6, export, import, modules, tutorial, material, js", name:"ECMAScript 6 modules: the final syntax", desc: "At the end of July 2014, TC39 [1] had another meeting, during which the last details of the ECMAScript 6 (ES6) module syntax were finalized. This blog post gives an overview of the complete ES6 module system."
}, { url: urls["diplove"], keys: "ppi, dpi, dppx, pixel, per, inch", name:"DPI love - Easily find the DPI/PPI of any screen", desc: "DPI love - Easily find the DPI/PPI of any screen"
}, { url: functionalProgramming["scareFP"], keys: "functional, programming, fp", name:"Don’t Be Scared Of Functional Programming", desc: "Functional programming is the mustachioed hipster of programming paradigms. Originally relegated to the annals of computer science academia, functional programming has had a recent renaissance that is due largely to its utility in distributed systems (and probably also because “pure” functional languages like Haskell are difficult to grasp, which gives them a certain cachet)."
}, { url: functionalProgramming["fpBasics"], keys: "functional, programming, fp", name: "Functional Programming Basics", desc:"Confused about functional programming? “Uncle Bob” Martin strips the paradigm down to its essentials, and explains why you can and must understand functional programming now."
}, { url: d3["D3Tutorials"], keys: "d3, functional, programming, fp", name: "Interactive Data Visualization for the Web - An Introduction to Designing with D3", desc:"These tutorials evolved out of my own process of learning how to use D3. You already know that D3 is an extraordinary tool for mapping data within web pages, written by Mike Bostock. Many people, including myself, come to D3 with backgrounds in design, mapping, and data visualization, but not programming and computer science."
}, { url: d3["D3Tutorials.cn"], keys: "d3, functional, programming, fp", name: "Interactive Data Visualization for the Web - An Introduction to Designing with D3", desc:"这些教程反映的是我自己学习使用D3的过程。你应该已在Mike Bostock的主页了解到D3是一个将数据映射到网页内容的强悍的工具。很多人，包括我自己，开始学习D3时都只有设计/绘图/数据可视化方面的背景，却并不擅长编程和计算机科学。"
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
