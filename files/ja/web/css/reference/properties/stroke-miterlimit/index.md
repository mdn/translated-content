---
title: stroke-miterlimit
slug: Web/CSS/Reference/Properties/stroke-miterlimit
original_slug: Web/CSS/stroke-miterlimit
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`stroke-miterlimit`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[SVG](/ja/docs/Web/SVG) 要素のストロークパスの角に使用される形状がマイター接合である場合、マイター長と {{CSSxref("stroke-width") }} の比率に対する制限を定義します。このプロパティで定義された制限値を超えると、接合方法が `miter` から `bevel` に変換され、角が切り取られるようになります。

このプロパティは、SVG の角を生成する図形やテキストコンテンツ要素（完全な一覧は {{SVGAttr("stroke-miterlimit")}} を参照）に適用されますが、継承プロパティであるため、{{SVGElement("g")}} などの要素に適用された場合、子孫要素のストロークにも意図した効果が及びます。これが存在する場合、その要素の {{SVGAttr("stroke-miterlimit")}} 属性を上書きします。

## 解説

2 本の線分が鋭角で交差し、`miter` 接合が {{ CSSxref("stroke-linejoin") }} に対して指定されている場合、またはデフォルトでその値が適用されている場合、接合部がパスを描く線の太さを大幅に超えて突出することがあります。`stroke-miterlimit` の比率は、この突出量の上限を定義するために使用され、この上限を超えると接合部はマイターから面取りに変更されます。

マイター長（外側の先端とマイターの内側の角の間の距離）と {{ CSSxref("stroke-width") }} の比率は、ユーザー空間における線分同士の角度 (θ) と次の式で直接関連しています。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mstyle displaystyle="true"><mi>stroke-miterlimit</mi><mo>=</mo><mfrac><mrow><mi>miterLength</mi></mrow><mrow><mi>stroke-width</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mrow><mi>sin</mi><mrow><mo>(</mo><mfrac><mrow><mo>θ</mo></mrow><mrow><mn>2</mn></mrow></mfrac><mo>)</mo></mrow></mrow></mrow></mfrac></mstyle><annotation encoding="TeX">\text{stroke-miterlimit} = \frac{\text{miterLength}}{\text{stroke-width}} = \frac{1}{\sin\left(\frac{\theta}{2}\right)}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

例えば、`1.414` をマイター制限値に設定すると、θ 値が 90 度未満の場合にマイターを面取りに変更します。`4.0` を制限値に設定すると、θ 値が約 29 度未満の場合に変更し、`10.0` を制限値に設定すると、θ 値が約 11.5 度未満の場合に変更します。

## 構文

```css
/* 数値 */
stroke-miterlimit: 1;
stroke-miterlimit: 3.1416;

/* グローバル値 */
stroke-miterlimit: inherit;
stroke-miterlimit: initial;
stroke-miterlimit: revert;
stroke-miterlimit: revert-layer;
stroke-miterlimit: unset;
```

### 値

- {{cssxref("&lt;number&gt;")}}
  - : `1` 以上である任意の実数。それより小さい値は無効です。初期値は `4` です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 様々なマイター制限

この例は、`stroke-miterlimit` プロパティの様々な値の効果を示しています。

#### HTML

5 つの複数区間のパスを設定しました。いずれも太さ 1 の黒のストロークを使用し、塗りつぶしはありません。各パスは左側（浅い角の角度）から右側（極端な角の角度）へと、一連の山を象徴する記号を描画します。

```html
<svg viewBox="0 0 39 36" xmlns="http://www.w3.org/2000/svg">
  <g stroke="black" stroke-width="1" fill="none">
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

パスに対して `stroke-miterlimit` の値を次第に大きく適用します。これにより、最初のパスでは最初の（左端の）サブパスのみがマイター処理され、2 番目のパスでは最初の2つのサブパスがマイター処理され、以下同様に、5 番目のパスでは 5 つのサブパス全てがマイター処理されます。

```css
path:nth-child(1) {
  stroke-miterlimit: 1.1;
}
path:nth-child(2) {
  stroke-miterlimit: 1.4;
}
path:nth-child(3) {
  stroke-miterlimit: 1.9;
}
path:nth-child(4) {
  stroke-miterlimit: 4.2;
}
path:nth-child(5) {
  stroke-miterlimit: 6.1;
}
```

{{EmbedLiveSample("Various miter limits", "400", "650")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("stroke")}}
- SVG の {{SVGAttr("stroke-miterlimit")}} 属性
