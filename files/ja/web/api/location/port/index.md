---
title: "location: port プロパティ"
slug: Web/API/Location/port
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ApiRef("Location")}}

**`port`** は {{domxref("Location")}} インターフェイスのプロパティで、URL のポート番号が入った文字列です。URL に明示的にポート番号が指定されていない場合は、`''` に設定されます。

## 値

文字列です。

## 例

```js
// 文書内に <a id="myAnchor" href="/ja/docs/Location.search?q=123"> 要素があるとする
const anchor = document.getElementByID("myAnchor");
const result = anchor.port; // Returns:'443'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
