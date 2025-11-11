---
title: CSSValue.cssText
slug: Web/API/CSSValue/cssText
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("CSSOM")}}{{Deprecated_header}}

**`cssText`** は {{domxref("CSSValue")}} インターフェイスのプロパティで、 CSS プロパティの現在の計算値を表します。

> [!NOTE]
> このインターフェイスは、型付き CSS オブジェクトモデルを作成する試みの一部でした。この試みは放棄され、ほとんどのブラウザーはこのインターフェイスを実装していません。
>
> 目的を達成するためには、次のものを利用することができます。
>
> - 型のない [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)、広く対応されています。
> - 新しい [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API)、対応が限られており、実験的と見なされています。

## 値

文字列で、現在の CSS プロパティ値を表します。

## 例

```js
const styleDeclaration = document.styleSheets[0].cssRules[0].style;
const cssValue = styleDeclaration.getPropertyCSSValue("color");
console.log(cssValue.cssText);
```

## 仕様書

この機能は元々 [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) 仕様で定義されていましたが、その後、全ての標準化作業から外されています。

これは、新しい、しかし互換性のない、[CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API) に取って代わられ、標準化路線になりました。

## ブラウザーの互換性

この機能は元々 [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) 仕様で定義されていましたが、その後、全ての標準化作業から外されています。

これは、新しい、しかし互換性のない、[CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API) に取って代わられ、標準化路線になりました。

## 関連情報

- {{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}}
