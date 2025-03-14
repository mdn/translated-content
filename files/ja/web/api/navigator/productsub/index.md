---
title: "Navigator: productSub プロパティ"
short-title: productSub
slug: Web/API/Navigator/productSub
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ ApiRef("HTML DOM") }} {{Deprecated_Header}}

**`Navigator.productSub`** プロパティは読み取り専用で、現在のブラウザーのビルド番号を返します。

## 値

文字列です。

## 例

```js
document.body.textContent = `productSub: ${navigator.productSub}`;
```

{{ EmbedLiveSample("Examples") }}

## メモ

IE では、このプロパティは、 `undefined` を返します。

Apple Safari および Google Chrome では、このプロパティは常に `20030107` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
