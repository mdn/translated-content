---
title: alignment-baseline
slug: Web/SVG/Attribute/alignment-baseline
---

{{SVGRef}}

**`alignment-baseline`** 属性は、要素が親要素に対して配置される方法を指定します。このプロパティは、要素と親要素の対応するベースラインのどれを揃えるかを指定します。例えば、ローマ字のテキストでフォントサイズが変わった場合でも、アルファベットのベースラインを一定にすることが可能になります。既定値は `alignment-baseline` プロパティの計算値と同じ名前の値となります。

> **メモ:** プレゼンテーション属性として、 `alignment-baseline` は CSS プロパティとして使用することができます。

プレゼンテーション属性として、あらゆる要素に適用できますが、効果があるのは {{SVGElement("tspan")}}, {{SVGElement("tref")}}, {{SVGElement("altGlyph")}}, and {{SVGElement("textPath")}} の 4 つの属性のみです。

## 使用上の注意

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>auto</code> | <code>baseline</code> | <code>before-edge</code> |
        <code>text-before-edge</code> | <code>middle</code> |
        <code>central</code> | <code>after-edge</code> |
        <code>text-after-edge</code> | <code>ideographic</code> |
        <code>alphabetic</code> | <code>hanging</code> |
        <code>mathematical</code> | <code>top</code> | <code>center</code> |
        <code>bottom</code>
      </td>
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

- `auto` {{deprecated_inline}}
  - : この値はその文字が所属する書法のドミナントベースラインです。すなわち、親のドミナントベースラインを使用します。
- `baseline`
  - : Uses the {{Glossary("dominant baseline")}} choice of the parent. Matches the box's corresponding {{Glossary("baseline")}} to that of its parent.
- `before-edge` {{deprecated_inline}}
  - : The alignment-point of the object being aligned is aligned with the "before-edge" baseline of the parent text content element.
- `text-bottom`
  - : Matches the bottom of the box to the top of the parent's content area.
- `text-before-edge`

  - : The alignment-point of the object being aligned is aligned with the "text-before-edge" baseline of the parent text content element.

    > **メモ:** This keyword may be mapped to `text-top`.

- `middle`
  - : Aligns the vertical midpoint of the box with the baseline of the parent box plus half the x-height of the parent.
- `central`
  - : Matches the box's central baseline to the central baseline of its parent.
- `after-edge` {{deprecated_inline}}
  - : The alignment-point of the object being aligned is aligned with the "after-edge" baseline of the parent text content element.
- `text-top`
  - : Matches the top of the box to the top of the parent's content area.
- `text-after-edge`

  - : The alignment-point of the object being aligned is aligned with the "text-after-edge" baseline of the parent text content element.

    > **メモ:** This keyword may be mapped to `text-bottom`.

- `ideographic`
  - : Matches the box's ideographic character face under-side baseline to that of its parent.
- `alphabetic`
  - : Matches the box's alphabetic baseline to that of its parent.
- `hanging`
  - : The alignment-point of the object being aligned is aligned with the "hanging" baseline of the parent text content element.
- `mathematical`
  - : Matches the box's mathematical baseline to that of its parent.
- `top`
  - : Aligns the top of the aligned subtree with the top of the line box.
- `center`
  - : Aligns the center of the aligned subtree with the center of the line box.
- `bottom`
  - : Aligns the bottom of the aligned subtree with the bottom of the line box.

SVG 2 introduces some changes to the definition of this property. In particular: the values `auto`, `before-edge`, and `after-edge` have been removed. For backwards compatibility, `text-before-edge` may be mapped to `text-top` and `text-after-edge` to `text-bottom`. Neither `text-before-edge` nor `text-after-edge` should be used with the {{cssxref("vertical-align")}} property.

## 例

```html
<svg
  width="300"
  height="120"
  viewBox="0 0 300 120"
  xmlns="http://www.w3.org/2000/svg">
  <!-- Materialisation of anchors -->
  <path
    d="M60,10 L60,110
             M30,10 L300,10
             M30,65 L300,65
             M30,110 L300,110
             "
    stroke="grey" />

  <!-- Anchors in action -->
  <text alignment-baseline="hanging" x="60" y="10">A hanging</text>

  <text alignment-baseline="middle" x="60" y="65">A middle</text>

  <text alignment-baseline="baseline" x="60" y="110">A baseline</text>

  <!-- Materialisation of anchors -->
  <circle cx="60" cy="10" r="3" fill="red" />
  <circle cx="60" cy="65" r="3" fill="red" />
  <circle cx="60" cy="110" r="3" fill="red" />

  <style>
    <![CDATA[
    text{
        font: bold 36px Verdana, Helvetica, Arial, sans-serif;
    }
    ]]>
  </style>
</svg>
```

{{EmbedLiveSample("Example")}}

他の要素 ({{SVGElement("text")}} など) におけるオブジェクトの配置については、 {{SVGAttr("dominant-baseline")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("svg.attributes.presentation.alignment-baseline")}}

## 関連情報

- {{cssxref("alignment-baseline", "CSS alignment-baseline")}}
