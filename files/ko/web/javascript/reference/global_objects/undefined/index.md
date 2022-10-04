---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
tags:
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/undefined
---
{{jsSidebar("Objects")}}

전역 **`undefined`** 속성은 `{{Glossary("Undefined", "undefined")}}` 원시 값을 나타내며, JavaScript의 {{Glossary("Primitive", "원시 자료형")}} 중 하나입니다.

{{js_property_attributes(0,0,0)}}

{{EmbedInteractiveExample("pages/js/globalprops-undefined.html")}}

## 구문

```js
undefined
```

## 설명

`undefined`는 전역 객체의 속성입니다. 즉, 전역 스코프에서의 변수입니다. `undefined`의 초기 값은 `{{Glossary("Undefined", "undefined")}}` 원시 값입니다.

최신 브라우저에서 `undefined`는 ECMAScript 5 명세에 따라 설정 불가, 쓰기 불가한 속성입니다. 그렇지 않더라도 덮어쓰는건 피하는게 좋습니다.

값을 할당하지 않은 변수는 `undefined` 자료형입니다. 또한 메서드와 선언도 평가할 변수가 값을 할당받지 않은 경우에 `undefined`를 반환합니다. 함수는 값을 명시적으로 {{jsxref("Statements/return", "반환", "", 1)}}하지 않으면 `undefined`를 반환합니다.

> **참고:** `undefined`는 [예약어](/ko/docs/Web/JavaScript/Reference/Reserved_Words)가 아니기 때문에 전역 범위 외에서 {{Glossary("Identifier", "식별자")}}(변수 이름)로 사용할 수 있습니다. 그러나 유지보수와 디버깅 시 어려움을 낳을 수 있으므로 반드시 피해야 합니다.```js example-bad
> // DON'T DO THIS
>
> // logs "foo string"
> (function() {
> var undefined = 'foo';
> console.log(undefined, typeof undefined);
> })();
>
> // logs "foo string"
> (function(undefined) {
> console.log(undefined, typeof undefined);
> })('foo');
>
> ```
>
> ```

## 예제

### 일치 연산과 `undefined`

`undefined`와 일치, 불일치 연산자를 사용해 변수에 값이 할당됐는지 판별할 수 있습니다. 다음 예제에서 변수 `x`는 초기화되지 않았으므로 `if`문은 `true`로 평가됩니다.

```js
var x;
if (x === undefined) {
   // 이 문이 실행됨
}
else {
   // 이 문이 실행되지 않음
}
```

> **참고:** **참고**: 동등 연산자가 아니라 일치 연산자를 사용해야 합니다. 동등 연산자일 때 `x == undefined`는 `x`가 {{jsxref("null")}}일 때도 참이기 때문입니다. 즉 `null`은 `undefined`와 동등하지만, 일치하지는 않습니다.자세한 내용은 {{jsxref("Operators/Comparison_Operators", "비교 연산자", "", 1)}} 문서를 확인하세요.

### `typeof` 연산자와 `undefined`

위의 예제 대신 {{jsxref("Operators/typeof", "typeof")}}를 사용할 수도 있습니다.

```js
var x;
if (typeof x === 'undefined') {
   // 이 문이 실행됨
}
```

`typeof`를 사용하는 이유 중 하나는 선언하지 않은 변수를 사용해도 오류를 던지지 않기 때문입니다.

```js
// x를 선언한 적 없음
if (typeof x === 'undefined') { // 오류 없이 true로 평가
   // 이 문이 실행됨
}

if(x === undefined) { // ReferenceError

}
```

그러나 다른 방법도 있습니다. JavaScript는 정적 범위를 가지는 언어이므로, 변수의 선언 여부는 현재 맥락의 코드를 읽어 알 수 있습니다.

전역 범위는 {{jsxref("globalThis", "전역 객체", "", 1)}}에 묶여 있으므로, 전역 맥락에서 변수의 존재 유무는 {{jsxref("Operators/in", "in")}} 연산자를 전역 객체 대상으로 실행해 알 수 있습니다. 즉,

```js
if ('x' in window) {
  //  x가 전역으로 정의된 경우 이 문이 실행됨
}
```

### `void` 연산자와 `undefined`

{{jsxref("Operators/void", "void")}} 연산자를 제 3의 대안으로 사용할 수 있습니다.

```js
var x;
if (x === void 0) {
   // 이 문이 실행됨
}

// y를 선언한 적 없음
if (y === void 0) {
   // Uncaught Reference Error: y is not defined
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- JavaScript의 {{glossary("Primitive", "원시 값")}}
- {{jsxref("null")}}
