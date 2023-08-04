---
title: SharedWorker
slug: Web/API/SharedWorker
---

{{APIRef("Web Workers API")}}

**`SharedWorker`** 인터페이스는 윈도우 창이나 iframe, 워커등의 다른 브라우징 컨텍스트에서도 접근이 가능한 특정 종류의 워커를 의미합니다. 기존의 다른 종류의 워커들과 다른 전역 스코프를 갖는 인터페이스를 구현합니다. {{domxref("SharedWorkerGlobalScope")}}.

> **참고:** **참고 :** SharedWorker 가 몇개의 다른 브라우징 컨텍스트에서 접근이 가능하면, 그 브라우징 컨텍스트들은 모두 정확히 같은 오리진을 공유해야 합니다. (같은 프로토콜, 호스트, 포트 등)

## 생성자

- {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}
  - : 특정 URL에서 스크립트를 실행하는 shared web worker를 생성합니다.

## 속성

_{{domxref("EventTarget")}}_ 의 속성들을 상속 받습니다. 그리고 _{{domxref("AbstractWorker")}}_ 의 속성들을 구현할 수 있습니다.

- {{domxref("AbstractWorker.onerror")}}
  - : 워커에서 {{domxref("ErrorEvent")}} 타입의 에러가 발생했을 때 호출되는는 {{domxref("EventListener")}}
- {{domxref("SharedWorker.port")}} {{readonlyInline}}
  - : shared worker를 제어하거나 통신하기 위해 사용되는 {{domxref("MessagePort")}} 객체를 반환

## 메서드

_{{domxref("EventTarget")}}_ 의 속성들을 상속 받습니다. 그리고 _{{domxref("AbstractWorker")}}_ 의 속성들을 구현할 수 있습니다.

## 예제

[Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run shared worker](http://mdn.github.io/simple-shared-worker/)) 를 보시면 2개의 HTML 페이지가 있습니다. 각각 간단한 계산을 위해 자바스크립트를 사용합니다. 각기 다른 스크립트가 계산을 위해 같은 워커 파일을 사용합니다 — 두 개 페이지가 모두 다른 윈도우창에서 실행되더라도 같은 워커에 접근할 수 있습니다.

아래 코드 스니펫은 {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} 생성자를 이용해 `SharedWorker` 객체를 생성합니다. 두 스크립트 모두 아래를 포함합니다.

```js
var myWorker = new SharedWorker("worker.js");
```

두 스크립트는 {{domxref("SharedWorker.port")}} 속성으로 생성한 {{domxref("MessagePort")}} 객체를 통해 워커에 접근할 수 있습니다. `addEventListener` 를 이용하여 `onmessage` 가 추가되면, port는 `start()` 메서드를 이용하여 수동으로 시작할 수 있습니다.

```js
myWorker.port.start();
```

포트가 시작되면, 양 스크립트는 워커에 메시지를 보내고 `port.postMessage()`와 `port.onmessage` 를 각각 이용하여 메시지를 처리합니다.

```js
first.onchange = function () {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = function () {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

myWorker.port.onmessage = function (e) {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

워커에서 {{domxref("SharedWorkerGlobalScope.onconnect")}} 핸들러를 이용하여 위에 언급된 포트에 접속할 수 있습니다. 워커에 연관되어 있는 포트는 {{event("connect")}} 이벤트 포트 속성에 접근할 수 있습니다 — 그리고나서 {{domxref("MessagePort")}} `start()` 메서드로 포트를 시작하고, onmessage 핸들러로 메인쓰레드에서 받은 메시지를 처리합니다.

```js
onconnect = function (e) {
  var port = e.ports[0];

  port.addEventListener("message", function (e) {
    var workerResult = "Result: " + e.data[0] * e.data[1];
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Worker")}}
- [Using web workers](/ko/docs/Web/Guide/Performance/Using_web_workers)
