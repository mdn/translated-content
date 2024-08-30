---
title: CSSStyleDeclaration.getPropertyCSSValue()
slug: Web/API/CSSStyleDeclaration/getPropertyCSSValue
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{ APIRef("CSSOM") }} {{deprecated_header}}

**CSSStyleDeclaration.getPropertyCSSValue()** メソッドインターフェイスは、プロパティの CSS 値を含む {{domxref('CSSValue')}} を返します。プロパティ名が一括指定プロパティの場合は `null` を返すことに注意して下さい。

> [!NOTE]
> このインターフェイスは、型付けされた CSS オブジェクトモデルを作成する試みの一部でした。この試みは放棄されており、ほとんどのブラウザーは実装していません。
>
> この目的を達成するには、以下のものを使用することができます。
>
> - {{domxref("CSSStyleDeclaration.getPropertyValue()")}} が型付けなしの [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)にあり、広く対応されています。
> - {{domxref("Element.computedStyleMap()")}} が最近の [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API) にありますが、対応が少なく実験的なものと考えられています。

## 構文

```js-nolint
getPropertyCSSValue(property)
```

### 引数

- `property`
  - : 文字列で、取得するプロパティ名を表します。

### 返値

プロパティの CSS 値を含む {{domxref('CSSValue')}} です。存在しない場合は `null` を返します。

## 例

次の JavaScript コードは、 CSS の `color` プロパティの計算済みの RGB 値を含むオブジェクトを取得します。

```js
const style = window.getComputedStyle(elem, null);
const rgbObj = style.getPropertyCSSValue("color").getRGBColorValue();
```

## 仕様書

この機能はもともと、 [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style) 仕様書で定義されていましたが、それ以降の標準化の取り組みからは外れています。

この機能は、最新の、しかし互換性のない、 [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API) に取って代わられ、現在は標準化されています。

## ブラウザーの互換性

{{Compat}}
