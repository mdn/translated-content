---
title: PushMessageData.arrayBuffer()
slug: Web/API/PushMessageData/arrayBuffer
---

{{APIRef("Push API")}}{{SeeCompatTable()}}

{{domxref("PushMessageData")}} インターフェイスの **`arrayBuffer()`** メソッドは、プッシュメッセージデータを {{jsxref("ArrayBuffer")}} オブジェクトとして抽出します。

## 構文

```js
var myArrayBuffer = PushEvent.data.arrayBuffer();
```

### 引数

なし。

### 返値

{{jsxref("ArrayBuffer")}}。

## 例

```js
self.addEventListener('push', function(event) {
  var buffer = event.data.arrayBuffer();

  // array buffer を使用して何かを実行する。
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.PushMessageData.arrayBuffer")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)
