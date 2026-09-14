---
title: keySplines
slug: Web/SVG/Reference/Attribute/keySplines
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

**`keySplines`** 属性は、{{SVGAttr("keyTimes")}} リストに関連付けられた[ベジェ曲線](/ja/docs/Glossary/Bezier_curve)の制御点のセットを定義し、区間の進行を制御する三次ベジェ関数を定義します。

{{SVGAttr("calcMode")}} 属性が `spline` に設定されていない限り、この属性は無視されます。

keySplines の仕様に誤りがある場合（値が不正、または値が多すぎる／少なすぎる場合）、アニメーションは再生されません。

この属性は、以下の SVG 要素で使用することができます。

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="10" r="10">
    <animate
      attributeName="cx"
      dur="4s"
      calcMode="spline"
      repeatCount="indefinite"
      values="60; 110; 60; 10; 60"
      keyTimes="0; 0.25; 0.5; 0.75; 1"
      keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1" />
    <animate
      attributeName="cy"
      dur="4s"
      calcMode="spline"
      repeatCount="indefinite"
      values="10; 60; 110; 60; 10"
      keyTimes="0; 0.25; 0.5; 0.75; 1"
      keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1" />
  </circle>
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>&#x3C;control-point></code> [ <code>;</code>
        <code>&#x3C;control-point></code> ]* <code>;</code>?
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

属性値は、セミコロンで区切られた制御点の定義リストです。

- `<control-point>`
  - : それぞれの制御点の記述は、`x1 y1 x2 y2` という 4 つの値のセットであり、1 つの時間区分に対するベジェ曲線の制御点を表します。関連付けられた時間区分を定義する {{SVGAttr("keyTimes")}} の値はベジェ曲線の「アンカーポイント」であり、`keySplines` の値は制御点となります。したがって、制御点のセットの数は、{{SVGAttr("keyTimes")}} の値の数より 1 つ少なくなっていなければなりません。

    `x1 y1 x2 y2` の各値は、すべて 0 から 1 の範囲内でなければなりません。

- Safari の問題
  - : `keyTimes` の値は、`keyTimes="0; 0.25; 0.5; 0.75; 1"` のように、前に空白を置かずにセミコロンで区切る必要があります。

## 仕様書

{{Specifications}}

## 関連情報

- [ベジェ曲線](/ja/docs/Glossary/Bezier_curve)
