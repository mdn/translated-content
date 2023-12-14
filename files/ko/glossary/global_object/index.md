---
title: 전역 객체
slug: Glossary/Global_object
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

전역 객체는 {{glossary("global scope", "전역 범위")}} 에 항상 존재하는 {{glossary("object", "객체")}} 를 의미합니다.

JavaScript에선, 전역 객체로 선언된 객체들이 항상 존재합니다. 웹브라우저에서, 스크립트가 [`var`](/ko/docs/Web/JavaScript/Reference/Statements/var) 키워드를 통해 전역 변수를 생성할 때, 이 때 생성되는 변수들은 전역 객체의 멤버로서 생성됩니다. (이것은 {{Glossary("Node.js")}} 에서는 예외입니다). 전역 객체의 {{Glossary("interface")}}는 스크립트가 실행되고 있는 곳의 실행 컨텍스트에 의존합니다. 예를 들어,

- 웹브라우저에 있는 스크립트가 특별히 백그라운드 작업으로 시작하지 않는 코드들은 그것의 전역 객체로써 {{domxref("Window")}} 를 가집니다. 이것은 Web에 있는 JavaScript 코드의 상당수가 그렇습니다.
- {{domxref("Worker")}} 에서 실행하는 코드는 그것의 전역 객체로서 {{domxref("WorkerGlobalScope")}} 를 가집니다.
- {{Glossary("Node.js")}} 환경에서 실행하는 스크립트에는 전역 객체로 [`global`](https://nodejs.org/api/globals.html#globals_global)이라는 객체를 가집니다.

[`globalThis`](/ko/docs/Web/JavaScript/Reference/Global_Objects/globalThis) 전역 속성을 사용하면 현재 환경에 관계없이 전역 객체에 접근할 수 있습니다.

[`var`](/ko/docs/Web/JavaScript/Reference/Statements/var)문 및 상단의 [함수 선언](/ko/docs/Web/JavaScript/Reference/Statements/function) 전역 객체에서 만들어지는 속성입니다.

전역 객체의 속성은 {{glossary("global scope")}}에 자동으로 추가됩니다.

JavaScript에서, 전역 객체는 항상 자신에 대한 참조를 가지고 있습니다.

## 브라우저 에서의 `window` 객체

`window` 객체는 브라우저에서 전역 객체입니다. 어느 전역 객체나 함수는 `window` 객체의 프로퍼티로서 접근될 수 있습니다.

```js
console.log(globalThis === globalThis.globalThis); // true (모든 곳에서)
console.log(window === window.window); // true (브라우저에서)
console.log(self === self.self); // true (브라우저 또는 웹 워커에서)
console.log(frames === frames.frames); // true (브라우저에서)
console.log(global === global.global); // true (Node.js에서)
```

## 같이 보기

- [MDN Web Docs Glossary](/ko/docs/Glossary)

  - {{glossary("global scope", "전역 범위")}}
  - {{glossary("object", "객체")}}

- {{domxref("Window")}}
- {{domxref("WorkerGlobalScope")}}
- [`global`](https://nodejs.org/api/globals.html#globals_global)
