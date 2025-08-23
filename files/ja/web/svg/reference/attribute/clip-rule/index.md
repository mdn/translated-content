---
title: clip-rule
slug: Web/SVG/Reference/Attribute/clip-rule
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

`clip-rule` 属性は、 {{ SVGElement("clipPath") }} 要素内に含まれているグラフィック要素にのみ適用されます。 `clip-rule` 属性は、 {{ SVGAttr("fill-rule") }} 属性と基本的に同じように機能しますが、 {{ SVGElement("clipPath") }} 定義に適用される点が異なります。

> [!NOTE]
> プレゼンテーション属性であるため、 `clip-rule` には対応する CSS プロパティの {{cssxref("clip-rule")}} があります。両方が指定された場合、 CSS プロパティの方が優先されます。

次のコードの断片は、クリップの形状を定義する {{ SVGElement("path") }} 要素に `clip-rule` が指定されているため、クリップパスに evenodd クリップルールを適用します。

```html
<g>
  <clipPath id="MyClip">
    <path d="..." clip-rule="evenodd" />
  </clipPath>
  <rect clip-path="url(#MyClip)" ... />
</g>
```

一方、次のコードの断片では、クリップの形状を定義するオブジェクトではなく、参照する要素に `clip-rule` が指定されているため、 evenodd クリップルールは適用されません。

```html
<g>
  <clipPath id="MyClip">
    <path d="..." />
  </clipPath>
  <rect clip-path="url(#MyClip)" clip-rule="evenodd" ... />
</g>
```

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>nonzero | evenodd | inherit</td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td>nonzero</td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- nonzero
  - : {{ SVGAttr("fill-rule") }} プロパティの説明を参照してください。
- evenodd
  - : {{ SVGAttr("fill-rule") }} プロパティの説明を参照してください。

## 例

```html
<svg
  width="100"
  viewBox="0 0 100 90"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <!-- 星のパスを定義 -->
  <defs>
    <path d="M50,0 21,90 98,35 2,35 79,90z" id="star" />
  </defs>

  <!-- 左: evenodd -->
  <clipPath id="emptyStar">
    <use href="#star" clip-rule="evenodd" />
  </clipPath>
  <rect clip-path="url(#emptyStar)" width="50" height="90" fill="blue" />

  <!-- 右: nonzero -->
  <clipPath id="filledStar">
    <use href="#star" clip-rule="nonzero" />
  </clipPath>
  <rect clip-path="url(#filledStar)" width="50" height="90" x="50" fill="red" />
</svg>
```

{{ EmbedLiveSample('Example', '100%', '110') }}

## 要素

次の要素は、 `clip-rule` 属性を使用することができますが、 {{ SVGElement("clipPath") }} 要素内に存在する場合に限ります。

- [グラフィック要素](/ja/docs/Web/SVG/Reference/Element#グラフィック要素)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ SVGElement("clipPath") }}
- CSS の {{cssxref("clip-rule")}} プロパティ
