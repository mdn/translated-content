---
title: keyPoints
slug: Web/SVG/Reference/Attribute/keyPoints
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

**`keyPoints`** 属性は、[0,1] の範囲内で、`keyTimes` に含まれるそれぞれの値に対応する、オブジェクトがパス上のどの位置にあるかを示します。

この属性は、以下の SVG 要素で使用することができます。

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <path
    d="M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110"
    stroke="lightgrey"
    stroke-width="2"
    fill="none"
    id="motionPath" />
  <circle cx="10" cy="110" r="3" fill="lightgrey" />
  <circle cx="110" cy="10" r="3" fill="lightgrey" />

  <circle r="5" fill="red">
    <animateMotion
      dur="3s"
      repeatCount="indefinite"
      keyPoints="0;0.5;1"
      keyTimes="0;0.15;1"
      calcMode="linear">
      <mpath href="#motionPath" />
    </animateMotion>
  </circle>
</svg>
```

{{EmbedLiveSample("Example", "200", "120")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>{{cssxref("number")}} [; {{cssxref("number")}} ]* ;?</td>
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

- `<number> [; <number>] ;?`
  - : この値は、0 から 1 までの浮動小数点値をセミコロンで区切ったリストを定義し、対応する {{SVGAttr("keyTimes")}} 値で指定された時点において、オブジェクトがモーションパス上のどの位置まで移動すべきかを示します。距離は、{{SVGAttr("path")}} 属性で指定されたパスに沿って計算されます。リスト内のそれぞれの進行値は、`keyTimes` 属性リスト内の値に対応しています。

    キーポイントのリストを指定する場合、`keyPoints` リストには、`keyTimes` リストに含まれる値の数と同じ数の値がなければなりません。

    値の末尾にセミコロンがあり、その後に任意で空白が続いた場合、セミコロンと末尾の空白はどちらも無視されます。

    値の仕様にエラーがあった場合（つまり、不正な値、値の数が多すぎる、またはいくつかしかないなど）、それはエラーとなります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
