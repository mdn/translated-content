---
title: <feDropShadow>
slug: Web/SVG/Reference/Element/feDropShadow
l10n:
  sourceCommit: f8939dd06d7b120f77c4b4c70cac591d0eb20beb
---

**`<feDropShadow>`** は [SVG](/ja/docs/Web/SVG) のフィルタープリミティブで、入力画像のドロップシャドウを作成します。これは、{{SVGElement('filter')}} 要素内でのみ使用できます。

> [!NOTE]
> ドロップシャドウの色と透明度は、{{SVGAttr('flood-color')}} および {{SVGAttr('flood-opacity')}} というプレゼンテーション属性を使用して変更できます。

他のフィルタープリミティブと同様に、デフォルトで `linearRGB` {{glossary("color space", "色空間")}}の色成分を処理します。{{svgattr("color-interpolation-filters")}} を使用することで、代わりに `sRGB` を使用することも可能です。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("dx")}}: この属性はドロップシャドウの x オフセットを定義します。
  _値の型_: [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number); _デフォルト値_: `2`; _アニメーション_: **可**
- {{SVGAttr("dy")}}: この属性はドロップシャドウの y オフセットを定義します。
  _値の型_: [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number); _デフォルト値_: `2`; _アニメーション_: **可**
- {{SVGAttr("in")}}
- {{SVGAttr("stdDeviation")}}: この属性は、ドロップシャドウのぼかし処理における標準偏差を定義します。
  _値の型_: [**\<number-optional-number>**](/ja/docs/Web/SVG/Guides/Content_type#number-optional-number); _デフォルト値_: `2`; _アニメーション_: **可**
- [フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes_presentation_attributes): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM インターフェイス

この要素は {{domxref("SVGFEDropShadowElement")}} インターフェイスを実装しています。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow">
      <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
    </filter>
    <filter id="shadow2">
      <feDropShadow dx="0" dy="0" stdDeviation="0.5" flood-color="cyan" />
    </filter>
    <filter id="shadow3">
      <feDropShadow
        dx="-0.8"
        dy="-0.8"
        stdDeviation="0"
        flood-color="pink"
        flood-opacity="0.5" />
    </filter>
  </defs>

  <circle cx="5" cy="50%" r="4" fill="pink" filter="url(#shadow)" />
  <circle cx="15" cy="50%" r="4" fill="pink" filter="url(#shadow2)" />
  <circle cx="25" cy="50%" r="4" fill="pink" filter="url(#shadow3)" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SVG フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルター属性)、例えば {{SVGAttr('height')}}, {{SVGAttr('in')}}, {{SVGAttr('result')}}, {{SVGAttr('x')}}, {{SVGAttr('y')}}, {{SVGAttr('width')}}
- [SVG プレゼンテーション属性](/ja/docs/Web/SVG/Reference/Attribute#プレゼンテーション属性)、例えば {{SVGAttr('flood-color')}}, {{SVGAttr('flood-opacity')}}.
