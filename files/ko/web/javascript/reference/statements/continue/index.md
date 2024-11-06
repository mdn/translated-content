---
title: continue
slug: Web/JavaScript/Reference/Statements/continue
---

{{jsSidebar("Statements")}}

**`continue`** 문은 현재 또는 레이블이 지정된 루프의 현재 반복에서 명령문의 실행을 종료하고 반복문의 처음으로 돌아가여 루프문의 다음 코드를 실행합니다.

{{EmbedInteractiveExample("pages/js/statement-continue.html")}}

## 구문

```js
    continue [label];
```

- `label`
  - : 명령문의 레이블과 연관된 식별자.

## 설명

{{jsxref ( "Statements / break", "break")}} 문과 달리 `continue`는 루프의 실행을 완전히 종료하지 않고 `for`, `while`문에서 다음과 같이 동작합니다.

- {{jsxref ( "Statements / while", "while")}} 루프에서는 다시 조건으로 점프합니다.
- {{jsxref ( "Statements / for", "for")}} 루프에서는 업데이트 표현식으로 점프합니다.

`continue` 문에는 현재 루프 대신 레이블이 지정된 루프 문의 다음 반복으로 건너 뛰도록하는 선택적 레이블이 포함될 수 있습니다. 이 경우, `continue` 문은 이 레이블 된 명령문 내에 중첩되어야합니다.

## 예제

### Using `continue` with `while`

다음 예제에서는 `i`의 값이 3일 때 실행되는 `continue`문을 포함하는 {{jsxref("Statements/while", "while")}}을 보여줍니다. 따라서 n은 1, 3, 7 및 12 값을 갖습니다.

```js
var i = 0;
var n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
}
```

### label과 함께 `continue` 사용하기

다음 예제에서 `checkiandj`라는 문에는 `checkj`라는 문이 있습니다. `continue`가 발생하면 프로그램은 `checkj` 문의 맨 위에서 계속됩니다. `continue`가 발생할 때마다 `checkj`는 조건이 false를 반환 할 때까지 반복합니다. false가 리턴되면 나머지 `checkiandj` 문이 완료됩니다.

`continue`에 `checkiandj` 레이블이 있으면이 프로그램은 `checkiandj` 문 맨 위에서 계속됩니다.

See also {{jsxref("Statements/label", "label")}}.

```js
var i = 0;
var j = 8;

checkiandj: while (i < 4) {
  console.log("i: " + i);
  i += 1;

  checkj: while (j > 4) {
    console.log("j: " + j);
    j -= 1;

    if (j % 2 == 0) continue checkj;
    console.log(j + " is odd.");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}
```

출력:

```js
i: 0

// start checkj
j: 8
7 is odd.
j: 7
j: 6
5 is odd.
j: 5
// end checkj

i = 1
j = 4

i: 1
i = 2
j = 4

i: 2
i = 3
j = 4

i: 3
i = 4
j = 4
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/label", "label")}}
