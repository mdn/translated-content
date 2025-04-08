---
title: while
slug: Web/JavaScript/Reference/Statements/while
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

**`while`** 문은 테스트 조건이 참으로 평가되는 동안, 지정된 문을 실행하는 반복을 생성합니다. 문이 실행되기 전에 조건이 평가됩니다.

{{InteractiveExample("JavaScript Demo: Statement - While")}}

```js interactive-example
let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// 예상되는 출력: 3
```

## 문법

```js-nolint
while (condition)
  statement
```

- `condition`
  - : 루프를 통과할 때마다 문이 실행되기 전에 평가되는 표현식입니다. 만약 이 조건이 [참으로 평가된다면](/ko/docs/Glossary/Truthy), `statement` 가 실행됩니다. 이 조건이 [거짓으로 평가될 때는](/ko/docs/Glossary/Falsy), `while` 반복문 이후의 문으로 실행이 계속됩니다.
- `statement`
  - : 조건이 참으로 평가되는 동안 실행되는 문입니다. [블록문](/ko/docs/Web/JavaScript/Reference/Statements/block) 을 사용하여, 여러개의 문을 실행할 수 있습니다.

## 설명

다른 반복문과 같이, `statement` 속에서 [흐름 제어 문](/ko/docs/Web/JavaScript/Reference/Statements#control_flow) 을 사용할 수 있습니다.

- {{jsxref("Statements/break", "break")}} 은 `statement` 의 실행을 멈추고, 반복문 아래의 첫 번째 문으로 가도록 합니다.
- {{jsxref("Statements/continue", "continue")}} 은 `statement` 의 실행을 멈추고, `condition` 을 다시 평가하도록 합니다.

## 예제

### while 을 사용하여

다음 `while` 반복문은 `n`이 3보다 작으면 반복됩니다.

```js
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

반복할 때마다 반복문은 `n`을 증가시켜 `x`에 더합니다.

따라서 `x`와 `n`은 다음과 같은 값을 갖습니다:

- 첫 번째 통과 후 `n` = 1 및 `x` = 1
- 두 번째 통과 후 `n` = 2 및 `x` = 3
- 세 번째 통과 후 `n` = 3 및 `x` = 6

세 번째 통과를 완료하면 `n` < 3 조건이 더 이상 참이 아니게 되므로, 반복문이 종료됩니다.

### 변수 할당을 조건으로 사용하기

어떤 경우에는 변수 할당을 조건으로 사용하는 것이 합리적일 수 있습니다. 이것은 가독성과 상충되는 경우가 있으므로, 모든 사람이 패턴을 더 명확하게 알아볼 수 있는 특정 형식 권장 사항이 있습니다.

다음 예시는, 문서의 주석을 반복처리하여, 콘솔에 출력하는 코드입니다.

```js-nolint example-bad
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while (currentNode = iterator.nextNode()) {
  console.log(currentNode.textContent.trim());
}
```

이것은 다음 코드 때문에, 완전히 좋은 예시라고는 할 수 없습니다.

```js-nolint example-bad
while (currentNode = iterator.nextNode()) {
```

그 행의 동작은 매번 주석 노드가 얻어진다는 점에서는 괜찮습니다.

1. `iterator.nextNode()`는 해당 주석 노드를 반환하며, 이 노드는 `currentNode`에 할당됩니다.
2. 따라서 `currentNode = iterator.nextNode()`의 값은 [truthy](/ko/docs/Glossary/Truthy)입니다.
3. 따라서 `console.log()` 호출이 실행되고 반복문이 계속됩니다.

...그리고 문서에 더 이상 주석 노드가 없는 경우는 아래와 같습니다.

1. `iterator.nextNode()`는 [`null`](/ko/docs/Web/JavaScript/Reference/Operators/null)을 반환합니다.
2. 따라서 `currentNode = iterator.nextNode()`의 값도 `null`이며, 이는 [거짓](/ko/docs/Glossary/Falsy)으로 평가됩니다.
3. 따라서 반복문이 종료됩니다.

이 줄의 문제는, 일반적으로 조건문은 `===`와 같은 [비교 연산자](/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators)를 사용하지만 이 줄의 `=`는 비교 연산자가 아니라 [할당 연산자](/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators) 라는 점입니다. 따라서 `=`는 `===`의 오타처럼 보여집니다 (실제로는 오타가 아니더라도).

따라서 이와 같은 경우, 오타 가능성을 검사하여 수정할 수 있도록 도와주는 ESLint의 [`no-cond-assign`](https://eslint.org/docs/latest/rules/no-cond-assign) 규칙과 같은, 일부 [코드 린팅 도구](/ko/docs/Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain#code_linting_tools)는 다음과 같은 경고를 표시합니다.

> Expected a conditional expression and instead saw an assignment. (조건부 표현식을 기대하는 곳에 할당이 있었습니다)

많은 스타일 가이드에서는 조건이 할당이 되려는 의도를 보다 명시적으로 표시할 것을 권장합니다. 이를 위해, 할당 주위에 [그룹화 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Grouping)로 괄호를 추가하면 최소한의 작업으로 수행할 수 있습니다.

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode())) {
  console.log(currentNode.textContent.trim());
}
```

사실 이것은 ESLint의 `no-cond-assign`의 기본 구성과 [Prettier](https://prettier.io/)에서 강제하는 스타일이므로, 이 패턴을 자주 마주할 것입니다.

어떤 사람들은 조건을 명시적 비교로 바꾸기 위해 비교 연산자를 추가할 것을 권장할 수도 있습니다.

```js-nolint example-good
while ((currentNode = iterator.nextNode()) !== null) {
```

이 패턴을 작성하는 또 다른 방법도 있습니다.

```js-nolint example-good
while ((currentNode = iterator.nextNode()) && currentNode) {
```

또는 아예 `while` 반복문을 사용하지 않는 방법도 있습니다.

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
for (
  let currentNode = iterator.nextNode();
  currentNode;
  currentNode = iterator.nextNode()
) {
  console.log(currentNode.textContent.trim());
}
```

독자가 조건 패턴으로서의 문에 충분히 익숙하다면 이러한 모든 변형은 똑같이 읽기 쉬울 것입니다. 그렇지 않은 경우, 마지막 형태가 가장 장황하지만 가장 읽기 쉬울 것입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
