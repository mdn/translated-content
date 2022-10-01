---
title: PushMessageData.text()
slug: Web/API/PushMessageData/text
---

{{APIRef("Push API")}}{{SeeCompatTable()}}

{{domxref("PushMessageData")}} インターフェースの **`text()`** メソッドは、プッシュメッセージデータをプレーンテキスト文字列として抽出します。

## 構文

```js
var myText = PushEvent.data.text();
```

### パラメーター

なし。

### 戻り値

{{domxref("USVString")}}。

## 例

```js
self.addEventListener('push', function(event) {
  var textObj = event.data.text();

  // テキストを使用して何かを実行する
});
```

## 仕様

| 仕様                                                                                                 | 状態                         | コメント   |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ---------- |
| {{SpecName('Push API', '#widl-PushMessageData-text-USVString', 'text()')}} | {{Spec2('Push API')}} | 初期定義。 |

## ブラウザ実装状況

{{Compat("api.PushMessageData.text")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)
