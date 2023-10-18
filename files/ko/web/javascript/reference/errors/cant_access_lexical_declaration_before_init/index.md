---
title: "ReferenceError: can't access lexical declaration`X' before initialization"
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
---

{{jsSidebar("Errors")}}

## Message

```
  ReferenceError: can't access lexical declaration `X' before initialization (Firefox)
  ReferenceError: 'x' is not defined (Chrome)
```

## Error type

{{jsxref("ReferenceError")}}

## 무엇이 잘못 되었을까요?

변수가 초기화 되기 전에 엑세스가 되어버립니다. 이 문제는 let 또는 const 선언이 정의 되기 전에 엑세스되는 모든 block 문에서 발생합니다.

## Examples

### 잘못된 경우

이 경우에 변수 "foo"는 `let` 을 사용하여 block 문에서 다시 선언됩니다.

```js example-bad
function test() {
  let foo = 33;
  if (true) {
    let foo = foo + 55;
    // ReferenceError: can't access lexical
    // declaration `foo' before initialization
  }
}
test();
```

### 올바른 경우

if 문에서 "foo"를 변경하려면 재 선언을 발생시키는 `let` 을 제거해야합니다.

```js example-good
function test() {
  let foo = 33;
  if (true) {
    foo = foo + 55;
  }
}
test();
```

## 그밖에 볼 것

- [Temporal Dead Zone and errors with let](/ko/docs/Web/JavaScript/Reference/Statements/let#Temporal_Dead_Zone_and_errors_with_let)
