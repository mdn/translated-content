---
title: edgeMode
slug: Web/SVG/Reference/Attribute/edgeMode
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

**`edgeMode`** 属性は、カーネルが入力画像の端またはその近くに配置されたときに行列演算を適用できるよう、必要に応じて入力画像を色値で拡張する方法を決定します。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feGaussianBlur")}}

## feConvolveMatrix

{{SVGElement("feConvolveMatrix")}} では、`edgeMode` は、カーネルが入力画像の端またはその近くに配置されたときに行列演算を適用できるよう、必要に応じて入力画像を色値で拡張する方法を決定します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>duplicate</code> | <code>wrap</code> | <code>none</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>duplicate</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `duplicate`
  - : この値は、必要に応じて入力画像の各辺に沿って画像を拡張し、その端の色値を複製することを示します。
- `wrap`
  - : この値は、画像の反対側の端の色値を使用して入力画像を拡張することを示します。
- `none`
  - : この値は、R、G、B、A の値が 0 のピクセルで入力画像を拡張することを示します。

## feGaussianBlur

{{SVGElement("feGaussianBlur")}} では、`edgeMode` は、カーネルが入力画像の端またはその近くに配置されたときに行列演算を適用できるよう、必要に応じて入力画像を色値で拡張する方法を決定します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>duplicate</code> | <code>wrap</code> | <code>none</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `duplicate`
  - : この値は、必要に応じて入力画像の各辺に沿って画像を拡張し、その端の色値を複製することを示します。
- `wrap`
  - : この値は、画像の反対側の端の色値を使用して入力画像を拡張することを示します。
- `none`
  - : この値は、R、G、B、A の値が 0 のピクセルで入力画像を拡張することを示します。

## 仕様書

{{Specifications}}
