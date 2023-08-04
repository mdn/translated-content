---
title: How to implement a promise-based API
slug: Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}

마지막 글에서는 프로미스를 반환하는 API를 사용하는 방법에 대해 알아봤습니다. 이 글에서는 프로미스를 반환하는 API를 구현하는 방법에 대해 살펴보겠습니다. 이것은 프로미스 기반 API를 사용하는 것보다 훨씬 덜 일반적인 작업이지만 그래도 알 가치가 있습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식</th>
      <td>
        기본적인 컴퓨터 사용능력, 함수와 이벤트 처리기, 프로미스의 기본을 포함한 JavaScript 기초에 대한 이해
      </td>
    </tr>
    <tr>
      <th scope="row">목적</th>
      <td>
        프로미스기반 API를 구현하는 방법을 이해하기 위함
      </td>
    </tr>
  </tbody>
</table>

일반적으로 프로미스 기반 API를 구현할 때 이벤트, 일반 콜백 또는 메시지 전달 모델을 사용할 수 있는 비동기 작업을 래핑합니다. 여러분은 해당 작업의 성공 또는 실패를 적절히 처리하기 위해 `Promise` 객체를 준비합니다.

## alarm() API 구현하기

이 예제에서는 `alarm()`이라는 프로미스 기반 알람 API를 구현할것입니다. 깨울 사람의 이름과 깨울 때까지 기다리는 지연 시간(밀리초)이 인수로 사용됩니다. 기다림이 끝나면 함수는 깨워야 할 사람의 이름과 "Wake up!" 이라는 문구를 메시지로 보냅니다.

### setTimeout() 래핑

{{domxref("setTimeout()")}} API를 사용하여 `alarm()` 함수를 구현합니다. `setTimeout()` API는 콜백 함수와 밀리초 단위로 주어진 지연 시간을 인수로 사용합니다. `setTimeout()`이 호출되면 지정된 지연으로 설정된 타이머를 시작하고, 시간이 만료되면 주어진 함수를 호출합니다.

아래 예제에서는 콜백 함수와 1000밀리초의 지연을 사용하여 `setTimeout()`을 호출합니다.

```html
<button id="set-alarm">Set alarm</button>
<div id="output"></div>
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

```js
const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");

function setAlarm() {
  window.setTimeout(() => {
    output.textContent = "Wake up!";
  }, 1000);
}

button.addEventListener("click", setAlarm);
```

{{EmbedLiveSample("Wrapping setTimeout()", 600, 100)}}

### Promise() 생성자

`alarm()` 함수는 타이머가 만료되었을 때 이행되는 `Promise`를 반환합니다. 그러면 "Wake up!" 메시지를 `then()` 처리기로 전달하며, 발신자가 음의 지연 값을 제공할 경우 프로미스를 거부합니다.

여기서 핵심 구성 요소는 {{jsxref("Promise/Promise", "Promise()")}} 생성자입니다. `Promise()` 생성자는 하나의 함수를 인수로 사용합니다. 우리는 이 기능을 `executor(실행자)`라고 부릅니다. 새 프로미스를 만들 때 실행자의 구현을 제공합니다.

이 실행자 함수 자체에는 두 개의 인수가 필요한데, 이 인수는 함수이기도 하고, 관습적으로 `resolve`와 `reject`라고 불립니다. 실행자 구현에서는 기본 비동기 함수를 호출합니다. 비동기 함수가 성공하면 `resolve`를 호출하고 실패하면 `reject`를 호출합니다. 실행자 함수가 오류를 발생시키면 `reject`가 자동으로 호출됩니다. 모든 유형의 단일 매개 변수를 `resolve` 및 `reject`로 전달할 수 있습니다.

따라서 `alarm()`을 이렇게 구현할 수 있습니다.

```js
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    window.setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}
```

이 함수는 새로운 `Promise`를 만들어 반환합니다. 프로미스 실행자 안에서 우리는 다음과 같이 합니다.

- `delay`가 음수인지 확인하고, 맞다면 오류를 발생시킨다.

- 콜백과 `delay`를 전달하며 `window.setTimeout()`을 호출한다. 콜백은 타이머가 만료되면 호출되며 `resolve`라고 불리는 콜백을 "Wake up!" 메시지와 함께 전달한다.

## alarm() API 사용하기

이 부분은 지난 글부터 꽤 익숙할 것입니다. `alarm()`을 호출하고 반환된 프로미스에 대해 `then()`과 `catch()`를 호출하여 프로미스 이행 및 거부에 대한 처리기를 설정할 수 있습니다.

```html hidden
<div>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" size="4" value="Matilda" />
</div>

<div>
  <label for="delay">Delay:</label>
  <input type="text" id="delay" name="delay" size="4" value="1000" />
</div>

<button id="set-alarm">Set alarm</button>
<div id="output"></div>
```

```css hidden
button {
  display: block;
}

div,
button {
  margin: 0.5rem 0;
}
```

```js
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    window.setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", () => {
  alarm(name.value, delay.value)
    .then((message) => (output.textContent = message))
    .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
});
```

{{EmbedLiveSample("Using the alarm() API", 600, 160)}}

이름과 `delay`에 다른 값을 설정해 보세요. `delay`에 음수도 설정해 보세요.

## alarm()을 async와 await와 함께 사용하기

`alarm()`은 `Promise`를 반환하기 때문에 `promise.all()`과 `async` / `await`, 프로미스 체이닝 등 프로미스로 할 수 있는 모든 것을 할 수 있습니다.

```html hidden
<div>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" size="4" value="Matilda" />
</div>

<div>
  <label for="delay">Delay:</label>
  <input type="text" id="delay" name="delay" size="4" value="1000" />
</div>

<button id="set-alarm">Set alarm</button>
<div id="output"></div>
```

```css hidden
button {
  display: block;
}

div,
button {
  margin: 0.5rem 0;
}
```

```js
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    window.setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", async () => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
});
```

{{EmbedLiveSample("Using async and await with the alarm() API", 600, 160)}}

## 같이 보기

- [`Promise()` constructor](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
- [Using promises](/ko/docs/Web/JavaScript/Guide/Using_promises)

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}
