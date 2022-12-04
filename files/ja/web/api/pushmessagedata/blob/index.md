---
title: PushMessageData.blob()
slug: Web/API/PushMessageData/blob
---

{{APIRef("Push API")}}{{SeeCompatTable()}}

{{domxref("PushMessageData")}} インターフェイスの **`blob()`** メソッドは、プッシュメッセージデータを {{domxref("Blob")}} オブジェクトとして抽出します。

## 構文

```js
var myBlob = PushEvent.data.blob();
```

### 引数

なし。

### 返値

{{domxref("Blob")}}。

## 例

```js
self.addEventListener('push', function(event) {
  var blob = event.data.blob();

  // Blob を使用して何かを実行する。
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.PushMessageData.blob")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)
