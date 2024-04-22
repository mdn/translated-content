---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
---

{{jsSidebar("Objects")}}

전역 **`globalThis`** 속성에는 일반적으로 [전역 객체](/ko/docs/Glossary/Global_object)와 유사한
[전역 `this`](/ko/docs/Web/JavaScript/Reference/Operators/this#global_context) 값이 포함됩니다.

{{EmbedInteractiveExample("pages/js/globalprops-globalthis.html","shorter")}}

## 값

전역 `this` 객체입니다.

{{js_property_attributes(1, 0, 1)}}

> **참고:** `globalThis` 속성은 구성 및 쓰기가 가능하므로 코드 작성자가 신뢰할 수 없는 코드를 실행할 때 숨길 수 있고 전역 객체 노출을 방지할 수 있습니다.

## 설명

역사적으로 전역 객체에 접근하려면 다른 JavaScript 환경에서 다른 구문이 필요했습니다. 웹에서는 {{domxref("Window.window", "window")}}, {{domxref("Window.self", "self")}}, {{domxref("Window.frames", "frames")}}를 사용할 수 있지만, [Web Workers](/ko/docs/Web/API/Worker)에서는 `self`만 동작합니다. Node.js에서는 이 중 어느 것도 작동하지 않으며 대신 `global`을 사용해야 합니다.
`this` 키워드는 비엄격 모드에서 실행되는 함수 내부에서 사용될 수 있지만, `this`는 엄격 모드에서 실행되는 모듈 및 내부 함수에서 `undefined`가 됩니다. `Function('return this')()`를 사용하는 방법도 존재하지만, 브라우저의 {{glossary("CSP")}}와 같이 {{jsxref("eval", "eval()")}}을 비활성화하는 환경에서는 이러한 방식으로 {{jsxref("Function")}}을 사용할 수 없습니다.

`globalThis` 속성은 환경에 무관하게 전역 `this` 값, 즉 전역 객체에 접근하는 표준 방법을 제공합니다. `window`, `self` 등 유사한 속성과는 다르게 window와 non-window 컨텍스트 모두에서의 동작을 보장합니다. 따라서 코드를 구동하는 환경을 모르더라도 전역 객체에 일관된 방식으로 접근할 수 있습니다. 이름을 기억하는 데 도움이 되도록 전역 범위에서 `this` 값은 `globalThis`라는 점만 기억하세요.

> **참고:** 브라우저와 Node의 경우에서 `globalThis`는 일반적으로 전역 객체와 동일한 개념입니다(즉, `globalThis`에 속성을 추가하면 전역 변수가 됨). 그러나 호스트는 전역 객체와 관련이 없는 `globalThis`에 대해 다른 값을 제공할 수 있습니다.

### HTML과 WindowProxy

많은 엔진에서 `globalThis`는 실제 전역 객체를 대한 참조이지만 웹 브라우저는 {{htmlelement("iframe")}}과 교차 창 보안 문제로 인해 전역 객체를 감싼 {{jsxref("Proxy")}}를 대신 참조합니다(직접 액세스할 수 없음). 일반적인 사용에는 차이가 없다고 봐도 무방하지만, 알아두는 것이 중요합니다.

### 이름 지정

`self` 및 `global`과 같은 다른 유명한 이름 제안들은 기존 코드와의 호환성 문제를 우려해 고려 대상에서 제외되었습니다. 자세한 내용은 [언어 제안서의 "NAMING" 문서](https://github.com/tc39/proposal-global/blob/master/NAMING.md)를 참조하세요.

`globalThis`는 문자 그대로 전역 `this` 값입니다. 객체 없이 호출되는 비엄격 함수의 `this` 값과 같은 값입니다. 스크립트의 전역 범위에서 `this`의 값이기도 합니다.

## 예제

### 환경별 전역 접근

일반적으로 전역 객체는 명시적으로 지정할 필요가 없습니다. 해당 속성은 자동으로 전역 변수로 액세스할 수 있습니다.

```js
console.log(window.Math === Math); // true
```

그러나 전역 객체에 명시적으로 접근해야 하는 한 가지 경우는 일반적으로 [폴리필](/ko/docs/Glossary/Polyfill)을 위해 전역 개체에 **작성** 할 때입니다.

`globalThis` 이전에는 환경에 대한 전역 객체를 가져오는 방법 중 유일하게 믿을만한 교차 플랫폼 방법은 `Function('return this')()` 이었습니다. 그러나 이로 인해 일부 설정에서 [CSP](/ko/docs/Web/HTTP/CSP) 위반이 발생하므로 작성자는 이와 같은 조각별 정의를 사용합니다([원래 core-js 소스](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global.js)).

```js
function check(it) {
  // Math는 모든 환경에서 전역으로 존재하는 것으로 알려져 있습니다.
  return it && it.Math === Math && it;
}

const globalObject =
  check(typeof window === "object" && window) ||
  check(typeof self === "object" && self) ||
  check(typeof global === "object" && global) ||
  // 엄격 모드에서 실행할 때 undefined를 반환합니다.
  (function () {
    return this;
  })() ||
  Function("return this")();
```

전역 객체를 얻은 후 새로운 전역을 정의할 수 있습니다. 예를 들어 [`Intl`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl)에 대한 구현을 추가합니다.

```js
if (typeof globalObject.Intl === "undefined") {
  // No Intl in this environment; define our own on the global scope
  Object.defineProperty(globalObject, "Intl", {
    value: {
      // Our Intl implementation
    },
    enumerable: false,
    configurable: true,
    writable: true,
  });
}
```

`globalThis`를 사용할 수 있으므로 환경 전체에 대한 추가 검색이 더 이상 필요하지 않습니다.

```js
if (typeof globalThis.Intl === "undefined") {
  Object.defineProperty(globalThis, "Intl", {
    value: {
      // Our Intl implementation
    },
    enumerable: false,
    configurable: true,
    writable: true,
  });
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `globalThis` in `core-js`](https://github.com/zloirock/core-js#ecmascript-globalthis)
- {{jsxref("Operators/this", "this")}}
