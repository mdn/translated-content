---
title: stroke-width
slug: Web/SVG/Reference/Attribute/stroke-width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`stroke-width`**属性は、図形に適用される描線の幅を定義する表示属性です。これは、あらゆる SVG 図形またはテキストコンテンツ要素に適用されますが、継承プロパティとして、 {{SVGElement("g")}} などの要素に適用され、子孫要素の線に意図通りの効果を持つことができます。

> [!NOTE]
> プレゼンテーション属性であるため、 `stroke-width` には対応する CSS プロパティ {{cssxref("stroke-width")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は以下の SVG 要素で使用することができます。

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('line')}}
- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

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
  <!-- 描線の既定の幅: 1 -->
  <circle cx="5" cy="5" r="3" stroke="green" />

  <!-- 描線の幅を数値で -->
  <circle cx="15" cy="5" r="3" stroke="green" stroke-width="3" />

  <!-- 描線の幅をパーセント値で -->
  <circle cx="25" cy="5" r="3" stroke="green" stroke-width="2%" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#length"
            >&#x3C;length></a
          ></strong
        > |
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>1px</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> パーセント値は常に、正規化された {{SVGAttr('viewBox')}} の対角線の長さに対するパーセント値として計算されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("stroke-width")}} プロパティ
