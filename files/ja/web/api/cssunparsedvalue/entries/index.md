---
title: "CSSUnparsedValue: entries() メソッド"
slug: Web/API/CSSUnparsedValue/entries
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSS Typed OM")}}

**`CSSUnparsedValue.entries()`** メソッドは、指定されたオブジェクトの列挙可能なプロパティ `[key, value]` の組の配列を、{{jsxref("Statements/for...in", "for...in")}} ループで提供されるのと同じ順序で返します（違いは for-in ループがプロトタイプチェーン上のプロパティも列挙することです）。

## 構文

```js-nolint
entries(obj)
```

### 引数

- `obj`
  - : {{domxref('CSSUnparsedValue')}} で、列挙可能な固有のプロパティの `[key, value]` の組を返します。

### 返値

指定された `CSSUnparsedValue` の配列で、列挙可能な固有のプロパティの `[key, value]` の組。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
- {{domxref("CSSUnparsedValue.forEach")}}
- {{domxref("CSSUnparsedValue.keys")}}
- {{domxref("CSSUnparsedValue.length")}}
- {{domxref("CSSUnparsedValue.values")}}
- [CSS 型付きオブジェクトモデルの使用](/ja/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API)
