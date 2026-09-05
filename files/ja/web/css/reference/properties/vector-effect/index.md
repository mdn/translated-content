---
title: CSS `vector-effect` プロパティ
short-title: vector-effect
slug: Web/CSS/Reference/Properties/vector-effect
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

**`vector-effect`** は [CSS](/ja/docs/Web/CSS) のプロパティで、SVG における特定の[座標変換効果](/ja/docs/Web/SVG/Reference/Attribute/transform)を抑制します。これにより、地図のズーム倍率にかかわらず道路の幅が一定に保たれたり、他の座標変換の影響を受けずに図の凡例の位置やサイズを維持したりすることが可能になります。このプロパティは、{{SVGAttr("vector-effect")}} 属性を受け入れる SVG 要素でのみ使用できます。使用された場合、CSS の値は要素の `vector-effect` 属性の値をすべて上書きします。

## 構文

```css
/* キーワード */
vector-effect: none;
vector-effect: non-scaling-stroke;

/* グローバル値 */
vector-effect: inherit;
vector-effect: initial;
vector-effect: revert;
vector-effect: revert-layer;
vector-effect: unset;
```

### 値

このプロパティは、以下のキーワード値のどちらかとして指定します。

- `none`
  - : この要素にはベクター効果が適用されないため、通常通り変換の影響を完全に受けます。
- `non-scaling-stroke`
  - : 要素の描画ストローク幅は、その要素自体またはその座標系の変換によってサイズが拡大・縮小された場合でも、定義されたストローク幅と物理的に同じサイズになります。これは、要素が変換によって変倍された場合でも、画像全体の物理的なサイズ変更によって変倍された場合でも同様です。

> [!NOTE]
> この仕様では、それ以外にも `non-scaling-size`、`non-rotation`、`fixed-position` の 3 つの値が定義されていますが、これらは実装されておらず、リスクのある仕様と考えています。

## 形式文法

{{csssyntax}}

## 例

### CSS による SVG のストロークの変倍を防ぐ

ここでは、グループ内に 2 つの矩形が含まれている 200 × 100 の SVG 画像から始めます。このグループを変倍・回転させます。2 つの矩形の 2 つ目には、`thinned` というクラスが指定されています。

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
  <g
    transform="scale(2.3) rotate(23)"
    transform-origin="100 50"
    stroke-width="3"
    stroke="orange"
    fill="#ddeeff88">
    <rect x=" 60" y="20" width="30" height="60" />
    <rect x="110" y="20" width="30" height="60" class="thinned" />
  </g>
</svg>
```

このSVG画像に対して、`width: 500px` を適用して内在サイズよりも大きくし、クラス名 {{SVGElement("rect")}} に変倍されないストロークを設定します。

```css
svg {
  width: 500px;
}
svg rect.thinned {
  vector-effect: non-scaling-stroke;
}
```

その結果、2 つの矩形のうち最初のものは、見かけ上の（視覚的な）線幅が約 17 となっているのに対し、2 つ目の矩形は、最初の矩形と同じように変倍されているにもかかわらず、見かけ上の線幅は 3 のままとなっています。

{{EmbedLiveSample("Preventing SVG stroke scaling with CSS", "500", "250")}}

### CSS を使用して SVG のストロークの変倍値を上書き

この例では、前回の例で使用したものと同様の SVG 画像から始めます。ここでは、{{SVGElement("g")}} 要素は前回と同様に回転されていますが、拡大縮小は適用されていません。`<rect>` 要素には、座標変換処理の共通の原点が指定されており、SVG 属性 `vector-effect` の値は `none` に設定されています。

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
  <g
    transform="rotate(23)"
    transform-origin="100 50"
    stroke-width="3"
    stroke="orange"
    fill="#ddeeff88">
    <rect
      x=" 60"
      y="20"
      width="30"
      height="60"
      transform-origin="100 50"
      vector-effect="none" />
    <rect
      x="110"
      y="20"
      width="30"
      height="60"
      transform-origin="100 50"
      vector-effect="none"
      class="thinned" />
  </g>
</svg>
```

前回と同様、CSS を使用して SVG を内在サイズよりも大きく表示しています。今回は、`<rect>` 要素に直接変倍が適用されており、2 つ目の矩形については、ストロークが変倍されないように設定されています。

```css
svg {
  width: 500px;
}
svg rect {
  transform: scale(2.3);
}
svg rect.thinned {
  vector-effect: non-scaling-stroke;
}
```

結果は、前回の例と見た目がまったく同じです。ここからわかるのは、`none` という属性値が CSS 値 `non-scaling-stroke` によって上書きされており、変倍が親要素である `<g>` ではなく `<rect>` に対して直接行われたにもかかわらず、ベクター効果が正しく適用されているということです。

{{EmbedLiveSample("Overriding SVG stroke scaling values with CSS", "500", "250")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("stroke")}}
- {{cssxref("basic-shape")}} データ型
- SVG {{SVGAttr("vector-effect")}} 属性
