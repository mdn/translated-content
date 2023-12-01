---
title: "SyntaxError: missing } after property list"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
---

{{jsSidebar("Errors")}}

## 메시지

```
    SyntaxError: missing } after property list
```

## 에러 유형

{{jsxref("SyntaxError")}}

## 무엇이 잘못 된 걸까?

[객체를 초기화 하는 부분](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer) 어딘가에 구문에 실수가 있습니다. 실제로 빠진 중괄호 일 수도 있지만, 누락 된 쉼표 일 수도 있습니다. 또한 닫는 중괄호나 괄호가 올바른 순서인지 확인하세요. 코드를 들여쓰기하거나 서식을 지정하면 좀 더 보기 쉽습니다.

## 예시

### 쉼표를 까먹은 경우

종종 객체 초기화 과정에서 쉼표를 빠트리는 경우가 있습니다:

```js example-bad
var obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
```

올바른 예시는 다음과 같습니다:

```js example-good
var obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3,
};
```

## 더 보기

- [Object initializer](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)
