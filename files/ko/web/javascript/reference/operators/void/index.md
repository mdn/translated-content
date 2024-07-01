---
title: void
slug: Web/JavaScript/Reference/Operators/void
---

{{jsSidebar("Operators")}}

**`void` 연산자**는 주어진 표현식을 평가하고 {{jsxref("undefined")}}를 반환합니다.

{{EmbedInteractiveExample("pages/js/expressions-voidoperator.html")}}

## 구문

```js
void expression;
```

## 설명

`void`는 값을 생성하는 표현식을 평가해서 {{jsxref("undefined")}}를 반환합니다.

오직 `undefined` 원시값을 얻기 위해 `void 0` 또는 `void(0)`처럼 사용하는 경우도 볼 수 있습니다. 이런 경우 전역 {{jsxref("undefined")}}를 대신 사용해도 됩니다.

`void` 연산자의 [우선순위](/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)도 유념해야 합니다. [그룹 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Grouping)(괄호)를 사용하면 `void` 연산자를 사용한 식의 평가 과정을 더 명확하게 보일 수 있습니다.

```js
void 2 == "2"; // undefined == '2', false
void (2 == "2"); // void true, undefined
```

## IIFE

즉시 실행 함수 표현식({{Glossary("IIFE")}})을 사용할 때 `void`를 사용하면 `function` 키워드를 선언문이 아니라 표현식처럼 간주하도록 강제할 수 있습니다.

```js
void (function iife() {
  var bar = function () {};
  var baz = function () {};
  var foo = function () {
    bar();
    baz();
  };
  var biz = function () {};

  foo();
  biz();
})();
```

## JavaScript URI

`javascript:`로 시작하는 URI를 지원하는 브라우저에서는, URI에 있는 코드의 평가 결과가 {{jsxref("undefined")}}가 아니라면 페이지의 콘텐츠를 반환 값으로 대체합니다. `void` 연산자를 사용하면 `undefined`를 반환할 수 있습니다. 다음 예제를 확인하세요.

```html
<a href="javascript:void(0);">클릭해도 아무 일도 없음</a>
<a href="javascript:void(document.body.style.backgroundColor='green');">
  클릭하면 배경색이 녹색으로
</a>
```

<div class="blockIndicator note"><p><strong>참고</strong>: <code>javascript:</code> 의사 프로토콜보다 이벤트 처리기와 같은 대체재 사용을 권장합니다.</p></div>

## 새지 않는 화살표 함수

Arrow functions introduce a short-hand braceless syntax that returns an expression. This can cause unintended side effects by returning the result of a function call that previously returned nothing. To be safe, when the return value of a function is not intended to be used, it can be passed to the void operator to ensure that (for example) changing APIs do not cause arrow functions' behaviors to change.

```js
button.onclick = () => void doSomething();
```

This ensures the return value of `doSomething` changing from `undefined` to `true` will not change the behavior of this code.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("undefined")}}
