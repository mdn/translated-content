---
title: 콜백 함수
slug: Glossary/Callback_function
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

콜백 함수는 전달인자로 다른 함수에 전달되는 함수입니다. 이는 일종의 루틴이나 동작을 완료하기 위해 외부 함수 내부에서 호출됩니다.

다음은 간단한 예제입니다.

```js
function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
```

위의 예제는 {{glossary("synchronous", "동기")}} 콜백으로 즉시 실행됩니다.

그러나 콜백은 자주 {{glossary("asynchronous", "비동기")}} 작업이 완료된 후 코드 실행을 지속시키기 위해 사용됩니다. 이를 비동기 콜백이라고 합니다. 좋은 예제는 프로미스가 이행되거나 거부된 후 프로미스의 끝에 이어진 [`.then()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 블록 안에서 실행되는 콜백 함수들입니다. 이 구조는 [`fetch()`](/ko/docs/Web/API/fetch)와 같은 많은 모던 웹 API에서 사용됩니다.

## 같이 보기

- [콜백](<https://en.wikipedia.org/wiki/Callback_(computer_programming)>) 위키피디아
