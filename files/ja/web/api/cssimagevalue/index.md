---
title: CSSImageValue
slug: Web/API/CSSImageValue
tags:
  - API
  - CSS 型付きオブジェクトモデル API
  - CSSImageValue
  - 実験的
  - Houdini
  - インターフェイス
  - リファレンス
browser-compat: api.CSSImageValue
translation_of: Web/API/CSSImageValue
---
{{SeeCompatTable}}{{APIRef("CSS Typed Object Model API")}}

**`CSSImageValue`** は [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Object_Model#css_typed_object_model) のインターフェイスで、 {{cssxref('background-image')}}, {{cssxref('list-style-image')}}, {{cssxref('border-image-source')}} のような画像を取るプロパティの値を表します。

CSSImageValue オブジェクトは [`<image>`](/ja/docs/Web/CSS/image) のうち URL に関わるもの、例えば [`url()`](</ja/docs/Web/CSS/url>) や [`image()`](</ja/docs/Web/CSS/image>) を表しますが、 [`linear-gradient()`](</ja/docs/Web/CSS/gradient/linear-gradient>) や [`element()`](</ja/docs/Web/CSS/element>) は表しません。

{{InheritanceDiagram}}

## プロパティ

なし。

## メソッド

_{{domxref('CSSStyleValue')}} からメソッドを継承しています。_

## 例

次のような要素を作成します。

```html
<button>Magic Wand</button>
```

バイナリーファイルを要求する背景画像など、いくつかの CSS を追加しています。

```css
button {
  display: inline-block;
  min-height: 100px; min-width: 100px;
  background: no-repeat 5% center url(magicwand.png) aqua;
}
```

その要素のスタイルマップを取得します。そして、スタイルマップから background-image を取得し、文字列化します。

```js
// 要素を取得
const button = document.querySelector( 'button' );

// computedStyleMap()ですべての計算済みスタイルを取得
const allComputedStyles = button.computedStyleMap();

// CSSImageValue を返す例
console.log( allComputedStyles.get('background-image') );
console.log( allComputedStyles.get('background-image').toString() );
```

{{EmbedLiveSample("Examples", 120, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSNumericValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}
