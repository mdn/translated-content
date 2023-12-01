---
title: "InternalError: too much recursion"
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
---

{{jsSidebar("Errors")}}

## 메시지

```
    InternalError: too much recursion
```

## 에러 형식

[`InternalError`](/ko/docs/Web/JavaScript/Reference/Global_Objects/InternalError).

## 무엇이 잘못되었을까?

자신을 호출하는 함수를 재귀 함수라고 합니다. 어떤 면에서, 재귀는 반복과 유사합니다. 둘 다 같은 코드를 여러 번 실행하며, 조건(무한 반복 피하기, 더 정확히 여기서 말하는 무한 재귀)이 있습니다. 너무 많거나 무한 번의 재귀가 발생할 경우, JavaScript는 이 에러를 던질 것입니다.

## 예

이 재귀 함수는 exit 조건에 따라 10번을 실행합니다.

```js
function loop(x) {
  if (x >= 10) {
    // "x >= 10" is the exit condition
    return;
  }
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```

이 조건에 대하여 너무 높은 값을 설정 하면 작동하지 않게 됩니다.

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;
  // do stuff
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion
```

## 참조

- {{Glossary("Recursion")}}
- [Recursive functions](/ko/docs/Web/JavaScript/Guide/Functions#Recursion)
