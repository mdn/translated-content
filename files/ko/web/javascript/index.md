---
title: JavaScript
slug: Web/JavaScript
tags:
  - JavaScript
  - Landing
  - Landing page
  - Learn
  - l10n:priority
  - 자바스크립트
translation_of: Web/JavaScript
---
{{JsSidebar}}

**JavaScript** (**JS**)는 가벼운, 인터프리터 혹은 [just-in-time](https://en.wikipedia.org/wiki/Just-in-time_compilation) 컴파일 프로그래밍 언어로, {{Glossary("First-class Function", "일급 함수")}}를 지원합니다. 웹 페이지를 위한 스크립트 언어로 잘 알려져 있지만,  {{Glossary("Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/), [Adobe Acrobat](https://www.adobe.com/devnet/acrobat/javascript.html)처럼 [많은 비 브라우저 환경](https://en.wikipedia.org/wiki/JavaScript#Other_usage)에서도 사용하고 있습니다. JavaScript는 {{Glossary("Prototype-based programming", "프로토타입 기반")}}, 다중 패러다임, 단일 스레드, 동적 언어로, 객체지향형, 명령형, 선언형(함수형 프로그래밍 등) 스타일을 지원합니다. 자세한 내용은 [JavaScript에 대하여](/en-US/docs/Web/JavaScript/About_JavaScript)를 참고하세요.

해당 섹션은 JavaScript 언어 자체를 다루며 웹 페이지 또는 다른 사용 환경에 대해 다루지 않습니다. 웹 페이지의 특정 {{Glossary("API","API")}}에 대한 정보를 알고 싶다면, [웹 APIs](/ko/docs/Web/API)와 {{Glossary("DOM")}}을 참고하시기 바랍니다.

JavaScript의 표준은 [ECMAScript 언어 사양](https://tc39.es/ecma262/) (ECMA-262) 및 [ECMAScript 국제화 API 사양](https://tc39.es/ecma402/) (ECMA-402)입니다. MDN에서 제공하는 JavaScript 문서는 ECMA-262 및 ECMA-402의 최신 초안 버전을 기반으로합니다. [새로운 ECMAScript 기능에 대한 일부 제안](https://github.com/tc39/proposals)이 이미 브라우저에 구현 된 경우, MDN의 문서 및 예제에서 이러한 새로운 기능 중 일부를 사용할 수 있습니다.

JavaScript와 [Java 프로그래밍 언어](https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94_\(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EC%96%B8%EC%96%B4\))를 혼동해서는 안 됩니다. "Java"와 "JavaScript" 는 모두 상표이자 미국 및 기타 국가에 등록된 Oracle의 상표입니다. 다만 두 프로그래밍 언어의 구문, 시맨틱 및 사용 방법이 매우 다릅니다.

> **Callout:** **프론트엔드 웹 개발자가되고 싶으신가요?**
>
> 목표 달성에 필요한 모든 필수 정보가 포함된 과정을 마련했습니다.
>
> [**시작하기**](/ko/docs/Learn/Front-end_web_developer)

## 자습서

가이드 및 자습서를 통해 JavaScript로 프로그래밍하는 방법을 배워보세요.

### 입문자용

JavaScript를 배우고 싶지만 JavaScript이나 프로그래밍에 대한 이전 경험이 없는 경우 [JavaScript 주제에 대한 학습 영역](/ko/docs/Learn/JavaScript)을 방문하세요. 전체 과정은 다음과 같습니다.

- [JavaScript 첫 걸음](/ko/docs/Learn/JavaScript/First_steps)
  - : 변수, 문자열, 숫자 및 배열과 같은 주요 JavaScript 기능에 대해 논의하면서 "JavaScript 는 무엇인가요?", "어떤 모습인가요?", "무엇을 할 수 있나요?"와 같은 몇 가지 기본적인 질문에 답합니다.
- [JavaScript 구성 요소](/ko/docs/Learn/JavaScript/Building_blocks)
  - : JavaScript의 핵심 기본 기능에 대한 이해를 넓히기 위해 조건문, 반복문, 함수, 이벤트와 같이 흔히 찾을 수 코드 블록의 형태에 대해서 알아봅니다.
- [JavaScript 객체 소개](/ko/docs/Learn/JavaScript/Objects)
  - : avaScript의 객체 지향적 특성에 대한 이해는 언어의 이해도를 높이며 효율적인 코드를 작성하려는 경우 중요하므로, 이 과정이 도움이 될 것입니다.
- [비동기 JavaScript](/ko/docs/Learn/JavaScript/Asynchronous)
  - : 비동기 JavaScript가 중요한 이유와, 비동기적 코드를 사용해 서버에서 리소스 가져오기 등 블록킹 연산을 효율적으로 처리하는 방법에 대해 알아봅니다.
- [클라이언트측 웹 API](/ko/docs/Learn/JavaScript/Client-side_web_APIs)
  - : API란 무엇인지 탐색해보고, 개발 작업에서 자주 접하게 될 가장 일반적인 API를 사용하는 방법을 알아봅니다.

### JavaScript 안내서
 
- [JavaScript 가이드](/ko/docs/Web/JavaScript/Guide)
  - : JavaScript 또는 다른 언어로 프로그래밍 경험이 있는 독자들을 대상으로한 JavaScript 언어에 대한 상세 가이드입니다.

### 중급

- [클라이언트 측 JavaScript 프레임워크 이해](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
  - : JavaScript 프레임워크는 현대 프런트 엔드 웹 개발의 필수 부분으로, 개발자에게 확장 가능한 상호작용형 웹 응용 프로그램을 구축하기위한 입증된 도구를 제공합니다. 이 과정에서는 오늘날 가장 인기있는 일부 프레임워크를 다루는 자습서 시리즈로 이동하기 전에 클라이언트 측 프레임워크가 작동하는 방식과 도구 집합에 맞는 방식에 대한 기본적인 배경 지식을 제공합니다.
- [JavaScript 재입문](/ko/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
  - : JavaScript에 대해 알고 있다고 __생각하는__ 사람들을 위한 개요.
- [JavaScript 데이터 구조](/ko/docs/Web/JavaScript/Data_structures)
  - : JavaScript에서 이용 가능한 데이터 구조 개요.
- [동등성 비교 및 ​​동일성](/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript는 세 가지 값 비교 연산을 제공합니다: ```===```를 사용한 엄격한 동등성, ```==```를 사용한 느슨한 동등성 및 {{jsxref("Global_Objects/Object/is", "Object.is()")}} 메서드.
- [클로저](/ko/docs/Web/JavaScript/Closures)
  - : 클로저는 함수와 그 함수가 선언된 어휘 (lexical) 환경의 조합입니다.

### 고급

- [상속 및 프로토타입 체인](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : 널리 오해 받고 과소 평가된 프로토타입 기반 상속의 설명.
- [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)
  - : 엄격 모드는 초기화 전에 변수를 사용할 수 없음을 정의합니다. 이는 빠른 성능 및 쉬운 디버깅을 위한 ECMAScript 5의 제한된 변형(variant)입니다.
- [JavaScript 형식화된 배열](/ko/docs/Web/JavaScript/Typed_arrays)
  - : JavaScript 형식화된 배열은 원시 이진 데이터에 접근하기 위한 메커니즘을 제공합니다.
- [메모리 관리](/ko/docs/Web/JavaScript/Memory_Management)
  - : JavaScript의 메모리 라이프 사이클 및 가비지 컬렉션.
- [동시성 모델 및 이벤트 루프](/ko/docs/Web/JavaScript/EventLoop)
  - : JavaScript에는 "이벤트 루프"에 기반을 둔 동시성 모델이 있습니다.

## 참고서

전체 [JavaScript 참고서](/ko/docs/Web/JavaScript/Reference)를 훑어보세요.

- [표준 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects)
  - : {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} 등 표준 내장 객체 알아가기.
- [표현식 및 연산자](/ko/docs/Web/JavaScript/Reference/Operators)
  - : JavaScript 연산자 {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}의 동작, [연산자 우선순위](/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) 등에 대해 더 알아보기.
- [명령문 및 선언문](/ko/docs/Web/JavaScript/Reference/Statements)
  - : {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} 등의 JavaScript의 구문 및 키워드 작동법 배우기.
- [함수](/ko/docs/Web/JavaScript/Reference/Functions)
  - : 애플리케이션 개발을 위한 JavaScript 함수로 작업하는 법 배우기.

## 도구 &amp; 자원

**JavaScript** 코드 작성과 디버깅을 돕는 유용한 도구 모음입니다.

- [Firefox 개발자 도구](/ko/docs/Tools)
  - : [Web Console](/ko/docs/Tools/Web_Console), [JavaScript Profiler](/ko/docs/Tools/Performance), [Debugger](/ko/docs/Tools/Debugger) 등.
- [JavaScript 쉘](/ko/docs/Web/JavaScript/Shells)
  - : JavaScript 쉘을 사용하면 JavaScript 코드 스니펫을 빠르게 테스트 할 수 있습니다.
- [JavaScript 배우기](https://learnjavascript.online/)
  - : 야심찬 웹 개발자를 위한 훌륭한 리소스 — 짧은 강의와 상호작용형 환경에서 JavaScript를 배우세요. 처음 40 개의 강의는 무료이며 전체 과정은 일회성 소액의 금액으로 제공됩니다.
- [TogetherJS](https://togetherjs.com/)
  - : 협업이 쉬워졌습니다. 사이트에 TogetherJS를 추가하면 사용자가 웹 사이트에서 실시간으로 서로를 도울 수 있습니다!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : "JavaScript" 태그가 달린 Stack Overflow 질문들 입니다.
- [JSFiddle](https://jsfiddle.net/)
  - : JavaScript, CSS, HTML 편집 및 실시간 결과를 얻을 수 있으며, 외부 자원(resource)을 사용하며 온라인으로 팀과 협업이 가능합니다.
- [Plunker](https://plnkr.co/)
  - : Plunker는 온라인에서 여러분의 웹 개발 아이디어를 실제로 만들거나 다른사람과 공유 협업하는 커뮤니티 입니다. JavaScript, CSS, HTML 파일을 편집하고 실시간 결과와 파일 구조를 얻으세요.
- [JSBin](https://jsbin.com/)
  - : JS Bin은 오픈 소스 협업 웹 개발 디버깅 도구입니다.
- [Codepen](https://codepen.io/)
  - : Codepen은 실시간으로 실행 결과를 볼 수 있으며 사용되는 또 다른 협업 웹 개발 도구입니다.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz는 React, Angular 등을 사용하여 풀 스택 애플리케이션을 호스팅하고 배포 할 수 있는 또 다른 온라인 플레이 그라운드/디버깅 도구입니다.
- [RunJS](https://runjs.app/)
  - : RunJS는 데스크톱 플레이그라운드/스크래치 패드 도구로, 실시간 결과를 제공하고 노드 및 브라우저 API에 대한 액세스를 제공합니다.
