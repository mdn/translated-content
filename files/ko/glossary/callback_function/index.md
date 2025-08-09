---
title: 콜백 함수
slug: Glossary/Callback_function
l10n:
  sourceCommit: 766ba3b1169c752e415fbc30cf0a1067ba9b8a78
---

{{GlossarySidebar}}

**콜백 함수**는 전달인자로 다른 함수에 전달되는 함수입니다. 이는 일종의 루틴이나 동작을 완료하기 위해 외부 함수 내부에서 호출됩니다.

콜백 기반 API의 소비자(Consumer)는 API에 전달되는 함수를 작성합니다. API 공급자(Provider) ("caller")는 인자로 전달된 함수를 API 공급자(Provider) 함수 본문 내 특정 부분에서 다시 호출(또는 실행)합니다. API 공급자(Provider)는 올바른 매개변수를 콜백함수에 전달해야 합니다. API 공급자(Provider)는 API 공급자(Provider)의 추가동작을 지시하는 데 사용되는 콜백 함수에서 특정 반환 값을 받을 수도 있습니다.

콜백함수를 호출하는 방법에는 "synchronous" 및 "asynchronous" 두 가지가 있습니다. 동기식 콜백(synchronous callbacks)은 중간에 비동기 작업 없이 외부 함수 호출 직후에 호출되는 반면에, 비동기식 콜백(asynchronous callbacks)은 {{glossary("asynchronous")}} 작업이 완료된 후 나중에 호출됩니다.

콜백 함수가 동기식으로 호출되는지, 비동기식으로 호출되는지 이해하는 것은 부수 효과를 분석할 때 특히 중요합니다. 다음 예제를 생각해봅시다.

```js
let value = 1;

doSomething(() => {
  value = 2;
});

console.log(value);
```

`doSomething`이 동기식으로 콜백을 호출하는 경우, `value = 2`가 동기식으로 실행되기 때문에 마지막 코드 실행문(console.log 문)은 `2`를 기록합니다. 그렇지 않고, 콜백 함수가 비동기인 경우 `value = 2`가 `console.log` 문 다음에 실행되기 때문에 마지막 코드 실행문(console.log 문)은 `1`를 기록합니다.

동기식 콜백(synchronous callbacks)의 예는 {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.forEach()")}}에 전달된 콜백 함수가 포함됩니다. 비동기식 콜백(asynchronous callbacks)은 [`setTimeout()`](/ko/docs/Web/API/Window/setTimeout) 및 {{jsxref("Promise.prototype.then()")}}에 전달된 콜백 함수들을 예제가 될 수 있습니다.

[promises 사용](/ko/docs/Web/JavaScript/Guide/Using_promises#timing) 가이드에는 비동기 콜백의 타이밍에 대한 자세한 정보가 있습니다.

## 같이 보기

- 위키피디아의 [콜백](<https://en.wikipedia.org/wiki/Callback_(computer_programming)>)
