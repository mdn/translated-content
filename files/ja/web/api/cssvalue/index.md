---
title: CSSValue
slug: Web/API/CSSValue
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}

**`CSSValue`** インターフェイスは、 CSS プロパティの現在の計算値を表します。

> **メモ:** このインターフェイスは、型付き CSS オブジェクトモデルを作成する試みの一部でした。この試みは放棄され、ほとんどのブラウザーはこのインターフェイスを実装していません。
>
> 目的を達成するためには、次のものを利用することができます。
>
> - 型のない [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)、広く対応されています。
> - 新しい [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API)、対応が限られており、実験的と見なされています。

## インスタンスプロパティ

- {{DOMxRef("CSSValue.cssText")}} {{Deprecated_Inline}}
  - : 文字列で、現在の値を表します。
- {{DOMxRef("CSSValue.cssValueType")}} {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : `unsigned short` で、値の型を定義するコードを表します。可能な値は次のとおりです。

    | 定数                  | 説明                                                                                                                                                                                                                                 |
    | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `CSS_CUSTOM`          | この値はカスタム値です。                                                                                                                                                                                                             |
    | `CSS_INHERIT`         | この値は継承したものであり、 `cssText` は `"inherit"` となっています。                                                                                                                                                               |
    | `CSS_PRIMITIVE_VALUE` | この値はプリミティブ値であり、 {{DOMxRef("CSSPrimitiveValue")}} インターフェイスのインスタンスは、この `CSSValue` インターフェイスのインスタンスに対してバインディング固有のキャストメソッドを使用することで取得することができます。 |
    | `CSS_VALUE_LIST`      | この値は `CSSValue` のリストであり、 {{DOMxRef("CSSValueList")}} インターフェイスのインスタンスは、この `CSSValue` インターフェイスのインスタンスに対してバインディング固有のキャストメソッドを使用して取得することができます。      |

## 仕様書

この機能は元々 [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) 仕様で定義されていましたが、その後、全ての標準化作業から外されています。

これは、現代の、しかし互換性のない、[CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API) に取って代わられ、標準化路線になりました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("CSSPrimitiveValue")}}
- {{DOMxRef("CSSValueList")}}
