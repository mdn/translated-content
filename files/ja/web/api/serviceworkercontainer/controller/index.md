---
title: ServiceWorkerContainer.controller
slug: Web/API/ServiceWorkerContainer/controller
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Service Workers API")}}

**`controller`** は {{domxref("ServiceWorkerContainer")}} インターフェイスの読み取り専用プロパティで、{{domxref("ServiceWorker")}} オブジェクトの状態が `activating` または `activated` ならそれ ({{domxref("ServiceWorkerRegistration.active")}} で返されるのと同じオブジェクト) を返します。このプロパティはリクエストが強制リフレッシュ（_Shift_ + リフレッシュ）やアクティブワーカーがない場合は `null` を返します。

### 値

{{domxref("ServiceWorker")}} オブジェクト。

## 例

```js
if ("serviceWorker" in navigator) {
  // 1 回限りのチェックを行って、サービスワーカーが制御しているかどうかを確認します。
  if (navigator.serviceWorker.controller) {
    console.log(
      `このページを現在制御しているもの: ${navigator.serviceWorker.controller}`,
    );
  } else {
    console.log("このページは現在サービスワーカーによって制御されていません。");
  }
} else {
  console.log("サービスワーカーをサポートしていません。");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
