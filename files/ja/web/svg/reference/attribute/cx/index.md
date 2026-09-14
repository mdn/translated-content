---
title: cx
slug: Web/SVG/Reference/Attribute/cx
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`cx`** 属性は中心点の X 座標を定義します。

この属性は次の SVG 要素で使用できます。

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("radialGradient")}}

> [!NOTE]
> 幾何プロパティであるため、 {{cssxref("cx")}} は `<circle>` および `<ellipse>` の CSS プロパティとしても使用できます。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <radialGradient cx="25%" id="myGradient">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cx="50" cy="50" r="45" />
  <ellipse cx="150" cy="50" rx="45" ry="25" />
  <rect x="205" y="5" width="90" height="90" fill="url(#myGradient)" />
</svg>
```

{{EmbedLiveSample("Example", 100, 100)}}

## circle

{{SVGElement('circle')}} に対して、 `cx` は図形の中心の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>{{cssxref("length-percentage")}}</td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> `<circle>` の中心の X 座標は {{cssxref("cx")}} 幾何プロパティでも定義できます。 CSS で設定した場合、 `cx` プロパティの値がこの `cx` 属性の値を上書きします。

## ellipse

{{SVGElement('ellipse')}} に対して、 `cx` は図形の中心の X 座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>{{cssxref("length-percentage")}}</td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> `<ellipse>` の中心の X 座標は {{cssxref("cx")}} 幾何プロパティでも定義できます。 CSS で設定した場合、 `cx` プロパティの値がこの `cx` 属性の値を上書きします。

## radialGradient

{{SVGElement('radialGradient')}} に対して、 `cx` は、放射グラデーションの終端円の X 軸座標を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong><a href="/ja/docs/Web/SVG/Guides/Content_type#length">&#x3C;length></a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>50%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

### 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 34 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient cx="0" id="myGradient000">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cx="50%" id="myGradient050">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cx="100%" id="myGradient100">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>
  </defs>

  <rect
    x="1"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient000)"
    stroke="black" />
  <rect
    x="13"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient050)"
    stroke="black" />
  <rect
    x="25"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient100)"
    stroke="black" />
</svg>
```

{{EmbedLiveSample('radialGradient', 150, '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("cy")}}
- {{SVGAttr("r")}}
- {{SVGAttr("rx")}}
- {{SVGAttr("ry")}}
- 幾何プロパティ: {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
