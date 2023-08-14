---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
---

{{jsSidebar("Statements")}}

**`do...while` 문은** 테스트 조건이 거짓으로 평가될 때까지 지정된 구문을 실행하는 루프를 만듭니다.
단, 구문이 실행된 뒤에 테스트 조건이 평가됨으로 구문은 무조건 한 번은 실행됩니다.

{{EmbedInteractiveExample("pages/js/statement-dowhile.html")}}

## 문법

```js
do {
  statement;
} while (condition);
```

- `구문`

  - : 테스트 조건이 참일 때마다 한 번이상 실행되는 구문입니다. 만약 루프 내에서 여러 구문을 반복 실행 시키고 싶으시다면, 다음 명령을 사용합니다. {{jsxref("Statements/block", "block", "", 1)}} 구문을 활용하여 (`{ ... }`) 이런 식으로 그룹화합니다.

- `조건식`
  - : 루프가 실행될 때마다 평가되는 식입니다. 만약 조건식이 참으로 평가되었다면, `구문` 이 다시 실행됩니다. 만약 조건식이 거짓으로 평가되었다면, 자바스크립트는 `do...while`. 구문 밑에 있는 구문들을 실행시킵니다.

## 예제

### `do...while`

예제에서 `do...while` 문은 적어도 한번 반복되고 i 변수가 5 보다 작을 때까지 실행됩니다.

```js
var result = "";
var i = 0;
do {
  i += 1;
  result += i + " ";
} while (i > 0 && i < 5);
// Despite i == 0 this will still loop as it starts off without the test

console.log(result);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/for", "for")}}
