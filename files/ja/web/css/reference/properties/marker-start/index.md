---
title: CSS `marker-start` プロパティ
short-title: marker-start
slug: Web/CSS/Reference/Properties/marker-start
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`marker-start`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のパスの最初の頂点、つまり始点に描画されるマーカーを指定します。マーカーは、SVG の {{SVGElement('marker')}} 要素を使用して定義されている必要があり、{{cssxref("url_value", "&lt;url&gt;")}} の値でのみ参照できます。この CSS プロパティの値は、SVG 内の `marker-start` 属性の値をすべて上書きします。

マーカーに対応する多くの図形では、最初の頂点と最後の頂点が同じ位置になります。例えば、{{SVGElement('rect')}} の左上角などがそうです。このような図形において、最初のマーカーと最後のマーカーの両方が定義されている場合、その点に 2 つのマーカーが描画されますが、それらは同じ方向を向いているとは限りません。

> [!NOTE]
> `marker-start` プロパティは、SVG マーカーを使用することができる要素に対してのみ効果があります。対象となる要素の一覧については、{{SVGAttr("marker-start")}} を参照してください。

## 構文

```css
marker-start: none;
marker-start: url("markers.svg#arrow");

/* グローバル値 */
marker-start: inherit;
marker-start: initial;
marker-start: revert;
marker-start: revert-layer;
marker-start: unset;
```

### 値

- `none`
  - : 要素のパスの最初の頂点にはマーカーが描画されないことを意味します。

- `<marker-ref>`
  - : {{cssxref("url_value", "&lt;url&gt;")}} で、SVG の {{SVGElement('marker')}} 要素で定義されたマーカーを参照します。このマーカーは、要素のパスの最初の頂点に描画されます。URL 参照が不正な場合、パスの最初の頂点にはマーカーが描画されません。

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
  marker-start: url("#triangle");
}
```

{{EmbedLiveSample("Example", "200", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("marker-mid")}}
- {{cssxref("marker-end")}}
- {{cssxref("marker")}}
- SVG {{SVGAttr("marker-start")}} 属性
