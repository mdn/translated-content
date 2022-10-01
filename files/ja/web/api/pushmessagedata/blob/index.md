---
title: PushMessageData.blob()
slug: Web/API/PushMessageData/blob
---

{{APIRef("Push API")}}{{SeeCompatTable()}}

{{domxref("PushMessageData")}} インターフェースの **`blob()`** メソッドは、プッシュメッセージデータを {{domxref("Blob")}} オブジェクトとして抽出します。

## 構文

```js
var myBlob = PushEvent.data.blob();
```

### パラメーター

なし。

### 戻り値

{{domxref("Blob")}}。

## 例

```js
self.addEventListener('push', function(event) {
  var blob = event.data.blob();

  // Blob を使用して何かを実行する。
});
```

## 仕様

| 仕様                                                                                         | 状態                         | コメント   |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ---------- |
| {{SpecName('Push API', '#widl-PushMessageData-blob-Blob', 'blob()')}} | {{Spec2('Push API')}} | 初期定義。 |

## ブラウザ実装状況

{{Compat("api.PushMessageData.blob")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)
