---
title: pointer-events
slug: Web/SVG/Reference/Attribute/pointer-events
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

**`pointer-events`** 属性は、要素がマウスイベントの対象となるかどうか、またはそのタイミングを定義するための表示属性です。

> [!NOTE]
> プレゼンテーション属性であるため、 `pointer-events` には対応する CSS プロパティ {{cssxref("pointer-events")}} があります。両方が指定された場合、 CSS プロパティの方が優先されます。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement('a')}}
- {{SVGElement('circle')}}
- {{SVGElement('clipPath')}}
- {{SVGElement('defs')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('foreignObject')}}
- {{SVGElement('g')}}
- {{SVGElement('image')}}
- {{SVGElement('line')}}
- {{SVGElement('marker')}}
- {{SVGElement('mask')}}
- {{SVGElement('path')}}
- {{SVGElement('pattern')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('svg')}}
- {{SVGElement('switch')}}
- {{SVGElement('symbol')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tspan')}}
- {{SVGElement('use')}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html-nolint
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!--
  円は常にマウスイベントに介入します。
  長方形の色を変更するには、円の外側をクリックする必要があります。
  -->
  <rect x="0" y="0" height="10" width="10" fill="black" />
  <circle cx="5" cy="5" r="4" fill="white" pointer-events="visiblePainted" />

  <!--
  下記の円は、マウスイベントを捕捉することはありません。
  円をクリックしても、円の下にある長方形をクリックしても、長方形の色は変化します。
  -->
  <rect x="10" y="0" height="10" width="10" fill="black" />
  <circle cx="15" cy="5" r="4" fill="white" pointer-events="none" />
</svg>
```

```js
window.addEventListener("mouseup", (e) => {
  // #000000 と #FFFFFF の間でランダムな色を拾う
  const color = Math.round(Math.random() * 0xffffff);

  // CSS の要件に合わせて色の書式化をする
  const fill = `#${color.toString(16).padStart(6, "0")}`;

  // 実際にクリックした要素に色を適用
  e.target.style.fill = fill;
});
```

{{EmbedLiveSample("Example", '100%', 150)}}

## 使用上の注意

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>bounding-box</code> | <code>visiblePainted</code> |
        <code>visibleFill</code> | <code>visibleStroke</code> |
        <code>visible</code> | <code>painted</code> | <code>fill</code> |
        <code>stroke</code> | <code>all</code> | <code>none</code>
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>visiblePainted</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

_使用可能なそれぞれの値の詳細については、CSS {{cssxref("pointer-events")}} のドキュメントを参照してください。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("pointer-events")}} プロパティ
