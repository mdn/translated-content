---
title: ServiceWorkerGlobalScope.clients
slug: Web/API/ServiceWorkerGlobalScope/clients
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの **`clients`** 読み取り専用プロパティは、service worker に関連する [`Clients`](/ja/docs/Web/API/Clients) オブジェクトを返します。

## 構文

```
swClients = self.clients
```

### 値

指定した worker に関連した {{domxref("Clients")}} オブジェクト。

## 仕様

| 仕様                                                                                                                                             | ステータス                           | コメント   |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ---------- |
| {{SpecName('Service Workers', '#service-worker-global-scope-clients', 'ServiceWorkerRegistration.clients')}} | {{Spec2('Service Workers')}} | 初期定義。 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.clients")}}

## 関連情報

- [Using Service Workers](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/ja/docs/Web/Guide/Performance/Using_web_workers)
