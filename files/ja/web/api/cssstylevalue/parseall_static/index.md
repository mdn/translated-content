---
title: CSSStyleValue.parseAll()
slug: Web/API/CSSStyleValue/parseAll_static
l10n:
  sourceCommit: 711f8d381b5a1b9c1cfcf6719c401d4f9853222f
---

{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

**`parseAll()`** は {{domxref("CSSStyleValue")}} インターフェイスのメソッドで、出現したすべての特定の CSS プロパティを指定された値に設定し、それぞれが与えられた値の 1 つを格納した {{domxref('CSSStyleValue')}} オブジェクトの配列を返します。

## 構文

```js-nolint
parseAll(property, value)
```

### 引数

- `property`
  - : 設定する CSS プロパティです。
- `value`
  - : 指定されたプロパティに適用される 1 つ以上の値を格納したカンマ区切りの文字列。

### 返値

`CSSStyleValue` オブジェクトの配列で、それぞれが与えられた値の 1 つを格納します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CSSStyleValue.parse()")}}
- [CSS 型付きオブジェクトモデルの使用](/ja/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API)
