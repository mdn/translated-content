---
title: JavaScript 기술 개요
slug: Web/JavaScript/JavaScript_technologies_overview
tags:
  - Beginner
  - DOM
  - JavaScript
translation_of: Web/JavaScript/JavaScript_technologies_overview
---
<div>{{JsSidebar("Introductory")}}</div>

<h2 id="개요">개요</h2>

<p><a href="/ko/docs/Web/HTML">HTML</a>이 웹 페이지의 구조와 내용을, <a href="/ko/docs/Web/CSS">CSS</a>가 서식과 외관을 결정한다면, <a href="/ko/docs/Web/JavaScript">JavaScript</a>는 상호작용성을 추가하여 풍부한 웹 어플리케이션을 만듭니다.</p>

<p>그러나, 웹 브라우저 맥락에서 포괄적으로 쓰이는 용어로써의 "JavaScript"는 사실 매우 다른 요소 여럿을 포함하는 것입니다. 그 중 하나는 핵심 언어(ECMAScript)고, 다른 하나는 DOM(Document Object Model)을 포함한 <a href="/ko/docs/Web/API">Web API</a>입니다.</p>

<h2 id="핵심_언어_JavaScript(ECMAScript)">핵심 언어, JavaScript(ECMAScript)</h2>

<p>JavaScript의 핵심 언어는 ECMA TC39 위원회가 <a href="/ko/docs/Web/JavaScript/Language_Resources">ECMAScript</a>라는 이름으로 표준화했습니다.</p>

<p>핵심 언어는 <a href="https://nodejs.org">Node.js</a> 등 비브라우저 환경에서도 사용됩니다.</p>

<h3 id="ECMAScript에_속하는_것">ECMAScript에 속하는 것</h3>

<p>ECMAScript는 다음 항목을 포함하고 있습니다.</p>

