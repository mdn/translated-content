---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
---

{{JSRef}}

**`Promise`** 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다.

{{AvailableInWorkers}}

프로미스의 작동 방식과 프로미스 사용 방법에 대해 알아보려면 먼저 [프로미스 사용하기](/ko/docs/Web/JavaScript/Guide/Using_promises)을 읽어보세요.

## 설명

`Promise`는 프로미스가 생성된 시점에는 알려지지 않았을 수도 있는 값을 위한 대리자로, 비동기 연산이 종료된 이후에 결과 값과 실패 사유를 처리하기 위한 처리기를 연결할 수 있습니다. 프로미스를 사용하면 비동기 메서드에서 마치 동기 메서드처럼 값을 반환할 수 있습니다. 다만 최종 결과를 반환하는 것이 아니고, 미래의 어떤 시점에 결과를 제공하겠다는 '약속'(프로미스)을 반환합니다.

`Promise`는 다음 중 하나의 상태를 가집니다.

- 대기(_pending)_: 이행하지도, 거부하지도 않은 초기 상태.
- 이행(_fulfilled)_: 연산이 성공적으로 완료됨.
- 거부(_rejected)_: 연산이 실패함.

대기 중인 프로미스는 값과 함께 이행할 수도, 어떤 이유(오류)로 인해 거부될 수도 있습니다. 이행이나 거부될 때, 프로미스의 `then` 메서드에 의해 대기열(큐)에 추가된 처리기들이 호출됩니다. 이미 이행했거나 거부된 프로미스에 처리기를 연결해도 호출되므로, 비동기 연산과 처리기 연결 사이에 경합 조건은 없습니다.

{{jsxref("Promise.prototype.then()")}} 및 {{jsxref("Promise.prototype.catch()")}} 메서드의 반환 값은 새로운 프로미스이므로 서로 연결할 수 있습니다.

![](promises.png)

> **참고:** 느긋한 평가와 연산 연기를 위한 방법을 프로미스라고 부르는 언어도 여럿 존재합니다(Scheme 등). JavaScript에서의 프로미스는 콜백 함수를 연결할 수 있는, 이미 진행 중인 프로세스를 나타냅니다. 표현식을 느긋하게 평가하려면 `f = () => expression`처럼 매개변수 없는 함수를 사용해 느긋한 표현식을 생성하고, `f()`를 호출해 평가하세요.

> **참고:** 프로미스가 대기에서 벗어나 이행 또는 거부된다면 프로미스가 처리(_settled_)됐다고 말합니다. 프로미스와 함께 쓰이는 다른 단어인 '리졸브'(_resolved_)는 프로미스가 처리됐거나, 다른 프로미스의 상태에 맞춰 상태가 '잠김'됐다는 의미입니다. [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md)에서 프로미스 용어에 대한 보다 자세한 설명을 읽을 수 있습니다.

<!-- [todo] Chained Promises -->
<!-- [todo] Incumbent settings object tracking -->

## 생성자

- {{jsxref("Promise.Promise", "Promise()")}}
  - : 새로운 `Promise` 객체를 생성합니다. 주로 프로미스를 지원하지 않는 함수를 감쌀 때 사용합니다.

## 정적 메서드

- {{jsxref("Promise.all", "Promise.all(iterable)")}}

  - : 주어진 모든 프로미스가 이행하거나, 한 프로미스가 거부될 때까지 대기하는 새로운 프로미스를 반환합니다.

    반환하는 프로미스가 이행한다면, 매개변수로 제공한 프로미스 각각의 이행 값을 모두 모아놓은 배열로 이행합니다. 배열 요소의 순서는 매개변수에 지정한 프로미스의 순서를 유지합니다.

    반환하는 프로미스가 거부된다면, 매개변수의 프로미스 중 거부된 첫 프로미스의 사유를 그대로 사용합니다.

- {{JSxRef("Promise.allSettled", "Promise.allSettled(iterable)")}}

  - : 주어진 모든 프로미스가 처리(이행 또는 거부)될 때까지 대기하는 새로운 프로미스를 반환합니다.

    `Promise.allSettled()`가 반환하는 프로미스는 매개변수로 제공한 모든 프로미스 각각의 상태와 값(또는 거부 사유)을 모아놓은 배열로 이행합니다.

