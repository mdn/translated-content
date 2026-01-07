---
title: transform-style
slug: Web/CSS/Reference/Properties/transform-style
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`transform-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の子要素を 3D 空間に配置するのか、平面化して要素の平面に配置するのかを設定します。

{{InteractiveExample("CSS デモ: transform-style")}}

```css interactive-example-choice
transform-style: flat;
```

```css interactive-example-choice
transform-style: preserve-3d;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all layer" id="example-element">
    <p>親</p>
    <div class="numeral"><code>rotate3d(1, 1, 1, 45deg)</code></div>
  </div>
</section>
```

```css interactive-example
.layer {
  background: #623e3f;
  border-radius: 0.75rem;
  color: white;
  transform: perspective(200px) rotateY(30deg);
}

.numeral {
  background-color: #ffba08;
  border-radius: 0.2rem;
  color: black;
  margin: 1rem;
  padding: 0.2rem;
  transform: rotate3d(1, 1, 1, 45deg);
}
```

平面化した場合、子要素は自身の 3D 空間に存在しなくなります。

このプロパティは継承されないため、葉要素以外のすべての子孫要素で設定する必要があります。

## 構文

```css
/* キーワード値 */
transform-style: flat;
transform-style: preserve-3d;

/* グローバル値 */
transform-style: inherit;
transform-style: initial;
transform-style: revert;
transform-style: revert-layer;
transform-style: unset;
```

### 値

- `flat`
  - : 要素の子要素を要素自身の平面上に配置することを示します。
- `preserve-3d`
  - : 要素の子要素を 3D 空間に配置することを示します。

## 解説

仕様書にはいくつかの[グループ化プロパティ値](https://drafts.csswg.org/css-transforms-2/#grouping-property-values)が掲載されており、これらは適用前に子孫要素の平坦化された表現を生成することをユーザーエージェントに要求するため、`preserve-3d` が指定されている場合でも、要素に[使用値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#使用値) `transform-style: flat` を強制します。これらのプロパティ値には以下のものがあります。

- {{cssxref("overflow")}}: `visible` または `clip` 以外の任意の値。
- {{cssxref("opacity")}}: `1` 未満の任意の値。
- {{cssxref("filter")}}: `none` 以外の任意の値。
- {{cssxref("clip")}}: `auto` 以外の任意の値。
- {{cssxref("clip-path")}}: `none` 以外の任意の値。
- {{cssxref("isolation")}}: `isolate` の使用値。
- {{cssxref("mask-image")}}: `none` 以外の任意の値。
- {{cssxref("mask-border-source")}}: `none` 以外の任意の値。
- {{cssxref("mix-blend-mode")}}: `normal` 以外の任意の値。
- {{cssxref("contain")}}: `paint` および描画の抑制を発生させるその他のプロパティと値の組み合わせ。これには、`contain` プロパティの使用されている値に影響を与えるあらゆるプロパティ、例えば `content-visibility: hidden` などが含まれます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 座標変換スタイルのデモ

この例では、座標変換を使用して 3D の立方体を作成しています。立方体の面の親コンテナーには、既定で `transform-style: preserve-3d` が設定されているため、3D 空間で座標変換され、意図したとおりに表示されます。

また、これと `transform-style: flat` の間で切り替えられるチェックボックスも用意しました。この別な状態では、立方体の面はすべて親の平面上に平坦化され、使用しているブラウザーによっては全く表示されない場合があります。

#### HTML

```html
<section id="example-element">
  <div class="face front">1</div>
  <div class="face back">2</div>
  <div class="face right">3</div>
  <div class="face left">4</div>
  <div class="face top">5</div>
  <div class="face bottom">6</div>
</section>

<div class="checkbox">
  <label for="preserve"><code>preserve-3d</code></label>
  <input type="checkbox" id="preserve" checked />
</div>
```

#### CSS

```css
#example-element {
  margin: 50px;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transform: rotate3d(1, 1, 1, 30deg);
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgb(90 90 90 / 70%);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 70%);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 70%);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 70%);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 70%);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 70%);
  transform: rotateX(-90deg) translateZ(50px);
}
```

#### JavaScript

```js
const cube = document.getElementById("example-element");
const checkbox = document.getElementById("preserve");

checkbox.addEventListener("change", () => {
  cube.style.transformStyle = checkbox.checked ? "preserve-3d" : "flat";
});
```

#### 結果

{{EmbedLiveSample('Transform_style_demonstration', '100%', 260)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 座標変換の使用](/ja/docs/Web/CSS/Guides/Transforms/Using)
