---
title: for
slug: Web/JavaScript/Reference/Statements/for
---

{{jsSidebar("Statements")}}

**`for` 문**은 괄호로 감싸고 세미콜론으로 구분한 세 개의 선택식과, 반복을 수행할 문(주로 {{jsxref("Statements/block", "블럭문", "", 0)}})으로 이루어져 있습니다.

{{EmbedInteractiveExample("pages/js/statement-for.html")}}

## 구문

```js-nolint
for ([initialization]; [condition]; [final-expression])
   statement
```

- `initialization`

  - : 식(할당식 포함) 또는 변수 선언. 주로 카운터 변수를 초기화할 때 사용합니다. `var` 또는 `let` 키워드를 사용해 새로운 변수를 선언할 수도 있습니다. `var` 키워드로 선언한 변수는 반복문에 제한되지 않습니다. 즉 `for` 문과 같은 범위에 위치합니다. `let` 키워드로 선언한 변수는 반복문의 지역 변수가 됩니다.

    식의 결과는 버려집니다.

- `condition`
  - : 매 반복마다 평가할 식. 평가 결과가 참이라면 `statement`를 실행합니다. 이 식을 넣지 않았을 때 계산 결과는 언제나 참이 됩니다. 계산 결과가 거짓이라면 `for` 문의 바로 다음 식으로 건너 뜁니다.
- `final-expression`
  - : 매 반복 후 평가할 식. 다음번 `condition` 평가 이전에 발생합니다. 주로 카운터 변수를 증감하거나 바꿀 때 사용합니다.
- `statement`
  - : 조건의 평가 결과가 참일 때 실행하는 문. 여러 문을 반복 실행하려면 {{jsxref("Statements/block", "블럭문", "", 0)}}(`{ ... }`)으로 묶어야 합니다. 아무것도 실행하지 않으려면 {{jsxref("Statements/empty", "공백문", "", 0)}} (`;`)을 사용하세요.

## 예제

### `for` 사용하기

다음 `for` 문은 변수 `i`를 선언하고 0으로 초기화하여 시작합니다. `i`가 9보다 작은지를 확인하고 맞으면 명령문을 수행한 후 `i`의 값을 1 높입니다.

```js
for (var i = 0; i < 9; i++) {
  console.log(i);
  // 기타 등등
}
```

### 선택적 식 사용

`for` 반복문의 3개 식은 모두 선택 사항입니다.

예를 들어, 변수를 초기화하려고 `initialization` 블럭을 사용할 필요는 없습니다.

```js
var i = 0;
for (; i < 9; i++) {
  console.log(i);
  // 기타 등등
}
```

`initialization` 블럭처럼 `condition` 블럭도 선택 사항입니다. 다만 이 경우, 반복문 본문에 무한 반복을 탈출할 수 있는 장치를 추가해야 합니다.

```js
for (var i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // 기타 등등
}
```

세 가지 모두 생략할 수도 있습니다. 위와 같이 {{jsxref("Statements/break", "break")}} 문을 사용해 반복을 탈출할 수 있도록 추가하고, 변수를 수정해 탈출 조건이 언젠가 참이 되도록 해야 합니다.

```js
var i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

### 문 없이 `for` 사용하기

다음 `for` 반복 사이클은 노드의 위치 오프셋을 `final-expression`에서 계산해 문이나 블럭문이 필요하지 않으므로 세미콜론을 사용합니다.

```js
function showOffsetPos(sId) {
  var nLeft = 0,
    nTop = 0;

  for (
    var oItNode = document.getElementById(sId) /* initialization */;
    oItNode /* condition */;
    nLeft += oItNode.offsetLeft,
      nTop += oItNode.offsetTop,
      oItNode = oItNode.offsetParent /* final-expression */
  ); /* semicolon */

  console.log(
    "Offset position of '" +
      sId +
      "' element:\n left: " +
      nLeft +
      "px;\n top: " +
      nTop +
      "px;",
  );
}

/* Example call: */

showOffsetPos("content");

// Output:
// "Offset position of "content" element:
// left: 0px;
// top: 153px;"
```

> **참고:** 여기서 쓰인 세미콜론은, JavaScript가 **필수로 요구하는 몇 안되는 세미콜론**입니다. 물론 세미콜론 없이는 반복 사이클 선언의 바로 다음 줄을 반복 본문으로 인식합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("Statements/empty", "공백문", "", 0)}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
