---
title: Web Workers API
slug: Web/API/Web_Workers_API
---

{{DefaultAPISidebar("Web Workers API")}}

**웹 워커**(Web worker)는 스크립트 연산을 웹 어플리케이션의 주 실행 스레드와 분리된 별도의 백그라운드 스레드에서 실행할 수 있는 기술입니다. 웹 워커를 통해 무거운 작업을 분리된 스레드에서 처리하면 주 스레드(보통 UI 스레드)가 멈추거나 느려지지 않고 동작할 수 있습니다.

## 웹 워커의 개념과 활용법

워커는 이름을 지정한 JavaScript 파일을 구동하는 객체로서 {{domxref("Worker.Worker", "Worker()")}} 등의 생성자로 생성합니다. 해당 파일은 현재 {{domxref("window")}}와는 다른 전역 맥락에서 동작하는 워커 스레드에서 작동합니다. 이 때, 전역 맥락은 전용 워커(단일 스크립트에서만 사용하는 워커)의 경우 {{domxref("DedicatedWorkerGlobalScope")}} 객체이고, 공유 워커(여러 스크립트에서 공유하는 워커)의 경우 {{domxref("SharedWorkerGlobalScope")}} 객체입니다.

원하는 코드는 뭐든 워커 스레드에서 실행할 수 있으나 몇 가지 예외가 존재합니다. 예를 들어 워커에서 DOM을 직접 조작할 수 없고, {{domxref("window")}}의 일부 메서드와 속성은 사용할 수 없습니다. 그러나 [WebSocket](/ko/docs/Web/API/WebSockets_API)과 [IndexedDB](/ko/docs/Web/API/IndexedDB_API)를 포함한 많은 수의 항목은 사용 가능합니다. [워커에서 사용할 수 있는 함수와 클래스](/ko/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)에서 더 자세히 알아보세요.

워커와 메인 스레드 간의 데이터 교환은 메시지 시스템을 사용합니다. 양측 모두 postMessage() 메서드를 사용해 전송하고, `onmessage` 이벤트 처리기(메시지는 {{domxref("Worker/message_event", "message")}}의 `data` 속성에 들어있습니다)를 사용해 수신합니다. 전송하는 데이터는 복사하며 공유하지 않습니다.

워커 역시 새로운 워커를 생성할 수 있습니다. 단, 생성하려는 워커가 부모 페이지와 동일한 {{glossary("origin", "출처")}}에 호스팅 되어있어야 합니다. 추가로, 워커는 {{domxref("XMLHttpRequest")}}를 사용해 네트워크 입출력을 할 수 있지만 `responseXML`과 `channel` 특성은 항상 {{jsxref("null")}}을 반환합니다.

전용 워커 외에도 다음과 같은 다른 유형의 워커도 존재합니다.

- 공유 워커는 워커와 도메인이 같다면 창, IFrame, 등등 여러 곳에서 작동 중인 다수의 스크립트에서 사용 가능한 워커입니다. 전용 워커보다 복잡한 편으로, 스크립트간 통신은 활성 포트를 통해 이뤄져야 합니다. {{domxref("SharedWorker")}} 문서에서 더 자세히 알아보세요.
- 서비스 워커는 웹 응용 프로그램, 브라우저, 그리고 (사용 가능한 경우) 네트워크 사이의 프록시 서버 역할을 합니다. 서비스 워커의 개발 의도는 여러가지가 있지만, 그 중에서도 효과적인 오프라인 경험을 생성하고, 네트워크 요청을 가로채서 네트워크 사용 가능 여부에 따라 적절한 행동을 취하고, 서버의 자산을 업데이트할 수 있습니다. 또한 푸시 알림과 백그라운드 동기화 API로의 접근도 제공합니다.
- 오디오 워커는 웹 워커 맥락 내에서 스크립트를 통한 직접적인 오디오 처리 능력을 제공합니다.

## 웹 워커 인터페이스

- {{domxref("AbstractWorker")}}
  - : 모든 종류의 워커({{domxref("Worker")}}, {{domxref("SharedWorker")}} 등)에 공통적인 속성과 메서드를 추상화합니다.
- {{domxref("Worker")}}
  - : 실행 중인 워커 스레드를 나타냅니다. 현재 작동 중인 워커로 메시지를 전송할 때 사용할 수 있습니다.
- {{domxref("WorkerLocation")}}
  - : {{domxref("Worker")}}가 실행하는 스크립트의 절대 위치를 정의합니다.
- {{domxref("SharedWorker")}}
  - : 다수의 창, {{htmlelement("iframe")}}, 혹은 다른 워커 등 {{glossary("Browsing context", "브라우징 맥락")}} 여러 개에서 접근할 수 있는 특정 종류의 워커를 나타냅니다.
- {{domxref("WorkerGlobalScope")}}
  - : 모든 워커의 통용 범위를 나타냅니다. 통용 범위는 일반적인 웹 콘텐츠의 {{domxref("Window")}}와 같은 역할을 합니다. 각각의 워커 유형별로 이 인터페이스를 상속한 후 보다 세부적인 기능을 추가한 인터페이스를 전역 범위 객체로 사용합니다.
- {{domxref("DedicatedWorkerGlobalScope")}}
  - : {{domxref("WorkerGlobalScope")}}를 상속해서 몇 가지 전용 기능을 추가한 전용 워커의 범위를 나타냅니다.
- {{domxref("SharedWorkerGlobalScope")}}
  - : {{domxref("WorkerGlobalScope")}}를 상속해서 몇 가지 전용 기능을 추가한 공유 워커의 범위를 나타냅니다.
- {{domxref("WorkerNavigator")}}
  - : 사용자 에이전트(클라이언트)의 신분과 상태를 나타냅니다.

## 예제

워커의 기본 사용법을 보이는 간단한 데모를 준비해놨습니다.

- [기본적인 전용 워커 예제](https://github.com/mdn/simple-web-worker) ([실행](https://mdn.github.io/simple-web-worker/))
- [기본적인 공유 워커 예제](https://github.com/mdn/simple-shared-worker) ([실행](https://mdn.github.io/simple-shared-worker/))

[웹 워커 사용하기](/ko/docs/Web/API/Web_Workers_API/Using_web_workers)에서 데모의 동작법을 자세히 알아볼 수 있습니다.

## 명세

{{Specifications}}

## 같이 보기

- [웹 워커 사용하기](/ko/docs/Web/API/Web_Workers_API/Using_web_workers)
- [`Worker` 인터페이스](/ko/docs/Web/API/Worker)
- [`SharedWorker` 인터페이스](/ko/docs/Web/API/SharedWorker)
- [Service Worker API](/ko/docs/Web/API/Service_Worker_API)
- [워커에서 사용할 수 있는 함수와 클래스](/ko/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
