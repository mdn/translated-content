---
title: PushMessageData.json()
slug: Web/API/PushMessageData/json
---

{{APIRef("Push API")}}{{SeeCompatTable()}}

{{domxref("PushMessageData")}} インターフェースの **`json()`** メソッドは、プッシュメッセージデータを [JSON](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON) オブジェクトとして抜き出します。

## 構文

```js
var myJson = PushEvent.data.json();
```

### パラメーター

なし。

### 戻り値

[JSON](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON) オブジェクト。

## 例

```js
self.addEventListener('push', function(event) {
  var jsonObj = event.data.json();

  // JSON を使って何かを実行する
});
```

## 仕様

{{Specifications}}

## ブラウザ実装状況

{{Compat("api.PushMessageData.json")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)
