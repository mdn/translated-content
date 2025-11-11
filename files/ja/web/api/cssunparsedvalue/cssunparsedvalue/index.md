---
title: "CSSUnparsedValue: CSSUnparsedValue() コンストラクター"
slug: Web/API/CSSUnparsedValue/CSSUnparsedValue
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSS Typed OM")}}

**`CSSUnparsedValue()`** はコンストラクターで、カスタムプロパティのプロパティ値を表す新しい {{domxref("CSSUnparsedValue")}} オブジェクトを生成します。

## 構文

```js-nolint
new CSSUnparsedValue(members)
```

### 引数

- `members`
  - : 文字列または {{domxref('CSSVariableReferenceValue')}} のどちらかの値を持つ配列です。

## 例

```js
const value = new CSSUnparsedValue(["4deg"]);
const values = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

console.log(value); // CSSUnparsedValue {0: "4deg", length: 1}
console.log(values); // CSSUnparsedValue {0: "1em", 1: "#445566", 2: "-45px", length: 3}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CSSUnparsedValue.entries")}}
- {{domxref("CSSUnparsedValue.forEach")}}
- {{domxref("CSSUnparsedValue.keys")}}
- {{domxref("CSSUnparsedValue.length")}}
- {{domxref("CSSUnparsedValue.values")}}
- [CSS 型付きオブジェクトモデルの使用](/ja/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API)
