---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
---

{{JSRef}}

**`Boolean`** 객체는 불리언 값을 감싸고 있는 객체입니다.

## 설명

첫 번째 매개변수로서 전달한 값은 필요한 경우 불리언 값으로 변환됩니다. 값이 없거나 `0`, `-0`, {{jsxref("null")}}, `false`, {{jsxref("NaN")}}, {{jsxref("undefined")}}, 빈 문자열 (`""`)이라면 객체의 초기값은 `false`가 됩니다. 문자열 `"false"`를 포함한 그 외 모든 다른 값은 초기값을 `true`로 설정합니다.

`Boolean` 객체의 `true`와 `false` 값을 원시 `Boolean` 값 `true`, `false`와 혼동해선 안됩니다.

값이 {{jsxref("undefined")}}, {{jsxref("null")}}이 아닌 **모든** 객체는 조건문에서 `true`로 계산됩니다. 이는 값이 `false`인 `Boolean` 객체도 포함합니다. 즉 아래 {{jsxref("Statements/if...else", "if")}} 문의 조건은 참입니다.

```js
var x = new Boolean(false);
if (x) {
  // 이 코드는 실행됨
}
```

그러나 원시 `Boolean` 값에는 적용되지 않습니다. 따라서 아래 {{jsxref("Statements/if...else", "if")}} 문의 조건은 거짓입니다.

```js
var x = false;
if (x) {
  // 이 코드는 실행되지 않음
}
```

불리언이 아닌 값을 변환할 때 `Boolean` 객체를 사용해선 안됩니다. 대신 `Boolean` 함수를 사용하세요.

```js
var x = Boolean(expression); // 추천
var x = new Boolean(expression); // 사용하지 말것
```

값이 `false`인 `Boolean` 객체를 포함한 어떠한 객체를 `Boolean` 객체의 초기값으로 넘겨주더라도 새로운 `Boolean` 객체는 `true`를 가집니다.

```js
var myFalse = new Boolean(false); // 초기값 거짓
var g = Boolean(myFalse); // 초기값 참
var myString = new String("Hello"); // 문자열 객체
var s = Boolean(myString); // 초기값 참
```

`Boolean` 원시 값의 자리에서 `Boolean` 객체를 이용해선 안됩니다.

## 생성자

- {{jsxref("Boolean.Boolean", "Boolean()")}}
  - : `Boolean` 객체를 생성합니다.

## 인스턴스 메서드

- {{jsxref("Boolean.prototype.toString()")}}
  - : 객체의 값에 따라 문자열 `"true"` 또는 `"false"`를 반환합니다. {{jsxref("Object.prototype.toString()")}} 메서드를 재정의합니다.
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : {{jsxref("Boolean")}} 객체의 원시값을 반환합니다. {{jsxref("Object.prototype.valueOf()")}} 메서드를 재정의합니다.

## 예제

### `false` 값으로 초기화한 `Boolean` 객체 만들기

```js
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean("");
var bfalse = new Boolean(false);
```

### `true` 값으로 초기화한 `Boolean` 객체 만들기

```js
var btrue = new Boolean(true);
var btrueString = new Boolean("true");
var bfalseString = new Boolean("false");
var bSuLin = new Boolean("Su Lin");
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{Glossary("Boolean")}}
- [불리언 자료형](https://ko.wikipedia.org/wiki/%EB%B6%88%EB%A6%AC%EC%96%B8_%EC%9E%90%EB%A3%8C%ED%98%95)
