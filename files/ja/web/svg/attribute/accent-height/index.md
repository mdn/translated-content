---
title: accent-height
slug: Web/SVG/Attribute/accent-height
---

{{SVGRef}}{{deprecated_header}}

**`accent-height`** 属性は原点からアクセント文字の上端までの距離を定義します。これはフォント座標系で測られる距離です。

1 つの要素のみがこの属性を使用します: {{SVGElement("font-face")}}

## font-face

{{SVGElement("font-face")}}に対して、`accent-height`は原点からアクセント文字の上端までの距離を定義します。これはフォント座標系で測られる距離です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><a href="/ja/docs/Web/SVG/Content_type#Number">&#x3C;number></a></td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td>Value of {{SVGAttr("ascent")}}</td>
    </tr>
    <tr>
      <th scope="row">アニメーション可否</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 仕様

| 仕様書                                                                                                                   | 策定状況                 | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------ | -------- |
| {{SpecName("SVG1.1", "fonts.html#FontFaceElementAccentHeightAttribute", "accent-height")}} | {{Spec2("SVG1.1")}} | 初期定義 |

## ブラウザー実装状況

{{Compat("svg.elements.font-face.accent-height")}}

## 関連情報

- {{SVGAttr("cap-height")}}
- {{SVGAttr("x-height")}}
