---
title: clip-rule
slug: Web/CSS/Reference/Properties/clip-rule
original_slug: Web/CSS/clip-rule
l10n:
  sourceCommit: 611edf6335e4a833a6f394d0d98b117e7b0a36bf
---

**`clip-rule`** は [CSS](/ja/docs/Web/CSS) のプロパティで、パスの一部が他の部分と重なった場合、マスクのボックス内のピクセルが、[クリップパス](/ja/docs/Web/CSS/Reference/Properties/clip-path)で定義されたクリップするシェイプの内側にあるか、外側にあるかを決定します。

`clip-rule` プロパティは、 {{SVGElement("clipPath")}} 要素内に含まれる SVG 要素にのみ適用され、要素の {{SVGAttr("clip-rule")}} 属性の値がある場合はそれを上書きします。 `clip-rule` プロパティは、基本的に {{cssxref("fill-rule")}} プロパティと同じように機能しますが、 `<clipPath>` 定義に適用される点が異なります。 CSS の {{cssxref("basic-shape")}} には何の効果もありません。

## 構文

```css
/* キーワード */
clip-rule: nonzero;
clip-rule: evenodd;

/* グローバル値 */
clip-rule: inherit;
clip-rule: initial;
clip-rule: revert;
clip-rule: revert-layer;
clip-rule: unset;
```

### 値

- `nonzero`
  - : クリップマスクのボックス内のすべての点について、ランダムな方向に光線が描画されます。光線がクリップパスの任意の部分と交差するたびに、クリップパスの部分が光線を左から右に移動している場合は、カウントが 1 増加します。一方、パス部分が光線を右から左に移動している場合は、カウントが 1 減少します。カウントが最終的に 0 の場合、その点はパスの形状の外側にあることになります。それ以外の場合は、パスの形状の内側にあることになります。

- `even-odd`
  - : クリッピングマスクのボックス内のすべての点について、ランダムな方向に光線が描画されます。光線がクリッピングパスの任意の部分と交差するたびに、カウントが 1 ずつ増加します。カウントが最終的に偶数の場合、その点はパスの形状の外側にあることになります。それ以外の場合は、パスの形状の内側にあることになります。0 は偶数であるとみなされます。

## 形式文法

{{csssyntax}}

## 例

### 値の比較

この例では、類似の SVG {{SVGElement("path")}} 要素に異なる CSS `clip-rule` 値を適用して、`evenodd` と `non-zero` の値の違いを示します。

#### HTML

マークアップには複数の `<svg>` コンテナーがあり、それぞれ星の形を定義する `<clipPath>` 要素と、その中に星を描画する `<rect>` 要素が含まれています。星は、行を重ねて作成されています。 `id` 以外は、最初の 2 つの SVG 要素のマークアップはまったく同じです。3 番目の SVG には `<path>` 要素のみが含まれており、星を作成したパスの行がどのように重なっているかがわかります。

```html
<svg>
  <clipPath id="star1">
    <path d="M50,0 21,90 98,35 2,35 79,90z" />
  </clipPath>
  <rect clip-path="url(#star1)" width="95" height="95" />
</svg>

<svg>
  <clipPath id="star2">
    <path d="M50,0 21,90 98,35 2,35 79,90z" />
  </clipPath>
  <rect clip-path="url(#star2)" width="95" height="95" />
</svg>

<svg id="star3">
  <path d="M50,0 21,90 98,35 2,35 79,90z" />
</svg>
```

#### CSS

最初の SVG の `<path>` の `clip-rule` は `evenodd` に設定されています。2 つ目の SVG では `nonzero` に設定されています。パスのみの SVG では、既定の {{cssxref("fill")}} を除去し、{{cssxref("stroke")}} 色と {{cssxref("stroke-width")}} を定義して、重なっているパス行を表示するようにしました。

```css hidden
body {
  display: flex;
  gap: 20px;
}
svg {
  width: 110px;
  height: 110px;
}
```

```css
#star1 path {
  clip-rule: evenodd;
}

#star2 path {
  clip-rule: nonzero;
}

#star3 path {
  fill: none;
  stroke: #000;
  stroke-width: 1;
}
```

#### 結果

{{EmbedLiveSample("Value comparison", "", "130")}}

### 基本シェイプ定義の内部

この例は、 `clip-rule` は CSS {{cssxref("basic-shape")}} には何の効果も持たないが、シェイプのソースとして使用される `<clipPath>` には影響を与えることを示しています。

#### HTML

星の形を定義する 2 つの `<clipPath>` 要素を含む SVG を記載します。これらの要素は、 `id` 属性の値以外はすべて同じです。また、星の形を含む 2 つの `<div>` 要素も記載します。

```html
<svg height="0" width="0">
  <defs>
    <clipPath id="star1">
      <path d="M100,0 42,180 196,70 4,70 158,180z" />
    </clipPath>
    <clipPath id="star2">
      <path d="M100,0 42,180 196,70 4,70 158,180z" />
    </clipPath>
  </defs>
</svg>

<div></div>
<div></div>
```

#### CSS

`<div>` 要素に {{cssxref("width")}} および {{cssxref("height")}} を設定し、 [`conic-gradient()`](/ja/docs/Web/CSS/Reference/Values/gradient/conic-gradient) を {{cssxref("background-image")}} 値として追加します。

```css hidden
body {
  display: flex;
  gap: 20px;
}
```

```css
div {
  height: 200px;
  width: 200px;
  background-image: conic-gradient(
    at center,
    rebeccapurple,
    green,
    lightblue,
    rebeccapurple
  );
}
```

