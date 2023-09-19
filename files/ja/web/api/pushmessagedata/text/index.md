---
title: "PushMessageData: text() メソッド"
short-title: text()
slug: Web/API/PushMessageData/text
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Push API")}}

**`text()`** は {{domxref("PushMessageData")}} インターフェイスのメソッドで、プッシュメッセージのデータをプレーンテキスト文字列として抽出します。

## 構文

```js-nolint
text()
```

### 引数

なし。

### 返値

文字列です。

## 例

```js
self.addEventListener("push", (event) => {
  const textObj = event.data.text();

  // テキストを使用して何かを実行する
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
