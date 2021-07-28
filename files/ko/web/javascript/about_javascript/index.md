---
title: JavaScript에 대하여
slug: Web/JavaScript/About_JavaScript
tags:
  - Beginner
  - Guide
  - Introduction
  - JavaScript
translation_of: Web/JavaScript/About_JavaScript
original_slug: Web/JavaScript/About
---
{{JsSidebar}}

## JavaScript란 무엇인가?

**JavaScript** (줄여서 **JS**)는 [일급 함수](https://en.wikipedia.org/wiki/First-class_function)를 사용하는 가벼운 객체 지향 인터프리터 언어이며 웹페이지의 스크립트 언어로 잘 알려져 있지만, 브라우저가 아닌 환경에서도 많이 사용된다. [프로토타입 기반](https://en.wikipedia.org/wiki/Prototype-based_programming), 다중 패러다임 스크립트 언어이며, 동적이고 명령어, 객체 지향, 함수 프로그래밍 스타일을 지원한다.

자바스크립트는 클라이언트 측 웹(브라우저)에서 실행 되고, 웹 페이지가 이벤트 발생 시 어떻게 작동하는 지 디자인 / 프로그래밍할 수 있다. 자바스크립트는 쉽게 배울 수 있고 강력한 스크립트 언어로 웹 페이지 동작을 제어하는 데 널리 사용된다.

대중적인 오해와 달리, **Javascript는 "인터프리트 형태의 자바"가 아니다.** 간단히 말하면, Javascript는 [프로토타입 기반](/ko/docs/Web/JavaScript/Guide/Details_of_the_Object_Model#class-based_vs._prototype-based_languages) 객체 생성을 지원하는 동적 스크립트 언어이다. 기본적인 문법은  언어 학습에 필요한 새로운 개념을 줄이기 위해 Java와 C++의 `if`문, `for`와 `while`문, `switch`문과 `try...catch` 구문을 사용하는 언어구조를 사용하며, 그와 같은 (거의 가까운) 동작을 한다.

Javascript는 [절차지향 (procedural)](http://www.instantweb.com/%7Efoldoc/foldoc.cgi?query=procedural&#x26;action=Search) 언어와 [객체지향 (object oriented)](http://www.instantweb.com/%7Efoldoc/foldoc.cgi?query=object+oriented&#x26;action=Search) 언어 두가지 형태로 만들수 있다. 자바스크립트에서 객체는 **실행 시간에** 빈 객체를 오버라이딩하여 메소드와 프로퍼티를 연결하는 (프로그래밍)방식으로 생성된다. C++ 및 Java와 같은 컴파일 언어에서 공통적인 구문 클래스 정의와 반대되는 개념이다. 한번 객체가 생성하면, 비슷한 객체를 생성할 때 프로토타입으로 사용할 수 있다.

JavaScript의 동적인 성질은, 실행시의 오브젝트 구축, 가변 인수 리스트, 함수 변수, ([`eval`](/ko/docs/Web/JavaScript/Reference/Global_Objects/eval)) 에 의한)동적 스크립트 작성, (`for ... in` 에 의한) 오브젝트의 내부참조, 또는 소스코드 복원 (JavaScript 의 프로그램은 함수본체를 소스텍스트에 역컴파일할 수 있다.) 을 포함하고 있다.

자바스크립트 프로그래밍에 대한 더 자세한 설명은 아래의 [자바스크립트 자원](#javascript_자원) 링크를 참조하면 된다.

## 어떠한 JavaScript 구현이 유용한가?

Mozilla 프로젝트는 두 가지 자바스크립트 구현을 제공한다. 최초의 Javascript는 Netscape의 Brendan Eich에 의해 만들었다. 이후 ECMA-262 에디션 5 와 최신 버전을 준수하도록 업데이트되었다. [SpiderMonkey](https://spidermonkey.dev/)라는 이름의 엔진은 C/C++로 구현되었다. [Rhino](https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)) 엔진은 주로 Norris Boys(또한 Netscape)가 만들었고 Java로 작성된 Javascript 구현체이다. SpiderMonkey와 마찬가지로 Rhino도 ECMA-262 에디션 5를 준거한다.

TraceMonkey (Firefox 3.5), JägerMonkey (Firefox 4) 그리고 IonMonkey와 같은 몇가지 주요한 실시간 최적화는 차츰 SpiderMonkey 자바스크립트 엔진에 추가되었다. 자바스크립트 실행 성능 향상을 위한 작업은 지금도 진행 중이다.

위의 구현 이외에도 다음과 같은 다른 인기있는 자바스크립트 엔진이 있다.

- 구글의 [V8](https://code.google.com/p/v8/) 은 크롬 브라우저와 최신 버전의 오페라 브라우저에 사용된다. 또 Node.js의 엔진으로 사용된다.
- [JavaScriptCore](https://www.webkit.org/projects/javascript/index.html) (SquirrelFish/Nitro) 는 Apple 사파리와 같은 일부 WebKit 브라우저에서 사용된다.
- [Carakan](https://my.opera.com/ODIN/blog/carakan-faq)는 오페라의 예전 버전안에 있다.
- [Chakra](https://en.wikipedia.org/wiki/Chakra_%28JScript_engine%29) 엔진은 Internet Explorer에서 사용된다. (상표권 문제를 피하기 위해 공식적으로 "JScript"라고 불린다.)

mozilla.org의 각 JavaScript 엔진은, 애플리케이션이 JavaScript를 지원하기 위해 부를 수 있는 공개 API를 공개하고 있다. JavaScript 를 지원하는 가장 일반적인 호스트환경은 웹브라우저이다. 웹 브라우저는 일반적으로 공개 API를 사용하여 [DOM](https://www.w3.org/DOM/)을 Javascript로 반영하는 **호스트 객체**를 만든다.

JavaScript 의 또 다른 일반적인 애플리케이션은 (웹) 서버사이드 스크립팅 언어이다. 자바스크립트 웹 서버는 HTTP 요청 및 응답 객체를 나타내는 호스트 객체를 공개하며 자바 스크립트 프로그램에 의해 조작되어 웹 페이지를 동적으로 생성 할 수 있다. [Node.js](https://nodejs.org/)는 이에 대한 대중적인 예이다.

## JavaScript 자원

- [Language resources](/ko/docs/Web/JavaScript/Language_Resources)
  - : 자바스크립트 표준을 출판하기 위한 포인터들.
- [A re-introduction to JavaScript](/ko/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
  - : [Javascript 가이드](/ko/docs/Web/JavaScript/Guide)와 [JavaScript reference](/ko/docs/Web/JavaScript/Reference).

JavaScript® 는 미국 및 여러 나라의 Oracle 트레이드마크 또는 등록된 트레이드마크입니다.
