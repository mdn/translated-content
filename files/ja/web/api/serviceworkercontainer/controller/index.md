---
title: ServiceWorkerContainer.controller
slug: Web/API/ServiceWorkerContainer/controller
---

{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerContainer")}} インターフェイスの **`controller`** 読み取り専用プロパティは、{{domxref("ServiceWorker")}} オブジェクトの状態が `activating` または `activated` ならそれ ({{domxref("ServiceWorkerRegistration.active")}} で返されるのと同じオブジェクト) を返します。このプロパティはリクエストが強制リフレッシュ(_Shift_ + リフレッシュ)やアクティブワーカーがない場合は `null` を返します。

## 構文

```
var myController = navigator.serviceWorker.controller;
```

### 値

{{domxref("ServiceWorker")}} オブジェクト。.

## 例

```js
if ('serviceWorker' in navigator) {
  // 1回限りのチェックを行って、サービスワーカーが制御しているかどうかを確認します。
  if (navigator.serviceWorker.controller) {
    console.log(`このページは現在サービスワーカーによって制御されています: ${navigator.serviceWorker.controller}`);
  } else {
    console.log('このページは現在サービスワーカーによって制御されていません。');
  }
} else {
  console.log('サービスワーカーをサポートしていません。');
}
```

## 仕様

| 仕様書                                                                                                                                               | 策定状況                             | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#navigator-service-worker-controller', 'ServiceWorkerRegistration.controller')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerContainer.controller")}}
