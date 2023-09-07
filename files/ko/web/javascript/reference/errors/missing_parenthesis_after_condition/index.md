---
title: "SyntaxError: missing ) after condition"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
---

{{jsSidebar("Errors")}}

## 메시지

```
    SyntaxError: missing ) after condition
```

## 에러 유형

{{jsxref("SyntaxError")}}

## 무엇이 잘못 된 걸까?

[`if`](/ko/docs/Web/JavaScript/Reference/Statements/if...else)조건문에 에러가 있습니다. 어떠한 프로그래밍 언어에서든 코드는 입력값에 따라 의사를 결정하고 행동을 수행해야합니다. 지정된 조건이 true이면 if 문이 명령문을 실행합니다. 자바스크립트에서는 이 조건이 [`if`](/ko/docs/Web/JavaScript/Reference/Statements/if...else)문 다음의 괄호에 있어야 합니다. 다음은 그 예시입니다.

```js
if (condition) {
  // do something if the condition is true
}
```

## 예시

실수가 있을 수 있으니, 모든 괄호를 주의깊게 확인하세요.

```js example-bad
if (3 > Math.PI {
  console.log("wait what?");
}

// SyntaxError: missing ) after condition
```

이 코드를 고치기 위해선, 조건문을 괄호로 닫아야 합니다.

```js example-good
if (3 > Math.PI) {
  console.log("wait what?");
}
```

다른 프로그래밍 언어를 배운 경우, 자바스크립트에서는 다르게 쓰이거나, 쓰이지 않는 키워드를 사용하기 쉽습니다.

```js example-bad
if (done is true) {
 console.log("we are done!");
}

// SyntaxError: missing ) after condition
```

이 경우 올바른 [비교연산자](/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)를 사용해야 합니다. 그 예시로:

```js example-good
if (done === true) {
  console.log("we are done!");
}
```

## 더 보기

- [`if...else`](/ko/docs/Web/JavaScript/Reference/Statements/if...else)
- [Comparison operators](/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
- [Making decisions in your code — conditionals](/ko/docs/Learn/JavaScript/Building_blocks/conditionals)
