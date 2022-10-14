---
title: Navigator.serviceWorker
slug: Web/API/Navigator/serviceWorker
---

{{APIRef("Service Workers API")}}

**`Navigator.serviceWorker`** は読み取り専用のプロパティで、[関連付けられた文書](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window)で {{domxref("ServiceWorker")}} の登録、削除、更新、通信へのアクセスを提供する {{domxref("ServiceWorkerContainer")}} オブジェクトを返します。

この機能はプライベートモードでは利用できない可能性があります。

## 構文

```
var workerContainerInstance = navigator.serviceWorker;
```

### 値

{{domxref("ServiceWorkerContainer")}}

## 例

このコードは、ブラウザーがサービスワーカーに対応しているかをチェックします。

```js
if ('serviceWorker' in navigator) {
  // Supported!
}
```

## 仕様書

| 仕様書                                                                                                               | 状態                                 | 備考     |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#navigator-serviceworker', 'navigator.serviceWorker')}} | {{Spec2('Service Workers')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Navigator.serviceWorker")}}

## 関連情報

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [サービスワーカーの使用](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
