---
title: opacity
slug: Web/SVG/Reference/Attribute/opacity
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

**`opacity`** 属性は、オブジェクトまたはオブジェクト群の透過度、すなわち要素の背後に表示される背景がどれだけ表示されるかを指定します。

> [!NOTE]
> プレゼンテーション属性であるため、 `opacity` には対応する CSS プロパティ {{cssxref("opacity")}} があります。両方が指定された場合、 CSS プロパティの方が優先されます。

この属性は以下の SVG 要素で使用することができます。

- {{SVGElement("a")}}
- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("g")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("marker")}}
- {{SVGElement("path")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("svg")}}
- {{SVGElement("switch")}}
- {{SVGElement("symbol")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

{{SVGAttr("fill-opacity")}}, {{SVGAttr("stroke-opacity")}}, {{SVGAttr("stop-opacity")}} とは異なり、`opacity` は個々の操作に適用されるものではなく、要素がレンダリングされる際に適用されるものではありません。`opacity` はオブジェクトやグループ全体に適用され、オブジェクトやグループのレンダリング済み画像に対する後処理操作と同様に性質を持ちます。したがって、同じ領域に `opacity` と他の不透明度属性が両方存在する場合、それらは互いに合成され、不透明度が乗算されます。

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
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="0" y2="100%">
      <stop offset="0%" stop-color="skyblue" />
      <stop offset="100%" stop-color="seagreen" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
  <circle cx="50" cy="50" r="40" fill="black" />
  <circle cx="150" cy="50" r="40" fill="black" opacity="0.3" />
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">値</th>
      <td><code>&#x3C;alpha-value></code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `<alpha-value>`
  - : オブジェクト全体に適用される均一な不透過度の設定。{{cssxref("number")}} として指定します。0.0（完全に透明）から 1.0（完全に不透明）の範囲外の値は、この範囲に収まるように補正されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("opacity")}} プロパティ
- {{SVGAttr("fill-opacity")}}
- {{SVGAttr("stop-opacity")}}
- {{SVGAttr("stroke-opacity")}}
