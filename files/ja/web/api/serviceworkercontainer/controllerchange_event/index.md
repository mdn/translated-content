---
title: ServiceWorkerContainer.oncontrollerchange
slug: Web/API/ServiceWorkerContainer/controllerchange_event
original_slug: Web/API/ServiceWorkerContainer/oncontrollerchange
---

{{APIRef("Service Workers API")}}{{ SeeCompatTable() }}

{{domxref("ServiceWorkerContainer")}} インターフェイスの **`oncontrollerchange`** プロパティは、{{Event("controllerchange")}} イベントが発生するたびに（文書に関連する {{domxref("ServiceWorkerRegistration")}} が新しいアクティブ（{{domxref("ServiceWorkerRegistration.active","active")}}）ワーカーを取得したときに）発生するイベントハンドラーです。

## 構文

```
serviceWorkerContainer.oncontrollerchange = function(controllerchangeevent) { ... }
```

## 例

```js
// 未定
```

## 仕様

| 仕様                                                                                                                                                                     | 状態                                 | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-serviceworkercontainer-oncontrollerchange', 'ServiceWorkerContainer: oncontrollerchange')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerContainer.oncontrollerchange")}}
