---
title: "TextDecoderStream: ignoreBOM プロパティ"
slug: Web/API/TextDecoderStream/ignoreBOM
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

**`ignoreBOM`** は {{domxref("TextDecoderStream")}} インターフェイスの読み取り専用プロパティで、バイトオーダーマーク (BOM) が無視されるかどうかを示す論理値を返します。

## 値

論理値で、初期値は `false` です。

## 例

```js
stream = new TextDecoderStream();
console.log(stream.ignoreBOM); // false を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
