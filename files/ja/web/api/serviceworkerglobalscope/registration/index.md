---
title: ServiceWorkerGlobalScope.registration
slug: Web/API/ServiceWorkerGlobalScope/registration
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの **`registration`** 読み取り専用プロパティは、Service Worker の登録を表す {{domxref("ServiceWorkerRegistration")}} オブジェクトの参照を返します。

## 構文

```js
serviceWorkerRegistration = self.registration
```

### 値

{{domxref("ServiceWorkerRegistration")}} オブジェクト。

## 仕様

| 仕様                                                                                                                                                         | ステータス                           | コメント   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ---------- |
| {{SpecName('Service Workers', '#service-worker-global-scope-registration', 'ServiceWorkerGlobalScope.registration')}} | {{Spec2('Service Workers')}} | 初期定義。 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.registration")}}

## 関連情報

- [Using Service Workers](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/ja/docs/Web/Guide/Performance/Using_web_workers)
