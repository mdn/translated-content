---
title: fill-opacity
slug: Web/SVG/Attribute/fill-opacity
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

**`fill-opacity`** 属性は、図形に適用されるペイントサーバー(_色_, _勾配_, _パターン_, 等)の不透明度を定義するプレゼンテーション属性です。

> [!NOTE]
> プレゼンテーション属性であるため、`fill-opacity` は CSS プロパティとして使用できます。

この属性は次の SVG 要素で使用できます。

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
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
<svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 既定の fill opacity: 1 -->
  <circle cx="50" cy="50" r="40" />

  <!-- 数値で指定する fill opacity -->
  <circle cx="150" cy="50" r="40" fill-opacity="0.7" />

  <!-- 割合で指定する fill opacity -->
  <circle cx="250" cy="50" r="40" fill-opacity="50%" />

  <!-- CSS プロパティで指定する fill opacity -->
  <circle cx="350" cy="50" r="40" style="fill-opacity: .25;" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## 使用方法のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>[0-1]</code> |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#paint"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">規定値</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> SVG2 では、`fill-opacity` へのパーセント値を導入していますが、現状としてはまだ広く対応されていません（_以下の[ブラウザーの互換性](#ブラウザーの互換性)を参照_）。最良の実装としては、不透明度を `[0-1]` の範囲の値として指定することです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("opacity")}}
- {{SVGAttr("stop-opacity")}}
- {{SVGAttr("stroke-opacity")}}
