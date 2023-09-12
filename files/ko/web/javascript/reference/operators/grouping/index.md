---
title: 그룹 연산자
slug: Web/JavaScript/Reference/Operators/Grouping
---

{{jsSidebar("Operators")}}

**그룹 연산자 `()`** 는 표현식 내에서 평가의 우선순위를 제어합니다.

{{EmbedInteractiveExample("pages/js/expressions-groupingoperator.html")}}

## 구문

```js
     ( )
```

## 설명

그룹 연산자는 표현식이나 중첩 표현식 주위를 감싸는 한 쌍의 괄호로 이루어진 연산자로, 감싸인 식이 더 높은 우선순위를 갖도록 일반적인 [연산자 우선순위](/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)를 재정의합니다. 이름 그대로, 그룹 연산자는 괄호 안의 내용을 묶습니다.

## 예제

다음 예제에서는 곱셈과 나눗셈 이후 덧셈과 뺄셈을 사용하는 일반적인 연산 순서를 그룹 연산자를 사용해 바꿉니다.

```js-nolint
var a = 1;
var b = 2;
var c = 3;

// 기본 우선순위
a + b * c; // 7
// 이것과 같음
a + (b * c); // 7

// 더하기를 곱하기보다 먼저 하도록
// 우선순위 변경
(a + b) * c; // 9

// 이것과 같음
a * c + b * c; // 9
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [연산자 우선순위](/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
