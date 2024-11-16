---
title: zoom
slug: Web/CSS/zoom
l10n:
  sourceCommit: 1f71ae6ad4874ed03f708e06ed90780997a0934b
---

{{CSSRef}}

要素の拡大レベルを制御するには、[CSS](/ja/docs/Web/CSS) の **zoom** プロパティを使用することができます。このプロパティの代わりに、{{cssxref("transform-function/scale", "transform: scale()")}} を使用することもできます。

`zoom` プロパティは、対象となる要素を拡大縮小し、ページレイアウトに影響を与えます。拡大縮小の際、デフォルトの {{CSSXRef("writing-mode")}} を使用している場合、拡大縮小された要素は上部と中央から拡大縮小されます。

対照的に、{{cssxref("transform-function/scale", "scale()")}} を使用して拡大縮小された要素は、レイアウトの再計算やページ上の他の要素を移動させることはありません。`scale()` を使用して、内容が含む要素よりも大きくなった場合は、オーバーフローが有効になります。さらに、`scale()` を使用して調整された要素は、デフォルトでは中心から変形します。これは、{{CSSXRef("transform-origin")}} プロパティで変更できます。

## 構文

```css
/* キーワード値 */
zoom: normal;
zoom: reset;

/* <percentage> 値 */
zoom: 50%;
zoom: 200%;

/* <number> 値 */
zoom: 1.1;
zoom: 0.7;

/* グローバル値 */
zoom: inherit;
zoom: initial;
zoom: revert;
zoom: revert-layer;
zoom: unset;
```

### 値

- `normal`
  - : 要素を通常のサイズでレンダリングします。
- `reset`
  - : ユーザーが非ピンチベースのズームを利用したとき（例えば <kbd>Ctrl</kbd> \- <kbd>-</kbd> または <kbd>Ctrl</kbd> \+ <kbd>+</kbd> のキーボード・ショートカットを利用したとき）は要素を拡大縮小しない。この値を**使用せず**、代わりに標準の `unset` 値を使用してください。
- {{cssxref("&lt;percentage&gt;")}}
  - : ズーム率です。`100%` と `normal` は等価です。`100%` よりも大きな値はズームイン、`100%` よりも小さな値はズームアウトします。
- {{cssxref("&lt;number&gt;")}}
  - : ズーム率です。対応するパーセンテージ（`1.0` = `100%` = `normal`）に相当します。`1.0` よりも大きな値はズームイン、`1.0` よりも小さな値はズームアウトします。

## 公式定義

{{cssinfo}}

## 形式文法

```plain
zoom =
  normal | reset | <number> | <percentage>
```

## 例

### 段落のリサイズ

この例では、段落要素はズームされており、段落にカーソルを合わせるとズーム値が解除されます。

#### HTML

```html
<p class="small">Small</p>
<p class="normal">Normal</p>
<p class="big">Big</p>
```

#### CSS

```css hidden
body {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
}
```

```css
.small {
  zoom: 75%;
}
.normal {
  zoom: normal;
}
.big {
  zoom: 2.5;
}
p:hover {
  zoom: unset;
}
```

#### 結果

{{EmbedLiveSample('resizing_paragraphs')}}

### 要素のリサイズ

この例では、`div` 要素は `normal`, `<percentage>`, `<number>` の値を使ってズームされています。

#### HTML

```html
<div id="a" class="circle"></div>
<div id="b" class="circle"></div>
<div id="c" class="circle"></div>
```

#### CSS

```css
div.circle {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  vertical-align: middle;
  display: inline-block;
}
div#a {
  background-color: gold;
  zoom: normal; /* 円の直径は 25px */
}
div#b {
  background-color: green;
  zoom: 200%; /* 円の直径は 50px */
}
div#c {
  background-color: blue;
  zoom: 2.9; /* 円の直径は 72.5px */
}
```

#### 結果

{{EmbedLiveSample('resizing_elements')}}

### ズーム率を操作する

この例では、`select` フィールドを使ってコンテンツのズームレベルを変更しています。

#### HTML

HTML のこの最初のブロックでは、異なるズーム値を持つ `select` フィールドが定義されています。

```html
<section class="controls">
  <label for="zoom"
    >Zoom level
    <select name="zoom" id="zoom">
      <option value="0.5">Extra Small</option>
      <option value="0.75">Small</option>
      <option value="normal" selected>Normal</option>
      <option value="1.5">Large</option>
      <option value="2">Extra Large</option>
    </select>
  </label>
</section>
```

この 2 番目のブロックには、ブラウザが `zoom` をサポートしている場合には非表示となる **not supported** メッセージが追加されています。

```html
<p class="zoom-notice">CSS zoom is not supported</p>
```

最後のブロックは、ズームされるコンテンツを定義しているだけです。

```html
<section class="content">
  <h1>This is the heading</h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat inventore
    ea eveniet, fugiat in consequatur molestiae nostrum repellendus nam
    provident repellat officiis facilis alias facere obcaecati quos sunt
    voluptas! Iste.
  </p>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat inventore
    ea eveniet, fugiat in consequatur molestiae nostrum repellendus nam
    provident repellat officiis facilis alias facere obcaecati quos sunt
    voluptas! Iste.
  </p>
</section>
```

#### CSS

この CSS の最初のブロックでは、[カスタムプロパティ](/ja/docs/Web/CSS/--*)を使って `--zoom-level` の開始値を設定し、それをコンテンツブロックの `zoom` の値として使っています。

```css
html {
  --zoom-level: normal;
}
.content {
  max-width: 60ch;
  margin: auto;
  zoom: var(--zoom-level);
}
```

```css hidden
.controls,
.zoom-notice {
  display: flex;
  justify-content: space-around;
}
.zoom-notice {
  color: red;
}
```

この最後の CSS ブロックでは、ブラウザが `zoom` をサポートしているかどうかをチェックし、サポートしている場合は **not supported** メッセージを `display: none;` に設定しています。

```css
@supports (zoom: 1) {
  .zoom-notice {
    display: none;
  }
}
```

#### JavaScript

この JavaScript は、`select` フィールドの変更を監視し、コンテンツ・セクションの `--zoom-level` に新しい値（例えば `style="--zoom-level: 1.5;"`）を設定します。

```js
const zoomControl = document.querySelector("#zoom");
const content = document.querySelector(".content");
const updateZoom = () => {
  content.style = `--zoom-level: ${zoomControl.value}`;
};
zoomControl.addEventListener("change", updateZoom);
```

#### 結果

{{EmbedLiveSample('creating_a_zoom_control', '550', '280')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS-Tricks' CSS Almanac の `zoom` の記事](https://css-tricks.com/almanac/properties/z/zoom/)
