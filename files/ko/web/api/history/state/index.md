---
title: History.state
slug: Web/API/History/state
---

{{APIRef("History API")}}

**`History.state`** 속성은 현 history에 해당하는 state값을 나타냅니다.

{{event("popstate")}} 이벤트가 트리거될때가 아닌 상태에서 state값을 볼 수 있는 방법입니다.

## 구문

```js
const currentState = history.state;
```

### 값

현 history에 위치한 값입니다. 이 값은 {{domxref("History.pushState","pushState()")}} 또는 {{domxref("History.replaceState","replaceState()")}}을 사용할때까지 {{jsxref("null")}} 값을 가집니다.

## 예제

`history.state` 로 초기값을 보여준 후 {{domxref("History.pushState","pushState()")}}를 사용하여 State를 푸시합니다.

다음 코드 줄은 `history.state` 를 사용하여 콘솔에다 값이 푸시되었음을 보여줍니다.

```js
// Should be null because we haven't modified the history stack yet
console.log(`History.state before pushState: ${history.state}`);

// Now push something on the stack
history.pushState({ name: "Example" }, "pushState example", "page3.html");

// Now state has a value.
console.log(`History.state after pushState: ${history.state}`);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Working with the History API](/ko/docs/Web/API/History_API/Working_with_the_History_API)
