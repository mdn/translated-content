---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: f22e2f56c6cc82b43b6a14fa213755512e23cd8f
---

{{JsSidebar}}

**JavaScript** (**JS**)는 가벼운, 인터프리터 혹은 [just-in-time](https://ko.wikipedia.org/wiki/JIT_%EC%BB%B4%ED%8C%8C%EC%9D%BC) 컴파일 프로그래밍 언어로, {{Glossary("First-class Function", "일급 함수")}}를 지원합니다. 웹 페이지를 위한 스크립트 언어로 잘 알려져 있지만, {{Glossary("Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/), [Adobe Acrobat](https://www.adobe.com/devnet/acrobat/javascript.html)처럼 [많은 비 브라우저 환경](https://en.wikipedia.org/wiki/JavaScript#Other_usage)에서도 사용하고 있습니다. JavaScript는 {{Glossary("Prototype-based programming", "프로토타입 기반")}}, 다중 패러다임, [단일 스레드](/ko/docs/Glossary/Thread), [동적](/ko/docs/Glossary/Dynamic_typing) 언어로, 객체지향형, 명령형, 선언형(함수형 프로그래밍 등) 스타일을 지원합니다.

JavaScript의 동적 기능에는 런타임 객체 구성, 변수 매개변수 목록, 함수 변수, ([`eval`](/ko/docs/Web/JavaScript/Reference/Global_Objects/eval)을 통한) 동적 스크립트 생성, ([`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in) 및 [`Object` 유틸리티](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#정적_메서드)를 통한) 객체 검사 그리고 소스 코드 복구(JavaScript 함수는 소스 텍스트를 저장하고 [`toString()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)을 통해 다시 찾을 수 있습니다.)가 있습니다.

이 섹션은 JavaScript 언어 자체를 다루며 웹 페이지 또는 다른 사용 환경에 대해 다루지 않습니다. 웹 페이지의 특정 {{Glossary("API","API")}}에 대한 정보를 알고 싶다면, [웹 API](/ko/docs/Web/API)와 {{Glossary("DOM")}}을 참고하시기 바랍니다.

JavaScript의 표준은 [ECMAScript 언어 사양](https://tc39.es/ecma262/) (ECMA-262)과 [ECMAScript 국제화 API 사양](https://tc39.es/ecma402/) (ECMA-402)입니다. 저희는 한 브라우저가 어떤 기능을 구현하는 즉시 이를 문서화하려고 노력하고 있습니다. 이는 [새로운 ECMAScript 기능에 대한 일부 제안](https://github.com/tc39/proposals)이 브라우저에서 구현된 경우, MDN의 문서와 예제가 이 새로운 기능 중 일부를 사용할 수 있음을 의미합니다. 대부분 3, 4[단계](https://tc39.es/process-document/) 사이에서 이루어지며, 이것은 일반적으로 사양이 공식적으로 게시되기 전입니다.

JavaScript와 [Java 프로그래밍 언어](<https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EC%96%B8%EC%96%B4)>)를 혼동해서는 안 됩니다. **JavaScript는 "인터프리트 Java"가 아닙니다.** "Java"와 "JavaScript" 는 모두 상표이자 미국 및 기타 국가에 등록된 Oracle의 상표이지만, 두 프로그래밍 언어의 구문, 의미 및 사용 방법은 매우 다릅니다.

핵심 언어 기능(대부분 순수한 [ECMAScript](/ko/docs/Web/JavaScript/JavaScript_technologies_overview))에 대한 JavaScript 문서는 다음과 같습니다.

- [JavaScript 안내서](/ko/docs/Web/JavaScript/Guide)
- [JavaScript 참고서](/ko/docs/Web/JavaScript/Reference)

JavaScript 사양과 관련 기술에 대한 자세한 내용은 [JavaScript 기술 개요](/ko/docs/Web/JavaScript/JavaScript_technologies_overview)를 참조하세요.

> **알림:** **프론트 엔드 웹 개발자가 되고 싶으신가요?**
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
  - : JavaScript의 객체 지향적 특성에 대한 이해는 언어의 이해도를 높이며 효율적인 코드를 작성하려는 경우 중요하므로, 이 과정이 도움이 될 것입니다.
- [비동기 JavaScript](/ko/docs/Learn/JavaScript/Asynchronous)
  - : 비동기 JavaScript가 중요한 이유와, 비동기적 코드를 사용해 서버에서 리소스 가져오기 등 블록킹 연산을 효율적으로 처리하는 방법에 대해 알아봅니다.
- [클라이언트측 웹 API](/ko/docs/Learn/JavaScript/Client-side_web_APIs)
  - : API란 무엇인지 탐색해보고, 개발 작업에서 자주 접하게 될 가장 일반적인 API를 사용하는 방법을 알아봅니다.

### JavaScript 안내서

- [JavaScript 안내서](/ko/docs/Web/JavaScript/Guide)
  - : JavaScript 또는 다른 언어로 프로그래밍 경험이 있는 독자들을 대상으로한 JavaScript 언어에 대한 상세 가이드입니다.

### 중급

- [클라이언트 측 JavaScript 프레임워크 이해](/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
  - : JavaScript 프레임워크는 현대 프런트 엔드 웹 개발의 필수 부분으로, 개발자에게 확장 가능한 상호작용형 웹 응용 프로그램을 구축하기위한 입증된 도구를 제공합니다. 이 과정에서는 오늘날 가장 인기있는 일부 프레임워크를 다루는 자습서 시리즈로 이동하기 전에 클라이언트 측 프레임워크가 작동하는 방식과 도구 집합에 맞는 방식에 대한 기본적인 배경 지식을 제공합니다.
- [자바스크립트 개요](/ko/docs/Web/JavaScript/Language_Overview)
  - : 다른 프로그래밍 언어에서 넘어 온 사람들이 빨리 배울 수 있는 JavaScript의 기본 구문과 의미 체계에 대한 개요입니다.
- [JavaScript 데이터 구조](/ko/docs/Web/JavaScript/Data_structures)
  - : JavaScript에서 이용 가능한 데이터 구조 개요입니다.
- [동등성 비교 및 동일성](/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript는 `===`를 사용한 완전 동등, `==`를 사용한 느슨한 동등, 그리고 {{jsxref("Global_Objects/Object/is", "Object.is()")}} 메서드의 세 가지 값 비교 연산을 제공합니다.
- [속성의 열거 가능성과 소유권](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
  - : 객체 속성 그룹을 하나씩 방문하는 다양한 방법이 속성의 열거 가능성과 소유권을 처리하는 방법입니다.
- [클로저](/ko/docs/Web/JavaScript/Closures)
  - : 클로저는 함수와 그 함수가 선언된 어휘 (lexical) 환경의 조합입니다.

### 고급

- [상속 및 프로토타입 체인](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : 널리 오해 받고 과소 평가된 프로토타입 기반 상속을 설명합니다.
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
  - : JavaScript 형식화된 배열은 원시 이진 데이터에 접근하기 위한 메커니즘을 제공합니다.
- [메모리 관리](/ko/docs/Web/JavaScript/Memory_Management)
  - : JavaScript의 메모리 생명 주기와 가비지 컬렉션을 설명합니다.
- [동시성 모델 및 이벤트 루프](/ko/docs/Web/JavaScript/EventLoop)
  - : JavaScript는 "이벤트 루프"에 기반을 둔 동시성 모델이 있습니다.

## 참고서

전체 [JavaScript 참고서](/ko/docs/Web/JavaScript/Reference)를 훑어보세요.

- [표준 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects)
  - : {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} 등 표준 내장 객체를 배웁니다.
- [표현식 및 연산자](/ko/docs/Web/JavaScript/Reference/Operators)
  - : JavaScript 연산자 {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}의 동작, [연산자 우선순위](/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) 등을 배웁니다.
- [명령문 및 선언문](/ko/docs/Web/JavaScript/Reference/Statements)
  - : {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} 등의 JavaScript의 구문 및 키워드 작동법을 배웁니다.
- [함수](/ko/docs/Web/JavaScript/Reference/Functions)
  - : 애플리케이션을을 개발하기 위해 JavaScript의 함수를 사용하는 방법을 배웁니다.
- [클래스](/ko/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript 클래스는 객체 지향 프로그래밍을 수행하는 가장 적절한 방법입니다.
