---
title: "SyntaxError: return not in function"
slug: Web/JavaScript/Reference/Errors/Bad_return
---

{{jsSidebar("Errors")}}

JavaScript 예외 "return (or yield) not in function"은
[`return`](/ko/docs/Web/JavaScript/Reference/Statements/return)
또는 [`yield`](/ko/docs/Web/JavaScript/Reference/Operators/yield)
이 [function](/ko/docs/Web/JavaScript/Guide/Functions) 외부에서 호출될 때 발생합니다.

## 메시지

```js
SyntaxError: 'return' statement outside of function (Edge)
  SyntaxError: return not in function (Firefox)
  SyntaxError: yield not in function (Firefox)
```

## 에러 타입

{{jsxref("SyntaxError")}}.

## 무엇이 잘못된 걸까요?

[`return`](/ko/docs/Web/JavaScript/Reference/Statements/return)
또는 [`yield`](/ko/docs/Web/JavaScript/Reference/Operators/yield)
문장이 [function](/ko/docs/Web/JavaScript/Guide/Functions) 밖에서 호출되었기 때문입니다.
혹시 어딘가에 중괄호를 빠트리신 건 아닌가요? `return`과 `yield`는 function 내에 있어야합니다.
왜냐하면 이것들은 function의 실행 종료 (또는 일시정지 및 재개)를 의미하고 function 호출자에게 특정 값을 반환하기 위해 사용되기 때문입니다.

## 예제

### 중괄호 누락

```js example-bad
var cheer = function(score) {
  if (score === 147)
    return 'Maximum!';
  };
  if (score > 100) {
    return 'Century!';
  }
}

// SyntaxError: return not in function
```

처음 볼 때는 중괄호가 제대로 있는 것처럼 보인다, 하지만 이 코드 조각에는 if 문장 다음에 중괄호가 하나 빠져 있다. 다음처럼 고쳐야 한다:

```js example-good
var cheer = function (score) {
  if (score === 147) {
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
};
```

## 같이 보기

- [`return`](/ko/docs/Web/JavaScript/Reference/Statements/return)
- [`yield`](/ko/docs/Web/JavaScript/Reference/Operators/yield)
