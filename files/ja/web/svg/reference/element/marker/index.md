---
title: <marker>
slug: Web/SVG/Reference/Element/marker
l10n:
  sourceCommit: da8c3171b7a7ea6694af71fac7a3194d8e9ba869
---

**`<marker>`** は [SVG](/ja/docs/Web/SVG) の要素で、指定された {{SVGElement("path")}}、{{SVGElement("line")}}、{{SVGElement("polyline")}}、{{SVGElement("polygon")}} のいずれかの要素上に矢印の先端やポリマーカーを描画するために使用されるグラフィックを定義します。

マーカーは、{{SVGAttr("marker-start")}}、{{SVGAttr("marker-mid")}}、{{SVGAttr("marker-end")}} プロパティを使用して図形に添付することができます。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("markerHeight")}}
  - : この属性は、マーカーのビューポートの高さを定義します。
    値の型: **[\<length>](/ja/docs/Web/SVG/Guides/Content_type#length)**; 既定値: `3`; アニメーション: **可**
- {{SVGAttr("markerUnits")}}
  - : この属性は、`markerWidth`、`markerHeight` 属性および `<marker>` のコンテンツの座標系を定義します。
    値の型: `userSpaceOnUse` | `strokeWidth`; 既定値: `strokeWidth`; アニメーション: **可**
- {{SVGAttr("markerWidth")}}
  - : この属性は、マーカーのビューポートの幅を定義します。
    値の型: **[\<length>](/ja/docs/Web/SVG/Guides/Content_type#length)**; 既定値: `3`; アニメーション: **可**
- {{SVGAttr("orient")}}
  - : この属性は、マーカーが添付されている図形に対するマーカーの向きを、相対的に定義します。
    値の型: `auto` | `auto-start-reverse` | **[\<angle>](/ja/docs/Web/SVG/Guides/Content_type#angle)**; 既定値: `0`; アニメーション: **可**
- {{SVGAttr("preserveAspectRatio")}}
  - : この属性は、 SVG の断片が{{glossary("aspect ratio", "アスペクト比")}}異なるコンテナーに埋め込まれた場合、どのように変形するべきかを定義します。
    値の型: (`none` | `xMinYMin` | `xMidYMin` | `xMaxYMin` | `xMinYMid` | `xMidYMid` | `xMaxYMid` | `xMinYMax` | `xMidYMax` | `xMaxYMax`) (`meet` | `slice`)?; 既定値: `xMidYMid meet`; アニメーション: **可**
- {{SVGAttr("refX")}}
  - : この属性は、マーカーの参照する点の x 座標を定義します。
    値の型: `left` | `center` | `right` | **[\<coordinate>](/ja/docs/Web/SVG/Guides/Content_type#coordinate)**; 既定値: `0`; アニメーション: **可**
- {{SVGAttr("refY")}}
  - : この属性は、マーカーの参照する点の y 座標を定義します。
    値の型: `top` | `center` | `bottom` | **[\<coordinate>](/ja/docs/Web/SVG/Guides/Content_type#coordinate)**; 既定値: `0`; アニメーション: **可**
- {{SVGAttr("viewBox")}}
  - : この属性は、現在の SVG 断片の SVG ビューポートの境界を定義します。
    値の型: **[\<list-of-numbers>](/ja/docs/Web/SVG/Guides/Content_type#list-of-ts)**; 既定値: none; アニメーション: **可**

## DOM インターフェイス

この要素は {{domxref("SVGMarkerElement")}} インターフェイスを実装しています。

## 例

### 矢印の先端の描画

次の例では、直線と曲線上に矢印の先端を描く方法を示します。
曲線の場合、{{SVGAttr("marker-mid")}} マーカーを用いて、それぞれの点に矢印の先端が描かれます。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- 矢印の先端として使用するマーカー -->
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>

  <!-- マーカー付きの直線 -->
  <line
    x1="10"
    y1="10"
    x2="90"
    y2="90"
    stroke="black"
    marker-end="url(#arrow)" />

  <!-- マーカー付きの曲線パス -->
  <path
    d="M 110 10
       C 120 20, 130 20, 140 10
       C 150 0, 160 0, 170 10
       C 180 20, 190 20, 200 10"
    stroke="black"
    fill="none"
    marker-start="url(#arrow)"
    marker-mid="url(#arrow)"
    marker-end="url(#arrow)" />
</svg>
```

{{EmbedLiveSample('Drawing_arrowheads', 200, 200)}}

### ポリマーカーの描画

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- 矢印の先端のマーカーの定義 -->
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>

    <!-- 点マーカーの定義 -->
    <marker
      id="dot"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="5"
      markerHeight="5">
      <circle cx="5" cy="5" r="5" fill="red" />
    </marker>
  </defs>

  <!-- 両方の方向に矢印のついた座標軸 -->
  <polyline
    points="10,10 10,90 90,90"
    fill="none"
    stroke="black"
    marker-start="url(#arrow)"
    marker-end="url(#arrow)" />

  <!-- ポリマーカー付きのデータ線 -->
  <polyline
    points="15,80 29,50 43,60 57,30 71,40 85,15"
    fill="none"
    stroke="grey"
    marker-start="url(#dot)"
    marker-mid="url(#dot)"
    marker-end="url(#dot)" />
</svg>
```

{{EmbedLiveSample('Drawing_polymarkers', 200, 200)}}

### コンテキストの塗りつぶしとストロークの使用

次の例では、`context-fill` と `context-stroke` の値を使用して、マーカーが添付された図形と同じ塗りつぶしとストロークを使用するように設定する方法を示します。

```html
<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
  <marker
    id="circle"
    markerWidth="6"
    markerHeight="6"
    refX="3"
    refY="3"
    markerUnits="strokeWidth">
    <circle cx="3" cy="3" r="2" stroke="context-stroke" fill="context-fill" />
  </marker>

  <style>
    path {
      marker: url("#circle");
    }
  </style>

  <path d="M 10,10 30,10 h 10" stroke="black" />
  <path d="M 10,20 30,20 h 10" stroke="blue" fill="red" />
  <path d="M 10,30 30,30 h 10" stroke="red" fill="none" />
  <path d="M 10,40 30,40 h 10" stroke="gray" fill="blue" stroke-width="1.5" />
</svg>
```

```css hidden
html,
body,
svg {
  height: 100%;
}
```

{{EmbedLiveSample('Using_context_fill_and_stroke', 200, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- マーカー関係のプロパティ: {{SVGAttr("marker-start")}}, {{SVGAttr("marker-mid")}}, {{SVGAttr("marker-end")}}
