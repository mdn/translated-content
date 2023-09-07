---
title: 소개
slug: Web/JavaScript/Guide/Introduction
l10n:
  sourceCommit: 9c4fb236cd9ced12b1eb8e7696d8e6fcb8d8bad3
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

이 장에서는 JavaScript를 소개하고 몇 가지 기본 개념에 대해 설명합니다.

## 알고 있어야 하는 것

이 안내서는 여러분이 아래 기본 배경지식이 있다고 가정합니다.

- 인터넷과 월드 와이드 웹 ([WWW](/ko/docs/Glossary/World_Wide_Web))에 대한 일반적인 이해.
- HyperText Markup Language ([HTML](/ko/docs/Glossary/HTML))에 대한 적절한 실무 지식.
- 약간의 프로그래밍 경험. 만약 프로그래밍이 처음이라면, [JavaScript](/ko/docs/Web/JavaScript) 메인 페이지에 링크된 자습서 중 하나를 공부해보세요.

## JavaScript 정보를 찾을 수 있는 곳

MDN에 있는 JavaScript 문서는 다음 세가지 파트로 되어있습니다.

- [Web 개발 학습하기](/ko/docs/Learn)는 입문자를 위한 정보를 제공하며, 프로그래밍과 인터넷에 대한 기본 개념을 소개합니다.
- [JavaScript 안내서](/ko/docs/Web/JavaScript/Guide) (이 안내서)는 JavaScript 언어와 객체에 대한 개요를 제공합니다.
- [JavaScript 참고서](/ko/docs/Web/JavaScript/Reference) JavaScript에 관련된 자세한 참고 자료를 제공합니다.

JavaScript가 처음이라면, [학습터](/ko/docs/Learn)와 [JavaScript 안내서](/ko/docs/Web/JavaScript/Guide)부터 시작해 보세요. 기본 사항을 확실히 이해했다면 [JavaScript 참고서](/ko/docs/Web/JavaScript/Reference)에서 개별 객체 및 명령문에 대한 자세한 내용을 확인할 수 있습니다.

## JavaScript는 무엇인가?

JavaScript는 웹 페이지를 대화식(예: 복잡한 애니메이션, 클릭 가능한 버튼, 팝업 메뉴 등)으로 만드는 데 사용되는 크로스 플랫폼, 객체 지향 스크립팅 언어입니다. 또한 Node.js와 같이 파일을 다운로드하는 것보다 더 많은 기능(예: 여러 컴퓨터 간의 실시간 공동 작업)을 웹 사이트에 추가할 수 있는 JavaScript의 고급 서버 측 버전도 있습니다. 호스트 환경(예: 웹 브라우저) 내에서 JavaScript를 해당 환경의 객체에 연결하여 프로그래밍 방식으로 제어할 수 있습니다.

JavaScript는 `Array`, `Date`, 그리고 `Math`와 같은 객체에 대한 표준 라이브러리와 연산자, 제어 구조, 그리고 명령문과 같은 언어 요소의 집합이 있습니다. 코어 JavaScript는 추가 객체로 보완하여 다양한 목적으로 확장할 수 있습니다. 예를 들어 다음과 같습니다.

- 클라이언트 측 JavaScript는 브라우저와 문서 객체 모델(DOM)을 제어하는 객체를 제공하여 코어 언어를 확장합니다. 예를 들어, 클라이언트 측 확장을 사용하면 애플리케이션이 HTML 양식에 요소를 배치하고 마우스 클릭, 양식 입력, 그리고 페이지 탐색과 같은 사용자 이벤트에 응답할 수 있습니다.
- 서버 측 JavaScript는 서버에서 JavaScript를 실행하는 것과 관련된 객체를 제공하여 핵심 언어를 확장합니다. 예를 들어, 서버측 확장을 사용하면 애플리케이션이 데이터베이스와 통신하고, 애플리케이션의 한 호출에서 다른 애플리케이션으로 연속적인 정보를 제공하거나, 서버에서 파일을 조작할 수 있습니다.

이것은 브라우저에서 JavaScript가 웹 페이지 (DOM)의 모양을 바꿀 수 있음을 의미합니다. 또한 서버의 Node.js JavaScript는 브라우저에 작성된 코드의 사용자 정의 요청에 응답 할 수 있습니다.

## JavaScript 와 Java

JavaScript 와 Java는 여러 면에서 비슷하지만 어떤 면에서는 근본적으로 다릅니다. JavaScript 언어는 Java를 닮았지만 Java의 정적 형 지정과 강한 형 검사를 가지고있지 않습니다. JavaScript는 대부분의 Java 표현 구문, 명명 규칙 및 기본적인 흐름 제어 구조를 따르며 이것이 LiveScript에서 JavaScript로 이름이 변경된 이유입니다.

