---
title: <polygon>
slug: Web/SVG/Reference/Element/polygon
l10n:
  sourceCommit: 34c204f8f6c3f7ac60ebb23fca9798680aee9956
---

**`<polygon>`** は [SVG](/ja/docs/Web/SVG) の要素で、接続された一連の直線の区間で構成される閉じた図形を定義します。最後の点は最初の点と結ばれます。

開いた図形については {{SVGElement("polyline")}} 要素をご覧ください。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 既定で塗りつぶす多角形の例 -->
  <polygon points="0,100 50,25 50,75 100,0" />

  <!-- 同じ多角形で線を持ち塗りつぶされない例 -->
  <polygon points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## 属性

- {{SVGAttr('points')}}
  - : この属性は多角形を描くのに必要な点 (絶対座標の `x,y` の組) のリストを定義します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number)+ ; _既定値_: `""`; _アニメーション_: **可**
- {{SVGAttr("pathLength")}}
  - : This attribute lets specify the total length for the path, in user units.
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number) ; _既定値_: _none_; _アニメーション_: **可**

## 使用コンテキスト

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SVG プレゼンテーション属性](/ja/docs/Web/SVG/Reference/Attribute#presentation_attributes)、例えば {{SVGAttr("fill")}} や {{SVGAttr("stroke")}}

- **他の SVG 基本図形:**
  - {{ SVGElement('circle') }}
  - {{ SVGElement('ellipse') }}
  - {{ SVGElement('line') }}
  - {{ SVGElement('polyline') }}
  - {{ SVGElement('rect') }}
