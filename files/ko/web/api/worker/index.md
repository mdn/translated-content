---
title: Worker
slug: Web/API/Worker
---

{{APIRef("Web Workers API")}}

[Web Workers API](/ko/docs/Web/API/Web_Workers_API)의 **`Worker`** 인터페이스는 스크립트로 생성하고, 생성자와 메시지로 통신하는 백그라운드 작업을 나타냅니다. 워커의 생성은 `Worker("path/to/worker/script")` 생성자를 통해 할 수 있습니다.

워커는 부모 페이지와 같은 {{glossary("origin", "출처")}}에 호스팅 된 다른 워커를 생성할 수 있습니다. (참고: [WebKit은 아직 중첩 워커를 구현하지 않았습니다.](https://bugs.webkit.org/show_bug.cgi?id=22723))

[`Worker` 내에서 사용할 수 있는 인터페이스와 함수](/ko/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)는 제한돼있습니다. 워커는 {{domxref("XMLHttpRequest")}}를 사용해 네트워크 통신을 할 수 있지만, 응답의 `responseXML`과 `channel` 특성은 항상 {{jsxref("null")}}입니다. ([`fetch`](/ko/docs/Web/API/Fetch_API)는 이러한 제한 없이 사용할 수 있습니다.)

## 생성자

- {{domxref("Worker.Worker", "Worker()")}}
  - : 주어진 URL의 스크립트를 실행하는 전용 웹 워커를 생성합니다. [Blob URL](/ko/docs/Web/API/Blob)도 사용할 수 있습니다.

## 속성

부모 {{domxref("EventTarget")}}에서 속성을 상속하고, {{domxref("AbstractWorker")}}의 속성을 구현합니다.

### 이벤트 처리기

- {{domxref("AbstractWorker.onerror")}}
  - : `error` 유형의 {{domxref("ErrorEvent")}}가 워커로 확산되면 호출할 {{domxref("EventListener")}}입니다. {{domxref("AbstractWorker")}}에서 상속합니다.
- {{domxref("Worker.onmessage")}}
  - : `message` 유형의 {{domxref("MessageEvent")}}가 워커로 확산되면, 즉 {{domxref("DedicatedWorkerGlobalScope.postMessage")}}를 통해 워커에서 부모 문서로 메시지를 전송하면 호출할 {{domxref("EventListener")}}입니다. 메시지는 {{domxref("MessageEvent.data", "data")}} 속성에 들어있습니다.
- {{domxref("Worker.onmessageerror")}}
  - : {{event("messageerror")}} 이벤트가 발생하면 호출할 {{event("Event_handlers", "event handler")}}입니다.

## 메서드

부모 {{domxref("EventTarget")}}에서 메서드를 상속하고, {{domxref("AbstractWorker")}}의 메서드를 구현합니다.

- {{domxref("Worker.postMessage()")}}
  - : 워커의 내부 범위로 메시지를 전송합니다. 메시지는 임의의 JavaScript 객체입니다.
- {{domxref("Worker.terminate()")}}
  - : 워커를 즉시 종료합니다. 현재 워커가 연산을 진행 중이더라도 완료를 기다리지 않습니다. {{domxref("ServiceWorker")}} 인스턴스는 이 메서드를 지원하지 않습니다.

## 이벤트

- [`message`](/ko/docs/Web/API/Worker/message_event)
  - : 워커의 부모가 워커로부터 메시지를 수신했을 대 발생합니다.
    [`onmessage`](/ko/docs/Web/API/Worker/onmessage) 속성에서도 사용 가능합니다.
- [`messageerror`](/ko/docs/Web/API/Worker/messageerror_event)
  - : `Worker` 객체가 [역직렬화](/ko/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) 할 수 없는 객체를 메시지로 받았을 대 발생합니다.
    [`onmessageerror`](/ko/docs/Web/API/Worker/onmessageerror) 속성에서도 사용 가능합니다.
- [`rejectionhandled`](/ko/docs/Web/API/Window/rejectionhandled_event)
  - : {{jsxref("Promise")}}가 거부될 때마다 발생합니다. 거부를 처리할 처리기의 존재 유무는 고려하지 않습니다.
    [`onrejectionhandled`](/ko/docs/Web/API/WindowEventHandlers/onrejectionhandled) 속성에서도 사용 가능합니다.
- [`unhandledrejection`](/ko/docs/Web/API/Window/unhandledrejection_event)
  - : {{jsxref("Promise")}}가 거부됐는데, 처리할 처리기가 없을 때 발생합니다.
    [`onunhandledrejection`](/ko/docs/Web/API/WindowEventHandlers/onunhandledrejection) 속성에서도 사용 가능합니다.

## 예제

다음 코드 조각은 {{domxref("Worker.Worker", "Worker()")}} 생성자를 사용해 `Worker` 객체를 생성한 후, 그 `Worker`를 사용합니다.

```js
var myWorker = new Worker("worker.js");
var first = document.querySelector("#number1");

first.onchange = function () {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

전체 예제를 보시려면 저희의 [simple-web-worker 예제](https://github.com/mdn/simple-web-worker) ([라이브](http://mdn.github.io/simple-web-worker/))를 참고하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

워커의 종류마다 지원 상황이 다릅니다. 각각의 페이지를 방문해 더 자세히 알아보세요.

{{Compat}}

### 교차 출처에서의 워커 오류 동작

초기 명세에서는 교차 출처 워커 스크립트를 불러오려 시도하면 `SecurityError`가 발생했습니다. 요즘은 오류 대신 {{event("error")}} 이벤트가 발생합니다.

## 같이 보기

- [웹 워커 사용하기](/ko/docs/Web/API/Web_Workers_API/Using_web_workers)
- [워커에서 사용할 수 있는 함수와 클래스](/ko/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- 다른 종류의 워커: {{domxref("SharedWorker")}}와 [서비스 워커](/ko/docs/Web/API/Service_Worker_API).
