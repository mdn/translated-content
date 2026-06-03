---
title: clip
slug: Web/SVG/Reference/Attribute/clip
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{deprecated_header}}

**`clip`** 属性は、要素の表示領域を定義します。代わりに {{svgattr("clip-path")}} を使用してください。

> [!NOTE]
> プレゼンテーション属性であるため、 `clip` には対応する CSS プロパティの {{cssxref("clip")}} があります。両方が指定された場合、 CSS プロパティの方が優先されます。

この属性は、CSS の {{cssxref("clip")}} プロパティで定義されているのと同じ引数値を取ります。 `rect()` の座標値には、現在のユーザー座標を示す単位のない値を使用することができます。値 `auto` は、指定された要素によって作成されたビューポートの境界に沿ってクリップパスを定義します。

この属性は、以下の SVG 要素で使用することができます。

- {{ SVGElement("svg") }}
- {{ SVGElement("symbol") }}
- {{ SVGElement("image") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("marker") }}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Auto clipping -->
  <svg x="0" width="10" height="10" clip="auto">
    <circle cx="5" cy="5" r="4" stroke="green" />
  </svg>

  <!-- Rect(top, right, bottom, left) clipping -->
  <svg x="10" width="10" height="10" clip="rect(1, 9, 8, 2)">
    <circle cx="5" cy="5" r="4" stroke="green" />
  </svg>
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>auto</code> | <code>rect()</code></td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

値 `auto` は、指定された要素によって作成されたビューポートの境界に沿ってクリップパスを定義します。値 `rect()` はクリップ長方形を定義し、 `rect(<top>, <right>, <bottom>, <left>)` の構文を取ります。 `<top>` および `<bottom>` の値は、要素のビューポートの上境界線からのオフセットを指定し、`<right>` および `<left>` は、要素のビューポートの左境界線からのオフセットを指定します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
