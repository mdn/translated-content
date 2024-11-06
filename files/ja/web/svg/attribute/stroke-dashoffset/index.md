---
title: stroke-dashoffset
slug: Web/SVG/Attribute/stroke-dashoffset
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{SVGRef}}

**`stroke-dashoffset`** 属性は、関連する破線をレンダリングするうえで、オフセットを定義するプレゼンテーション属性です。

> [!NOTE]
> プレゼンテーション属性である `stroke-dashoffset` は、CSS プロパティとして使用することができます。

この属性は以下の SVG 要素で使用することができます。

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('line')}}
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
<svg viewBox="-3 0 33 10" xmlns="http://www.w3.org/2000/svg">
  <!-- ダッシュ配列なし -->
  <line x1="0" y1="1" x2="30" y2="1" stroke="black" />

  <!-- ダッシュオフセットなし -->
  <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-dasharray="3 1" />

  <!--
  ダッシュ配列の計算の先頭に
  3 ユーザー単位分を引っ張る
  -->
  <line
    x1="0"
    y1="5"
    x2="30"
    y2="5"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="3" />

  <!--
  ダッシュ配列の計算の先頭に
  3 ユーザー単位を押し込む
  -->
  <line
    x1="0"
    y1="7"
    x2="30"
    y2="7"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="-3" />

  <!--
  ダッシュ配列の計算の先頭に
  1 ユーザー単位を引っ張り、その結果、
  前の例と同じ表示となる
  -->
  <line
    x1="0"
    y1="9"
    x2="30"
    y2="9"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="1" />

  <!--
  以下の赤い線は、各行のダッシュ配列の
  オフセットを強調する
  -->
  <path d="M0,5 h-3 M0,7 h3 M0,9 h-1" stroke="rgb(255 0 0 / 50%)" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
      </td>
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

オフセットは通常 {{SVGAttr('pathLength')}} に対して解決されたユーザー単位で表現されますが、 [\<percentage>](/ja/docs/Web/SVG/Content_type#percentage) が使用された場合、値は現在のビューポートに対するパーセント値として解決されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
