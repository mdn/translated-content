---
title: "ReferenceError: invalid assignment left-hand side"
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
---

{{jsSidebar("Errors")}}

## 메시지

```
    ReferenceError: invalid assignment left-hand side
```

## 에러 타입

{{jsxref("ReferenceError")}}.

## 무엇이 잘못되었을까?

예상치 못한 할당이 일어났습니다. 이것은 할당 연산자([assignment operator](/ko/docs/Web/JavaScript/Reference/Operators/Assignment_Operators))와 비교 연산자([comparison operator](/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)) 간의 불일치로 인한 것일 겁니다. 예를 들면, "`=`" 부호는 값을 변수에 할당합니다. "`==`" 나 "`===`"는 값을 비교하는 연산을 합니다.

## 예

```js example-bad
if (Math.PI = 3 || Math.PI = 4) {
  console.log('no way!');
}
// ReferenceError: invalid assignment left-hand side

var str = 'Hello, '
+= 'is it me '
+= 'you\'re looking for?';
// ReferenceError: invalid assignment left-hand side
```

`if` 구문에서, 비교 연산자 ("==")로 비교하려 할 때, 문자열의 연속적인 결합의 경우에는, 플러스("+") 연산자가 필요합니다.

```js example-good
if (Math.PI == 3 || Math.PI == 4) {
  console.log("no way!");
}

var str = "Hello, " + "from the " + "other side!";
```

## 참조

- [Assignment operators](/ko/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)
- [Comparison operators](/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
