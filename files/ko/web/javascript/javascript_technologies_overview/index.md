---
title: JavaScript 기술 개요
slug: Web/JavaScript/JavaScript_technologies_overview
l10n:
  sourceCommit: 9c4fb236cd9ced12b1eb8e7696d8e6fcb8d8bad3
---

{{JsSidebar("Introductory")}}

## 개요

[HTML](/ko/docs/Web/HTML)이 웹 페이지의 구조와 콘텐츠를, [CSS](/ko/docs/Web/CSS)가 형식과 모양을 결정한다면, [JavaScript](/ko/docs/Web/JavaScript)는 상호작용성을 추가하여 풍부한 웹 애플리케이션을 만듭니다.

그러나, 웹 브라우저 맥락에서 포괄적으로 쓰이는 용어로서의 "JavaScript"는 사실 매우 다른 요소 여럿을 포함하는 것입니다. 그 중 하나는 핵심 언어(ECMAScript)고, 다른 하나는 DOM(Document Object Model)을 포함한 [Web API](/ko/docs/Web/API)입니다.

## 핵심 언어, JavaScript(ECMAScript)

JavaScript의 핵심 언어는 ECMA TC39 위원회가 [ECMAScript](/ko/docs/Web/JavaScript/JavaScript_technologies_overview)라는 언어로 표준화했습니다. "ECMAScript"는 언어 표준을 나타내는 용어이지만, "ECMAScript"와 "JavaScript"는 같은 의미로 사용할 수 있습니다.

