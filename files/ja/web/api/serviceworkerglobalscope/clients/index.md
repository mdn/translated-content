---
title: ServiceWorkerGlobalScope.clients
slug: Web/API/ServiceWorkerGlobalScope/clients
tags:
  - API
  - Clients
  - Property
  - Reference
  - Service Worker
  - ServiceWorker
  - ServiceWorkerGlobalScope
translation_of: Web/API/ServiceWorkerGlobalScope/clients
---
{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} インターフェースの **`clients`** 読み取り専用プロパティは、service worker に関連する [`Clients`](/ja/docs/Web/API/Clients "The ServiceWorkerClients interface of the ServiceWorker API represents a container for a list of ServiceWorkerClient objects.") オブジェクトを返します。

## 構文

    swClients = self.clients

### 値

指定した worker に関連した {{domxref("Clients")}} オブジェクト。

## 仕様

| 仕様                                                                                                                                             | ステータス                           | コメント   |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ---------- |
| {{SpecName('Service Workers', '#service-worker-global-scope-clients', 'ServiceWorkerRegistration.clients')}} | {{Spec2('Service Workers')}} | 初期定義。 |

## ブラウザー実装状況

{{Compat("api.ServiceWorkerGlobalScope.clients")}}

## 関連項目

- [Using Service Workers](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/ja/docs/Web/Guide/Performance/Using_web_workers)
