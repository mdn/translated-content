---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
tags:
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/globalThis
---
{{jsSidebar("Objects")}}

전역 **`globalThis`** 속성은 전역 `this` 값을 가진 전역 객체를 반환합니다.

{{EmbedInteractiveExample("pages/js/globalprops-globalthis.html")}}

{{JS_Property_Attributes(1, 0, 1)}}

## 설명

역사적으로, 서로 다른 JavaScript 환경의 전역 범위에 접근하는건 서로 다른 구문을 필요로 했습니다. 웹에서는 {{domxref("Window.window", "window")}}, {{domxref("Window.self", "self")}}, {{domxref("Window.frames", "frames")}}를 사용할 수 있지만, [Web Workers](/ko/docs/Web/API/Worker)에서는 `self`만 동작합니다. Node.js에서는 아무것도 쓸 수 없고, 대신 `global`을 사용해야 합니다.
비엄격 모드에서의 함수 내부에서 `this`를 사용할 수도 있겠지만, 모듈이나 엄격 모드의 함수에서는 {{jsxref("undefined")}}를 가리키는 문제가 있습니다. `Function('return this')()` 를 사용하는 방법도 존재하지만, 브라우저의 {{glossary("CSP")}} 등으로 {{jsxref("eval", "eval()")}}을 사용할 수 없는 환경에선 {{jsxref("Function")}}도 이렇게 사용할 수 없습니다.

`globalThis` 속성은 환경에 무관하게 전역 `this` 값, 즉 전역 객체에 접근하는 표준 방법을 제공합니다. `window`, `self` 등 비슷한 속성과는 다르게 브라우저/비 브라우저 맥락 모두에서의 동작을 보장합니다. 따라서 코드를 구동하는 환경을 모르더라도 전역 객체에 일관적으로 접근할 수 있습니다.

### HTML과 WindowProxy

많은 JavaScript 엔진에서 `globalThis`는 실제 전역 객체를 가리킬 것이나, 웹 브라우저는 {{htmlelement("iframe")}}과 교차 창 보안 문제로 인하여 전역 객체를 감싼 {{jsxref("Proxy")}}를 대신 가리키고, 실제 객체에는 직접 접근할 수 없습니다. 일반적인 사용에는 차이가 없다고 봐도 무방하지만, 알아두는 것이 중요합니다.

### 이름

`self`와 `global`처럼, 다른 인기있던 제안은 기존 코드와의 호환성 문제를 우려해 제외됐습니다. [언어 제안서의 "NAMING" 문서](https://github.com/tc39/proposal-global/blob/master/NAMING.md)를 방문해 더 자세한 정보를 읽어보세요.

## 예제

### 환경별 전역 접근

`globalThis` 없이 현재 환경의 전역 객체를 가져오는 방법 중 유일하게 믿을만한 방법은 `Function('return this')()` 입니다. 그러나 일부 환경에서는 [CSP](/ko/docs/Web/HTTP/CSP) 위반에 걸리는 코드이므로, [es6-shim](https://github.com/paulmillr/es6-shim)은 대신 다음 검사를 수행합니다.

```js
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

var globals = getGlobal();

if (typeof globals.setTimeout !== 'function') {
  // no setTimeout in this environment!
}
```

`globalThis`를 사용할 수 있으면 환경별 전역 객체 검사는 더 이상 필요하지 않습니다.

```js
if (typeof globalThis.setTimeout !== 'function') {
  // no setTimeout in this environment!
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Operators/this", "this")}}
