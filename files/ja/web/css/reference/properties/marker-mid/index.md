---
title: CSS `marker-mid` プロパティ
short-title: marker-mid
slug: Web/CSS/Reference/Properties/marker-mid
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`marker-mid`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のパスの中間の頂点、つまり始点と終点の間のそれぞれの頂点に描画されるマーカーを指定します。マーカーは、SVG の {{SVGElement('marker')}} 要素を使用して定義されている必要があり、{{cssxref("url_value", "&lt;url&gt;")}} の値でのみ参照できます。この CSS プロパティの値は、SVG 内の `marker-mid` 属性の値をすべて上書きします。

それぞれのマーカーが指す方向は、直前のパス区間の終点の方向と、次のパス区間の始点の方向の中間として定義されます。これは、2 つのパス方向によって定義されるベクトルの外積と考えることができます。

> [!NOTE]
> `marker-mid` プロパティは、SVG マーカーを使用することができる要素に対してのみ効果があります。対象となる要素の一覧については、{{SVGAttr("marker-mid")}} を参照してください。

## 構文

```css
marker-mid: none;
marker-mid: url("markers.svg#arrow");

/* グローバル値 */
marker-mid: inherit;
marker-mid: initial;
marker-mid: revert;
marker-mid: revert-layer;
marker-mid: unset;
```

### 値

- `none`
  - : 要素のパスの中間の頂点にはマーカーが描画されないことを意味します。

- `<marker-ref>`
  - : {{cssxref("url_value", "&lt;url&gt;")}} で、SVG の {{SVGElement('marker')}} 要素で定義されたマーカーを参照します。このマーカーは、要素のパスの中間のそれぞれの頂点に描画されます。URL 参照が不正な場合、パスの中間の頂点にはマーカーが描画されません。

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
<svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
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
    points="20,100 40,60 70,80 100,20 130,10 150,10 170,20 170,100 120,100" />
</svg>
```

```css
polyline#test {
  marker-mid: url("#triangle");
}
```

{{EmbedLiveSample("Example", "200", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("marker-start")}}
- {{cssxref("marker-end")}}
- {{cssxref("marker")}}
- SVG {{SVGAttr("marker-mid")}} 属性
