---
title: Background Synchronization API
slug: Web/API/Background_Synchronization_API
page-type: web-api-overview
browser-compat:
  - api.SyncManager
  - api.ServiceWorkerGlobalScope.sync_event
spec-urls: https://wicg.github.io/background-sync/spec/
---

{{DefaultAPISidebar("Background Sync")}}{{Securecontext_Header}}{{AvailableInWorkers}}

**Background Synchronization API**를 사용하면 웹앱에서 작업을 연기하여 사용자가 안정적으로 네트워크에 연결되었을 때, [서비스워커](/ko/docs/Web/API/Service_Worker_API)에서 작업을 실행하도록 할 수 있습니다.

## 개념과 사용법

Background Synchronization API를 사용하면 장치가 오프라인인 경우에 웹 어플리케이션의 서버 동기화 작업을 그들의 서비스 워커에게 위임하여 나중에 처리할 수 있습니다. 애플리케이션을 사용하는 동안 요청을 보낼 수 없는 경우 백그라운드에서 요청을 보내도록 사용할 수 있습니다.

예를 들어, 이메일 클라이언트 애플리케이션에서 장치가 네트워크에 연결되어 있지 않더라도, 사용자가 언제든지 메시지를 작성하고 보낼 수 있도록 해줍니다. 애플리케이션 프런트엔드가 동기화 요청을 등록하면, 서비스 워커는 네트워크가 다시 복구될 때 알림을 받고 동기화를 수행합니다.

{{domxref('SyncManager')}} 인터페이스는 {{domxref('ServiceWorkerRegistration.sync')}}를 통해 사용할 수 있습니다. 고유 태그 식별자는 동기화 이벤트의 '이름(name)'을 지정하도록 설정되며, 이는 {{domxref('ServiceWorker')}} 스크립트 내에서 수신할 수 있습니다. 이벤트가 수신되면, 서버에 요청을 보내는 등의 사용 가능한 모든 기능을 실행할 수 있습니다.

이 API는 서비스 워커에 의존하기 때문에, 이 API에서 제공하는 기능은 보안 컨텍스트에서만 사용할 수 있습니다.

## 인터페이스

- {{domxref('SyncManager')}} {{Experimental_Inline}}
  - : 이후에 서비스워커 내에서 실행할 작업을 네트워크 연결에 등록합니다. 이러한 작업을 _백그라운드 동기 요청 (background sync requests)_ 라고 합니다.
- {{domxref('SyncEvent')}} {{Experimental_Inline}}
  - : {{domxref('ServiceWorker')}}의 [글로벌 범위](/ko/docs/Web/API/ServiceWorkerGlobalScope)로 전송되는 동기화 이벤트를 나타냅니다. 이것은 장치가 네트워크에 연결됐을 때 서비스워커에서 작업을 실행할 수 있는 방법을 제공합니다.

### 타 인터페이스로의 확장

[서비스워커 API](/ko/docs/Web/API/Service_worker_API)에 추가된 다음 추가항목은 백그라운드 동기화를 세팅할 수 있는 진입점을 제공합니다.

- {{domxref('ServiceWorkerRegistration.sync')}} {{ReadOnlyInline}}
  - : 디바이스가 네트워크에 연결되면 실행할 작업을 등록하기 위한 {{domxref('SyncManager')}} 참조를 반환합니다.
- {{domxref('ServiceWorkerGlobalScope/sync_event')}} 이벤트
  - : {{domxref('ServiceWorkerGlobalScope/sync_event', 'sync')}} 이벤트가 발생할 때마다 이벤트 핸들러가 실행됩니다. 이는 네트워크를 사용할 수 있게 되는 즉시 발생합니다.

## 예

아래의 예시를 통해 인터페이스 사용법을 확인하실 수 있습니다.

### 백그라운드 동기화 요청

아래의 비동기 함수는 브라우저 컨텍스트에서 백그라운드 동기화를 등록합니다.

```js
async function syncMessagesLater() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.sync.register("sync-messages");
  } catch {
    console.log("Background Sync could not be registered!");
  }
}
```

### 태그별 백그라운드 동기화 검증

이 코드는 백그라운드 동기화 작업이 지정된 태그와 함께 등록되었는지 확인합니다.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.sync.getTags().then((tags) => {
    if (tags.includes("sync-messages")) {
      console.log("Messages sync already requested");
    }
  });
});
```

### 서비스워커 내 백그라운드 동기화 작업 수신

아래의 예시는 서비스워커에서 백그라운드 동기화 이벤트에 응답하는 방법을 보여줍니다.

```js
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-messages") {
    event.waitUntil(sendOutboxMessages());
  }
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이보기

- [백그라운드 동기화 소개](https://developer.chrome.com/blog/background-sync/)
