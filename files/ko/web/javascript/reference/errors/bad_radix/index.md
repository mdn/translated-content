---
title: "RangeError: radix must be an integer"
slug: Web/JavaScript/Reference/Errors/Bad_radix
---

{{jsSidebar("Errors")}}

JavaScript 예외 "radix must be an integer at least 2 and no greater than 36"는
{{jsxref("Number.prototype.toString()")}} 또는 {{jsxref("BigInt.prototype.toString()")}}
메서드의 선택적 매개 변수가 지정된 경우 2에서 36 사이여야 합니다.

## 메시지

```js
  RangeError: invalid argument (Edge)
  RangeError: radix must be an integer at least 2 and no greater than 36 (Firefox)
  RangeError: toString() radix argument must be between 2 and 36 (Chrome)

```

## 에러 형식

{{jsxref("RangeError")}}

## 무엇이 잘못되었을까?

{{jsxref("Number.prototype.toString()")}} 또는
{{jsxref("BigInt.prototype.toString()")}}
메서드는 선택적 파라미터인 `radix`(기수: 진수를 지정하는 값)와 함게 사용되어 왔습니다.
이 파라미터는 반드시 수의 값을 나타내는 진법 2와 36 사이로 지정된 정수(숫자)여야 합니다.

이 매개 변수의 값이 36으로 제한된 이유는 무엇일까요?
10보다 큰 기수는 알파벳 문자를 숫자로 사용하기 때문입니다.
따라서 기수는 36을 초과할 수 없습니다. 라틴 알파벳(영어와 다른 많은 언어에서 사용됨)은 26자뿐이기 때문입니다.

보통 아래의 `radix` 중 하나를 사용하게 될 것입니다.

- 2 for [binary numbers](https://en.wikipedia.org/wiki/Binary_number) (2진수),
- 8 for [octal numbers](https://en.wikipedia.org/wiki/Octal) (8진수),
- 10 for [decimal numbers](https://en.wikipedia.org/wiki/Decimal) (10진수),
- 16 for [hexadecimal numbers](https://en.wikipedia.org/wiki/Hexadecimal) (16진수).

## 예제

### 허용되지 않는 경우

```js example-bad
(42).toString(0);
(42).toString(1);
(42).toString(37);
(42).toString(150);
//포맷팅하기 위해 string을 이런 식으로 사용할 수는 없습니다. :
(12071989).toString("MM-dd-yyyy");
```

### 허용된 경우

```js example-good
(42).toString(2); // "101010" (2진수)
(13).toString(8); // "15"     (8진수)
(0x42).toString(10); // "66"     (10진수)
(100000).toString(16); // "186a0"  (16진수)
```

## 또 다른 내용

- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("BigInt.prototype.toString()")}}
