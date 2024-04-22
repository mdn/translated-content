---
title: fill-opacity
slug: Web/SVG/Attribute/fill-opacity
l10n:
  sourceCommit: 5f7c22deaa74973658257aeaa012ac2ec0be87ae
---

{{SVGRef}}

**`fill-opacity`** 属性は、図形に適用されるペイントサーバー(_色_, _勾配_, _パターン_, 等)の不透明度を定義するプレゼンテーション属性です。

> **メモ:** プレゼンテーション属性としての`fill-opacity`CSS プロパティに適用できます。

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
  <!-- 既定のfill不透明度: 1 -->
  <circle cx="50" cy="50" r="40" />

  <!-- 数値で指定するfill不透明度 -->
  <circle cx="150" cy="50" r="40" fill-opacity="0.7" />

  <!-- 割合で指定するfill不透明度 -->
  <circle cx="250" cy="50" r="40" fill-opacity="50%" />

  <!-- CSSプロパティで指定するfill不透明度 -->
  <circle cx="350" cy="50" r="40" style="fill-opacity: .25;" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## 使用上の注意

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>[0-1]</code> |
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint"
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
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **メモ:** SVG2 では、`fill-opacity`への割合値を導入していますが、状況としてはこれはまだ広く対応されているわけではありません(_以下の[ブラウザー実装状況](#ブラウザー実装状況)を参照_)。最良の実装としては、不透明度を`[0-1]`の範囲の値として指定することです。

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat}}
