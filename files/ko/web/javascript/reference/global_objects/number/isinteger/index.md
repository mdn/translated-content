---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
---

{{JSRef}}

**`Number.isInteger()`** 메서드는 주어진 값이 정수인지 판별합니다.

{{EmbedInteractiveExample("pages/js/number-isinteger.html")}}

## 구문

```js
Number.isInteger(value);
```

### 매개변수

- `value`
  - : 정수인지 확인하려는 값.

### 반환 값

주어진 값의 정수 여부를 나타내는 {{jsxref("Boolean")}}.

## 설명

매개변수의 값이 정수면 `true`를, 아니면 `false`를 반환합니다. 값이 {{jsxref("NaN")}}이거나 {{jsxref("Infinity")}}여도 `false`를 반환합니다.

## 예제

```js
Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger("10"); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false
```

## 폴리필

```js
Number.isInteger =
  Number.isInteger ||
  function (value) {
    return (
      typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  };
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 메서드가 속한 {{jsxref("Number")}} 객체.
