---
title: in2
slug: Web/SVG/Reference/Attribute/in2
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

**`in2`** 属性は、指定されたフィルタープリミティブの 2 番目に入力される要素を指定します。これは、{{SVGAttr("in")}} 属性とまったく同様に動作します。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement("feBlend")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feDisplacementMap")}}

## feBlend

{{SVGElement("feBlend")}} において、`in2` は混合操作の 2 つ目となる画像を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td>
        最初のフィルタープリミティブの場合は <code>SourceGraphic</code>、そうでない場合は前のフィルタープリミティブの結果
      </td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feComposite

For {{SVGElement("feComposite")}}において、`in2` は合成操作の 2 つ目となる画像を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td>
        最初のフィルタープリミティブの場合は <code>SourceGraphic</code>、そうでない場合は前のフィルタープリミティブの結果
      </td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feDisplacementMap

{{SVGElement("feDisplacementMap")}} において、`in2` は 2 つ目の人入力画像を定義します。この画像は、{{SVGAttr("in")}} 属性で定義された画像のピクセルをずらすために使用されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td>
        最初のフィルタープリミティブの場合は <code>SourceGraphic</code>、そうでない場合は前のフィルタープリミティブの結果
      </td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}
