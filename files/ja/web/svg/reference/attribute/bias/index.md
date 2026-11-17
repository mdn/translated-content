---
title: bias
slug: Web/SVG/Reference/Attribute/bias
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`bias`** 属性は、フィルターの値の範囲をずらします。入力画像に {{SVGElement("feConvolveMatrix")}} 要素の {{SVGAttr("kernelMatrix")}} 属性を適用して得た各成分を {{SVGAttr("divisor")}} 属性の値で除算した後、各成分に `bias` 属性の値を加えます。これにより、そうしなければ 0 または 1 に制限される値を表現できます。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement("feConvolveMatrix")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <a href="/ja/docs/Web/SVG/Guides/Content_type#number">&#x3C;number></a>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

`bias` は、フィルターの応答が 0 の場合に、出力をグレー値 0.5 にしたいときにも使用できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