- {{JSxRef("Promise.any", "Promise.any(iterable)")}}
  - : 주어진 모든 프로미스 중 하나라도 이행하는 순간, 즉시 그 프로미스의 값으로 이행하는 새로운 프로미스를 반환합니다.
- {{jsxref("Promise.race", "Promise.race(iterable)")}}

  - : 주어진 모든 프로미스 중 하나라도 처리될 때까지 대기하는 프로미스를 반환합니다.

    반환하는 프로미스가 이행한다면, 매개변수의 프로미스 중 첫 번째로 이행한 프로미스의 값으로 이행합니다.

    반환하는 프로미스가 거부된다면, 매개변수의 프로미스 중 거부된 첫 프로미스의 사유를 그대로 사용합니다.

- {{JSxRef("Promise.reject", "Promise.reject(reason)")}}
  - : 주어진 사유로 거부하는 `Promise` 객체를 반환합니다.
- {{jsxref("Promise.resolve()")}}

  - : 주어진 값으로 이행하는 `Promise` 객체를 반환합니다. 이때 지정한 값이 `then` 가능한(`then` 메서드를 가지는) 값인 경우, `Promise.resolve()`가 반환하는 프로미스는 `then` 메서드를 "따라가서" 자신의 최종 상태를 결정합니다. 그 외의 경우, 반환된 프로미스는 주어진 값으로 이행합니다.

    어떤 값이 프로미스인지 아닌지 알 수 없는 경우, 보통 일일히 두 경우를 나눠서 처리하는 대신 `Promise.resolve()`로 값을 감싸서 항상 프로미스가 되도록 만든 후 작업하는 것이 좋습니다.

## 인스턴스 메서드

[마이크로태스크 안내서](/ko/docs/Web/API/HTML_DOM_API/Microtask_guide)를 방문해 프로미스 인스턴스 메서드가 마이크로태스크 큐와 서비스를 이용하는 방법을 알아보세요.

- {{jsxref("Promise.prototype.catch()")}}
  - : 프로미스에 거부 처리기 콜백을 추가하고, 콜백이 호출될 경우 그 반환값으로 이행하며 호출되지 않을 경우, 즉 이전 프로미스가 이행하는 경우 이행한 값을 그대로 사용해 이행하는 새로운 프로미스를 반환합니다.
- {{jsxref("Promise.prototype.then()")}}
  - : 프로미스에 이행과 거부 처리기 콜백을 추가하고, 콜백이 호출될 경우 그 반환값으로 이행하며 호출되지 않을 경우(`onFulfilled`, `onRejected` 중 상태에 맞는 콜백이 함수가 아닐 경우) 처리된 값과 상태 그대로 처리되는 새로운 프로미스를 반환합니다.
- {{jsxref("Promise.prototype.finally()")}}
  - : 프로미스의 이행과 거부 여부에 상관없이 처리될 경우 항상 호출되는 처리기 콜백을 추가하고, 이행한 값 그대로 이행하는 새로운 프로미스를 반환합니다.

## 예제

### 기본 예제

```js
let myFirstPromise = new Promise((resolve, reject) => {
  // 우리가 수행한 비동기 작업이 성공한 경우 resolve(...)를 호출하고, 실패한 경우 reject(...)를 호출합니다.
  // 이 예제에서는 setTimeout()을 사용해 비동기 코드를 흉내냅니다.
  // 실제로는 여기서 XHR이나 HTML5 API를 사용할 것입니다.
  setTimeout(function () {
    resolve("성공!"); // 와! 문제 없음!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage는 위에서 resolve(...) 호출에 제공한 값입니다.
  // 문자열이어야 하는 법은 없지만, 위에서 문자열을 줬으니 아마 문자열일 것입니다.
  console.log("와! " + successMessage);
});
```

<!-- [todo] Example with diverse situations -->

### 고급 예제

