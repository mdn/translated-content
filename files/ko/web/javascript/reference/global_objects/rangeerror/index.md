---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
l10n:
  sourceCommit: d19dc31570f62196a5837be38bd0b11c45e67b05
---

{{JSRef}}

**`RangeError`** 객체는 어떤 값이 집합에 없거나 허용되는 범위가 아닐 때 오류를 나타냅니다.

## 설명

어떤 값을 그 값이 포함되는 범위를 허용하지 않는 함수에 인수로 전달하려 할 때 `RangeError`가 발생합니다.

이 문제는 다음과 같은 경우에 발생할 수 있습니다.

- 허용되는 문자열이 아닌 값을 {{jsxref("String.prototype.normalize()")}}에 전달하거나,
- {{jsxref("Array")}} 생성자를 통해 잘못된 길이의 배열을 만드려고 시도하거나,
- 숫자 메서드 {{jsxref("Number.prototype.toExponential()")}}, {{jsxref("Number.prototype.toFixed()")}} 혹은 {{jsxref("Number.prototype.toPrecision()")}}에 나쁜 값을 전달하는 경우.

`RangeError`는 {{Glossary("serializable object", "직렬화 가능한 객체")}}이기 때문에, {{domxref("structuredClone()")}}로 복제하거나 {{domxref("Worker/postMessage()", "postMessage()")}}를 사용하여 [Worker](/ko/docs/Web/API/Worker) 간에 복사할 수 있습니다.

`RangeError`는 {{jsxref("Error")}}의 하위 클래스입니다.

## 생성자

- {{jsxref("RangeError/RangeError", "RangeError()")}}
  - : 새로운 `RangeError` 객체를 만듭니다.

## 인스턴스 속성

인스턴스 속성은 부모인 {{jsxref("Error")}}로부터 상속받습니다.

아래 속성은 `RangeError.prototype`에 정의되어 있으며 모든 `RangeError` 인스턴스 객체와 공유합니다.

- {{jsxref("Object/constructor", "RangeError.prototype.constructor")}}
  - : 인스턴스 객체를 생성하는 생성자 함수입니다. `RangeError` 인스턴스에서 초기 값은
    {{jsxref("RangeError/RangeError", "RangeError")}} 생성자입니다.
- {{jsxref("Error/name", "RangeError.prototype.name")}}
  - : 오류의 유형에 대한 이름을 나타냅니다. `RangeError.prototype.name`의 초기 값은 `"RangeError"`입니다.

## 인스턴스 메서드

인스턴스 메서드는 부모인 {{jsxref("Error")}}로부터 상속받습니다.

## 예제

### RangeError 사용하기(숫자 값일 경우)

```js
function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("The argument must be between -500 and 500.");
  }
}
try {
  check(2000);
} catch (error) {
  if (error instanceof RangeError) {
    // 오류 처리
  }
}
```

### RangeError 사용하기 (숫자값이 아닐 경우)

```js
function check(value) {
  if (!["apple", "banana", "carrot"].includes(value)) {
    throw new RangeError(
      'The argument must be an "apple", "banana", or "carrot".',
    );
  }
}
try {
  check("cabbage");
} catch (error) {
  if (error instanceof RangeError) {
    // 오류 처리
  }
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error")}}
- {{jsxref("Array")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("String.prototype.normalize()")}}
