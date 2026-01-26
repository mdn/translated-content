---
title: pathLength
slug: Web/SVG/Reference/Attribute/pathLength
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`pathLength`** 属性により、ユーザー単位でパスの全長を指定することができます。 この値は、距離の計算すべてを `pathLength` / (パスの長さの計算値) の比率で変倍することで、ブラウザーの距離計算と作成者の距離計算を調整するために使用されています。

これは、テキストパス、アニメーションパス、およびさまざまなストローク操作を含めることができる、実際のレンダリングされたパスの長さに影響を与える可能性があります。基本的に、パスの長さを必要とするすべての計算は、例えば、 {{SVGAttr('stroke-dasharray')}} はパスの始まりを 0、終了点を `pathLength` 属性で定義した値と想定します。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('line')}}
- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
  <style>
    path {
      fill: none;
      stroke: black;
      stroke-width: 2;
      stroke-dasharray: 10;
    }
  </style>

  <!-- pathLength は使用されておらず、パスの実際の長さが使用されている。その場合、 100 ユーザー単位 -->
  <path d="M 0,10 h100" />

  <!-- パス長が 90 ユーザー単位の長さであるかのようにすべてを計算する -->
  <path d="M 0,20 h100" pathLength="90" />

  <!-- パス長が 50 ユーザー単位の長さであるかのようにすべてを計算する -->
  <path d="M 0,30 h100" pathLength="50" />

  <!-- パス長が 30 ユーザー単位の長さであるかのようにすべてを計算する -->
  <path d="M 0,40 h100" pathLength="30" />

  <!-- パス長が 10 ユーザー単位の長さであるかのようにすべてを計算する -->
  <path d="M 0,50 h100" pathLength="10" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## circle

{{SVGElement('circle')}} では、 `pathLength` により、円の全長をユーザー単位で指定することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## ellipse

{{SVGElement('ellipse')}} では、 `pathLength` により、楕円の全長をユーザー単位で指定することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## line

{{SVGElement('line')}} では、 `pathLength` により、線の全長をユーザー単位で指定することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## path

{{SVGElement('path')}} では、 `pathLength` により、パスの全長をユーザー単位で指定することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## polygon

{{SVGElement('polygon')}} では、 `pathLength` により、図形の全長をユーザー単位で指定することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## polyline

{{SVGElement('polyline')}} では、 `pathLength` により、図形の全長をユーザー単位で指定することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## rect

{{SVGElement('rect')}} では、 `pathLength` により、矩形の全長をユーザー単位で指定することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}
