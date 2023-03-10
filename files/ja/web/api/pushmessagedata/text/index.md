---
title: PushMessageData.text()
slug: Web/API/PushMessageData/text
---

{{APIRef("Push API")}}{{SeeCompatTable()}}

{{domxref("PushMessageData")}} インターフェイスの **`text()`** メソッドは、プッシュメッセージデータをプレーンテキスト文字列として抽出します。

## 構文

```js
var myText = PushEvent.data.text();
```

### 引数

なし。

### 返値

{{domxref("USVString")}}。

## 例

```js
self.addEventListener('push', function(event) {
  var textObj = event.data.text();

  // テキストを使用して何かを実行する
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.PushMessageData.text")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)
