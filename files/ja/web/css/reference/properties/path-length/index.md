---
title: "`path-length` プロパティ (CSS)"
short-title: path-length
slug: Web/CSS/Reference/Properties/path-length
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

{{SeeCompatTable}}

**`path-length`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ユーザー単位でのパスの全長を指定します。これにより、すべてのパスの計算は、`path-length` / _(パスの長さの計算値)_ の比率で変倍されます。これには、テキストパス、アニメーションパス、およびさまざまなストローク演算が含まれます。

`path-length` プロパティは、 {{SVGElement("svg")}} の中の {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}} の各要素にのみ適用されます。

> [!NOTE]
> CSS の `path-length` プロパティが存在する場合は、SVG 要素の {{SVGAttr("pathLength")}} 属性を上書きします。
> このプロパティは、上記に挙げたもの以外の SVG、HTML、擬似要素には適用されません。

## 構文

```css
/* キーワード値 */
path-length: none;

/* <length> 値 */
path-length: 0;
path-length: 70px;
path-length: 500px;

/* グローバル値 */
path-length: inherit;
path-length: initial;
path-length: revert;
path-length: revert-layer;
path-length: unset;
```

### 値

- `none`
  - : 作成者のパス長が指定されていない場合、パスに関連するすべての計算には、ユーザーエージェントが自分自身で算出したパス長が使用されます。

- `<length>`
  - : 負でない {{cssxref("&lt;length&gt;")}} で、作成者が定義した総経路長を表します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、パスを定義し、CSS の `path-length` プロパティを使用してそのパスに長さを適用する方法を示しています。

#### SVG

この SV Gは、色付きの {{SVGAttr("stroke")}} を持つ単一の曲線 {{SVGElement("path")}} 要素を定義しています。これには、ストロークに規則的な破線パターンを定義する {{SVGAttr("stroke-dasharray")}} 属性も含んでいます。

```html live-sample___basic-path-length live-sample___path-length-animation
<svg viewBox="0 0 600 200">
  <path
    d="M 30 100 C 150 20, 250 180, 380 100 S 520 20, 570 100"
    fill="none"
    stroke="#D85A30"
    stroke-width="4"
    stroke-dasharray="24 24"></path>
</svg>
```

#### CSS

`path-length` の値を `<path>` に設定します。

```css live-sample___basic-path-length
path {
  path-length: 500px;
}
```

#### 結果

{{EmbedLiveSample("basic-path-length", "100%", "250")}}

`path-length` の値を大きく設定すると、ダッシュが小さくなり、出現頻度が高くなります。

### `path-length` のアニメーション

`path-length` を CSS プロパティとして利用できる主な利点の 1 つは、[アニメーション](/ja/docs/Web/CSS/Guides/Animations) や [トランジション](/ja/docs/Web/CSS/Guides/Transitions) といった標準的な CSS 機能をこれに適用できることです。この例は前回の例を基にしており、CSS アニメーションを使って `path-length` にアニメーションを適用する方法を示しています。

#### HTML および SVG

この例には、前回の例と同じ SVG `<path>` が記載されています。さらに、実行時に `<path>` に適用される `path-length` の値を変更するために使用できる [`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range) 要素も含まれています。同時に、スライダーの現在の値を表示させるための {{htmlelement("output")}} 要素も含まれています。

```html live-sample___path-length-animation
<div>
  <label for="path-slider">path-length を調整</label>
  <input type="range" id="path-slider" min="0" max="800" value="200" />
  <output>200</output>
</div>
```

#### CSS

{{cssxref(":root")}} 要素に対して、[CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)の `--path-length` を定義し、初期値を `200px` に設定します。次に、`<path>` 要素の `path-length` の値を `--path-length` プロパティに設定し、その要素に対して、無限に繰り返し実行され、順方向と逆方向を交互に切り替える {{cssxref("animation")}} を設定します。

```css live-sample___path-length-animation
:root {
  --path-length: 200px;
}

path {
  path-length: var(--path-length);
  animation: path-length-anim 2s alternate infinite ease-in-out;
}
```

```css hidden live-sample___path-length-animation
div {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
}
```

次に、アニメーション用の {{cssxref("@keyframes")}} ブロックを定義します。これは、`path-length` プロパティを `--path-length` の値から、`--path-length` の値に `1.5` を掛けた値までアニメーションさせます。

```css live-sample___path-length-animation
@keyframes path-length-anim {
  from {
    path-length: var(--path-length);
  }

  to {
    path-length: calc(var(--path-length) * 1.5);
  }
}
```

#### JavaScript

スクリプトの冒頭で、`<input type="range">`、`<output>`、`:root` の各要素への参照を取得します。

```js live-sample___path-length-animation
const slider = document.querySelector("input");
const output = document.querySelector("output");
const rootElem = document.querySelector(":root");
```

次に、範囲スライダーに `input` イベントハンドラーを追加し、その値が変更された際に、`<output>` 要素の `textContent` および `--path-length` カスタムプロパティの値が、スライダーの新しい値と同じになるように設定します。

```js live-sample___path-length-animation
slider.addEventListener("input", () => {
  output.textContent = `${slider.value}px`;
  rootElem.style.setProperty("--path-length", `${slider.value}px`);
});
```

#### 結果

{{EmbedLiveSample("path-length-animation", "100%", "250")}}

スライダーを調整して、値が大きくなるにつれてダッシュのサイズが小さくなることに注目してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG {{SVGAttr("pathLength")}} 属性
