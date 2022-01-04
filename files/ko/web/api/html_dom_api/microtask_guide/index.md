---
title: JavaScript의 queueMicrotask()와 함께 마이크로태스크 사용하기
slug: Web/API/HTML_DOM_API/Microtask_guide
tags:
  - API
  - Batch
  - Guide
  - HTML DOM
  - JavaScript
  - Microtask
  - Queue
  - Reference
  - ServiceWorker
  - SharedWorker
  - Window
  - Worker
  - asynchronous
  - queueMicrotask
translation_of: Web/API/HTML_DOM_API/Microtask_guide
---
{{APIRef("HTML DOM")}}

**마이크로태스크**는 자신을 생성한 함수 또는 프로그램이 종료됐고 [JavaScript 실행 스택](/ko/docs/Web/JavaScript/EventLoop#스택)이 빈 후에, 그러나 {{glossary("user agent", "사용자 에이전트")}}가 스크립트 실행 환경을 운용하기 위해 사용하는 이벤트 루프로 통제권을 넘기기는 전에 실행되는 짧은 함수입니다.

이때의 이벤트 루프는 브라우저의 주 이벤트 루프 또는 [웹 워커](/ko/docs/Web/API/Web_Workers_API)를 구동하는 이벤트 루프입니다. 따라서 마이크로태스크를 이용하면 다른 스크립트의 실행을 방해할 위험을 감수하지 않으면서도, 사용자 에이전트가 반응하기 전에 주어진 함수를 실행할 수 있습니다.

JavaScript [프로미스](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)와 [Mutation Observer API](/ko/docs/Web/API/MutationObserver) 둘 다 마이크로태스크 큐를 사용해 콜백을 호출하지만, 때로는 현재 이벤트 루프가 정리될 때까지 작업을 미루는 기능이 직접 필요할 때가 있습니다. 그래서 서드파티 라이브러리, 프레임워크, 폴리필에서 마이크로태스크를 사용할 수 있도록, {{domxref("Window")}}와 {{domxref("Worker")}} 인터페이스는 {{domxref("queueMicrotask()")}} 메서드를 노출하고 있습니다.

## 태스크 vs 마이크로태스크

마이크로태스크를 올바르게 논하려면, 우선 JavaScript에서의 태스크란 무엇인지, 그리고 마이크로태스크가 태스크와 어떻게 다른지 아는 것이 유욯합니다. 다음은 짧고 간략한 설명이지만, 보다 자세히 알아보려면 [심층 탐구: 마이크로태스크와 JavaScript 런타임 환경](/ko/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth) 글을 확인해보세요.

### 태스크

**태스크**는 프로그램 초기 시작, 이벤트 콜백 실행, 인터벌과 타임아웃 실행처럼 표준 방식에 의해 예약된 아무 JavaScript 코드입니다. 태스크는 모두 **태스크 큐**에서 실행까지 대기합니다.

태스크가 태스크 큐에 추가되는 상황은 다음과 같습니다.

- 새로운 JavaScript 프로그램 또는 하위 프로그램이 직접 실행(콘솔 사용, 혹은 {{HTMLElement("script")}} 요소에서 코드 실행)되는 경우.
- 이벤트 발생. 이벤트의 처리기 함수가 태스크 큐에 추가됩니다.
- {{domxref("setTimeout()")}}과 {{domxref("setInterval()")}}로 추가한 타임아웃/인터벌이 도래하는 경우. 해당 콜백이 태스크 큐에 추가됩니다.

우리 코드의 구동을 맡은 이벤트 루프는 태스크를 큐에 추가된 순서대로 차례차례 처리합니다. 이벤트 루프 패스가 시작했을 때 이미 큐에 들어있던 태스크만 현재 주기에 실행되며, 나머지는 다음 주기까지 대기해야 합니다.

### 마이크로태스크

첫인상만 보면 마이크로태스크와 태스크의 차이점은 사소해보입니다. 실제로 둘은 비슷합니다. 둘 다 큐에 추가되는 JavaScript 코드로, 적절한 시점에 실행됩니다. 그러나 이벤트 루프의 현재 주기가 시작됐을 때 큐에 존재하는 태스크만 순차적으로 처리되는 태스크와 달리, 마이크로태스크는 상당히 다른 방법으로 처리됩니다.

두 개의 큰 차이가 있습니다.

우선, 매번 태스크가 종료될 때마다 이벤트 루프는 이 태스크가 다른 JavaScript 코드로 통제권을 넘기는지 확인합니다. 그렇지 않은 경우 마이크로태스크 큐의 모든 마이크로태스크를 처리합니다. 곧 마이크로태스크 큐는, 이벤트 처리와 기타 콜백 실행 이후마다, 즉 이벤트 루프의 한 주기에 여러 번 처리됩니다.

두 번째로, 마이크로태스크가 {{domxref("queueMicrotask()")}}를 통해 더 많은 마이크로태스크를 큐에 추가하는 경우, 이렇게 새롭게 추가된 마이크로태스크 또한 다음 태스크 실행 전에 모두 실행됩니다. 이벤트 루프는 대기열이 텅 빌 때까지 마이크로태스크를 계속 호출하기 때문입니다.

> **경고:** 마이크로태스크 스스로 더 많은 마이크로태스크를 큐에 넣을 수 있으며 큐가 빌 때까지 마이크로태스크 처리는 멈추지 않기 때문에, 이벤트 루프가 끝없는 마이크로태스크 처리 루프에 빠질 현실적인 위험이 있습니다. 재귀적으로 마이크로태스크를 추가할 때 주의하세요.

## 마이크로태스크 사용하기

여기서 더 나아가기 전에, 대부분의 개발자는 마이크로태스크를 거의, 아마도 전혀, 사용하지 않을 것임을 상기하는 것이 좋습니다. 마이크로태스크는 현대 브라우저 기반 JavaScript 개발에서 고도로 특화된 기능으로서, 사용자 컴퓨터에서 발생할 수많은 것들의 앞에서 다른 것보다 우선해서 실행할 코드를 예약할 수 있는 기능입니다. 이 능력을 남용하면 성능 문제에 빠질 것입니다.

### 마이크로태스크 큐에 넣기

따라서, 마이크로태스크의 사용은 다른 해결책이 전혀 없거나, 프레임워크 또는 라이브러리에서 구현하고자 하는 기능에 필요한 경우에만 사용해야 합니다. 과거에도 마이크로태스크를 큐에 추가하는 우회 방법이 (즉시 이행하는 프로미스 생성처럼) 없지는 않았으나, {{domxref("queueMicrotask()")}} 메서드의 추가 덕분에 마이크로태스크를 안전하고 우회 없이 추가할 수 있는 표준 방법이 생겼습니다.

`queueMicrotask()`를 사용하면 프로미스를 사용해 마이크로태스크를 생성할 때 마주치는 문제에서 벗어날 수 있습니다. 예컨대 프로미스 방법에서는 콜백에서 예외가 발생할 경우 표준 예외가 아니라 거부된 프로미스로 나타나곤 했습니다. 또한 프로미스의 생성과 파괴는 시간과 메모리 양쪽에 추가 부하를 줬습니다.

현재 맥락이 마이크로태스크를 처리하는 시점에 호출할 JavaScript {{jsxref("Function")}}을 `queueMicrotask()` 메서드의 매개변수로 제공하세요. `queueMicrotask()`는 현재 실행 맥락에 따라 {{domxref("Window")}} 또는 {{domxref("Worker")}} 전역 맥락에 노출되어 있습니다.

```js
queueMicrotask(() => {
  /* 마이크로태스크에서 실행할 코드 */
});
```

마이크로태스크 함수 자체는 매개변수를 받지 않으며 아무것도 반환하지 않습니다.

### 마이크로태스크를 사용해야 할 때

이 구획에서는 마이크로태스크가 특히 유용한 상황을 살펴보겠습니다. 보통 JavaScript 실행 맥락의 주 본문이 종료됐으나 다른 모든 이벤트 처리기, 타임아웃과 인터벌, 기타 콜백이 호출되기 전에 결과를 포착 또는 검증하거나 정리 작업 등을 수행하는 상황입니다.

이게 어떤 때에 유용한 것일까요?

마이크로태스크를 사용하는 주요 이유는 바로 결과나 데이터가 동기적으로 사용 가능하더라도 태스크 순서의 일관성을 유지하고, 동시에 사용자가 인지할 수 있는 수준의 연산 지연을 줄이는 것에 있습니다.

#### 조건적 프로미스 사용에 있어 실행 순서 유지

마이크로태스크를 사용해 실행 순서를 항상 일정하게 유지할 수 있는 상황은 `if...else` 선언문 (또는 다른 조건 선언문) 중 한 절에서만 프로미스를 사용하고, 다른 절에서는 사용하지 않는 것입니다. 다음과 같은 코드를 고려해보겠습니다.

```js
customElement.prototype.getData = url => {
  if (this.cache[url]) {
    this.data = this.cache[url];
    this.dispatchEvent(new Event("load"));
  } else {
    fetch(url).then(result => result.arrayBuffer()).then(data => {
      this.cache[url] = data;
      this.data = data;
      this.dispatchEvent(new Event("load"));
    });
  }
};
```

위 코드에서 발생하는 문제는 `if...else` 선언문의 한 분기(위에서는 이미지가 캐시에 들어있을 때)에서는 태스크를 사용하고, `else` 절에서는 프로미스를 사용하기 때문에 실행 순서가 달라질 수 있다는 점입니다.

```js
element.addEventListener("load", () => console.log("Loaded data"));
console.log("Fetching data...");
element.getData();
console.log("Data fetched");
```

위 코드를 두 번 연속해서 실행하면 다음과 같은 결과가 나타납니다.

데이터가 아직 캐시에 없을 땐,

    Fetching data...
    Data fetched
    Loaded data

데이터가 캐시에 저장된 후에는,

    Fetching data...
    Loaded data
    Data fetched

더 나쁜 점은, 이 코드의 실행이 끝난 후 어떤 때에는 요소의 `data` 속성이 설정된 상태고, 다른 때에는 아닐 것이라는 점입니다.

`if` 절에서 마이크로태스크를 사용해 두 절의 균형을 맞춰주는 방법으로 항상 같은 실행 순서를 유지할 수 있습니다.

```js
customElement.prototype.getData = url => {
  if (this.cache[url]) {
    queueMicrotask(() => {
      this.data = this.cache[url];
      this.dispatchEvent(new Event("load"));
    });
  } else {
    fetch(url).then(result => result.arrayBuffer()).then(data => {
      this.cache[url] = data;
      this.data = data;
      this.dispatchEvent(new Event("load"));
    });
  }
};
```

위의 수정된 코드에서는 두 분기 모두 `data` 속성 설정과 `load` 이벤트 발생을 마이크로태스크 안에서 처리하여 서로의 균형을 맞췄습니다. (`if`에서는 `queueMicrotask()`로, `else`에서는 {{domxref("fetch")}}의 프로미스로)

#### 계산 배칭

마이크로태스크를 사용하면 다양한 출처로부터의 다수의 요청을 하나의 배치로 묶어서, 같은 유형의 작업을 위한 반복적인 호출로 인해 발생할 수 있는 부하를 피할 수 있습니다.

다음 코드 조각은 다수의 메시지를 배열에 넣고, 마이크로태스크를 사용해서 실행 컨텍스트 종료 시 넣어놨던 모든 메시지를 한 번에 하나의 객체로 전송하는 모습을 보입니다.

```js
const messageQueue = [];

let sendMessage = message => {
  messageQueue.push(message);

  if (messageQueue.length === 1) {
    queueMicrotask(() => {
      const json = JSON.stringify(messageQueue);
      messageQueue.length = 0;
      fetch("url-of-receiver", json);
    });
  }
};
```

`sendMessage()`를 호출하면 주어진 메시지는 우선 메시지 큐 배열에 들어갑니다. 그 후에 재밌는 일이 생깁니다.

방금 배열에 추가한 메시지가 첫 메시지라면 `sendMessage()`는 메시지 전송 배치를 예약합니다. 마이크로태스크는 언제나 그렇듯 JavaScript 실행 경로가 콜백을 호출하기 바로 직전인, 최상위 단계에 도달하면 실행됩니다. 따라서 `sendMessage()`의 후속 호출은 메시지들을 메시지 대기열에는 넣겠지만, 마이크로태스크 추가 전에 수행하는 배열 길이 검사로 인해 새로운 마이크로태스크가 큐에 추가되지는 않습니다.

마침내 마이크로태스크 실행 시점이 오면 아마 전송을 기다리는 많은 수의 메시지가 대기 중일 것입니다. 마이크로태스크는 우선 {{jsxref("JSON.stringify()")}}를 사용해 메시지를 JSON으로 인코딩합니다. 그 후 배열의 콘텐츠는 필요하지 않으므로 `messageQueue` 배열을 비웁니다. 마지막으로 {{domxref("fetch()")}} 메서드를 사용해 서버로 JSON 문자열을 전송합니다.

이를 통해 이벤트 루프의 같은 주기 내에서 수행한 `sendMessage()` 다수의 호출은 하나의 `fetch()` 연산에 모이게 되고, 타임아웃과 같은 다른 태스크나, 혹은 통신을 지연시키는 일을 피할 수 있었습니다.

서버는 JSON 문자열을 받은 후 아마 문자열을 디코딩한 결과 배열을 사용해 안의 메시지를 처리할 것입니다.

## 예제

### 간단한 마이크로태스크 예제

다음의 간단한 예제에서는, 큐에 추가한 마이크로태스크의 콜백은 최상위 스크립트의 동작이 끝난 후 실행된다는 것을 보입니다.

```html hidden
<pre id="log">
</pre>
```

#### JavaScript

```js hidden
let logElem = document.getElementById("log");
let log = s => logElem.innerHTML += s + "<br>";
```

이어지는 코드에서 {{domxref("queueMicrotask()")}}를 사용해 실행할 마이크로태스크를 예약하는 것을 볼 수 있습니다. 앞뒤로는 `log()` 호출을 배치했는데, 화면에 텍스트를 출력하는 함수입니다.

```js
log("마이크로태스크 추가 전");
queueMicrotask(() => {
  log("마이크로태스크를 실행했습니다.")
});
log("마이크로태스크 추가 후");
```

#### 결과

{{EmbedLiveSample("간단한_마이크로태스크_예제", 640, 80)}}

### 타임아웃과 마이크로태스크 예제

이 예제에서는 0밀리초의 타임아웃("최대한 빠르게")을 예약합니다. 여기서 확인할 수 있는 것은 (`setTimeout()` 등을 사용해) 태스크를 생성할 때의 "최대한 빠르게"와, 마이크로태스크에서의 "최대한 빠르게"는 다르다는 점입니다.

```html hidden
<pre id="log">
</pre>
```

#### JavaScript

```js hidden
let logElem = document.getElementById("log");
let log = s => logElem.innerHTML += s + "<br>";
```

이어지는 코드에서 {{domxref("queueMicrotask()")}}를 사용해 실행할 마이크로태스크를 예약하는 것을 볼 수 있습니다. 그 위에서는 타임아웃을 0ms 후 발동하도록 예약합니다. 앞뒤로는 `log()` 호출을 배치했는데, 화면에 텍스트를 출력하는 함수입니다.

```js
let callback = () => log("일반 타임아웃 콜백을 실행했습니다.");

let urgentCallback = () => log("*** 앗! 긴급 콜백을 실행했습니다!");

log("주 프로그램 시작");
setTimeout(callback, 0);
queueMicrotask(urgentCallback);
log("주 프로그램 종료");
```

#### 결과

{{EmbedLiveSample("타임아웃과_마이크로태스크_예제", 640, 100)}}

결과에 프로그램 본문 코드의 출력이 먼저 나타나고, 그 뒤를 이어 마이크로태스크, 마지막으로 타임아웃 콜백이 출력하는 것에 주목하세요. 주 프로그램의 실행을 맡은 태스크가 종료된 후, 태스크 큐에 올라간 타임아웃 콜백 태스크를 처리하기 전에 마이크로태스크 큐를 우선 처리하기 때문입니다. 태스크와 마이크로태스크 큐가 별도로 관리된다는 것, 그리고 마이크로태스크가 태스크보다 먼저 실행된다는 것을 기억하면 좋습니다.

### 함수에서 추가한 마이크로태스크

이 예제는 이전 예제를 약간 확장해, `queueMicrotask()`로 마이크로태스크를 예약한 후 모종의 계산 작업을 수행하는 함수를 사용합니다. 여기서 확인해야 할 것은 마이크로태스크의 실행 시점이 함수의 종료 순간이 아니고 주 프로그램의 종료 시점이라는 점입니다.

```html hidden
<pre id="log">
</pre>
```

#### JavaScript

```js hidden
let logElem = document.getElementById("log");
let log = s => logElem.innerHTML += s + "<br>";
```

주 프로그램 코드는 다음과 같습니다. `doWork()` 함수가 `queueMicrotask()`를 호출하지만, 태스크가 종료되어 실행 스택에 아무것도 남지 않은 상태가 되는, 즉 전체 프로그램 실행이 종료되기 전까지 이 마이크로태스크는 처리되지 않는 것을 결과에서 볼 수 있습니다.

```js
let callback = () => log("일반 타임아웃 콜백을 실행했습니다.");

let urgentCallback = () => log("*** 앗! 긴급 콜백을 실행했습니다!");

let doWork = () => {
  let result = 1;

  queueMicrotask(urgentCallback);

  for (let i=2; i<=10; i++) {
    result *= i;
  }
  return result;
};

log("주 프로그램 시작");
setTimeout(callback, 0);
log(`10!은 ${doWork()}과 같습니다.`);
log("주 프로그램 종료");
```

#### 결과

{{EmbedLiveSample("함수에서_추가한_마이크로태스크", 640, 100)}}

## 같이 보기

- [심층 탐구: 마이크로태스크와 JavaScript 런타임 환경](/ko/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
- {{domxref("queueMicrotask()")}}
- [비동기 JavaScript](/ko/docs/Learn/JavaScript/Asynchronous)
  - [일반적인 비동기 프로그래밍 개념](/ko/docs/Learn/JavaScript/Asynchronous/Concepts)
  - [비동기 JavaScript 소개](/ko/docs/Learn/JavaScript/Asynchronous/Introducing)
  - [협조적인 비동기 JavaScript: 타임아웃과 인터벌](/ko/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
  - [프로미스와 함께하는 우아한 비동기 프로그래밍](/ko/docs/Learn/JavaScript/Asynchronous/Promises)
  - [올바른 접근법 선택하기](/ko/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)