{{cssxref("clip-path")}} プロパティを使用して、それぞれの `<div>` のクリップパスとして、異なる `<clipPath>` 要素を設定します。

```css
div:first-of-type {
  clip-path: url(#star1);
}
div:last-of-type {
  clip-path: url(#star2);
}
```

最後に、`<clipPath>` 要素の `<path>` ごとに異なる `clip-rule` 値を設定します。

```css
#star1 path {
  clip-rule: evenodd;
}
#star2 path {
  clip-rule: nonzero;
}
```

#### 結果

{{EmbedLiveSample("Within basic shape definitions", "", "200")}}

### 時計回りのパスすべてを含むパスに対するルールの選択

この SVG 画像には、2 つのクリップされた矩形があり、それぞれ 1 つのクリップルールが適用されています。 2 つの {{SVGElement("clipPath")}} 要素があるため、 1 つは non-zero のクリップルールを使用するように設定し、もう 1 つは even-odd ルールを使用するように設定することができます。どちらのパスも、内側と外側の部分の両方で時計回りに描画されています。

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <g stroke="#123" fill="#BCD">
    <!-- 以下、基本的な長方形とクリップパスの視覚化 -->
    <rect x="10" y="10" width="30" height="30" />
    <path
      d="M 65,5 l 20,20 -20,20 -20,-20 20,-20 m 0,10 l 10,10 -10,10 -10,-10 10,-10 z"
      fill="none"
      stroke-width="0.5" />
    <!-- 以下、クリップされる長方形 -->
    <rect x="110" y="10" width="30" height="30" clip-path="url(#clipper1)" />
    <rect x="160" y="10" width="30" height="30" clip-path="url(#clipper2)" />
  </g>
  <!-- 以下、クリップするパス -->
  <clipPath id="clipper1" clipPathUnits="objectBoundingBox">
    <path
      d="M 0.5 -0.15 l 0.65 0.65 -0.65,0.65 -0.65,-0.65 0.65,-0.65 m 0,0.33 l 0.33,0.33 -0.33,0.33 -0.33,-0.33 0.33,-0.33 z"
      clip-rule="evenodd" />
  </clipPath>
  <clipPath id="clipper2" clipPathUnits="objectBoundingBox">
    <path
      d="M 0.5 -0.15 l 0.65 0.65 -0.65,0.65 -0.65,-0.65 0.65,-0.65 m 0,0.33 l 0.33,0.33 -0.33,0.33 -0.33,-0.33 0.33,-0.33 z"
      clip-rule="nonzero" />
  </clipPath>
</svg>
```

クリップされた長方形に適用されるクリップパスには、CSS の `clip-rule` プロパティを使用して、一方のパスには `nonzero` ルール、もう一方のパスには `evenodd` ルールを使用するように設定しています。これにより、CSS で意図的に CSS の設定と反対の値に設定されている SVG の `clip-path` 属性の値が上書きされます。

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

パスの内側と外側の部分はどちらも時計回り（左から右）方向に移動するため、2 つのクリップルールでは、結果のクリップ形状が異なります。 `nonzero` の場合、形状の外側部分にある光線は、1 つ以上の左から右へのパスフラグメントに遭遇するため、値が 0 以上の値になります。 `even-odd` の場合、パスの 2 つの部分の間にある点は奇数、内側のパス内または外側の部分にある点は偶数の値になります。

{{EmbedLiveSample("Choosing between rules for a path with all clockwise paths", "500", "200")}}

### 巻き込み方向の異なるパスに対するルールの選択

この例では、前回の例と同じ SVG を使用していますが、クリップパスの内側が反時計回りに巻き込むように変更しています。

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <g stroke="#123" fill="#BCD">
    <!-- 以下、基本的な長方形とクリップパスの視覚化 -->
    <rect x="10" y="10" width="30" height="30" />
    <path
      d="M 65,5 l 20,20 -20,20 -20,-20 20,-20 m 0,10 l 10,10 -10,10 -10,-10 10,-10 z"
      fill="none"
      stroke-width="0.5" />
    <!-- 以下、クリップされる長方形 -->
    <rect x="110" y="10" width="30" height="30" clip-path="url(#clipper1)" />
    <rect x="160" y="10" width="30" height="30" clip-path="url(#clipper2)" />
  </g>
  <!-- 以下、クリップするパス -->
  <clipPath id="clipper1" clipPathUnits="objectBoundingBox">
    <path
      d="M 0.5 -0.15 l 0.65 0.65 -0.65,0.65 -0.65,-0.65 0.65,-0.65 m 0,0.33 l -0.33,0.33 0.33,0.33 0.33,-0.33 -0.33,-0.33 z" />
  </clipPath>
  <clipPath id="clipper2" clipPathUnits="objectBoundingBox">
    <path
      d="M 0.5 -0.15 l 0.65 0.65 -0.65,0.65 -0.65,-0.65 0.65,-0.65 m 0,0.33 l 0.33,0.33 -0.33,0.33 -0.33,-0.33 0.33,-0.33 z" />
  </clipPath>
</svg>
```

前と同じ CSS を適用します。

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

この場合、パスの外側の部分は時計回り（左から右）方向に移動し、パスの内側の部分は反時計回り（右から左）方向に移動するため、使用するクリップルールに関係なく、結果のクリップ形状は同じになります。

{{EmbedLiveSample("Choosing between rules for a path with different winding paths", "500", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("fill-rule")}}
- {{cssxref("clip-path")}}
- [CSS クリップ入門](/ja/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール
- SVG の {{SVGAttr("clip-rule")}} 属性
- SVG の {{SVGElement("clipPath")}} 要素
- SVG の {{SVGAttr("fill-rule")}} 属性