Java의 선언에 의해 생성되는 클래스의 컴파일-타임 시스템과는 달리, JavaScript는 숫자, 불리언, 그리고 문자열 값을 표현하는 적은 수의 자료 형을 기반으로 한 런타임 시스템을 지원합니다. JavaScript는 보다 일반적인 클래스 기반 객체 모델 대신에 프로토타입 기반 객체 모델을 갖습니다. 프로토타입 기반 모델은 동적 상속을 제공합니다. 즉, 상속된 대상은 각각의 객체에 따라 다양할 수 있습니다. JavaScript는 또한 어떤 특정한 선언을 요구하지 않는 함수도 지원합니다. 함수는 객체의 속성이나, 타입이 느슨하게 지정된 메서드가 될 수 있습니다.

JavaScript는 Java에 비해 매우 자유로운 형태의 언어입니다. 모든 변수, 클래스, 그리고 메서드를 선언할 필요는 없습니다. 메소드가 public, private, 또는 protected 인지 걱정할 필요가 없으며 인터페이스를 구현하지 않아도 됩니다. 변수, 매개변수, 그리고 함수의 반환 형은 명시적으로 지정되지 않습니다.

Java는 빠른 실행과 형 안전성을 위해 설계된 클래스 기반 프로그래밍 언어입니다. 형 안전성은, 예를 들어, 여러분이 Java 정수를 객체의 레퍼런스로 형변환 하거나 Java 바이트코드를 변경하여 private 메모리에 접근할 수 없음을 의미합니다. Java의 클래스 기반 모델은 프로그램이 오로지 클래스와 그 메서드로만 구성된다는 것을 뜻합니다. Java의 클래스 상속과 강한 형 지정은 보통 단단하게 결합된 객체 계층구조를 요구합니다. 이러한 요구는 Java 프로그래밍을 JavaScript 프로그래밍보다 더 복잡하게 만듭니다.

반면에, JavaScript는 HyperTalk 과 dBASE 같은 더 작고 동적인 형 지정이 가능한 언어들의 정신을 계승했습니다. 이러한 스크립팅 언어는 더 쉬운 구문과 특별한 내장 기능, 그리고 객체 생성을 위한 최소 요구사항으로 인해 훨씬 더 많은 사람들에게 프로그래밍 도구를 제공합니다.

| JavaScript                                                                                                                        | Java                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 객체 지향. 객체의 형 간에 차이 없음. 프로토타입 메커니즘을 통한 상속, 그리고 속성과 메서드는 어떤 객체든 동적으로 추가될 수 있음. | 클래스 기반. 객체는 클래스 계층구조를 통한 모든 상속과 함께 클래스와 인스턴스로 나뉨. 클래스와 인스턴스는 동적으로 추가된 속성이나 메서드를 가질 수 없음. |
| 변수 자료형이 선언되지 않음(동적 형 지정, 느슨한 형 지정).                                                                        | 변수 자료형은 반드시 선언되어야 함(정적 형 지정, 강한 형 지정).                                                                                           |
| 하드 디스크에 자동으로 작성 불가.                                                                                                 | 하드 디스크에 자동으로 작성 가능.                                                                                                                         |

## JavaScript와 ECMAScript 명세서