핵심 언어는 [Node.js](https://nodejs.org) 등 비브라우저 환경에서도 사용됩니다.

### ECMAScript 범위에 포함되는 것은 무엇인가요?

무엇보다도, ECMAScript는 다음을 정의합니다.

- 언어 구문 (구문 분석 규칙, 키워드, 흐름 제어, 객체 리터럴 초기화 등)
- 오류 처리 원리 ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, 사용자 정의 {{jsxref("Error")}} 타입 등)
- 자료형 (불리언, 숫자, 문자열, 함수, 객체, ...)
- 프로토타입 기반 상속 원리
- 내장 객체 및 함수 ({{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Array.prototype", "Array.prototype", "메서드")}} 메서드, {{jsxref("Object")}} 내성검사 메서드 등)
- [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)
- [모듈 시스템](/ko/docs/Web/JavaScript/Guide/Modules)
- 기본 메모리 모델

### 표준화 과정

ECMAScript 판들은 매년 ECMA 총회에서 표준으로 승인되고 게시됩니다. 모든 개발은 제안, 공식 명세서 문서 및 회의 노트를 호스팅하는 [Ecma TC39 GitHub 조직](https://github.com/tc39)에 공개됩니다.

ECMAScript 6판(ES6이라고 함) 이전에는, 명세가 몇 년에 한 번씩 게시되었으며, 일반적으로 메이저 버전 번호로(ES3, ES5 등)로 참조됩니다. ES6 이후에는 명세의 이름이 게시 연도인 ES2017, ES2018 등으로 지정됩니다. ES6는 ES2015와 동의어입니다. "ESNext"는 작성 당시의 다음 버전을 나타내는 동적인 이름입니다. 정의에 따라, 명세가 아직 확정되지 않았기 때문에, ESNext 기능은 제안이라고 부르는 것이 더 정확합니다.

ECMA-262의 현재 위원회 승인 스냅샷은 [PDF 형식](https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf) 및 [HTML 형식](https://262.ecma-international.org/13.0/)에서 찾을 수 있습니다. [ECMA-262](https://tc39.es/ecma262/) 및 [ECMA-402](https://tc39.es/ecma402/) 버전은 명세 편집자들이 최신 상태로 유지합니다. TC39 웹사이트는 최신 [ECMA-262](https://tc39.es/ecma262/) 및 [ECMA-402](https://tc39.es/ecma402/) 버전을 호스팅합니다.

새로운 문법 및 API 도입, 기존 동작 수정 등 새로운 언어 기능은 제안 형식으로 논의됩니다. 각 제안은 [4단계 프로세스](https://tc39.es/process-document/)를 거치며, 일반적으로 3단계 또는 4단계에서 JavavScript 엔진에 의해 구현되므로 공개적으로 사용할 수 있습니다.

ECMAScript 기록에 대한 자세한 내용은 [Wikipedia ECMAScript 항목](https://en.wikipedia.org/wiki/ECMAScript)을 참조하세요.

### 국제화 API

[ECMAScript 국제화 API 명세](https://402.ecma-international.org/1.0/)은 Ecma TC39에서 표준화된 것과 같이 ECMAScript 언어 명세에 추가된 것입니다. 국제화 API는 JavaScript 애플리케이션을 위한 콜레이션(문자열 비교), 숫자 형식 및 날짜 및 시간 형식을 제공하여, 애플리케이션이 언어를 선택하고 필요에 맞게 기능을 적용할 수 있는 방법입니다. 초기 표준안은 2012년 12월에 통과했으며 브라우저 구현 상태는 {{jsxref("Intl")}} 객체 문서에서 추적 중입니다. 최근에는 국제화 명세도 매년 비준하고 있으며 브라우저 구현도 계속하여 개선 중입니다.

### 관련된 참고 자료

ECMAScript 언어 명세 및 ECMAScript 국제화 API 명세 및 관련 리소스에 참여하거나 현재 작업을 추적할 수 있는 다양한 방법이 있습니다.

- [ECMAScript 언어 명세 repo](https://github.com/tc39/ecma262)
- [ECMAScript 국제화 API 명세 repo](https://github.com/tc39/ecma402)
- [ECMAScript 제안 repo](https://github.com/tc39/proposals)
- [ECMAScript 적합성 test suite repo](https://github.com/tc39/test262)
- [TC39 회의록](https://github.com/tc39/notes)
- [ECMAScript 명세 토론; 현재 메일링 리스트](https://es.discourse.group/)
- [ECMAScript 명세 토론; 과거 메일링 리스트 아카이브(2021년 3월까지)](https://esdiscuss.org/)

## DOM API

### WebIDL

[WebIDL 명세](https://webidl.spec.whatwg.org/)는 DOM 기술과 ECMAScript 사이를 연결하는 역할을 합니다.

### DOM의 핵심

DOM(Document Object Model)은 HTML, XHTML, XML 문서의 객체를 나타내고 상호작용하기 위한, **언어에 제약되지 않는** 크로스 플랫폼 협약입니다. DOM 트리의 객체는 해당 객체의 메서드를 사용해 조작할 수 있습니다. [W3C](/ko/docs/Glossary/W3C)는 HTML와 XML 문서를 객체로 추상화하는 Core Document Object Model을 표준화하고, 추상화를 조작하기 위한 원리도 정의합니다. DOM에 정의된 내용 중 일부는 다음과 같습니다.

- 문서 구조, 트리 모델, [DOM core](https://dom.spec.whatwg.org/)의 DOM Event Architecture: [`Node`](/ko/docs/Web/API/Node), [`Element`](/ko/docs/Web/API/Element), [`DocumentFragment`](/ko/docs/Web/API/DocumentFragment), [`Document`](/ko/docs/Web/API/Document), [`DOMImplementation`](/ko/docs/Web/API/DOMImplementation), [`Event`](/ko/docs/Web/API/Event), [`EventTarget`](/ko/docs/Web/API/EventTarget), …
- 덜 엄격한 DOM Event Architecture 정의, [DOM events](https://w3c.github.io/uievents/)에 속하는 특정 이벤트.
- [DOM Traversal](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html), [DOM Range](https://dom.spec.whatwg.org/#ranges) 등

ECMAScript의 관점에서, DOM 명세에 정의된 객체는 "호스트 객체"라고 부릅니다.

### HTML DOM

웹 마크업 언어인 [HTML](https://html.spec.whatwg.org/multipage/)은 DOM 코어에 정의된 추상화 개념에 엘리먼트의 의미를 더한 레이어라고 할 수 있습니다. HTML DOM은 HTML 요소의 `className` 같은 속성과 [`document.body`](/ko/docs/Web/API/Document/body) 같은 API도 포함합니다.

HTML 명세는 문서의 제약도 정의합니다. 예를 들어, 순서가 없는 리스트를 나타내는 [`<ul>`](/ko/docs/Web/HTML/Element/ul) 요소의 모든 자식들은 리스트 요소를 나타내는 [`<li>`](/ko/docs/Web/HTML/Element/li) 요소여야 합니다. 또한 표준에 정의되지 않은 요소와 속성을 사용하는 것도 금지됩니다.

[`Document`](/ko/docs/Web/API/Document) 객체, [`Window`](/ko/docs/Web/API/Window) 객체나 다른 DOM 요소들을 찾아보았나요? [DOM 문서](/ko/docs/Web/API/Document_Object_Model)을 읽어보세요

## 알아둘만한 다른 API

- [`setTimeout`](/ko/docs/Web/API/Window/setTimeout) 과 [`setInterval`](/ko/docs/Web/API/Window/setInterval) 함수는 HTML 표준의 [`Window`](/ko/docs/Web/API/Window) 인터페이스에 처음으로 정의되었습니다.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/)는 비동기적 HTTP 요청을 보낼 수 있게 해주는 API입니다.
- [Fetch API](https://fetch.spec.whatwg.org/)는 네트워크 요청에 대해 보다 인체공학적인 추상화를 제공합니다.
- [CSS Object Model](https://drafts.csswg.org/cssom/)는 CSS 규칙을 객체처럼 다룰 수 있도록 추상화합니다.
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html)는 병렬 처리를 가능하게 하는 API입니다.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network)는 양방향 저수준 통신을 가능하게 하는 API입니다.
- [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext)는 [`<canvas>`](/ko/docs/Web/HTML/Element/canvas) 요소에 그릴 수 있게 해주는 API입니다.
- [WebAssembly 인터페이스](https://webassembly.github.io/spec/js-api)는 JavaScript 코드와 [WebAssembly](/ko/docs/WebAssembly) 모듈 간의 통신을 위한 기능을 제공합니다.

비 브라우저 환경(예: Node.js)에는 DOM API가 없는 경우가 많은데, 문서와 상호 작용하지 않기 때문입니다. [`fetch()`](/ko/docs/Web/API/Window/fetch) 및 [`setTimeout()`](/ko/docs/Web/API/Window/setTimeout)과 같은 많은 웹 API를 구현합니다.

## JavaScript 구현체

브라우저 환경과 그 너머에서 사용되는 세 가지 주요 JavaScript 구현체가 있습니다.

- Firefox에서 사용되는 Mozilla의 [SpiderMonkey](https://spidermonkey.dev/)는 Netscape의 Brendan Eich가 만든 최초의 _ever_ JavaScript 엔진이었습니다.
- Google의 [V8](https://v8.dev/), Google Chrome, Opera, Edge, [Node.js](https://nodejs.org), [Deno](https://deno.land/), [Electron](https://www.electronjs.org/) 등이 있습니다.
- Apple Safari와 같은 WebKit 브라우저에서 사용되는 Apple의 [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore)(SquirrelFish/Nitro라고도 함) 및 [Bun](https://bun.sh/).

위의 구현체 외에도 다음과 같은 인기 있는 다른 JavaScript 엔진이 있습니다.

- [Carakan](https://dev.opera.com/blog/carakan-faq/), 이전 버전의 Opera에서 사용되었습니다.
- Internet Explorer에서 사용되는 Microsoft의 [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JScript_engine)>) 엔진(상표권 문제를 피하기 위해 구현하는 언어를 공식적으로 "JScript"라고 합니다). 이전 버전의 Edge는 혼란스럽게도 [Chakra](<https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)>)라고도 하는 새로운 JavaScript 엔진을 사용했습니다.
- [LibJS](https://libjs.dev/), [SerenityOS](https://serenityos.org/)의 브라우저 구현에 사용됩니다.
- Mozilla의 [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>) 엔진, Java로 작성된 JavaScript 구현으로 주로 Norris Boyd(역시 Netscape)가 만들었습니다.

비 브라우저용으로 특별히 제작된 일부 엔진이 있습니다.

- [Engine262](https://engine262.js.org/), JavaScript로 작성된 JavaScript 엔진입니다. JavaScript 개발자가 새로운 언어 기능을 탐색하고 명세에서 버그를 찾을 수 있도록 만들어졌습니다.
- IoT와 같은 임베디드 시스템에서 사용되는 [Moddable XS](https://www.moddable.com/).
- [QuickJS](https://bellard.org/quickjs/), 작고 삽입 가능한 JavaScript 엔진입니다.
- Meta의 [Hermes](https://hermesengine.dev/) 엔진은 [React Native](https://reactnative.dev/docs/hermes)에 최적화된 엔진입니다.
- Oracle의 [GraalJS](https://www.graalvm.org/), Oracle Labs에서 GraalVM을 기반으로 구축한 고성능 구현체입니다.

JavaScript 엔진은 응용 프로그램 개발자가 JavaScript를 소프트웨어에 통합하는 데 사용할 수 있는 공용 API를 노출합니다. 지금까지 JavaScript의 가장 일반적인 호스트 환경은 웹 브라우저입니다. 웹 브라우저는 일반적으로 공용 API를 사용하여 [DOM](https://dom.spec.whatwg.org/)을 JavaScript에 반영하는 **호스트 객체**를 생성합니다.

JavaScript의 또 다른 일반적인 응용 프로그램은 (웹) 서버 측 스크립팅 언어입니다. JavaScript 웹 서버는 HTTP 요청 및 응답 객체를 나타내는 호스트 객체를 노출한 다음 JavaScript 프로그램에서 조작하여 웹 페이지를 동적으로 생성 할 수 있습니다. [Node.js](https://nodejs.org)가 이에 대한 인기 있는 예입니다.

## 쉘

JavaScript 쉘을 사용하면 웹 페이지를 다시 로드하지 않고도 JavaScript 코드 조각을 빠르게 테스트 할 수 있습니다. 코드 개발 및 디버깅에 매우 유용합니다.

### 독립형 JavaScript 쉘

다음 JavaScript 쉘은 Perl 또는 Python과 같은 독립 실행형 환경입니다.

- [Node.js](https://nodejs.org/) - Node.js는 빠르고 확장 가능한 네트워크 애플리케이션을 쉽게 구축할 수 있는 플랫폼입니다.
- [ShellJS](https://github.com/shelljs/shelljs) - Node.js용 휴대용 Unix 셸 명령입니다.

### 브라우저 기반 JavaScript 쉘

다음 JavaScript 쉘은 브라우저의 JavaScript 엔진을 통해 코드를 실행합니다.

- Firefox에는 여러 줄 편집을 지원하는 [내장 JavaScript 콘솔](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html)이 있습니다.
- [Babel REPL](https://babeljs.io/repl) - 미래의 JavaScript 실험을 위한 브라우저 기반 [REPL](https://en.wikipedia.org/wiki/REPL)입니다.
- [TypeScript 플레이그라운드](https://www.typescriptlang.org/play) — 새로운 JavaScript 기능(tsc 컴파일러를 통해)과 TypeScript 문법을 실험하기 위한 브라우저 기반 플레이그라운드입니다.

## 도구 및 리소스

JavaScript 코드 작성 및 디버깅에 유용한 도구입니다.

- [Firefox 개발자 도구](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [웹 콘솔](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript 프로파일러](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [디버거](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) 등.
- [JavaScript 배우기](https://learnjavascript.online/)
  - : 웹 개발자 지망생을 위한 탁월한 리소스 — 자동화된 평가 안내에 따라 짧은 강의와 대화형 테스트를 통해 대화형 환경에서 JavaScript를 학습합니다. 처음 40개 레슨은 무료이며 소액의 일회성 결제로 전체 과정을 수강할 수 있습니다.
- [TogetherJS](https://togetherjs.com/)
  - : 협업이 쉬워집니다. 사이트에 TogetherJS를 추가하면 사용자가 웹사이트에서 실시간으로 서로 도울 수 있습니다!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : "JavaScript"로 태그가 지정된 스택 오버플로 질문입니다.
- [JSFiddle](https://jsfiddle.net/)
  - : JavaScript, CSS 및 HTML을 편집하고 실시간 결과를 얻습니다. 외부 리소스를 사용하고 온라인에서 팀과 협업하십시오.
- [Plunker](https://plnkr.co/)
  - : Plunker는 웹 개발 아이디어를 만들고 협업하고 공유할 수 있는 온라인 커뮤니티입니다. JavaScript, CSS 및 HTML 파일을 편집하고 실시간 결과 및 파일 구조를 얻으십시오.
- [JSBin](https://jsbin.com/)
  - : JS Bin은 오픈 소스 협업 웹 개발 디버깅 도구입니다.
- [Codepen](https://codepen.io/)
  - : Codepen은 라이브 결과 놀이터로 사용되는 또 다른 협업 웹 개발 도구입니다.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz는 React, Angular 등을 사용하여 전체 스택 애플리케이션을 호스팅하고 배포할 수 있는 또 다른 온라인 놀이터/디버깅 도구입니다.
- [RunJS](https://runjs.app/)
  - : RunJS는 노드 및 브라우저 API 모두에 대한 실시간 결과와 액세스를 제공하는 데스크탑 플레이그라운드/스크래치패드 도구입니다.
