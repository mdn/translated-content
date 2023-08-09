---
title: JavaScript 기술 개요
slug: Web/JavaScript/JavaScript_technologies_overview
l10n:
  sourceCommit: 9c4fb236cd9ced12b1eb8e7696d8e6fcb8d8bad3
---

{{JsSidebar("Introductory")}}

## 개요

[HTML](/ko/docs/Web/HTML)이 웹 페이지의 구조와 내용을, [CSS](/ko/docs/Web/CSS)가 서식과 외관을 결정한다면, [JavaScript](/ko/docs/Web/JavaScript)는 상호작용성을 추가하여 풍부한 웹 어플리케이션을 만듭니다.

그러나, 웹 브라우저 맥락에서 포괄적으로 쓰이는 용어로써의 "JavaScript"는 사실 매우 다른 요소 여럿을 포함하는 것입니다. 그 중 하나는 핵심 언어(ECMAScript)고, 다른 하나는 DOM(Document Object Model)을 포함한 [Web API](/ko/docs/Web/API)입니다.

## 핵심 언어, JavaScript(ECMAScript)

JavaScript의 핵심 언어는 ECMA TC39 위원회가 [ECMAScript](/ko/docs/Web/JavaScript/Language_Resources)라는 이름으로 표준화했습니다.

핵심 언어는 [Node.js](https://nodejs.org) 등 비브라우저 환경에서도 사용됩니다.

### ECMAScript에 속하는 것

ECMAScript는 다음 항목을 포함하고 있습니다.

- 언어 구문 (구문 분석 규칙, 키워드, 흐름 제어, 객체 리터럴 초기화 등)
- 오류 처리 방법 ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, 사용자 정의 {{jsxref("Error")}} 유형 등)
- 자료형 (불리언, 숫자, 문자열, 함수, 객체, ...)
- 전역 객체. 브라우저에서 전역 객체는 {{domxref("Window", "window")}} 객체지만, ECMAScript는 브라우저에 국한되지 않는 API({{jsxref("parseInt")}}, {{jsxref("parseFloat")}}, {{jsxref("decodeURI")}}, {{jsxref("encodeURI")}} 등)만 정의합니다.
- 프로토타입 기반 상속 구조
- 내장 객체 및 함수 ({{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Array.prototype", "Array.prototype", "메서드")}} 메서드, {{jsxref("Object")}} 내성검사 메서드 등)
- [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)
- A [module system](/en-US/docs/Web/JavaScript/Guide/Modules)
- Basic memory model

### Standardization process

ECMAScript editions are approved and published as a standard by the ECMA General Assembly on a yearly basis. All development is public on the [Ecma TC39 GitHub organization](https://github.com/tc39), which hosts proposals, the official specification text, and meeting notes.

Before the 6th edition of ECMAScript (known as ES6), specifications were published once every several years, and are commonly referred by their major version numbers — ES3, ES5, etc. After ES6, the specification is named by the publishing year — ES2017, ES2018, etc. ES6 is synonymous with ES2015. _ESNext_ is a dynamic name that refers to whatever the next version is at the time of writing. ESNext features are more correctly called proposals, because, by definition, the specification has not been finalized yet.

The current committee-approved snapshot of ECMA-262 can be found in [PDF form](https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf) and [HTML form](https://262.ecma-international.org/13.0/). ECMA-262 and ECMA-402 are continuously maintained and kept up to date by the specification editors; the TC39 website hosts the latest, up-to-date [ECMA-262](https://tc39.es/ecma262/) and [ECMA-402](https://tc39.es/ecma402/) versions.

New language features, including introduction of new syntaxes and APIs and revision of existing behaviors, are discussed in the form of proposals. Each proposal goes through a [4-stage process](https://tc39.es/process-document/), and is typically implemented by JavaScript engines at stage 3 or stage 4 and thus available for public consumption.

See [Wikipedia ECMAScript entry](https://en.wikipedia.org/wiki/ECMAScript) for more information on ECMAScript history.

### 국제화 API

[ECMAScript 국제화 API 명세](http://ecma-international.org/ecma-402/1.0/)는 ECMAScript 언어 명세의 부속이며, 마찬가지로 ECMA TC39가 표준화했습니다. 국제화 API는 JavaScript 어플리케이션에 콜레이션(문자열 비교), 숫자 서식, 날짜 및 시간 서식 기능을 제공하므로, 어플리케이션이 언어를 선택하고 필요에 맞춰 기능을 적용할 수 있는 방법입니다. 초기 표준안은 2012년 12월에 통과했으며 브라우저 구현 상태는 {{jsxref("Intl")}} 객체 문서에서 추적 중입니다. 최근에는 국제화 명세도 매년 비준하고 있으며 브라우저 구현도 계속하여 향상 중입니다.

### Related resources

There are a variety of ways you can participate in or just track current work on the ECMAScript Language Specification and the ECMAScript Internationalization API Specification and related resources:

- [ECMAScript Language Specification repo](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification repo](https://github.com/tc39/ecma402)
- [ECMAScript proposals repo](https://github.com/tc39/proposals)
- [ECMAScript conformance test suite repo](https://github.com/tc39/test262)
- [TC39 meeting notes](https://github.com/tc39/notes)
- [ECMAScript spec discussion; current mailing list](https://es.discourse.group/)
- [ECMAScript spec discussion; historical mailing-list archives (until March 2021)](https://esdiscuss.org/)

## DOM API

### WebIDL

[WebIDL 명세](https://heycam.github.io/webidl/)는 DOM 기술과 ECMAScript 사이를 연결하는 역할을 합니다.

### DOM의 핵심

DOM(Document Object Model)은 HTML, XHTML, XML 문서의 객체를 나타내고 상호작용하기 위한, **언어에 제약되지 않는** 크로스 플랫폼 협약입니다. DOM 트리의 객체는 해당 객체의 메서드를 사용해 조작할 수 있습니다. {{glossary("W3C")}}는 HTML와 XML 문서를 객체로 추상화하는 Core Document Object Model을 표준화하고, 추상화를 조작하기 위한 방법도 정의합니다. DOM에 정의된 내용 중 일부는 다음과 같습니다.

- 문서 구조, 트리 모델, [DOM core](https://dom.spec.whatwg.org/)의 DOM Event Architecture: {{domxref("Node")}}, {{domxref("Element")}}, {{domxref("DocumentFragment")}}, {{domxref("Document")}}, {{domxref("DOMImplementation")}}, {{domxref("Event")}}, {{domxref("EventTarget")}}, …
- 덜 엄격한 DOM Event Architecture 정의, [DOM events](https://w3c.github.io/uievents/)에 속하는 특정 이벤트.
- [DOM Traversal](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html), [DOM Range](https://dom.spec.whatwg.org/#ranges) 등

ECMAScript의 관점에서, DOM 명세에 정의된 객체는 "호스트 객체"라고 부릅니다.

### HTML DOM

웹 마크업 언어인 [HTML](http://www.whatwg.org/html)은 DOM 코어에 정의된 추상화 개념에 엘리먼트의 의미를 더한 레이어라고 할 수 있겠다. HTML DOM은 HTML 엘리먼트의 `className` 같은 속성과 {{ domxref("document.body") }} 같은 API도 포함한다.

HTML 명세는 문서의 제약도 정의한다. 예를들어 순서가 없는 리스트를 나타내는 [`<ul>`](/ko/docs/Web/HTML/Element/ul)의 모든 자식들은 리스트 요소를 나타내는 [`<li>`](/ko/docs/Web/HTML/Element/li)엘리먼트여야 한다. 또한 표준에 정의되지 않은 엘리먼트와 속성을 사용하는것도 금지된다.

Looking for the [`Document`](/ko/docs/Web/API/Document) object, [`Window`](/ko/docs/Web/API/Window) object, and the other DOM elements? Read the [DOM documentation](/ko/docs/Web/API/Document_Object_Model).

## 알아둘만한 다른 API

- setTimeout 과 setInterval 함수는 HTML 표준의 [Window](http://www.whatwg.org/html/#window) 인터페이스에 처음으로 정의되었다.
- [XMLHttpRequest](http://dev.w3.org/2006/webapi/XMLHttpRequest-2/)는 비동기적 HTTP 요청을 보낼 수 있게 해주는 API이다.
- The [Fetch API](https://fetch.spec.whatwg.org/) provides a more ergonomic abstraction for network requests.
- [CSS Object Model](http://dev.w3.org/csswg/cssom/)는 CSS 규칙을 오브젝트처럼 다룰 수 있도록 추상화 해준다.
- [WebWorkers](http://www.whatwg.org/specs/web-workers/current-work/)는 병렬 처리를 가능하게 하는 API이다.
- [WebSockets](http://www.whatwg.org/C/#network)는 양방향 저수준 통신을 가능하게 하는 API이다.
- [Canvas 2D Context](http://www.whatwg.org/html/#2dcontext)는 canvas 엘리먼트에 그릴 수 있게 해주는 API이다.
- The [WebAssembly interface](https://webassembly.github.io/spec/js-api) provides utilities for communication between JavaScript code and [WebAssembly](/en-US/docs/WebAssembly) modules.

Non-browser environments (like Node.js) often do not have DOM APIs — because they don't interact with a document — but they still usually implement many web APIs, such as [`fetch()`](/ko/docs/Web/API/fetch) and [`setTimeout()`](/ko/docs/Web/API/setTimeout).

## JavaScript implementations

There are three main JavaScript implementations used in browser environments and beyond:

- Mozilla's [SpiderMonkey](https://spidermonkey.dev/), used in Firefox. This was the first _ever_ JavaScript engine, created by Brendan Eich at Netscape.
- Google's [V8](https://v8.dev/), used in Google Chrome, Opera, Edge, [Node.js](https://nodejs.org), [Deno](https://deno.land/), [Electron](https://www.electronjs.org/), and more.
- Apple's [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore) (also known as SquirrelFish/Nitro), used in WebKit browsers such as Apple Safari, and [Bun](https://bun.sh/).

Besides the above implementations, there are other popular JavaScript engines such as:

- [Carakan](https://dev.opera.com/blog/carakan-faq/), used in earlier versions of Opera.
- Microsoft's [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>) engine, used in Internet Explorer (although the language it implements is formally called "JScript" to avoid trademark issues). Earlier versions of Edge used a new JavaScript engine, confusingly also called [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)>).
- [LibJS](https://libjs.dev/), used in the browser implementation of [SerenityOS](https://serenityos.org/).
- Mozilla's [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>) engine, a JavaScript implementation written in Java, created primarily by Norris Boyd (also at Netscape).

There are some engines specifically tailored for non-browser purposes:

- [Engine262](https://engine262.js.org/), a JavaScript engine written in JavaScript. It is created for JavaScript developers to explore new language features and find bugs in the specification.
- [Moddable XS](https://www.moddable.com/), used in embedded systems such as IoT.
- [QuickJS](https://bellard.org/quickjs/), a small and embeddable JavaScript engine.
- Meta's [Hermes](https://hermesengine.dev/) engine, an engine optimized for [React Native](https://reactnative.dev/docs/hermes).
- Oracle's [GraalJS](https://www.graalvm.org/), a high performance implementation built on the GraalVM by Oracle Labs.

JavaScript engines expose a public API which application developers can use to integrate JavaScript into their software. By far, the most common host environment for JavaScript is web browsers. Web browsers typically use the public API to create **host objects** responsible for reflecting the [DOM](https://dom.spec.whatwg.org/) into JavaScript.

Another common application for JavaScript is as a (Web) server-side scripting language. A JavaScript web server exposes host objects representing a HTTP request and response objects, which can then be manipulated by a JavaScript program to dynamically generate web pages. [Node.js](https://nodejs.org) is a popular example of this.

## Shells

A JavaScript shell allows you to quickly test snippets of JavaScript code without having to reload a web page. They are extremely useful for developing and debugging code.

### Standalone JavaScript shells

The following JavaScript shells are stand-alone environments, like Perl or Python.

- [Node.js](https://nodejs.org/) - Node.js is a platform for easily building fast, scalable network applications.
- [ShellJS](https://github.com/shelljs/shelljs) - Portable Unix shell commands for Node.js.

### Browser-based JavaScript shells

The following JavaScript shells run code through the browser's JavaScript engine.

- Firefox has a [built-in JavaScript console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), which support multi-line editing.
- [Babel REPL](https://babeljs.io/repl) - A browser-based [REPL](https://en.wikipedia.org/wiki/REPL) for experimenting with future JavaScript.
- [TypeScript playground](https://www.typescriptlang.org/play) — A browser-based playground for experimenting both new JavaScript features (via the tsc compiler) and TypeScript syntax.

## Tools & resources

Helpful tools for writing and debugging your JavaScript code.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), and more.
- [Learn JavaScript](https://learnjavascript.online/)
  - : An excellent resource for aspiring web developers — Learn JavaScript in an interactive environment, with short lessons and interactive tests, guided by automated assessment. The first 40 lessons are free, and the complete course is available for a small one-time payment.
- [TogetherJS](https://togetherjs.com/)
  - : Collaboration made easy. By adding TogetherJS to your site, your users can help each other out on a website in real-time!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow questions tagged with "JavaScript".
- [JSFiddle](https://jsfiddle.net/)
  - : Edit JavaScript, CSS, and HTML and get live results. Use external resources and collaborate with your team online.
- [Plunker](https://plnkr.co/)
  - : Plunker is an online community for creating, collaborating on, and sharing your web development ideas. Edit your JavaScript, CSS, and HTML files and get live results and file structure.
- [JSBin](https://jsbin.com/)
  - : JS Bin is an open-source collaborative web development debugging tool.
- [Codepen](https://codepen.io/)
  - : Codepen is another collaborative web development tool used as a live result playground.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz is another online playground/debugging tool, which can host and deploy full-stack applications using React, Angular, etc.
- [RunJS](https://runjs.app/)
  - : RunJS is a desktop playground/scratchpad tool, which provides live results and access to both Node and Browser APIs.
