---
title: "location: protocol プロパティ"
slug: Web/API/Location/protocol
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ApiRef("Location")}}

**`protocol`** は {{domxref("Location")}} インターフェイスのプロパティで、 URL のプロトコルスキームを、最後の `':'` を含めて表す文字列です。

## 値

文字列です。

## 例

```js
// 文書内に <a id="myAnchor" href="/ja/docs/Location.search?q=123"> 要素があるとする
const anchor = document.getElementById("myAnchor");
const result = anchor.protocol; // Returns:'https:'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
