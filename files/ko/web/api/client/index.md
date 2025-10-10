---
title: Client
slug: Web/API/Client
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

`Client` 인터페이스는 {{domxref("Worker")}}나 {{domxref("SharedWorker")}}와 같은 실행 가능한 컨텍스트를 나타냅니다. {{domxref("Window")}} 클라이언트는 보다 구체적인 {{domxref("WindowClient")}}로 표현됩니다. `Client`/`WindowClient` 객체는 {{domxref("Clients.matchAll","Clients.matchAll()")}}이나 {{domxref("Clients.get","Clients.get()")}}과 같은 메서드를 통해 가져올 수 있습니다.

## 인스턴스 메서드

- {{domxref("Client.postMessage()")}}
  - : 클라이언트에 메시지를 전송합니다.

## 인스턴스 속성

- {{domxref("Client.frameType")}} {{ReadOnlyInline}}
  - : 클라이언트의 프레임 타입을 문자열로 나타냅니다. `"auxiliary"`, `"top-level"`, `"nested"`, 또는 `"none"` 값을 가질 수 있습니다.
- {{domxref("Client.id")}} {{ReadOnlyInline}}
  - : 클라이언트의 범용 고유 식별자를 문자열로 나타냅니다.
- {{domxref("Client.type")}} {{ReadOnlyInline}}
  - : 클라이언트의 타입을 문자열로 나타냅니다. `"window"`, `"worker"`, 또는 `"sharedworker"` 값을 가질 수 있습니다.
- {{domxref("Client.url")}} {{ReadOnlyInline}}
  - : 클라이언트의 URL을 문자열로 나타냅니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Service Worker 사용하기](/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers)
