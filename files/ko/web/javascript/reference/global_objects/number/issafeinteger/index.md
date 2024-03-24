---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
---

{{JSRef}}

**`Number.isSafeInteger()`** 메서드는 전달된 값이 안전한 정숫값인지 확인합니다.

{{EmbedInteractiveExample("pages/js/number-issafeinteger.html")}}

안전한 정숫값이란 다음과 같습니다.

- IEEE-754 배정도수 형태로 정확히 표현될 수 있는 수이고
- IEEE-754 표현에 맞게 반올림하는 다른 정수의 결과가 아닌 IEEE-754 표현.

예를 들어, `2^53 - 1`은 안전한 정수입니다. 이 정수는 정확히 표현될 수 있으며, IEEE-754 반올림 모드에서 다른 정숫값이 이 값을 반올림하지 않습니다. 반면에, `2^53` 는 안전하지 않은 정수입니다. 이 정수는 정확히 IEEE-754로 표현될 수 있지만, 정수 `2^53 + 1`은 IEEE-754로 직접 표현될 수 없으며 가까운 수로 반올림하는 것과 0으로 반올림하는 것으로 `2^53`을 반올림합니다.

안전한 정숫값은 `-(2^53 - 1)` 부터 `2^53 - 1` 사이의 모든 정수값으로 구성됩니다.

## 구문

```js
Number.isSafeInteger(testValue);
```

### 매개변수

- `testValue`
  - : 안전한 정수인지 확인할 값.

### 반환 값

주어진 값이 안전한 정숫값인지 나타내는 {{jsxref("Boolean")}}.

## 예시

```js
Number.isSafeInteger(3); // true
Number.isSafeInteger(Math.pow(2, 53)); // false
Number.isSafeInteger(Math.pow(2, 53) - 1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Infinity); // false
Number.isSafeInteger("3"); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true
```

## 폴리필

```js
Number.isSafeInteger =
  Number.isSafeInteger ||
  function (value) {
    return (
      Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER
    );
  };
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 메서드가 속한 {{jsxref("Number")}} 객체.
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
