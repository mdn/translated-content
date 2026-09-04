---
title: accumulate
slug: Web/SVG/Reference/Attribute/accumulate
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`accumulate`** 属性は、アニメーションを累積的にするかどうかを制御します。

繰り返し行われるアニメーションでは、前回の結果を基に、反復ごとに積み重ねていくことがしばしば有益です。この属性を指定すると、それぞれの反復処理で、その値が前回のアニメーション属性の値に追加されるようになります。

この属性は、以下の SVG 要素で使用することができます。

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>none</code> | <code>sum</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

- `sum`
  - : 最初の反復以降のそれぞれの反復は、前回の実行時の最終値に基づいて実行されるよう指定します。
- `none`
  - : 反復処理の回数は累積されないよう指定します。

対象の属性値が加算に対応していない場合、またはアニメーション要素が繰り返し実行されない場合、この属性は無視されます。

アニメーション関数が {{SVGAttr("to")}} 属性だけをつけて指定している場合、この属性は無視されます。

## 仕様書

{{Specifications}}

## 関連情報

- [SMIL による SVG アニメーション](/ja/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
