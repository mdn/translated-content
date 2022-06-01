---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
tags:
  - JavaScript
  - Method
  - Reference
  - parseInt
browser-compat: javascript.builtins.parseInt
translation_of: Web/JavaScript/Reference/Global_Objects/parseInt
---
{{jsSidebar("Objects")}}

**`parseInt()`** 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.

{{EmbedInteractiveExample("pages/js/globalprops-parseint.html")}}

## 구문

```js
parseInt(string)
parseInt(string, radix)
```

### 매개변수

- `string`
  - : 파싱할 값입니다. 문자열이 아닐 경우 [`ToString`](https://tc39.es/ecma262/#sec-tostring) 추상 연산을 사용해 문자열로 변환합니다. 문자열의 선행 공백은 무시합니다.
- `radix` {{optional_inline}}
  - : `string`의 진수를 나타내는 `2`부터 `36`까지의 정수입니다. 주의하세요. 기본 값이 `10`이 **아닙니다!** `Number` 자료형이 아닌 경우 `Number`로 변환합니다.

    > **경고:** `radix`를 생략할 경우 발생하는 일에 대해서는 [아래 설명](#설명)에서 자세히 알아볼 수 있습니다.

### 반환 값

주어진 `string`에서 파싱한 정수입니다.

다음과 같은 경우에는 {{jsxref("NaN")}}을 반환합니다.

- `radix`가 2보다 작거나 36보다 큰 경우.
- 공백이 아닌 첫 문자를 숫자로 변환할 수 없는 경우.

## 설명

`parseInt` 함수는 첫 번째 인자를 문자열로 변환하고, 그 값을 파싱하여 정수나 `NaN`을 반환합니다.

`NaN`을 반환할 것이 아니면, `parseInt`는 첫 번째 인자를 지정한 `radix` 진수로 표현한 정수를 반환합니다. 예를 들어 `radix`가 `10`인 경우 10진수, `8`인 경우는 8진수, `16`인 경우 16진수 등등으로 변환합니다.

`radix`가 `10`을 초과하는 경우, 영문 알파벳이 `9`보다 큰 숫자를 나타냅니다. 즉, 16진수에서는 `A`부터 `F`까지를 사용합니다.

만약 `parseInt` 함수가 지정한 `radix`에서의 숫자가 아닌 문자를 마주치는 경우 해당 문자 이전까지의 문자만 사용해 파싱하며 문제의 문자와 그 이후는 모두 무시합니다. `parseInt`는 정수 값을 반환하기 위해 소수점 이하 값을 잘라냅니다. 선행 및 후행 공백은 허용됩니다.

일부 숫자는 `6.022e23`(6.022 × 10^23)처럼 문자열 표현에 `e` 문자를 사용하기 때문에, `parseInt`를 매우 크거나매우 작은 숫자의 소수점 이하 값을 자르기 위해 사용하면 예기치 못한 결과가 발생할 수 있습니다. `parseInt`를 {{jsxref("Math.floor()")}}의 대체품으로 사용해서는 안됩니다.

`parseInt`는 양의 부호 `+`와 음의 부호 `-`를 인식합니다. 부호 인식은 선후행 공백을 제거한 후 첫 번째 단계로서 수행되며, 부호를 찾을 수 없으면 알고리즘은 다음 단계로 넘어갑니다. 부호를 찾은 경우 부호를 제거하고, 나머지 문자열에 대해 숫자 파싱을 진행합니다.

진수 인자로 지정한 값은 (필요한 경우) 숫자로 변환됩니다. 변환 후의 값이 0, `NaN`, `Infinity` 중 하나(`undefined`는 `NaN`으로 변환)라면 JavaScript는 다음을 가정합니다.

1. 입력 값이 "`0x`" 또는 "`0X`"(0과 대/소문자 X)로 시작하는 경우 `radix`를 `16`으로 간주하여 나머지 문자열을 16진수로 파싱합니다.
2. 입력 값이 그 외의 다른 값으로 시작하면 `radix`는 `10`(10진수)입니다.

이외에 진수 값이 \[2, 36]의 범위를 벗어나는 경우 `parseInt`가 `NaN`을 반환합니다.

`NaN` 값은 모든 진수에서 숫자가 아닙니다. `parseInt`의 결과가 `NaN`인지 확인하려면 {{jsxref("isNaN")}}을 사용하세요. `NaN`을 산술 연산에 사용하면 연산 결과 역시 `NaN`이 됩니다.

숫자를 특정 진수의 문자열 리터럴로 변환하려면 `number.toString(radix)`를 사용하세요.

> **경고:** `parseInt`는 {{jsxref("BigInt")}} 구문을 {{jsxref("Number")}}로 반환하므로 정확도를 잃습니다. 마지막 `n` 문자를 무시하기 때문입니다.

### 진수 없는 8진수 해석

2021년을 기준으로, 다음 내용은 최근 구현체에 해당하지 않습니다. 주의하세요.

ECMAScript 3부터 이미 권장되지 않았음에도 불구하고, 많은 ECMAScript 3 구현체는 `0`으로 시작하는 숫자형 문자열을 8진수로 해석했습니다. 다음 코드는 8진수 결과를 낼 수도 있고, 10진수 결과를 낼 수도 있었습니다.

```js
parseInt('0e0')  // 0
parseInt('08')   // 0, '8'은 8진수 숫자가 아니기 때문
```

ECMAScript 5 명세는 `parseInt` 구현이 `0`으로 시작하는 문자열을 8진수로 해석하는 것을 금지했습니다. 2021년 시점에선 많은 구현체가 이 동작을 적용했습니다.

```js
parseInt('0e0')  // 0
parseInt('08')   // 8
```

## 더 엄격한 파싱 함수

간혹 정수를 파싱할 수 있는 더 엄격항 방법이 필요할 때가 있습니다. 정규표현식이 도움이 될 수 있습니다.

```js
function filterInt(value) {
  if (/^[-+]?(\d+|Infinity)$/.test(value)) {
    return Number(value)
  } else {
    return NaN
  }
}

console.log(filterInt('421'))                // 421
console.log(filterInt('-421'))               // -421
console.log(filterInt('+421'))               // 421
console.log(filterInt('Infinity'))           // Infinity
console.log(filterInt('421e+0'))             // NaN
console.log(filterInt('421hop'))             // NaN
console.log(filterInt('hop1.61803398875'))   // NaN
console.log(filterInt('1.61803398875'))      // NaN
```

## 예제

### parseInt 사용하기

다음은 모두 `15`를 반환합니다.

```js
parseInt('0xF', 16)
parseInt('F', 16)
parseInt('17', 8)
parseInt(021, 8)
parseInt('015', 10)    // parseInt('015', 8)이었다면 13을 반환
parseInt(15.99, 10)
parseInt('15,123', 10)
parseInt('FXX123', 16)
parseInt('1111', 2)
parseInt('15 * 3', 10)
parseInt('15e2', 10)
parseInt('15px', 10)
parseInt('12', 13)
```

다음은 모두 `NaN`을 반환합니다.

```js
parseInt('Hello', 8); // 숫자가 전혀 아님
parseInt('546', 2);   // 0과 1을 제외한 숫자는 2진법에서 유효하지 않음
```

다음은 모두 `-15`를 반환합니다.

```js
parseInt('-F', 16)
parseInt('-0F', 16)
parseInt('-0XF', 16)
parseInt(-15.1, 10)
parseInt('-17', 8)
parseInt('-15', 10)
parseInt('-1111', 2)
parseInt('-15e1', 10)
parseInt('-12', 13)
```

다음은 모두 `4`를 반환합니다.

```js
parseInt(4.7, 10)
parseInt(4.7 * 1e22, 10)        // 매우 큰 숫자가 4가 됨
parseInt(0.00000000000434, 10)  // 매우 작은 숫자가 4가 됨
```

숫자가 1e+21을 초과하거나 1e-7 미만인 경우 10진수에서 `1`을 반환합니다.

```js
parseInt(0.0000001,10);
parseInt(0.000000123,10);
parseInt(1e-7,10);
parseInt(1000000000000000000000,10);
parseInt(123000000000000000000000,10);
parseInt(1e+21,10);
```

다음은 `224`를 반환합니다.

```js
parseInt('0e0', 16)
```

{{jsxref("BigInt")}} 값은 정확도를 잃습니다.

```js
parseInt('900719925474099267n')
// 900719925474099300
```

`parseInt`는 [숫자 구분 기호](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators)와 함께 사용할 수 없습니다.

```js
parseInt('123_456')
// 123
```

진수는 `Number`로 변환합니다.

```js
const obj = {
  valueOf() {return 8}
};
parseInt('11', obj); // 9

obj.valueOf = function() {return 1};
parseInt('11', obj); // NaN

obj.valueOf = function() {return Infinity};
parseInt('11', obj); // 11
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
- {{jsxref("Number.toString()")}}
- {{jsxref("Object.valueOf")}}
