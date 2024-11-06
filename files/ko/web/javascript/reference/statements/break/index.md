---
title: break
slug: Web/JavaScript/Reference/Statements/break
---

{{jsSidebar("Statements")}}

**`break` 문**은 현재 반복문, {{jsxref("Statements/switch", "switch")}} 문, 또는 {{jsxref("Statements/label", "label")}} 문을 종료하고, 그 다음 문으로 프로그램 제어를 넘깁니다.

{{EmbedInteractiveExample("pages/js/statement-break.html")}}

## 구문

```js
    break [label];
```

- `label` {{optional_inline}}
  - : 문의 라벨에 연결한 {{glossary("identifier", "식별자")}}. 반복문이나 {{jsxref("Statements/switch", "switch")}}에서 사용하는게 아니면 필수로 제공해야 합니다.

## 설명

`break` 문은 프로그램이 label 달린 문에서 빠져나오게 하는 선택사항 label을 포함합니다. `break` 문은 참조되는 label 내에 중첩되어야 합니다. label 달린 문은 어떤 {{jsxref("Statements/block", "block")}} 문이든 될 수 있습니다. 꼭, loop 문을 달 필요가 없습니다.

## 예제

다음 함수는 `i`가 3일 때 {{jsxref("Statements/while", "while")}} loop를 종료하는 break 문이 있고, 그러고는 3 \* `x`값을 반환합니다.

```js
function testBreak(x) {
  var i = 0;

  while (i &#x3C; 6) {
    if (i == 3) {
      break;
    }
    i += 1;
  }

  return i * x;
}
```

다음 코드는 label 달린 블록이 있는 `break` 문을 사용합니다. `break` 문은 자신이 참조하는 label 내에 중첩되어야 합니다. `inner_block`은 `outer_block`내에 중첩되어야 함을 주의하세요.

```js
outer_block: {
  inner_block: {
    console.log("1");
    break outer_block; // inner_block과 outer_block 둘다 빠져나옴
    console.log(":-("); // 건너뜀
  }
  console.log("2"); // 건너뜀
}
```

다음 코드는 또한 label 달린 블록이 있는 break 문을 사용하지만 그 `break` 문이 `block_2`를 참조하지만 `block_1` 내에 있기에 구문 오류(Syntax Error)가 발생합니다. `break` 문은 항상 자신이 참조하는 label 내에 중첩되어야 합니다.

```js
block_1: {
  console.log('1');
  break block_2; // SyntaxError: label을 찾을 수 없음
}

block_2: {
  console.log('2');
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/label", "label")}}
- {{jsxref("Statements/switch", "switch")}}
