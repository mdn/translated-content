---
title: CSSSkew()
slug: Web/API/CSSSkew/CSSSkew
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`CSSSkew()`** コンストラクターは、新しい {{domxref("CSSSkew")}} オブジェクトを返します。これは、CSS の {{CSSXRef('transform')}} プロパティの [`skew()`](/ja/docs/Web/CSS/Reference/Values/transform-function/skew) の値を表します。

## 構文

```js-nolint
new CSSSkew(ax, ay)
```

### 引数

- {{domxref('CSSSkew.ax','ax')}}
  - : 構築される {{domxref('CSSSkew')}} オブジェクトの `ax` (X 軸) 角度を表す値です。これは {{domxref('CSSNumericValue')}} である必要があります。
- {{domxref('CSSSkew.ay','ay')}}
  - : 構築される {{domxref('CSSSkew')}} オブジェクトの `ay` (Y 軸) 角度を表す値です。これは {{domxref('CSSNumericValue')}} である必要があります。

## 例

To do

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
