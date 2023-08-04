---
title: IIFE
slug: Glossary/IIFE
---

**즉시 실행 함수 표현**(**IIFE, Immediately Invoked Function Expression**)은 정의되자마자 즉시 실행되는 {{glossary("Javascript")}} {{glossary("Function")}} 를 말한다.

```js
(function () {
  statements;
})();
```

이는 {{glossary("Self-Executing Anonymous Function")}} 으로 알려진 디자인 패턴이고 크게 두 부분으로 구성된다. 첫 번째는 괄호(`()`, Grouping Operator)로 둘러싸인 익명함수(Anonymous Function)이다. 이는 전역 스코프에 불필요한 변수를 추가해서 오염시키는 것을 방지할 수 있을 뿐 아니라 IIFE 내부안으로 다른 변수들이 접근하는 것을 막을 수 있는 방법이다.

두 번째 부분은 즉시 실행 함수를 생성하는 괄호`()`이다. 이를 통해 자바스크립트 엔진은 함수를 즉시 해석해서 실행한다.

## 예제

아래 함수는 즉시 실행되는 함수 표현이다. 표현 내부의 변수는 외부로부터의 접근이 불가능하다.

```js
(function () {
  var aName = "Barry";
})();
// IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가능하다.
aName; // throws "Uncaught ReferenceError: aName is not defined"
```

IIFE를 변수에 할당하면 IIFE 자체는 저장되지 않고, 함수가 실행된 결과만 저장된다.

```js
var result = (function () {
  var name = "Barry";
  return name;
})();
// 즉시 결과를 생성한다.
result; // "Barry"
```

## 같이 보기

- [Quick example](/ko/docs/Web/JavaScript/A_re-introduction_to_JavaScript#functions) (at the end of the "Functions" section, right before "Custom objects")
- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Wikipedia)
- [Glossary](/ko/docs/Glossary)

  - {{Glossary("Function")}}
  - {{Glossary("Self-Executing Anonymous Function")}}
