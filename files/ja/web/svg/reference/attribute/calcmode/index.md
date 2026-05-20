---
title: calcMode
slug: Web/SVG/Reference/Attribute/calcMode
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

**`calcMode`** 属性は、このアニメーションの{{Glossary("interpolation", "補間")}}モードを指定します。

デフォルトのモードは `linear` ですが、属性が線形補間に対応していない場合（文字列など）、`calcMode` 属性は無視され、離散補間が使用されます。

この属性は、以下の SVG 要素で使用することができます。

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>discrete</code> | <code>linear</code> | <code>paced</code> |
        <code>spline</code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>linear</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

- `discrete`
  - : このアニメーション関数は、補間処理を行わずに、ある値から次の値へと直接移動することを指定します。
- `linear`
  - : 値間の単純な線形補間処理を使用して、アニメーション関数を計算します。{{SVGElement("animateMotion")}} を除き、これがデフォルト値です。
- `paced`
  - : アニメーション全体を通じて変化の進行を均一にするための補間処理を定義します。これは、線形の数値範囲を定義する値、かつ点間の「距離」を計算できる値（位置、幅、高さなど）に対してのみ対応しています。paced が指定された場合、{{SVGAttr("keyTimes")}} または {{SVGAttr("keySplines")}} は無視されます。{{SVGElement("animateMotion")}} では、これがデフォルト値です。
- `spline`
  - : {{SVGAttr("values")}} リスト内の各値から次の値へと、三次ベジェスプラインで定義された時間関数に従って補間を行います。スプラインの点は {{SVGAttr("keyTimes")}} 属性で定義され、それぞれの区間の制御点は {{SVGAttr("keySplines")}} 属性で定義されます。

## 仕様書

{{Specifications}}

## 関連情報

- [SMIL による SVG アニメーション](/ja/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
