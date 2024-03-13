---
title: 부등 연산자(!=)
slug: Web/JavaScript/Reference/Operators/Inequality
---

{{jsSidebar("Operators")}}

부등 연산자(!=)는 두 피연산자가 같지 않은지 확인하여 불리언 결과를 반환합니다. 엄격한 부등 연산자와는 달리 다른 유형의 피연산자를 암묵적으로 변환하고 비교합니다.

{{EmbedInteractiveExample("pages/js/expressions-inequality.html")}}

## 구문

```js
x != y;
```

## 설명

부등식 연산자는 피연산자가 같지 않은지 여부를 확인합니다. [동등 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Equality)의 부정이므로 다음 두 줄은 항상 같은 결과를 제공합니다.

```js
x != y;

!(x == y);
```

비교 알고리즘에 대한 자세한 내용은 [동등 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Equality) 페이지를 참조하십시오.

동등 연산자와 마찬가지로 부등 연산자도 다른 유형의 피연산자를 변환하여 비교합니다.

```js
3 != "3"; // false
```

이를 방지하고 다른 유형이 다른 것으로 간주되게 하려면 [엄격한 불일치 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Strict_inequality)를 사용해야 합니다.

```js
3 !== "3"; // true
```

## 예제

### 타입 변환이 없는 비교

```js
1 != 2; // true
"hello" != "hola"; // true

1 != 1; // false
"hello" != "hello"; // false
```

### 타입 변환이 있는 비교

```js
"1" != 1; // false
1 != "1"; // false
0 != false; // false
0 != null; // true
0 != undefined; // true
0 != !!null; // false, look at Logical NOT operator
0 != !!undefined; // false, look at Logical NOT operator
null != undefined; // false

const number1 = new Number(3);
const number2 = new Number(3);
number1 != 3; // false
number1 != number2; // true
```

### 객체의 비교

```js
const object1 = { key: "value" };
const object2 = { key: "value" };

object1 != object2; // true
object2 != object2; // false
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련 문서

- [Equality
  operator](/ko/docs/Web/JavaScript/Reference/Operators/Equality)
- [Strict
  equality operator](/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Strict
  inequality operator](/ko/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
