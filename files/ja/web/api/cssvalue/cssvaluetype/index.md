---
title: CSSValue.cssValueType
slug: Web/API/CSSValue/cssValueType
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("CSSOM")}}{{Deprecated_header}}

**`cssValueType`** は {{domxref("CSSValue")}} インターフェイスの読み取り専用プロパティで、 CSS プロパティの現在の計算値の型を表します。

> **メモ:** このインターフェイスは、型付き CSS オブジェクトモデルを作成する試みの一部でした。この試みは放棄され、ほとんどのブラウザーはこのインターフェイスを実装していません。
>
> 目的を達成するためには、次のものを利用することができます。
>
> - 型のない [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)、広く対応されています。
> - 新しい [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API)、対応が限られており、実験的と見なされています。

### 値

`unsigned short` で、値の型を定義するコードを表します。可能な値は次のとおりです。

| 定数                  | 説明                                                                                                                                                                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CSS_CUSTOM`          | この値はカスタム値です。                                                                                                                                                                                                            |
| `CSS_INHERIT`         | この値は継承したものであり、 `cssText` は `"inherit"` となっています。                                                                                                                                                              |
| `CSS_PRIMITIVE_VALUE` | この値はプリミティブ値であり、{{DOMxRef("CSSPrimitiveValue")}} インターフェイスのインスタンスは、この `CSSValue` インターフェイスのインスタンスに対してバインディング固有のキャストメソッドを使用することで取得することができます。 |
| `CSS_VALUE_LIST`      | この値は `CSSValue` のリストであり、 {{DOMxRef("CSSValueList")}} インターフェイスのインスタンスは、この `CSSValue` インターフェイスのインスタンスに対してバインディング固有のキャストメソッドを使用して取得することができます。     |

## 例

```js
const styleDeclaration = document.styleSheets[0].cssRules[0].style;
const cssValue = styleDeclaration.getPropertyCSSValue("color");
console.log(cssValue.cssValueType);
```

## 仕様書

この機能は元々 [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) 仕様で定義されていましたが、その後、全ての標準化作業から外されています。

これは、新しい、しかし互換性のない、[CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API) に取って代わられ、標準化路線になりました。

## ブラウザーの互換性

{{Compat}}
