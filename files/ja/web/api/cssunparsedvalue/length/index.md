---
title: "CSSUnparsedValue: length プロパティ"
slug: Web/API/CSSUnparsedValue/length
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSS Typed OM")}}

**`length`** は {{domxref("CSSUnparsedValue")}} インターフェイスの読み取り専用プロパティで、オブジェクト内の項目数を返します。

## 値

整数です。

## 例

この例では、{{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}} コンストラクターを使用したあと、長さを照会しています。

```js
const values = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

console.log(values.length); // 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
- {{domxref("CSSUnparsedValue.entries")}}
- {{domxref("CSSUnparsedValue.forEach")}}
- {{domxref("CSSUnparsedValue.keys")}}
- {{domxref("CSSUnparsedValue.values")}}
- [CSS 型付きオブジェクトモデルの使用](/ja/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API)