다음의 작은 예제는 `Promise`의 동작 방식을 보여줍니다. `testPromise()` 함수는 {{HTMLElement("button")}}을 클릭할 때마다 호출되며, {{domxref("window.setTimeout()")}}을 사용해 1\~3초의 무작위 간격 이후 프로미스 횟수(1부터 시작하는 숫자)로 이행하는 프로미스를 생성합니다. `Promise()` 생성자는 프로미스를 만드는 데 쓰입니다.

프로미스 이행은 {{jsxref("Promise.prototype.then()","p1.then()")}}을 사용하는 이행 콜백 세트를 통해 단순히 로그에 남습니다. 약간의 로그를 통해, 함수의 동기 부분이 비동기적 프로미스의 완료와 어떻게 분리되어 있는지 확인할 수 있습니다.

#### HTML

```html
<button id="btn">프로미스 만들기!</button>
<div id="log"></div>
```

#### JavaScript

```js
"use strict";
var promiseCount = 0;

function testPromise() {
  var thisPromiseCount = ++promiseCount;

  var log = document.getElementById("log");
  log.insertAdjacentHTML(
    "beforeend",
    thisPromiseCount + ") 시작 (<small>동기적 코드 시작</small>)<br/>",
  );

  // 새 프로미스 생성 - 프로미스의 생성 순서를 전달하겠다는 약속을 함 (3초 기다린 후)
  var p1 = new Promise(
    // 실행 함수는 프로미스를 이행(resolve)하거나
    // 거부(reject)할 수 있음
    function (resolve, reject) {
      log.insertAdjacentHTML(
        "beforeend",
        thisPromiseCount +
          ") 프로미스 시작 (<small>비동기적 코드 시작</small>)<br/>",
      );
      // setTimeout은 비동기적 코드를 만드는 예제에 불과
      window.setTimeout(
        function () {
          // 프로미스 이행 !
          resolve(thisPromiseCount);
        },
        Math.random() * 2000 + 1000,
      );
    },
  );

  // 프로미스를 이행했을 때 할 일은 then() 호출로 정의하고,
  // 거부됐을 때 할 일은 catch() 호출로 정의
  p1.then(
    // 이행 값 기록
    function (val) {
      log.insertAdjacentHTML(
        "beforeend",
        val + ") 프로미스 이행 (<small>비동기적 코드 종료</small>)<br/>",
      );
    },
  ).catch(
    // 거부 이유 기록
    function (reason) {
      console.log("여기서 거부된 프로미스(" + reason + ")를 처리하세요.");
    },
  );

  log.insertAdjacentHTML(
    "beforeend",
    thisPromiseCount + ") 프로미스 생성 (<small>동기적 코드 종료</small>)<br/>",
  );
}

if ("Promise" in window) {
  var btn = document.getElementById("btn");
  btn.addEventListener("click", testPromise);
} else {
  log = document.getElementById("log");
  log.innerHTML =
    "Live example not available as your browser doesn't support the <code>Promise<code> interface.";
}
```

이 예제는 버튼을 클릭하면 실행됩니다. `Promise`를 지원하는 브라우저가 필요합니다. 짧은 시간 안에 버튼을 여러 번 클릭하여, 서로 다른 프로미스가 번갈아 이행되는 것을 볼 수도 있습니다.

{{EmbedLiveSample("고급_예제", "500", "200")}}

## XHR로 이미지 불러오기

이미지를 로드하기 위해 `Promise` 및 {{domxref("XMLHttpRequest")}}를 사용하는 또 다른 간단한 예는 MDN GitHub [js-examples](https://github.com/mdn/js-examples/tree/master/promises-test) 저장소에서 이용할 수 있습니다. [실제 예](https://mdn.github.io/js-examples/promises-test/)를 볼 수도 있습니다. 각 단계에 주석이 붙어있어, 프로미스 및 XHR 구조를 차근차근 따라갈 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `core-js`의 [`Promise` 폴리필](https://github.com/zloirock/core-js#ecmascript-promise)
- [프로미스 사용하기](/ko/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+ 명세](https://promisesaplus.com/)
- [JavaScript Promises: an introduction](https://web.dev/promises/)
- [Domenic Denicola: Callbacks, Promises, and Coroutines – Asynchronous Programming Patterns in JavaScript](https://www.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript)
