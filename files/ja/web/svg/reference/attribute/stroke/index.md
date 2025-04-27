---
title: stroke
slug: Web/SVG/Reference/Attribute/stroke
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`stroke`** 属性はプレゼンテーション属性で、この図形の描線を描画するのに使われる色（またはグラデーションやパターンなどの SVG ペイントサーバー）を定義します。

> [!NOTE]
> プレゼンテーション属性であるため、 `stroke` には対応する CSS プロパティ {{cssxref("stroke")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は、以下の SVG 要素で使用できます。

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

### 基本色およびグラデーションの描線

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!-- 単純な色の描線 -->
  <circle cx="5" cy="5" r="4" fill="none" stroke="green" />

  <!-- グラデーションによる円の描線 -->
  <defs>
    <linearGradient id="myGradient">
      <stop offset="0%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>

  <circle cx="15" cy="5" r="4" fill="none" stroke="url(#myGradient)" />
</svg>
```

出力は次の通りです。

{{EmbedLiveSample("Basic color and gradient stroke", '100%', 200)}}

### `context-stroke` の例

この例では、 {{SVGElement('path')}} 要素を使用して 3 つの図形を定義し、それぞれに異なる [`stroke`](/ja/docs/Web/SVG/Reference/Attribute/stroke) と `fill` の色を設定しています。また、 {{SVGElement('circle')}} 要素を {{SVGElement('marker')}} 要素を介してマーカーとして定義しています。各図形には、CSS の `marker` プロパティを介してマーカーが適用されています。

{{SVGElement('circle')}} には、 `stroke="context-stroke"` および `fill="context-fill"` が設定されています。これは図形のコンテキスト内でマーカーとして設定されているため、これらの属性により、それぞれの場合で {{SVGElement('path')}} 要素に設定された `fill` および `stroke` が継承されます。

```html-nolint
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 90">
  <style>
    path {
      stroke-width: 2px;
      marker: url(#circle);
    }
  </style>
  <path d="M 10 44.64 L 30 10 L 70 10 L 90 44.64 L 70 79.28 L 30 79.28 Z"
        stroke="red" fill="orange" />
  <path d="M 100 44.64 L 80 10 L 120 10 L 140 44.64 L 120 79.28 L 80 79.28 Z"
        stroke="green" fill="lightgreen" />
  <path d="M 150 44.64 L 130 10 L 170 10 L 190 44.64 L 170 79.28 L 130 79.28 Z"
        stroke="blue" fill="lightblue" />
  <marker id="circle" markerWidth="12" markerHeight="12"
          refX="6" refY="6" markerUnits="userSpaceOnUse">
    <circle cx="6" cy="6" r="3" stroke-width="2"
            stroke="context-stroke" fill="context-fill"  />
  </marker>
</svg>
```

出力結果は次のようになります。

{{EmbedLiveSample("`context-stroke` example", '100%', 220)}}

> [!NOTE]
> 要素は、 `context-stroke` と `context-fill` を使用して、 {{SVGElement('use')}} 要素によって参照された際に `stroke` と `fill` の値を継承することもできます。

## 使用上の注意

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#paint"
            >&#x3C;paint></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>なし</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("stroke")}} プロパティ
