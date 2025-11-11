---
title: box-shadow
slug: Web/CSS/Reference/Properties/box-shadow
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`box-shadow`** [CSS](/zh-TW/docs/Web/CSS) 屬性在元素的框架周圍添加陰影效果。你可以設定多個以逗號分隔的效果。盒狀陰影由相對於元素的 X 和 Y 偏移量、模糊和擴散半徑以及顏色來描述。

{{InteractiveExample("CSS Demo: box-shadow")}}

```css interactive-example-choice
box-shadow: 10px 5px 5px red;
```

```css interactive-example-choice
box-shadow: 60px -16px teal;
```

```css interactive-example-choice
box-shadow: 12px 12px 2px 1px rgb(0 0 255 / 0.2);
```

```css interactive-example-choice
box-shadow: inset 5em 1em gold;
```

```css interactive-example-choice
box-shadow:
  3px 3px red,
  -1em 0 0.4em olive;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <p>這是一個周圍有盒狀陰影的方塊。</p>
  </div>
</section>
```

```css interactive-example
#example-element {
  margin: 20px auto;
  padding: 0;
  border: 2px solid #333;
  width: 80%;
  text-align: center;
}
```

`box-shadow` 屬性讓你能為幾乎任何元素的框架投下陰影。如果在帶有盒狀陰影的元素上指定了 {{cssxref("border-radius")}}，盒狀陰影會呈現相同的圓角。多個盒狀陰影的 Z 軸順序與多個[文字陰影](/zh-TW/docs/Web/CSS/Reference/Properties/text-shadow)相同（第一個指定的陰影在最上面）。

[盒狀陰影產生器](/zh-TW/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator)是一個互動式工具，讓你可以產生 `box-shadow`。

## 語法

```css
/* 關鍵字值 */
box-shadow: none;

/* 一個顏色和兩個長度值 */
/* <color> | <length> | <length> */
box-shadow: red 60px -16px;

/* 三個長度值和一個顏色 */
/* <length> | <length> | <length> | <color> */
box-shadow: 10px 5px 5px black;

/* 四個長度值和一個顏色 */
/* <length> | <length> | <length> | <length> | <color> */
box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);

/* inset、長度值和一個顏色 */
/* <inset> | <length> | <length> | <color> */
box-shadow: inset 5em 1em gold;

/* 任意數量的陰影，以逗號分隔 */
box-shadow:
  3px 3px red inset,
  -1em 0 0.4em olive;

/* 全域值 */
box-shadow: inherit;
box-shadow: initial;
box-shadow: revert;
box-shadow: revert-layer;
box-shadow: unset;
```

使用以下方式指定單一盒狀陰影：

- 兩個、三個或四個 {{cssxref("length")}} 值。
  - 如果只給定兩個值，它們會被解譯為 `<offset-x>` 和 `<offset-y>` 值。
  - 如果給定第三個值，它會被解譯為 `<blur-radius>`。
  - 如果給定第四個值，它會被解譯為 `<spread-radius>`。

