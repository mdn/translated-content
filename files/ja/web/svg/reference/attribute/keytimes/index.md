---
title: keyTimes
slug: Web/SVG/Reference/Attribute/keyTimes
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`keyTimes`** 属性は、アニメーションの進行速度を制御するために使用される時間値のリストを表します。

リスト内の各項目は、{{SVGAttr("values")}} 属性リスト内の値に対応しており、アニメーション内でその値がいつ使用されるかを定義します。`keyTimes` リスト内の時間値は、0 から 1（両端を含む）までの浮動小数点値として指定し、アニメーション要素の再生時間に対する相対的なオフセットを表します。

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
      repeatCount="indefinite"
      values="60; 110; 60; 10; 60"
      keyTimes="0; 0.25; 0.5; 0.75; 1" />
    <animate
      attributeName="cy"
      dur="4s"
      repeatCount="indefinite"
      values="10; 60; 110; 60; 10"
      keyTimes="0; 0.25; 0.5; 0.75; 1" />
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
        {{cssxref("number")}} [
        <code>;</code> {{cssxref("number")}} ]* <code>;</code>?
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

`keyTimes` 属性の値は、セミコロンで区切られた値のリストです。

`keyTimes` リストには、`values` リストに含まれる値の数と同じ数の値がなければなりません。

それぞれの時間値は、それより前の時間値以上でなければなりません。

`keyTimes` リストの意味づけは、{{Glossary("interpolation", "補間")}}モードによって異なります。

- 線形アニメーションおよびスプラインアニメーションの場合、リストの最初の値は 0 でなければならず、最後の値は `1` でなければなりません。それぞれの値に関連付けられたキー時刻は、その値が設定されるタイミングを定義します。値は、これらのキー時刻の間で補間処理されます。
- 離散アニメーションの場合、リストの最初の値は `0` でなければなりません。それぞれの値に関連付けられた時刻は、その値が設定されるタイミングを定義します。アニメーション関数は、リストで定義された次の時刻まで、その値を使用します。

{{SVGAttr("calcMode")}} 属性が `paced` に設定されている場合、`keyTimes` 属性は無視されます。

アニメーションの再生時間が不定の場合、`keyTimes`の仕様は無視されます。

- Safari の問題: `keyTimes` の値は、`keyTimes="0; 0.25; 0.5; 0.75; 1"` のように、前に空白を置かずにセミコロンで区切る必要があります。

## 仕様書

{{Specifications}}
