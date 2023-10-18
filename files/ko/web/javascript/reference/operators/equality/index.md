---
title: 동등 연산자(==)
slug: Web/JavaScript/Reference/Operators/Equality
l10n:
  sourceCommit: 3e2369d97e2d6fbfe33a3c496a8edd90e0b539e2
---

{{jsSidebar("Operators")}}

동등 연산자(==)는 두 개의 피연산자가 동일한지 확인하며, 불리언 결과를 반환합니다. [일치 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality)와는 다르게 다른 타입의 피연산자들끼리의 비교를 시도합니다.

{{EmbedInteractiveExample("pages/js/expressions-equality.html")}}

## 문법

```js-nolint
x == y
```

## 상세 설명

동등 연산자 (`==` 와 `!=`)는 두 피연산자를 비교하기 위해 [느슨한 같음](/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness#loose_equality_using)을 사용합니다. 다음과 같이 간략히 설명할 수 있습니다.

1. 두 피연산자가 동일한 타입일 때는 다음과 같이 비교합니다.
   - 객체: 두 피연산자가 동일한 객체를 참조할 때만 `true`를 반환합니다.
   - 문자열: 두 피연산자가 동일한 문자를 동일한 순서로 가질 때만 `true`를 반환합니다.
   - 숫자: 두 피연산자가 동일한 값을 가질 때만 `true`를 반환합니다. `+0`과 `-0`은 동일한 값으로 취급합니다. 만약 두 피연산자가 모두 `NaN`이라면 `false`를 반환합니다. `NaN`은 항상 `NaN`과 다릅니다.
   - 불리언: 두 피연산자가 모두 `true`이거나 모두 `false`일 때만 `true`를 반환합니다.
   - BigInt: 두 피연산자가 동일한 값을 가질 때만 `true`를 반환합니다.
   - 심볼: 두 피연산자가 동일한 심볼을 참조할 때만 `true`를 반환합니다.
2. 하나의 피연산자가 `null`이거나 `undefined`인 경우, `true`를 반환하기 위해선 다른 하나가 무조건 `null`이거나 `undefined`여야 합니다. 그렇지 않으면 `false`를 반환합니다.
3. 하나의 피연산자가 객체이고 다른 하나가 원시 타입인 경우, [객체를 원시 타입으로 변환합니다.](/ko/docs/Web/JavaScript/Data_structures#primitive_coercion)
4. 이 경우, 두 피연산자를 모두 원시 타입(문자열, 숫자, 불리언, 심볼, BigInt 중 하나)으로 변환합니다. 나머지 변환은 다음 순서를 따릅니다.
   - 두 피연산자의 타입이 같다면, 1단계를 이용해 비교합니다.
   - 하나의 피연산자가 심볼이고 다른 하나가 심볼이 아닌 경우, `false`를 반환합니다.
   - 하나의 피연산자가 불리언이고 다른 하나가 불리언이 아닌 경우, [불리언을 숫자로 변환합니다.](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `true`는 1로 변환하고 `false`는 0으로 변환합니다. 그 후 두 피연산자를 다시 느슨하게 비교합니다.
   - 숫자와 문자열: [문자열을 숫자로 변환합니다.](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) 변환 실패의 결괏값은 `NaN`이므로, 비교 결과가 `false`라는 것을 보장합니다.
   - 숫자와 BigInt: 숫자 값으로 비교합니다. 숫자가 ±Infinity 혹은 `NaN`이면 `false`를 반환합니다.
   - 문자열과 BigInt: 문자열을 [BigInt()](/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 생성자와 같은 알고리즘으로 BigInt로 변환합니다. 만약 변환이 실패하면 `false`를 반환합니다.

동등 연산자는 대칭적입니다. A와 B가 어떤 값을 가져도 `A == B`는 `B == A`와 항상 동일한 의미입니다(타입 변환의 적용 순서를 제외하고).

[일치 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`)와의 가장 두드러지는 차이점은 일치 연산자는 타입 변환을 시도하지 않는다는 것입니다. 일치 연산자는 다른 타입을 가진 피연산자는 다르다고 판단합니다. 일치 연산자는 기본적으로 1단계만 수행하고 다른 모든 경우에 `false`를 반환합니다.

위 알고리즘에는 "고의적 위반"이 있습니다. 한 피연산자가 [`document.all`](/ko/docs/Web/API/Document/all)인 경우, `undefined`처럼 처리됩니다. 이는 `document.all == null`은 `true`지만, `document.all === undefined && document.all === null`이 `false`라는 것을 의미합니다.

## 예시

### 타입변환 없이 비교

```js
1 == 1; // true
"hello" == "hello"; // true
```

### 타입변환을 이용한 비교

```js
"1" == 1; // true
1 == "1"; // true
0 == false; // true
0 == null; // false
0 == undefined; // false
0 == !!null; // true, look at Logical NOT operator
0 == !!undefined; // true, look at Logical NOT operator
null == undefined; // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3; // true
number1 == number2; // false
```

### 객체들 간의 비교

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 == object2); // false
console.log(object1 == object1); // true
```

### String과 String objects의 비교

`new String()` 을 통해 생성된 문자열들은 객체입니다. 이 객체 중 하나를 문자열과 비교한다면, `String` 객체가 문자열로 변환된 후 비교될 것입니다. 그러나 두 개의 피연산자 모두 `String` 객체라면, 객체로써 비교가 이루어지기 때문에 같은 값으로 취급되려면 같은 객체를 참조하고 있어야 합니다.

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

### Dates와 문자열의 비교

```js
const d = new Date("December 17, 1995 03:24:00");
const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s); //true
```

### 배열과 문자열의 비교

```js
const a = [1, 2, 3];
const b = "1,2,3";
a == b; // true, `a` converts to string

const c = [true, 0.5, "hey"];
const d = c.toString(); // "true,0.5,hey"
c == d; // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Inequality operator](/ko/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strict equality operator](/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Strict inequality operator](/ko/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
