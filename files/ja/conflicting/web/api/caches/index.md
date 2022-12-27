---
title: ServiceWorkerGlobalScope.caches
slug: conflicting/Web/API/caches
original_slug: Web/API/ServiceWorkerGlobalScope/caches
---

{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの **`caches`** 読み取り専用プロパティは、サービスワーカーに関連する {{domxref("CacheStorage")}} オブジェクトを返します。

## 構文

```
var myCacheStorage = self.caches;
```

### 値

{{domxref("CacheStorage")}} オブジェクト。

## 仕様

| 仕様                                                                                                             | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#global-caches', 'ServiceWorkerGlobalScope.caches')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.caches")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/sw-test)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [Web worker の使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
