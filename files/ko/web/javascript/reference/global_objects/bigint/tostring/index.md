---
title: BigInt.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toString
l10n:
  sourceCommit: 3cfd663738e9963157d90f359789d675a6662ec2
---

{{JSRef}}

{{jsxref("BigInt")}} 값의 **`toString()`** 메서드는 지정된 {{jsxref("BigInt")}} 값을 나타내는 문자열을 반환합니다. 뒤에 오는 "n"은 문자열의 일부가 아닙니다.

{{InteractiveExample("JavaScript Demo: BigInt.toString()")}}

```js interactive-example
console.log(1024n.toString());
// Expected output: "1024"

console.log(1024n.toString(2));
// Expected output: "10000000000"

console.log(1024n.toString(16));
// Expected output: "400"
```

## 구문

```js-nolint
toString()
toString(radix)
```

### 매개변수

- `radix` {{optional_inline}}
  - : BigInt 값을 표현하기 위해 사용할 기저를 지정하기 위해 사용하는 2부터 36까지의 정수. 기본 값은 10.

### 반환 값

명시된 {{jsxref("BigInt")}} 값을 표현하는 문자열

### 예외

- {{jsxref("RangeError")}}
  - : `radix`가 2 미만이거나 36 초과라면 발생

## 설명

{{jsxref("BigInt")}} 객체는 {{jsxref("Object")}}의 `toString` 메서드를 재정의합니다. 즉 {{jsxref("Object.prototype.toString()")}}를 상속받지 않습니다.
{{jsxref("BigInt")}} 값의 경우 `toString()` 메서드는 값을 명시된 기저에 따라 표현하는 문자열을 반환합니다.

기저가 10을 초과할 경우 알파벳 문자는 9 이상의 숫자를 가리킵니다. 예를 들어 16진수에서는 `a`부터 `f`까지 사용됩니다.

명시된 BigInt 값이 음수일 경우 부호는 보존됩니다. 기저가 2일 경우에도 마찬가지 입니다. 반환되는 문자열은 앞에 `-`부호가 붙은 양의 2진 표현이며, BigInt 값의 2의 보수가 **아닙니다**.

`toString()` 메서드는 `this` 값이 `BigInt` 원시 값 또는 래퍼 객체여야 합니다. 이 메서드는 다른 `this` 값을 강제로 BigInt 값으로 변환하려 하지 않고 {{jsxref("TypeError")}}를 발생시킵니다.

`BigInt`는 [`[@@toPrimitive]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) 메서드를 가지고 있지 않기 때문에 [템플릿 리터럴](/ko/docs/Web/JavaScript/Reference/Template_literals)과 같이 `BigInt` 객체가 문자열이 기대되는 문맥에서 사용되었을 때 JavaScript는 `toString()`를 자동적으로 호출합니다. 그러나 BigInt 원시 값은 `toString()` 메서드를 참조하여 [문자열로 강제 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)하지 않고, 초기 `toString()` 구현과 동일한 알고리즘을 사용하여 직접 변환됩니다.

```js
BigInt.prototype.toString = () => "Overridden";
console.log(`${1n}`); // "1"
console.log(`${Object(1n)}`); // "Overridden"
```

## 예제

### toString() 사용하기

```js
17n.toString(); // "17"
66n.toString(2); // "1000010"
254n.toString(16); // "fe"
(-10n).toString(2); // "-1010"
(-0xffn).toString(2); // "-11111111"
```

### 음수 0 BigInt

정수에는 음수 0이 없으므로 음수 0의 `BigInt`는 없습니다. `0.0`은 JavaScript [`Number`](/ko/docs/Web/JavaScript/Guide/Data_structures#number_type) 유형에만 나타나는 IEEE 부동소수점 개념입니다.

```js
(-0n).toString(); // "0"
BigInt(-0).toString(); // "0"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("BigInt.prototype.toLocaleString()")}}
- {{jsxref("BigInt.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
