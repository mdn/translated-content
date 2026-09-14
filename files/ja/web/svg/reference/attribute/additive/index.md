---
title: additive
slug: Web/SVG/Reference/Attribute/additive
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`additive`** 属性は、アニメーションが加算型であるかどうかを制御します。

アニメーションを絶対値としてではなく、属性の値に対するオフセットや変化量として定義する方が便利な場合がしばしばあります。

この属性は、以下の SVG 要素で使用することができます。

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>replace</code> | <code>sum</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>replace</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

- sum
  - : この設定により、アニメーションは属性の基盤となる値およびその他の優先度の低いアニメーションに加算されます。
- replace
  - : この設定により、アニメーションが属性の元の値や、その他の優先度の低いアニメーションを上書きするよう指定します。これがデフォルト値ですが、この動作はアニメーション値属性 {{SVGAttr("by")}} および {{SVGAttr("to")}} によっても影響を受けます。詳しくは [SMIL Animation: How from, to and by attributes affect additive behavior](https://www.w3.org/TR/smil-animation/#FromToByAndAdditive) に記述されています。

## 仕様書

{{Specifications}}

## 関連情報

- [SMIL による SVG アニメーション](/ja/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