<ul>
 <li>언어 구문 (구문 분석 규칙, 키워드, 흐름 제어, 객체 리터럴 초기화 등)</li>
 <li>오류 처리 방법 ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, 사용자 정의 {{jsxref("Error")}} 유형 등)</li>
 <li>자료형 (불리언, 숫자, 문자열, 함수, 객체, ...)</li>
 <li>전역 객체. 브라우저에서 전역 객체는 {{domxref("Window", "window")}} 객체지만, ECMAScript는 브라우저에 국한되지 않는 API({{jsxref("parseInt")}}, {{jsxref("parseFloat")}}, {{jsxref("decodeURI")}}, {{jsxref("encodeURI")}} 등)만 정의합니다.</li>
 <li>프로토타입 기반 상속 구조</li>
 <li>내장 객체 및 함수 ({{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Array.prototype", "Array.prototype", "메서드")}} 메서드, {{jsxref("Object")}} 내성검사 메서드 등)</li>
 <li><a href="/ko/docs/Web/JavaScript/Reference/Strict_mode">엄격 모드</a></li>
</ul>

<h3 id="브라우저_지원">브라우저 지원</h3>

<p>2016년 10월 기준 주요 브라우저의 현버전은 ECMAScript 5.1과 ECMAScript 2015를 구현하지만, (여전히 사용 중인) 오래된 브라우저는 ECMAScript 5만 구현합니다.</p>

<h3 id="미래">미래</h3>

<p>2015년 7월 17일, ECMAScript 6판이 ECMA General Assembly에 의해 공식으로 채택되고 표준으로 출판됐습니다. 이후 ECMAScript는 매년 새로운 판을 출판하고 있습니다.</p>

<h3 id="국제화_API">국제화 API</h3>

<p><a href="http://ecma-international.org/ecma-402/1.0/">ECMAScript 국제화 API 명세</a>는 ECMAScript 언어 명세의 부속이며, 마찬가지로 ECMA TC39가 표준화했습니다. 국제화 API는 JavaScript 어플리케이션에 콜레이션(문자열 비교), 숫자 서식, 날짜 및 시간 서식 기능을 제공하므로, 어플리케이션이 언어를 선택하고 필요에 맞춰 기능을 적용할 수 있는 방법입니다. 초기 표준안은 2012년 12월에 통과했으며 브라우저 구현 상태는 {{jsxref("Intl")}} 객체 문서에서 추적 중입니다. 최근에는 국제화 명세도 매년 비준하고 있으며 브라우저 구현도 계속하여 향상 중입니다.</p>

<h2 id="DOM_API">DOM API</h2>

<h3 id="WebIDL">WebIDL</h3>

<p><a class="external" href="https://heycam.github.io/webidl/">WebIDL 명세</a>는 DOM 기술과 ECMAScript 사이를 연결하는 역할을 합니다.</p>

<h3 id="DOM의_핵심">DOM의 핵심</h3>

<p>DOM(Document Object Model)은 HTML, XHTML, XML 문서의 객체를 나타내고 상호작용하기 위한, <strong>언어에 제약되지 않는</strong> 크로스 플랫폼 협약입니다. DOM 트리의 객체는 해당 객체의 메서드를 사용해 조작할 수 있습니다. {{glossary("W3C")}}는 HTML와 XML 문서를 객체로 추상화하는 Core Document Object Model을 표준화하고, 추상화를 조작하기 위한 방법도 정의합니다. DOM에 정의된 내용 중 일부는 다음과 같습니다.</p>

<ul>
 <li>문서 구조, 트리 모델, <a class="external" href="https://dom.spec.whatwg.org/">DOM core</a>의 DOM Event Architecture: {{domxref("Node")}}, {{domxref("Element")}}, {{domxref("DocumentFragment")}}, {{domxref("Document")}}, {{domxref("DOMImplementation")}}, {{domxref("Event")}}, {{domxref("EventTarget")}}, …</li>
 <li>덜 엄격한 DOM Event Architecture 정의, <a class="external" href="https://w3c.github.io/uievents/">DOM events</a>에 속하는 특정 이벤트.</li>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html">DOM Traversal</a>, <a class="external" href="https://dom.spec.whatwg.org/#ranges">DOM Range</a> 등</li>
</ul>

<p>ECMAScript의 관점에서, DOM 명세에 정의된 객체는 "호스트 객체"라고 부릅니다.</p>

<h3 id="HTML_DOM">HTML DOM</h3>

<p>웹 마크업 언어인 <a class="external" href="http://www.whatwg.org/html">HTML</a>은 DOM 코어에 정의된 추상화 개념에 엘리먼트의 <em>의미</em>를 더한 레이어라고 할 수 있겠다. HTML DOM은 HTML 엘리먼트의 <code>className</code> 같은 속성과 {{ domxref("document.body") }} 같은 API도 포함한다.</p>

<p>HTML 명세는 문서의 제약도 정의한다. 예를들어 순서가 없는 리스트를 나타내는 <code>ul</code> 의 모든 자식들은 리스트 요소를 나타내는 <code>li</code> 엘리먼트여야 한다. 또한 표준에 정의되지 않은 엘리먼트와 속성을 사용하는것도 금지된다.</p>

<h2 id="알아둘만한_다른_API">알아둘만한 다른 API</h2>

<ul>
 <li>setTimeout 과 setInterval 함수는 HTML 표준의 <a class="external" href="http://www.whatwg.org/html/#window">Window</a> 인터페이스에 처음으로 정의되었다.</li>
 <li><a class="external" href="http://dev.w3.org/2006/webapi/XMLHttpRequest-2/">XMLHttpRequest</a>는 비동기적 HTTP 요청을 보낼 수 있게 해주는 API이다.</li>
 <li><a class="external" href="http://dev.w3.org/csswg/cssom/">CSS Object Model</a>는 CSS 규칙을 오브젝트처럼 다룰 수 있도록 추상화 해준다.</li>
 <li><a class="external" href="http://www.whatwg.org/specs/web-workers/current-work/">WebWorkers</a>는 병렬 처리를 가능하게 하는 API이다.</li>
 <li><a class="external" href="http://www.whatwg.org/C/#network">WebSockets</a>는 양방향 저수준 통신을 가능하게 하는 API이다.</li>
 <li><a class="external" href="http://www.whatwg.org/html/#2dcontext">Canvas 2D Context</a>는 canvas 엘리먼트에 그릴 수 있게 해주는 API이다.</li>
</ul>