- 可選的 `inset` 關鍵字。
- 可選的 [`<color>`](#color) 值。

要指定多個陰影，請提供一個以逗號分隔的陰影列表。

### 值

- `<color>` {{optional_inline}}
  - : 指定陰影的顏色。有關可能的關鍵字和表示法，請參見 {{cssxref("&lt;color&gt;")}} 值。如果未指定，則使用在父元素中定義的 {{cssxref("color")}} 屬性的值。

- `<length>`
  - : 指定陰影的偏移長度。此參數接受兩個、三個或四個值。第三和第四個值是可選的。它們的直譯如下：
    - 如果指定了兩個值，它們會被直譯為 `<offset-x>`（水平偏移）和 `<offset-y>`（垂直偏移）值。負的 `<offset-x>` 值會將陰影放置在元素的左側。負的 `<offset-y>` 值會將陰影放置在元素的上方。如果未指定，則對缺失的長度使用 `0` 值。如果 `<offset-x>` 和 `<offset-y>` 都設定為 `0`，陰影會被放置在元素後面（如果設定了 `<blur-radius>` 和／或 `<spread-radius>`，可能會產生模糊效果）。
    - 如果指定了三個值，第三個值會被直譯為 `<blur-radius>`。這個值越大，模糊效果就越強，陰影也會變得更大更淡。不允許使用負值。如果未指定，它將被設定為 `0`（意味著陰影的邊緣將是銳利的）。規範沒有包含計算模糊半徑的確切演算法；然而，它確實作了如下闡述：

      > …對於一個長而直的陰影邊緣，這應該創建一個長度為模糊距離的顏色過渡，該過渡垂直於並居中於陰影邊緣，其範圍從陰影內部半徑端點的完整陰影顏色到其外部端點的完全透明。

    - 如果指定了四個值，第四個值會被直譯為 `<spread-radius>`。正值會導致陰影擴大和變大，負值會導致陰影收縮。如果未指定，它將被設定為 `0`（也就是說，陰影將與元素大小相同）。

- `inset` {{optional_inline}}
  - : 將陰影從外部盒狀陰影更改為內部盒狀陰影（就像內容被壓入方塊中一樣）。內凹陰影繪製在方塊的邊框內（即使邊框是透明的），並且它們出現在背景之上但在內容之下。預設情況下，陰影的行為類似於投射陰影，給人一種方塊被抬高於其內容之上的外觀。這是未指定 `inset` 時的預設行為。

### 插值

在為陰影製作動畫時，例如當方塊上的多個陰影值在懸停時過渡到新值時，這些值會被插值。{{Glossary("Interpolation", "插值")}}決定了屬性的中間值，例如模糊半徑、擴散半徑和顏色，因為陰影在過渡。對於陰影列表中的每個陰影，顏色、x、y、模糊和擴散都會過渡；顏色作為 [`<color>`](/zh-TW/docs/Web/CSS/Reference/Values/color_value)，其他值作為 {{cssxref("length")}}。

在兩個以逗號分隔的多個盒狀陰影列表之間進行多個陰影的插值時，陰影會按順序配對，並在配對的陰影之間進行插值。如果陰影列表的長度不同，則較短的列表會在末尾用顏色為 `transparent`、X、Y 和模糊為 `0` 的陰影進行填充，並設定 `inset` 或缺少 `inset` 以匹配。如果在任何一對陰影中，一個設定了 `inset` 而另一個沒有，則整個陰影列表不會進行插值；陰影將變為新值而沒有動畫效果。

## 形式定義

{{cssinfo}}

## 形式語法

{{csssyntax}}

## 範例

### 設定三個陰影

在此範例中，我們包含了三個陰影：一個內凹陰影、一個常規的投射陰影，以及一個產生邊框效果的 2px 陰影（我們本可以用 {{cssxref('outline')}} 來替代第三個陰影）。

#### HTML

```html
<blockquote>
  <q>
    你可以用你的話語射擊我，<br />
    你可以用你的眼神切割我，<br />
    你可以用你的仇恨殺死我，<br />
    但我仍會像空氣一樣，升起。
  </q>
  <p>——瑪雅·安傑洛</p>
</blockquote>
```

#### CSS

```css
blockquote {
  padding: 20px;
  box-shadow:
    inset 0 -3em 3em rgb(0 200 0 / 30%),
    0 0 0 2px white,
    0.3em 0.3em 1em rgb(200 0 0 / 60%);
}
```

#### 結果

{{EmbedLiveSample('設定三個陰影', '300', '300')}}

### 將偏移和模糊設定為零

當 `x-offset`、`y-offset` 和 `blur` 都為零時，盒狀陰影將是一個在所有側面大小相等的純色輪廓。陰影是從後到前繪製的，所以第一個陰影位於後續陰影之上。當 `border-radius` 設定為 0（預設值）時，陰影的角將是直角。如果我們設定了任何其他值的 `border-radius`，角將會是圓形的。

我們添加了一個與最寬的盒狀陰影大小相同的邊界，以確保陰影不會與相鄰元素重疊或超出包含框的邊界。盒狀陰影不會影響[盒模型](/zh-TW/docs/Web/CSS/Guides/Box_model)的尺寸。

#### HTML

```html
<div><p>你好世界</p></div>
```

#### CSS

```css
p {
  box-shadow:
    0 0 0 2em #f4aab9,
    0 0 0 4em #66ccff;
  margin: 4em;
  padding: 1em;
}
```

<!-- these colors are intentionally pink and blue. WCAG requires color contrast between text and background, not between border colors. -->

#### 結果

{{EmbedLiveSample('將偏移和模糊設定為零', '300', '300')}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{cssxref("&lt;color&gt;")}} 資料類型（用於指定陰影顏色）
- {{cssxref("text-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- [使用 CSS 為 HTML 元素套用顏色](/zh-TW/docs/Web/CSS/Guides/Colors/Applying_color)
