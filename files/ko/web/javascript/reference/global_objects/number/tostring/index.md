---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
---

{{JSRef}}

**`toString()`** 메서드는 특정한 {{jsxref("Number")}} 객체를 나타내는 문자열을 반환합니다.

{{EmbedInteractiveExample("pages/js/number-tostring.html")}}

## 구문

```js
numObj.toString([radix]);
```

### 매개변수

- `radix` {{optional_inline}}
  - : 수의 값을 나타내기 위해 사용되기 위한 기준을 정하는 2와 36사이의 정수. (진수를 나타내는 기수의 값.)

### 반환 값

{{jsxref("Number")}} 객체를 명시하는 문자열.

### 예외

- {{jsxref("RangeError")}}
  - : 만약 `toString()` 에 `2` 와 `36` 의 사잇 값이 아닌 `radix` 가 주어지면, {{jsxref("RangeError")}} 에러가 발생합니다.

## 설명

{{jsxref("Number")}} 객체는 {{jsxref("Object")}} 객체의 `toString()`메소드를 오버라이딩하며, {{jsxref("Object.prototype.toString()")}} 를 상속받지 않습니다. {{jsxref( "Number")}} 객체에서 `toString()` 메소드는 특정 진수로 객체를 표현한 문자열을 환원합니다.

`toString()` 메소드는 메소드의 첫 번째 아규먼트를 파싱하여, 메소드는 특정 기수(radix)를 기준으로 한 진수 값의 문자열을 환원하기 위한 시도를 합니다. 진수를 나타내는 기수 값(radix) 이 10 이상의 값일 때는, 알파벳의 글자는 9보다 큰 수를 나타냅니다. 예를 들면, 16진수(base 16)는, 알파벳 f 까지 사용하여 표현됩니다.

만약에 `radix`값 이 지정되지 않으면, 임의로 10진수로 가정하게 됩니다.

또, `numObj`가 음수라면, - 부호는 유지됩니다. 이는 기수(radix) 값이 2일 경우에라도 적용됩니다. 리턴된 문자열은 - 부호가 앞에 있는 `numObj` 의 양의 2진수 표시이지, `numObj`의 두 개의 조합이 아니기 때문입니다.

`numObj` 가 정수가 아니면, 점(.) 부호는 소수 자리와 분리하기 위해 사용됩니다.

## 예제

### `toString` 사용

```js
var count = 10;

console.log(count.toString()); // displays '10'
console.log((17).toString()); // displays '17'
console.log((17.2).toString()); // displays '17.2'

var x = 6;

console.log(x.toString(2)); // displays '110'
console.log((254).toString(16)); // displays 'fe'

console.log((-10).toString(2)); // displays '-1010'
console.log((-0xff).toString(2)); // displays '-11111111'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
