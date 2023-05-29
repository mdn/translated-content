---
title: 동등 연산자(==)
slug: Web/JavaScript/Reference/Operators/Equality
---
{{jsSidebar("Operators")}}

동등 연산자(==)는 두 개의 피연산자가 동일한지 확인하며, Boolean값을 반환합니다. [일치 연산자](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)(===)와는 다르게 다른 타입의 피연산자들끼리의 비교를 시도합니다.

{{EmbedInteractiveExample("pages/js/expressions-equality.html")}}

## 문법

```js
    x == y
```

## 상세 설명

동등 연산자 (`==` 와 `!=`)는 두 피연산자를 비교하기 위해 [Abstract Equality Comparison Algorithm](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3)를 사용합니다. 다음과 같이 간략히 설명할 수 있습니다:

- 두 피연산자가 모두 객체일때, 두 피연산자가 동일한 객체를 참조할때에만 true를 반환합니다.
- 하나의 피연산자가 `null`이고 다른 하나가 `undefined`일때, `true`를 반환합니다.
- 두 피연산자의 타입이 다를 경우, 비교하기 전에 동일한 타입으로 변환하도록 합니다:

  - 숫자와 문자열을 비교할 경우, 문자열을 숫자로 변환하도록 합니다.
  - 하나의 피연산자가 `Boolean`일 경우, Boolean 피연산자가 true일 경우 1로 변환하고, false일 경우, +0으로 변환합니다.
  - 하나의 피연산자가 객체이고 다른하나가 숫자나 문자열이면, 객체를 `valueOf()`나`toString()`를 사용해 기본 데이터 타입으로 변환하도록 합니다.

- 두개의 피연산자가 동일한 타입일 경우, 다음과 같이 비교됩니다:

  - `String`: 두 피연산자가 동일한 문자순서가 동일한 문자열일 경우, `true`를 반환합니다.
  - `Number`: 두 피연산자가 동일한 값을 가질 경우, `true`을 반환합니다. +0 과 -0 은 동일한 값으로 취급합니다. 어느 한쪽이 `NaN`일 경우, `false`를 반환합니다.
  - `Boolean`: 두 피연산자가 모두 `true`이거나, 모두 `false`일 경우, `true`를 반환합니다.

[일치연산자](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`)와의 가장 두드러지는 차이점은 일치 연산자는 타입변환을 시도하지 않는다는 것입니다. 일치 연산자는 다른 타입을 가진 피연산자는 다르다고 판단합니다.

## 예시

### 타입변환 없이 비교

```js
1 == 1;              // true
"hello" == "hello";  // true
```

### 타입변환을 이용한 비교

```js
"1" ==  1;            // true
1 == "1";             // true
0 == false;           // true
0 == null;            // false
0 == undefined;       // false
0 == !!null;          // true, look at Logical NOT operator
0 == !!undefined;     // true, look at Logical NOT operator
null == undefined;    // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3;         // true
number1 == number2;   // false
```

### 객체들 간의 비교

```js
const object1 = {"key": "value"}
const object2 = {"key": "value"};

object1 == object2 // false
object2 == object2 // true
```

### String과 String objects의 비교

`new String()` 을 통해 생성된 문자열들은 객체입니다. 이 객체중 하나를 문자열과 비교한다면, `String` 객체가 문자열로 변환된 후 비교될 것입니다. 그러나 두개의 피연산자 모두 `String` 객체라면, 객체로써 비교가 이루어지기 때문에 같은 값으로 취급될려면 같은 객체를 참조하고 있어야 합니다:

```js
const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true
```

### Comparing Dates and strings

```js
const d = new Date('December 17, 1995 03:24:00');
const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s);    //true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Inequality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strict equality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Strict inequality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
