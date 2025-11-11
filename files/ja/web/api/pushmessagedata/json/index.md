---
title: "PushMessageData: json() メソッド"
short-title: json()
slug: Web/API/PushMessageData/json
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Push API")}}

**`json()`** は {{domxref("PushMessageData")}} インターフェイスのメソッドで、プッシュメッセージのデータを [JSON](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON) 文字列として解釈し、結果を返します。

## 構文

```js-nolint
json()
```

### 引数

なし。

### 返値

プッシュイベントのデータを JSON として解釈した結果です。これは JSON で表現されるあらゆるものになり得ます。オブジェクト、配列、文字列、数値などです。

## 例

```js
self.addEventListener("push", (event) => {
  const myData = event.data.json();

  // JSON を使って何かを実行する
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
