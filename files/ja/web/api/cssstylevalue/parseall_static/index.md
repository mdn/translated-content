---
title: "CSSStyleValue: parseAll() 静的メソッド"
short-title: parseAll()
slug: Web/API/CSSStyleValue/parseAll_static
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("CSS Typed Object Model API")}}

**`parseAll()`** は {{domxref("CSSStyleValue")}} インターフェイスのメソッドで、特定の CSS プロパティが出現したものすべてに指定された値に設定し、それぞれが指定された値のいずれかを含む {{domxref('CSSStyleValue')}} オブジェクトの配列を返します。

## 構文

```js-nolint
CSSStyleValue.parseAll(property, value)
```

### 引数

- `property`
  - : 設定する CSS プロパティです。
- `value`
  - : 指定されたプロパティに適用される 1 つ以上の値を格納したカンマ区切りの文字列。

### 返値

`CSSStyleValue` オブジェクトの配列で、それぞれが与えられた値の 1 つを格納したものです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`CSSStyleValue.parse()`](/ja/docs/Web/API/CSSStyleValue/parse_static)
- [CSS 型付きオブジェクトモデルの使用](/ja/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API)