JavaScript는 JavaScript를 기반으로 표준화된 국제 프로그래밍 언어를 제공하기 위해 정보 및 통신 시스템 표준화를 위한 유럽 협회(이전에는 유럽 컴퓨터 제조업체 협회(European Computer Manufacturers Association)의 약자)인 [Ecma International](https://www.ecma-international.org/)에서 표준화되었습니다. ECMAScript라고 하는 이 표준화된 JavaScript 버전은 표준을 지원하는 모든 애플리케이션에서 동일한 방식으로 작동합니다. 회사는 개방형 표준 언어를 사용하여 JavaScript 구현을 개발할 수 있습니다. ECMAScript 표준은 ECMA-262 명세에 문서화되어 있습니다.

ECMA-262 표준은 또한 IOS-16262로서 [ISO](http://www.iso.ch/) (국제 표준화 기구)에 의해 승인되었습니다. [Ecma International website](http://www.ecma-international.org/publications/standards/Ecma-262.htm) 에서 그 명세를 찾을 수 있습니다. ECMAScript 명세는 [World Wide Web Consortium (W3C)](http://www.w3.org/) 나 [WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org/)에 의해 표준화된 Document Object Model (DOM)을 설명하지 않습니다. DOM은 HTML 문서 객체가 스크립트에 노출되는 방식을 정의합니다. JavaScript로 프로그래밍할 때 사용되는 다양한 기술에 대한 더 나은 아이디어를 얻으려면, [JavaScript 기술 개요](/ko/docs/Web/JavaScript/JavaScript_technologies_overview) 기사를 참고하세요.

### JavaScript 문서 vs ECMAScript 명세서

ECMAScript 명세는 ECMAScript 구현을 위한 요구 사항의 집합입니다. ECMAScript 구현 또는 엔진(예: Firefox의 SpiderMonkey 또는 Chrome의 V8)에서 표준 호환 언어 기능을 구현하려는 경우에 유용합니다.

ECMAScript 문서는 스크립트 프로그래머를 돕기 위한 것이 아닙니다. 스크립트를 작성할 때 정보를 보려면 JavaScript 문서를 사용하세요.

ECMAScript 명세는 JavaScript 프로그래머에게 익숙하지 않을 수 있는 용어와 문법을 사용합니다. 언어에 대한 설명은 ECMAScript에서 다를 수 있지만 언어 자체는 동일하게 유지됩니다. JavaScript는 ECMAScript 사양에 설명된 모든 기능을 지원합니다.

JavaScript 문서는 JavaScript 프로그래머에게 적합한 언어의 측면을 설명합니다.

## JavaScript 시작하기

JavaScript 시작은 쉽습니다. 최신 웹 브라우저만 있으면 됩니다. 이 안내서는 현재 최신 버전의 Firefox에서만 사용할 수 있는 일부 JavaScript 기능이 포함되어 있으므로 최신 버전의 Firefox를 사용하는 것이 좋습니다.

Firefox에 내장된 웹 콘솔 도구는 JavaScript를 실험하는 데 유용합니다. 한 줄 입력 모드와 여러 줄 입력 모드의 두 가지 모드로 사용할 수 있습니다.

### 웹 콘솔에서 한 줄 입력하기

[웹 콘솔](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)은 현재 로드된 웹 페이지에 대한 정보를 표시하고, 현재 페이지에서 JavaScript 표현식을 실행하는 데 사용할 수 있는 JavaScript 인터프리터도 제공합니다.

웹 콘솔을 열기 위해서는(윈도우와 리눅스에서는 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>, 맥에서는 <kbd>Cmd</kbd>-<kbd>Option</kbd>-<kbd>K</kbd>), Firefox에서 **기타 도구** 메뉴를 열고 "**웹 개발자 도구**"를 선택합니다.

브라우저 창 하단에 웹 콘솔이 나타날겁니다. 콘솔 하단에는 JavaScript를 입력하는 데 사용할 수 있는 입력 줄이 있으며 출력은 위 패널에서 나타납니다.

![하단에 웹 콘솔이 열려 있는 브라우저 창에는 두 줄의 입력 및 출력이 포함되어 있습니다. 그 아래에 텍스트를 입력할 수 있습니다.](2019-04-04_00-15-29.png)

콘솔은 `eval`과 똑같은 방식으로 작동합니다. 입력한 마지막 표현식이 반환되죠. 간단하게 생각해서, 콘솔에 무엇인가 입력할 때마다 `eval` 주위에 `console.log`가 둘러싸여 있다고 생각할 수 있습니다.

```js
console.log(eval("3 + 5"));
```

### 웹 콘솔에서 여러 줄 입력하기

웹 콘솔의 한 줄 입력 모드는 JavaScript 표현식을 빠르게 테스트하는 데 적합합니다. 그리고 여러 줄을 실행할 수도 있지만 그리 편리하지 않습니다. 더 복잡한 JavaScript의 경우 [여러 줄 입력 모드](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode)를 사용할 수 있습니다.

### Hello world

JavaScript 작성을 시작하려면 여러 줄 모드에서 웹 콘솔을 열고 첫 번째 "Hello world" JavaScript 코드를 작성해 보세요.

```js
(function () {
  "use strict";
  /* 코드 시작 */
  function greetMe(yourName) {
    alert(`Hello ${yourName}`);
  }

  greetMe("World");
  /* 코드 끝 */
})();
```

<kbd>Cmd</kbd>+<kbd>Enter</kbd> 또는 <kbd>Ctrl</kbd>+<kbd>Enter</kbd>(또는 실행 버튼 클릭)를 눌러 브라우저에서 펼쳐지는 것을 지켜보세요!

다음 페이지에서는 JavaScript 구문과 언어 특징을 배우기 때문에 보다 복잡한 애플리케이션을 작성할 수 있을겁니다.

그러나 지금은 코드 앞에 항상 `(function(){"use strict";`를 붙이고 마지막에 `})();`를 써야합니다. [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)와 [IIFE](/ko/docs/Glossary/IIFE) 문서에서 이들이 무엇을 하는지 알아볼 수 있지만, 현재로서는 다음을 수행하는 것으로 생각하면 좋습니다.

1. 초보자를 실수하게 만드는 JavaScript 시맨틱을 방지합니다.
2. 콘솔에서 실행되는 코드 스니펫이 서로 상호 작용하지 않도록 방지합니다(예: 한 콘솔 실행에서 생성된 항목이 다른 콘솔 실행에 사용됨).

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
