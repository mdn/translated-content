---
title: <polyline>
slug: Web/SVG/Element/polyline
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

**`<polyline>`** は [SVG](/ja/docs/Web/SVG) 要素で、複数の点を結ぶ直線を作成する SVG の基本図形です。一般的に `polyline` は開いた図形を作成するために用いられます。最後の点は最初の点に接続されている必要はないからです。閉じた図形については {{SVGElement("polygon")}} 要素を参照してください。

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
  <!-- Example of a polyline with the default fill -->
  <polyline points="0,100 50,25 50,75 100,0" />

  <!-- Example of the same polyline shape with stroke and no fill -->
  <polyline points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## 属性

- {{SVGAttr('points')}}
  - : この属性は、連続線を描画するのに必要な点（x,y の絶対座標の組）のリストを定義します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Content_type#number)+ ; _既定値_: `""`; _アニメーション_: **可**
- {{SVGAttr("pathLength")}}
  - : この属性は、パスの全長をユーザー単位で指定します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Content_type#number) ; _既定値_: _none_; _アニメーション_: **可**

## 使用可能な場所

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SVG プレゼンテーション属性](/ja/docs/Web/SVG/Attribute#プレゼンテーション属性)、{{SVGAttr("fill")}} や {{SVGAttr("stroke")}} など
- その他の SVG 基本図形: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, **{{ SVGElement('line') }}**, **{{ SVGElement('polygon') }}**, {{ SVGElement('rect') }}
