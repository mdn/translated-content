---
title: stroke-opacity
slug: Web/CSS/Reference/Properties/stroke-opacity
original_slug: Web/CSS/stroke-opacity
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`stroke-opacity`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[SVG](/ja/docs/Web/SVG) 図形のストロークの（不）透明度を定義します。その効果は {{CSSxref('opacity')}} と同一ですが、要素全体ではなくストロークのみに適用されます。指定されている場合、要素の {{SVGAttr("stroke-opacity")}} 属性を上書きします。

このプロパティは SVG 図形およびテキストコンテンツ要素（完全な一覧は {{SVGAttr("stroke-opacity")}} を参照）に適用されますが、継承プロパティであるため、{{SVGElement("g")}} などの要素に適用された場合、子孫要素のストロークにも意図した効果が及びます。

図形のストロークはその図形の塗りつぶしを部分的に覆うため、ストロークの不透明度が `1` 未満の場合、重なり合う部分で塗りつぶしがストロークと混ざって表示されます。{{cssxref('opacity')}} プロパティでグローバルな不透明度を適用するか、{{cssxref('paint-order')}} 属性でストロークを塗りつぶしの後ろに配置することで、この影響を避けることができます。

## 構文

```css
/* 数値とパーセント値 */
stroke-opacity: 1;
stroke-opacity: 0.3;
stroke-opacity: 50%;

/* グローバル値 */
stroke-opacity: inherit;
stroke-opacity: initial;
stroke-opacity: revert;
stroke-opacity: revert-layer;
stroke-opacity: unset;
```

### 値

- {{cssxref("&lt;number&gt;")}}
  - : 0 から 1 までの実数（両端を含む）。値が `0` の場合、ストロークは完全に透明になり、値が `1` の場合、完全に不透明になります。 0 から 1 の範囲外の値は、その範囲の最も近い側に切り詰められます。したがって、負の値は `0` に切り詰められます。

- {{cssxref("&lt;percentage&gt;")}}
  - : `<number>` （上記参照）と同様ですが、許容範囲は 0% から 100% であり、その範囲でクリッピングされます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 様々なストロークの透明度

この例は、`stroke-opacity` プロパティの基本的な使用法を示しています。また、図形のストロークが塗りつぶしを部分的に覆う場合、不透明度が `1` 未満のストロークは、塗りつぶしと重なる部分で塗りつぶしと混ざり合う様子を示しています。

#### HTML

まず、5 つの複数区間のパスを設定し、すべて黒のストローク（幅 1）を使用して、サブパスには `dodgerblue` の塗りつぶしを適用します。それぞれのパスは一連の山型シンボルを作成し、左側（緩やかな角度）から右側（急峻な角度）へと変化します。

```html
<svg viewBox="0 0 39 36" xmlns="http://www.w3.org/2000/svg">
  <g stroke="black" stroke-width="1" fill="dodgerblue">
    <path
      d="M1,5 l7   ,-3 l7   ,3
         m2,0 l3.5 ,-3 l3.5 ,3
         m2,0 l2   ,-3 l2   ,3
         m2,0 l0.75,-3 l0.75,3
         m2,0 l0.5 ,-3 l0.5 ,3" />
    <path
      d="M1,12 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,19 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,26 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
    <path
      d="M1,33 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
  </g>
</svg>
```

#### CSS

これらのパスには、ストロークの透明度を段階的に高い値に設定します。 最初の 4 つのパスでは、ストロークパスの内側半分を通して塗りつぶしが透けて見えることがありますが、4 つ目のパスでは判別が難しい場合があります。 5 つ目かつ最後のパスでは、ストロークが完全に不透明であるため、ストロークを通して塗りつぶしは見えません。

```css
g path:nth-child(1) {
  stroke-opacity: 0.2;
} /* equiv. 20% */
g path:nth-child(2) {
  stroke-opacity: 0.4;
} /* equiv. 40% */
g path:nth-child(3) {
  stroke-opacity: 0.6;
} /* equiv. 60% */
g path:nth-child(4) {
  stroke-opacity: 0.8;
} /* equiv. 80% */
g path:nth-child(5) {
  stroke-opacity: 1;
} /* equiv. 100% */
```

#### 結果

{{EmbedLiveSample("Various stroke opacities", "400", "650")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref('opacity')}}
- {{cssxref('fill-opacity')}}
- {{cssxref('paint-order')}}
- {{cssxref('stroke')}}
- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-width")}}
- SVG の {{SVGAttr("stroke-opacity")}} 属性
