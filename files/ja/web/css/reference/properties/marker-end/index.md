---
title: CSS `marker-end` プロパティ
short-title: marker-end
slug: Web/CSS/Reference/Properties/marker-end
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`marker-end`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のパスの最後の頂点、つまり終点に描画されるマーカーを指定します。マーカーは、SVG の {{SVGElement('marker')}} 要素を使用して定義されている必要があり、{{cssxref("url_value", "&lt;url&gt;")}} の値でのみ参照できます。この CSS プロパティの値は、SVG 内の `marker-end` 属性の値をすべて上書きします。

マーカーに対応する多くの図形では、最初の頂点と最後の頂点が同じ点になります。例えば、{{SVGElement('rect')}} の左上角などがそうです。このような図形において、最初のマーカーと最後のマーカーの両方が定義されている場合、その点に 2 つのマーカーが描画されますが、それらは同じ方向を向いているとは限りません。

> [!NOTE]
> `marker-end` プロパティは、SVG マーカーを使用することができる要素に対してのみ効果があります。対象となる要素の一覧については、{{SVGAttr("marker-end")}} を参照してください。

## 構文

```css
marker-end: none;
marker-end: url("markers.svg#arrow");

/* グローバル値 */
marker-end: inherit;
marker-end: initial;
marker-end: revert;
marker-end: revert-layer;
marker-end: unset;
```

### 値

- `none`
  - : 要素のパスの最後の頂点にはマーカーが描画されないことを意味します。

- `<marker-ref>`
  - : {{cssxref("url_value", "&lt;url&gt;")}} で、SVG の {{SVGElement('marker')}} 要素で定義されたマーカーを参照します。このマーカーは、要素のパスの最後の頂点に描画されます。URL 参照が不正な場合、パスの最後の頂点にはマーカーが描画されません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

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
  <defs>
    <marker
      id="triangle"
      viewBox="0 0 10 10"
      markerWidth="10"
      markerHeight="10"
      refX="1"
      refY="5"
      markerUnits="strokeWidth"
      orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="red" />
    </marker>
  </defs>
  <polyline
    id="test"
    fill="none"
    stroke="black"
    points="20,100 40,60 70,80 100,20" />
</svg>
```

```css
polyline#test {
  marker-end: url("#triangle");
}
```

{{EmbedLiveSample("Example", "200", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("marker-start")}}
- {{cssxref("marker-mid")}}
- {{cssxref("marker")}}
- SVG {{SVGAttr("marker-end")}} 属性
