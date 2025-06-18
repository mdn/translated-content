---
title: display
slug: Web/SVG/Reference/Attribute/display
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`display`** 属性は、グラフィック要素またはコンテナー要素のレンダリングを制御します。

`display="none"` の値は、指定された要素とその子要素がレンダリングされないことを示します。 `none` または `inherit` 以外の値は、指定された要素がブラウザーによってレンダリングされることを示します。

コンテナー要素に適用された場合、`display` を `none` に設定すると、コンテナーとそのすべての子要素が不可視となります。つまり、要素のグループに対してグループとして作用します。すなわち、 `display="none"` を持つ要素の子要素は、たとえその子要素の `display` 値が `none` 以外であっても、まったくレンダリングされないということです。

`display` 属性を `none` に設定すると、指定された要素はレンダリングツリーに属さなくなります。これは、 {{SVGElement("tspan")}} 要素、 {{SVGElement("tref")}} 要素、イベント処理、境界ボックスの計算、クリッピングパスの計算に影響します。

- `display` が `none` に設定された {{SVGElement("tspan")}} または {{SVGElement("tref")}} 要素では、テキスト文字列はテキストレイアウトの目的では無視されます。
- イベントに関しては、 `display` が `none` に設定された場合、その要素はイベントを受け取らなくなります。
- [グラフィック要素](/ja/docs/Web/SVG/Reference/Element#graphics_elements)の `display` を `none` に設定したときの形状は、境界ボックスやクリッピングパスの計算には含まれません。

`display` 属性は指定された要素の直接レンダリングにのみ影響し、他の要素から参照されることを防ぐことはできません。例えば、 {{SVGElement("path")}} 要素に `none` を設定すると、その要素がキャンバスで直接レンダリングされるのを防ぐことができますが、 {{SVGElement("path")}} 要素は引き続き {{SVGElement("textPath")}} 要素から参照することができます。さらに、 {{SVGElement("path")}} に `display` 属性の値として `none` が設定されていても、その形状はパス上のテキスト処理で使用することができます。

この属性は、マスクやクリップパスで発生するような、オフスクリーンのキャンバスへの直接レンダリングにも影響します。したがって、 `display="none"` を {{SVGElement("mask")}} の子要素に設定すると、指定された子要素がマスクの一部としてレンダリングされるのを防ぐことができます。同様に、 `display="none"` を {{SVGElement("clipPath")}} の子要素に設定すると、指定された子要素がクリッピングパスに寄与するのを防ぐことができます。

> [!NOTE]
> プレゼンテーション属性であるため、 `display` には対応する CSS プロパティ {{cssxref("display")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は以下の SVG 要素で使用できます。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Here the yellow rectangle is displayed -->
  <rect x="0" y="0" width="100" height="100" fill="skyblue"></rect>
  <rect x="20" y="20" width="60" height="60" fill="yellow"></rect>

  <!-- Here the yellow rectangle is not displayed -->
  <rect x="120" y="0" width="100" height="100" fill="skyblue"></rect>
  <rect
    x="140"
    y="20"
    width="60"
    height="60"
    fill="yellow"
    display="none"></rect>
</svg>
```

{{EmbedLiveSample("Example", "240", "120")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">既定値</th>
      <td><code>inline</code></td>
    </tr>
    <tr>
      <th scope="row">値</th>
      <td>{{cssxref("display", "", "#形式文法")}} を参照</td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

値の説明は、 CSS の {{cssxref("display")}} プロパティを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("visibility")}} 属性
- CSS の {{cssxref("display")}} プロパティ
